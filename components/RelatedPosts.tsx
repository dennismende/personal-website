import Link from "next/link";
import Image from "next/image";
import { client, urlFor, type Post } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";

interface RelatedPostsProps {
    currentSlug: string;
    categories: string[];
}

export default async function RelatedPosts({ currentSlug, categories }: RelatedPostsProps) {
    // Fetch related posts by category, excluding current post
    const relatedPosts = await client.fetch<Post[]>(
        `*[_type == "post" && slug.current != $currentSlug && count((categories[]->title)[@ in $categories]) > 0] | order(publishedAt desc)[0...3] {
      title,
      slug,
      publishedAt,
      mainImage,
      categories[]->{title},
      "excerpt": body[0].children[0].text
    }`,
        { currentSlug, categories },
        { next: { revalidate: 3600 } }
    );

    // If no related posts by category, fetch recent posts
    const posts = relatedPosts.length > 0
        ? relatedPosts
        : await client.fetch<Post[]>(
            `*[_type == "post" && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
          title,
          slug,
          publishedAt,
          mainImage,
          categories[]->{title},
          "excerpt": body[0].children[0].text
        }`,
            { currentSlug },
            { next: { revalidate: 3600 } }
        );

    if (posts.length === 0) return null;

    return (
        <section className="mt-16 pt-12 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-heading mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug.current}
                        href={`/blog/${post.slug.current}`}
                        className="group"
                    >
                        <div className="aspect-[16/10] relative rounded-lg overflow-hidden border border-slate-800 mb-4 group-hover:border-primary/50 transition-colors">
                            {post.mainImage ? (
                                <Image
                                    src={urlFor(post.mainImage).width(400).height(250).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-surface flex items-center justify-center text-slate-600">
                                    No Image
                                </div>
                            )}
                        </div>

                        <h3 className="font-bold text-heading group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {post.title}
                        </h3>

                        <p className="text-sm text-slate-500 line-clamp-2">
                            {post.excerpt}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
