import { getCollection, render, type CollectionEntry } from "astro:content";
import type { ClusterKey } from "../config/clusters";

export type Post = CollectionEntry<"blog">;

// draft=true jest widoczny tylko w dev (astro dev), nigdy na produkcji.
const isVisible = (p: Post) => (import.meta.env.PROD ? !p.data.draft : true);

const byDateDesc = (a: Post, b: Post) =>
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

/** Wszystkie widoczne posty, najnowsze pierwsze. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts.filter(isVisible).sort(byDateDesc);
}

/** Posty z danego klastra (kategorii). */
export async function getPostsByCluster(cluster: ClusterKey): Promise<Post[]> {
  return (await getPosts()).filter((p) => p.data.cluster === cluster);
}

/** Powiązane posty: ten sam klaster, bez bieżącego, max `limit`. */
export async function getRelated(post: Post, limit = 3): Promise<Post[]> {
  const same = (await getPostsByCluster(post.data.cluster)).filter(
    (p) => p.id !== post.id,
  );
  return same.slice(0, limit);
}

/** Szacowany czas czytania (PL) z treści markdown. */
export async function readingTime(post: Post): Promise<string> {
  const { Content } = await render(post); // wymusza dostęp do treści w buildzie
  void Content;
  const body = post.body ?? "";
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const min = Math.max(1, Math.round(words / 200));
  return `${min} min czytania`;
}

/** Prostsza wersja czasu czytania bez renderu (z surowego body). */
export function readingTimeFromBody(body: string | undefined): string {
  const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
  const min = Math.max(1, Math.round(words / 200));
  return `${min} min czytania`;
}

const PL_MONTHS = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
];

/** Data po polsku: "2 czerwca 2026". */
export function formatDatePl(d: Date): string {
  return `${d.getDate()} ${PL_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
