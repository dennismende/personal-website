import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Metadata, ResolvingMetadata } from 'next'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params; 

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      mainImage, 
      body
    }`,
    { slug }
  );

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${post.title} | Dennis Mende Blog`,
    description: post.summary || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://dennismende.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dennis Mende'],
      images: [post.coverImage, ...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
    },
  }
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Post {
  title: string;
  publishedAt: string;
  mainImage: any;
  body: any;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
  const { slug } = await params; 

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

      {post.mainImage && (
        <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
        </div>
      )}

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

      <div className="prose prose-invert prose-lg prose-p:text-slate-300 prose-headings:text-heading prose-a:text-primary hover:prose-a:text-secondary prose-li:text-slate-300">
        <PortableText 
            value={post.body} 
            components={RichTextComponents}
        />
      </div>
      
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}