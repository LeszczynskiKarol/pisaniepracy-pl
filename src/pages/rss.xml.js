import rss from "@astrojs/rss";
import { getPosts } from "../lib/posts";
import { siteConfig } from "../config/site";
import { CLUSTERS } from "../config/clusters";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${siteConfig.name} — blog`,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
      categories: [CLUSTERS[p.data.cluster].label],
    })),
    customData: `<language>pl-pl</language>`,
  });
}
