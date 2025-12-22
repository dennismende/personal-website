import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url"; // 1. Import Image Builder
import { RichTextComponents } from "@/components/RichTextComponents";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// 2. Configure Image Builder
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// 3. Update Interface to include mainImage
interface Post {
  title: string;
  publishedAt: string;
  mainImage: any; // Added this field
  body: any;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
  const { slug } = await params; 

  // 4. Update Query to fetch mainImage
  const post: Post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      mainImage, 
      body
    }`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-6 pb-24 pt-10 animate-in fade-in duration-700">
      
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm text-slate-400 hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
      </Link>

      {/* 5. Header Image Section */}
      {post.mainImage && (
        <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority // Loads this image immediately as it's above the fold
          />
          {/* Optional: Subtle Gradient Overlay for better integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
        </div>
      )}

      {/* Header Text */}
      <header className="mb-10 space-y-4">
        {post.publishedAt && (
            <div className="flex items-center gap-2 text-secondary text-sm font-mono">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
            </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-heading leading-tight">
          {post.title}
        </h1>
      </header>

      {/* Body Content */}
      <div className="prose prose-invert prose-lg prose-p:text-slate-300 prose-headings:text-heading prose-a:text-primary hover:prose-a:text-secondary prose-li:text-slate-300">
        <PortableText 
            value={post.body} 
            components={RichTextComponents}
        />
      </div>
      
    </article>
  );
}