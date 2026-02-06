import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, X, PenTool } from "lucide-react";
import { client, urlFor, type Post } from "@/lib/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dennis Mende",
  description: "Thoughts on engineering leadership, digital strategy, platform modernization, and building high-performance teams.",
  openGraph: {
    title: "Blog | Dennis Mende",
    description: "Insights on engineering leadership, digital strategy, and building high-performance teams.",
    url: "https://dennismende.com/blog",
    type: "website",
  },
};



const POSTS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const selectedCategory = params.category || null;

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const categoryFilter = selectedCategory
    ? `&& $category in categories[]->title`
    : "";

  const [posts, totalPosts, categories] = await Promise.all([
    client.fetch<Post[]>(
      `*[_type == "post" ${categoryFilter}] | order(publishedAt desc) [$start...$end] {
        title, 
        slug, 
        publishedAt, 
        mainImage, 
        "excerpt": body[0].children[0].text,
        categories[]->{title}
      }`,
      { start, end, category: selectedCategory }
    ),
    client.fetch<number>(
      `count(*[_type == "post" ${categoryFilter}])`,
      { category: selectedCategory }
    ),
    client.fetch<string[]>(
      `array::unique(*[_type == "category"].title)`
    )
  ]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <section className="max-w-5xl mx-auto px-6 pb-24 pt-10 animate-in fade-in duration-700">

      <div className="space-y-6 border-b border-slate-800 pb-10 mb-12">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <PenTool className="w-4 h-4" />
          Thoughts & Insights
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-heading tracking-tight mb-4">
            Engineering <span className="text-primary">Leadership.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Exploring the intersection of digital strategy, platform modernization, and building high-performance teams.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">Filter:</span>

          <Link
            href="/blog"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${!selectedCategory
              ? "bg-primary text-slate-900 border-primary"
              : "bg-surface text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
              }`}
          >
            All
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${cat}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${selectedCategory === cat
                ? "bg-secondary text-slate-900 border-secondary"
                : "bg-surface text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                }`}
            >
              {cat}
            </Link>
          ))}

          {selectedCategory && (
            <Link href="/blog" className="ml-2 p-1 rounded-full hover:bg-slate-800 text-slate-500 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug.current} className="group relative border-b border-slate-800/50 pb-12 last:border-0">

            <Link
              href={`/blog/${post.slug.current}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-5 relative w-full aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden border border-slate-800 bg-surface shadow-lg group-hover:border-primary/50 transition-all duration-300">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(600).height(400).url() || ""}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-600">
                    <span className="text-sm font-mono">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors" />
              </div>

              <div className="md:col-span-7 flex flex-col justify-center h-full space-y-3">

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-secondary">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: 'short', day: 'numeric', year: 'numeric'
                    })}
                  </span>
                  {post.categories && post.categories.length > 0 && (
                    <>
                      <span className="text-slate-600">•</span>
                      {post.categories.map(c => (
                        <span key={c.title} className="text-slate-400">{c.title}</span>
                      ))}
                    </>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-heading group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-base leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="pt-2 flex items-center text-sm font-bold text-primary">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-xl bg-surface/50">
            <p className="text-slate-400 text-lg">No posts found for "{selectedCategory}".</p>
            <Link href="/blog" className="text-primary mt-2 inline-block hover:underline">Clear filters</Link>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-20 flex items-center justify-between border-t border-slate-800 pt-8">
          {currentPage > 1 ? (
            <Link
              href={{ pathname: '/blog', query: { page: currentPage - 1, category: selectedCategory } }}
              className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg hover:bg-surface hover:text-white transition-colors text-sm text-slate-400"
            >
              <ChevronLeft className="w-4 h-4" /> Newer
            </Link>
          ) : <div className="w-24" />}

          <span className="text-sm text-slate-500 font-mono">
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={{ pathname: '/blog', query: { page: currentPage + 1, category: selectedCategory } }}
              className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg hover:bg-surface hover:text-white transition-colors text-sm text-slate-400"
            >
              Older <ChevronRight className="w-4 h-4" />
            </Link>
          ) : <div className="w-24" />}
        </div>
      )}

    </section>
  );
}