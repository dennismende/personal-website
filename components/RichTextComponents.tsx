import Image from "next/image";
import Link from "next/link";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Detects paragraphs that contain literal "1. ", "2. ", ... numbering
// (e.g. pasted content) instead of a real Portable Text numbered list,
// and renders them as a proper <ol> instead.
const NUMBER_MARKER = /^\d+\.\s*$/;
const NUMBER_SPLIT = /\n(?=\d+\.\s)/;

type Span = { text: string; marks?: string[] };

function renderSpan(span: Span, key: number) {
  const content = span.marks?.includes("strong") ? (
    <strong key={key}>{span.text}</strong>
  ) : (
    <span key={key}>{span.text}</span>
  );
  return content;
}

function parseFakeNumberedList(value: any): Span[][] | null {
  const spans: Span[] = (value?.children || []).filter(
    (c: any) => c._type === "span"
  );
  if (spans.length === 0) return null;

  const firstText = spans[0].text ?? "";
  if (!/^1\.\s/.test(firstText)) return null;

  // Flatten + split each span's text on the "\nN. " boundary so the
  // numeric marker becomes its own piece.
  const pieces: Span[] = [];
  for (const span of spans) {
    const parts = (span.text ?? "").split(NUMBER_SPLIT);
    for (const part of parts) {
      pieces.push({ text: part, marks: span.marks });
    }
  }

  const items: Span[][] = [];
  let current: Span[] = [];
  for (const piece of pieces) {
    if (NUMBER_MARKER.test(piece.text)) {
      if (current.length > 0) items.push(current);
      current = [];
      continue;
    }
    if (piece.text.length > 0) current.push(piece);
  }
  if (current.length > 0) items.push(current);

  return items.length > 1 ? items : null;
}

export const RichTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-bold text-heading mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-bold text-heading mt-10 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-bold text-heading mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-bold text-heading mt-6 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 py-1 my-6 text-xl italic text-slate-400 bg-slate-900/50 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children, value }: any) => {
      const fakeListItems = parseFakeNumberedList(value);
      if (fakeListItems) {
        return (
          <ol className="list-decimal list-outside pl-6 mb-6 space-y-3 text-lg leading-relaxed text-slate-300 marker:text-primary marker:font-semibold">
            {fakeListItems.map((item, i) => (
              <li key={i} className="pl-1">
                {item.map((span, j) => renderSpan(span, j))}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <p className="mb-6 text-lg leading-relaxed text-slate-300">
          {children}
        </p>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-lg leading-relaxed text-slate-300 marker:text-primary">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-lg leading-relaxed text-slate-300 marker:text-primary">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="pl-1">{children}</li>,
    number: ({ children }: any) => <li className="pl-1">{children}</li>,
  },
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
        <div className="my-8 rounded-lg overflow-hidden border border-slate-800 bg-[#1d1f21] shadow-md">
          {value.filename && (
            <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || "typescript"}
            style={atomDark}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              background: "transparent",
              fontSize: "0.9rem",
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-secondary underline decoration-secondary/50 hover:decoration-secondary transition-all font-medium"
        >
          {children}
        </Link>
      );
    },
  },
};