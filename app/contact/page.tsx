import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Dennis Mende",
  description: "Get in touch with Dennis Mende. Interested in discussing digital transformation, engineering leadership, or collaboration opportunities?",
  openGraph: {
    title: "Contact | Dennis Mende",
    description: "Get in touch to discuss digital transformation or engineering leadership opportunities.",
    url: "https://dennismende.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-6 pb-24 pt-10 animate-in fade-in duration-700">

      <div className="space-y-6 border-b border-slate-800 pb-10 mb-10">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Mail className="w-4 h-4" />
          Contact
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-heading tracking-tight mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Interested in discussing digital transformation or engineering leadership? I'd love to hear from you.
          </p>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}