import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Library | Dennis Mende",
    description: "Books that have shaped my thinking on leadership, technology, strategy, and personal development. A curated collection of must-reads.",
    openGraph: {
        title: "My Library | Dennis Mende",
        description: "A curated collection of books on leadership, technology, and personal development.",
        url: "https://dennismende.com/books",
        type: "website",
    },
};

export default function BooksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
