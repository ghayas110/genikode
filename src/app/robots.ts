import { MetadataRoute } from 'next';

const baseUrl = 'https://genikode.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Default policy for all crawlers
            {
                userAgent: '*',
                allow: '/',
                disallow: '/api/',
            },
            // Explicitly welcome AI crawlers
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
