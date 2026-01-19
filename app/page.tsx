import Link from "next/link";
import Image from "next/image";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { 
  ArrowRight, 
  Users,
  Compass, 
  Globe, 
  TrendingUp,
  Linkedin, 
  Github 
} from "lucide-react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any;
  categories: { title: string }[];
  excerpt: string;
}

export default async function HomePage() {

  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc)[0...3] {
      title, 
      slug, 
      publishedAt, 
      mainImage,
      categories[]->{title},
      "excerpt": body[0].children[0].text
    }`
  );

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      <section className="relative pt-16 md:pt-28 pb-0 max-w-screen-xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 pb-12 z-10 order-2 lg:order-1 relative">
             
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase animate-in fade-in slide-in-from-bottom-3 duration-500">
              <span className="w-8 h-[2px] bg-primary"></span>
              Senior Technology Leader
            </div>
            
            <h1 className="text-5xl md:text-5xl font-bold text-heading tracking-tight leading-[1.1]">
              Uniting <br />
              
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                Commercial Strategy <br />
              </span>

              with <br />

              <span className="bg-clip-text bg-gradient-to-r text-secondary">
                 Engineering Excellence.
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700">
              <strong>Director, Digital Engineering & Strategy</strong> at Diconium. 
              Bridging the gap between <strong>P&L ownership</strong> and complex software delivery to drive sustainable enterprise growth.
            </p>

            <div className="flex flex-wrap gap-6 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
              <Link href="/cv" className="px-7 py-3.5 bg-primary text-slate-900 font-bold rounded-lg hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(186,230,253,0.3)]">
                View Experience
              </Link>
              <Link href="/contact" className="px-7 py-3.5 text-slate-300 font-bold border border-slate-700 rounded-lg hover:border-primary hover:text-white transition-all">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full flex justify-center lg:justify-end items-end animate-in fade-in zoom-in duration-1000">

             <div className="relative w-full max-w-lg h-full">
                <Image
                  src="/profile.png"
                  alt="Dennis Mende"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl" 
                  priority
                />
             </div>

             <div className="absolute bottom-8 left-0 md:left-10 lg:-left-4 bg-surface/90 backdrop-blur-md border border-slate-700 p-5 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow z-20 max-w-[200px] md:max-w-none">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Experience</p>
                  <p className="text-2xl font-bold text-heading">19+ Years</p>
                </div>
              </div>

          </div>

        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-surface border border-slate-800 p-8 rounded-2xl hover:border-primary/50 transition-colors group">
            <Users className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Organizational Scale</h3>
            <p className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
              120+ FTE Leadership
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Building and retaining high-performance engineering units. Developing T-shaped talent and ensuring psychological safety at scale.
            </p>
          </div>

          <div className="bg-surface border border-slate-800 p-8 rounded-2xl hover:border-secondary/50 transition-colors group">
            <Compass className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Strategic Control</h3>
            <p className="text-xl font-bold text-heading group-hover:text-secondary transition-colors">
              P&L & Tech Vision
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Navigating uncertainty by aligning commercial targets with scalable, value-driven software architectures.
            </p>
          </div>

          <div className="bg-surface border border-slate-800 p-8 rounded-2xl hover:border-accent/50 transition-colors group">
            <Globe className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Track Record</h3>
            <p className="text-xl font-bold text-heading group-hover:text-accent transition-colors">
              Global Impact
            </p>
            <p className="text-sm text-slate-500 mt-2">
              From modernizing Foot Locker’s global stack (<strong>~40% revenue growth</strong>) to driving enterprise innovation today.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">Latest Insights</h2>
            <p className="text-slate-400 mt-2">Thoughts on leadership, technology, and commerce.</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
            Read all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-surface rounded-xl mb-4 overflow-hidden border border-slate-800 group-hover:border-primary/50 transition-all relative">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm bg-slate-900">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
              </div>

              <div className="flex items-center gap-3 text-xs text-secondary font-mono mb-2">
                {post.categories && post.categories.length > 0 ? (
                  <span>{post.categories[0].title}</span>
                ) : (
                  <span>General</span>
                )}
                <span>•</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", { 
                    month: 'short', year: 'numeric' 
                  })}
                </span>
              </div>

              <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Link href="/blog" className="flex items-center gap-2 text-primary hover:text-white transition-colors border border-slate-700 px-6 py-3 rounded-full bg-surface">
            Read all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}