// Content collections — blog pisaniepracy.pl (Astro 5 glob loader).
// System jest GOTOWY na przyjęcie artykułów w określonym formacie (patrz
// src/content/blog/_TEMPLATE.md). Pliki zaczynające się od "_" są pomijane.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*"], base: "./src/content/blog" }),
  schema: z.object({
    // ── Wymagane ────────────────────────────────────────────────
    title: z.string().max(70, "Tytuł ≤ 70 znaków (SEO title)"),
    description: z.string().max(165, "Opis ≤ 165 znaków (meta description)"),
    pubDate: z.coerce.date(),
    // Klaster = kategoria. A=proces, B=decyzja, C=wsparcie.
    cluster: z.enum(["proces", "decyzja", "wsparcie"]),

    // ── Opcjonalne ──────────────────────────────────────────────
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Redakcja pisaniepracy.pl"),
    tags: z.array(z.string()).default([]),
    // Hero obraz artykułu (ścieżka w /public lub import). Brak = bez obrazka.
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),

    // Które polecane zasoby są naturalne dla tego artykułu.
    // Klucze z src/config/targets.ts. Steruje rozdzielaczem na końcu artykułu.
    decisionTargets: z
      .array(z.enum(["licencjat", "magisterka", "ai"]))
      .default([]),
    // Czy renderować rozdzielacz decyzyjny na końcu artykułu.
    // Domyślnie sterowane klastrem (decyzja/wsparcie = tak); tu można nadpisać.
    showSplitter: z.boolean().optional(),

    // Wyróżnienie na liście / stronie głównej.
    featured: z.boolean().default(false),
    // draft=true → widoczny tylko w `astro dev`, NIE budowany na produkcji
    // (nie indeksowany). Zdejmij flagę, gdy artykuł gotowy do publikacji.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
