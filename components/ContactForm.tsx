"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [token, setToken] = useState<string | null>(null);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!token) return;

        setStatus("submitting");

        const formData = new FormData(event.currentTarget);
        formData.append("cf-turnstile-response", token);

        try {
            const response = await fetch("https://formspree.io/f/mrbnyjdv", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage("Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection.");
        }
    }

    if (status === "success") {
        return (
            <div className="text-center py-16 px-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-heading mb-4">Message Sent!</h2>
                <p className="text-slate-400 max-w-md mx-auto mb-8">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 border border-slate-700 rounded-lg text-slate-300 hover:border-primary hover:text-white transition-all"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                    Your Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-surface border border-slate-800 rounded-lg p-4 text-text focus:outline-none focus:border-secondary transition-colors disabled:opacity-50"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-surface border border-slate-800 rounded-lg p-4 text-text focus:outline-none focus:border-secondary transition-colors resize-none disabled:opacity-50"
                    placeholder="Your message..."
                ></textarea>
            </div>

            <input type="text" name="_gotcha" className="hidden" />

            <div className="my-4">
                <Turnstile
                    siteKey="0x4AAAAAACF6KyvAKYVNsPmq"
                    onSuccess={(token) => setToken(token)}
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={!token || status === "submitting"}
                className={`
          w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
          ${token && status !== "submitting"
                        ? "bg-primary text-slate-900 hover:bg-white shadow-[0_0_20px_-5px_rgba(186,230,253,0.3)] transform hover:-translate-y-1"
                        : "bg-surface border border-slate-800 text-slate-600 cursor-not-allowed"
                    }
        `}
            >
                {status === "submitting" ? (
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
    );
}
