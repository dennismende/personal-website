export function calculateReadingTime(body: any[]): number {
    if (!body || !Array.isArray(body)) return 1;

    const text = body
        .filter((block) => block._type === "block")
        .map((block) =>
            block.children
                ?.filter((child: any) => child._type === "span")
                .map((child: any) => child.text || "")
                .join("") || ""
        )
        .join(" ");

    const wordsPerMinute = 220;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);

    return Math.max(1, minutes);
}

export function formatReadingTime(minutes: number): string {
    return `${minutes} min read`;
}
