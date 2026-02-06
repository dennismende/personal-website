import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: SanityImageSource | null;
  categories: { title: string }[];
  excerpt: string;
  body?: any;
}

export async function fetchRecentPosts(limit: number = 3): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
      title, 
      slug, 
      publishedAt, 
      mainImage,
      categories[]->{title},
      "excerpt": body[0].children[0].text
    }`,
    { limit: limit - 1 },
    { next: { revalidate: 3600 } }
  );
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      mainImage, 
      body
    }`,
    { slug }
  );
}

export async function fetchAllPostSlugs(): Promise<{ slug: string }[]> {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return posts.map((post: any) => ({ slug: post.slug }));
}
