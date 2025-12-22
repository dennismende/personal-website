"use client";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [token, setToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  return (
    <section className="max-w-xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-heading">Get in Touch</h1>
      <p className="text-slate-400">
        Interested in discussing digital transformation or engineering leadership?
      </p>

      <form 
        action="https://formspree.io/f/mrbnyjdv" 
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">Your Email</label>
          <input 
            id="email"
            type="email" 
            name="email"
            required
            className="w-full bg-surface border border-slate-800 rounded p-3 text-text focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">Message</label>
          <textarea 
            id="message"
            name="message"
            rows={5}
            required
            className="w-full bg-surface border border-slate-800 rounded p-3 text-text focus:outline-none focus:border-secondary transition-colors"
          ></textarea>
        </div>

        {/* 1. Honeypot Field */}
        <input type="text" name="_gotcha" className="hidden" />

        {/* 2. Turnstile Widget */}
        <div className="my-4">
          <Turnstile 
            siteKey="0x4AAAAAACF6KyvAKYVNsPmq" 
            onSuccess={(token) => setToken(token)}
          />
        </div>

        {/* 3. Disable Submit until Verified */}
        <button 
          type="submit" 
          disabled={!token || isSubmitting}
          className={`
            w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
            ${token 
              ? "bg-primary text-slate-900 hover:bg-white shadow-[0_0_20px_-5px_rgba(186,230,253,0.3)] transform hover:-translate-y-1" 
              : "bg-surface border border-slate-800 text-slate-600 cursor-not-allowed"
            }
          `}
        >
          {isSubmitting ? (
            <span className="animate-pulse">Sending...</span>
          ) : !token ? (
            <>
              <AlertCircle className="w-5 h-5" /> Verify to Send
            </>
          ) : (
            <>
              Send Message <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </section>
  );
}