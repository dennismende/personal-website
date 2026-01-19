/** @type {import('next-sitemap').IConfig} */
const { createClient } = require("next-sanity");

// 1. Configure your Sanity Client here
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Find this in sanity.json or manage.sanity.io
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false, // We want fresh data for the build
});

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.dennismende.com',
  generateRobotsTxt: true,
  
  // 2. Exclude the dynamic route template so it doesn't show up as "/blog/[slug]"
  exclude: ['/blog/[slug]'], 

  // 3. Add dynamic paths from Sanity
  additionalPaths: async (config) => {
    // Fetch all post slugs
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      _updatedAt
    }`);

    // Transform them into the format next-sitemap expects
    return await Promise.all(
      posts.map(async (post) => {
        // Create the URL (adjust '/blog/' to your actual path)
        const path = `/blog/${post.slug}`;
        
        // Use the built-in transform function to handle defaults (priority, changefreq)
        return await config.transform(config, path);
      })
    );
  },
};