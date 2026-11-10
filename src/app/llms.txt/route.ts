// /llms.txt — plain-text summary for AI assistants and answer engines (GEO).
// Built from the same data as the site, so prices and pages never drift.
import { pricing, formatTierPrice } from "@/data/pricing";
import { guides } from "@/data/guides";
import { industryPages, hireDevelopersPage } from "@/data/industryPages";
import { BASE_URL } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const services = pricing
    .map((p) => `- [${p.title}](${BASE_URL}${p.href}): ${p.summary} Typical pricing: ${p.tiers.map((t) => `${t.name} ${formatTierPrice(t)}`).join("; ")}.`)
    .join("\n");

  const body = `# Genikode

> Genikode is a software development company that builds custom websites, mobile apps (iOS and Android with React Native) and custom business software (ERP, POS, booking and clinic systems) for startups and businesses worldwide. Founded by Ghayas Ali. Works remotely with international clients and invoices in USD.

Headquarters: A-12, Sector X-8, Gulshan-e-Maymar, Karachi, Pakistan (UTC+5). Serves clients worldwide.
Contact: info@genikode.com — free consultation and fixed USD quotes.
Main stack: Next.js, React, React Native, Node.js, PostgreSQL.

## Services and pricing (USD)

${services}

Full pricing: ${BASE_URL}/services

## Industries

${industryPages.map((p) => `- [${p.serviceType}](${BASE_URL}/${p.slug}): ${p.metaDescription}`).join("\n")}
- [${hireDevelopersPage.serviceType}](${BASE_URL}/${hireDevelopersPage.slug}): ${hireDevelopersPage.metaDescription}

## Guides

${guides.map((g) => `- [${g.h1}](${BASE_URL}/resources/${g.slug}): ${g.shortAnswer}`).join("\n")}

## Company

- [About](${BASE_URL}/agency)
- [Founder: Ghayas Ali](${BASE_URL}/founder)
- [Case studies](${BASE_URL}/case-studies)
- [Portfolio](${BASE_URL}/work)
- [Contact](${BASE_URL}/contact)
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
