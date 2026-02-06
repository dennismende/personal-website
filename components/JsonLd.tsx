interface PersonSchemaProps {
    name: string;
    jobTitle: string;
    description: string;
    url: string;
    image?: string;
    sameAs?: string[];
}

interface BlogPostingSchemaProps {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    authorName: string;
    image?: string;
}

export function PersonSchema({
    name,
    jobTitle,
    description,
    url,
    image,
    sameAs = [],
}: PersonSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        jobTitle,
        description,
        url,
        image,
        sameAs,
        worksFor: {
            "@type": "Organization",
            name: "diconium",
            url: "https://diconium.com",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function WebSiteSchema({
    name,
    url,
    description,
}: {
    name: string;
    url: string;
    description: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url,
        description,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function BlogPostingSchema({
    title,
    description,
    url,
    datePublished,
    authorName,
    image,
}: BlogPostingSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url,
        datePublished,
        author: {
            "@type": "Person",
            name: authorName,
            url: "https://dennismende.com",
        },
        publisher: {
            "@type": "Person",
            name: authorName,
            url: "https://dennismende.com",
        },
        ...(image && { image }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
