import { MetadataRoute } from 'next';
import { activeServiceSlugs } from '@/app/service/[slug]/data';
import { projectsData } from '@/app/work/[slug]/data';
import { OFFER_PATH, isOfferActive } from '@/app/offer/first-project/offer-config';
import { guides } from '@/data/guides';
import { industryPages } from '@/data/industryPages';

// Regenerate hourly so time-limited entries (promos) drop without a redeploy.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://genikode.com';
    const currentDate = new Date();

    // High-priority core landing pages & static sections
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/web-development`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mobile-app-development`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/react-native-development`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/agency`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/offer`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/founder`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Commercial hubs and SEO/GEO content pages
    const contentRoutes: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/hire-developers`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/industries`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
        ...industryPages.map((p) => ({ url: `${baseUrl}/${p.slug}`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 })),
        { url: `${baseUrl}/resources`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
        ...guides.map((g) => ({ url: `${baseUrl}/resources/${g.slug}`, lastModified: new Date(g.updated), changeFrequency: 'monthly' as const, priority: 0.8 })),
    ];

    // Dynamic service detail pages
    const serviceRoutes: MetadataRoute.Sitemap = activeServiceSlugs().map((slug) => ({
        url: `${baseUrl}/service/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic portfolio work case studies
    const workRoutes: MetadataRoute.Sitemap = Object.keys(projectsData).map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Time-limited promo page — listed only while the offer is running.
    const promoRoutes: MetadataRoute.Sitemap = isOfferActive()
        ? [{ url: `${baseUrl}${OFFER_PATH}`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.7 }]
        : [];

    return [...staticRoutes, ...contentRoutes, ...promoRoutes, ...serviceRoutes, ...workRoutes];
}
