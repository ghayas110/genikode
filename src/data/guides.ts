import type { Guide } from "@/components/GuidePage";
import { formatTierPrice, getPricing, HOURLY_RATE_RANGE } from "@/data/pricing";

// Long-form SEO/GEO guides published under /resources/[slug].
// Prices are pulled from src/data/pricing.ts so guides never contradict the
// Services page. Regional rate ranges are typical market ranges, labelled as such.

const app = getPricing("mobile-app-development")!;
const web = getPricing("website-development")!;
const dev = getPricing("dedicated-developers")!;
const tier = (p: typeof app, i: number) => formatTierPrice(p.tiers[i]);

const regionalRates = {
  caption: "Typical agency hourly rates by region, 2026 (approximate market ranges — individual quotes vary)",
  head: ["Region", "Typical hourly rate (USD)"],
  rows: [
    ["United States & Canada", "$100 – $200"],
    ["UK & Western Europe", "$80 – $150"],
    ["Eastern Europe", "$40 – $80"],
    ["Latin America", "$35 – $70"],
    ["South Asia (incl. Pakistan)", "$20 – $50"],
  ],
};

const PUBLISHED = "2026-11-11";

export const guides: Guide[] = [
  // ───────────────────────────────────────────────────────────── App cost
  {
    slug: "app-development-cost",
    metaTitle: "How Much Does an App Cost to Build in 2026?",
    metaDescription: `App development costs in 2026, in USD: MVPs ${tier(app, 0)}, business apps ${tier(app, 1)}, complex platforms ${tier(app, 2)}. What drives cost and how to budget.`,
    h1: "How much does it cost to build an app in 2026?",
    intro:
      "“How much will my app cost?” is the first question almost every founder asks — and the honest answer is that it depends on what the app needs to do. This guide gives you real USD ranges, explains what actually drives the price, and shows how to budget so there are no surprises later.",
    shortAnswer: `In 2026, a simple MVP app typically costs ${tier(app, 0)} with an experienced offshore team, a full business app ${tier(app, 1)}, and a complex multi-role platform ${tier(app, 2)}. The same scope from a US or UK agency usually costs several times more, because hourly rates there run roughly $100–$200 compared with $25–$45 offshore. Features, platforms, backend work and integrations drive most of the price.`,
    published: PUBLISHED,
    updated: PUBLISHED,
    readMinutes: 9,
    sections: [
      {
        id: "at-a-glance",
        heading: "App development cost at a glance",
        paragraphs: [
          "Most apps fall into one of three bands. The ranges below are what an experienced offshore team (like ours) typically charges for an iOS + Android app built with React Native, including the backend and store submission.",
        ],
        table: {
          head: ["App type", "Typical features", "Cost (offshore team)", "Typical timeline"],
          rows: [
            ["MVP app", app.tiers[0].includes.join(", "), tier(app, 0), app.tiers[0].timeline ?? ""],
            ["Business app", app.tiers[1].includes.join(", "), tier(app, 1), app.tiers[1].timeline ?? ""],
            ["Complex platform", app.tiers[2].includes.join(", "), tier(app, 2), app.tiers[2].timeline ?? ""],
          ],
        },
        after: [
          "If you hire a US or UK agency for the same scope, expect the total to be roughly 3–5× higher. The work is similar; the difference is mostly the hourly rate of the team doing it.",
        ],
      },
      {
        id: "cost-drivers",
        heading: "What drives the cost of an app?",
        paragraphs: ["Two apps that look similar on the surface can differ in price by a factor of ten. These are the factors that make the difference:"],
        bullets: [
          "Number of features and screens — every screen has to be designed, built, connected to data and tested.",
          "User roles — an app with customers, staff and admins is effectively three apps sharing one backend.",
          "Platforms — iOS only, Android only, or both. A cross-platform framework such as React Native lets one codebase serve both.",
          "Backend and admin panel — user accounts, databases, APIs and a dashboard to manage content and users.",
          "Integrations — payments, maps, chat, video, CRMs, accounting tools and other third-party services.",
          "Real-time features — live tracking, chat and notifications need more engineering and infrastructure.",
          "Design depth — a custom design system with animation costs more than a clean, standard interface.",
          "Security and compliance — finance and health apps need extra work on encryption, audit logs and data handling.",
        ],
      },
      {
        id: "rates-by-region",
        heading: "Developer rates by region",
        paragraphs: [
          "The single biggest factor you control is who builds the app. Hourly rates vary widely by region, while the tools and frameworks used are largely the same everywhere.",
        ],
        table: regionalRates,
        after: [
          `Genikode's rates are ${HOURLY_RATE_RANGE} for hourly work, with fixed quotes for defined projects. You work directly with the senior engineers building your product, which keeps communication tight even across time zones.`,
        ],
      },
      {
        id: "react-native-vs-native",
        heading: "React Native vs. native: how it affects cost",
        paragraphs: [
          "Building separate native apps in Swift (iOS) and Kotlin (Android) means two codebases, two sets of bugs and two teams. React Native shares most of the code between both platforms, so a cross-platform build usually costs noticeably less than two native apps — often around 30–40% less, depending on how much platform-specific work the app needs.",
          "Native still makes sense for apps that depend heavily on device hardware, advanced graphics or AR. For most business, commerce, booking, fintech and content apps, React Native delivers a genuinely native experience at a lower cost.",
        ],
      },
      {
        id: "hidden-costs",
        heading: "Hidden and ongoing costs to budget for",
        paragraphs: ["The build is only part of the total cost of owning an app. Budget for these as well:"],
        bullets: [
          "Apple Developer Program: $99 per year. Google Play developer account: $25 one-time.",
          "Hosting and backend services: from around $20 per month for a small app to several hundred dollars for high-traffic platforms.",
          "Third-party services: SMS, maps, email and payment processing fees, usually billed per use.",
          "Maintenance: a common rule of thumb is 15–20% of the original build cost per year for updates, OS compatibility and fixes.",
          "New features: most successful apps keep evolving after launch, so plan a budget for version 2.",
        ],
      },
      {
        id: "reduce-cost",
        heading: "How to reduce app development cost without cutting quality",
        bullets: [
          "Start with an MVP — launch the smallest version that proves the idea, then build on real user feedback.",
          "Go cross-platform with React Native unless you have a specific reason to go native.",
          "Use proven services for authentication, payments and notifications instead of building them from scratch.",
          "Write down the scope — a clear list of features and user flows prevents expensive changes mid-build.",
          "Choose fixed-price milestones so you pay for delivered, working software.",
          "Work with a senior offshore team to get experienced engineers at a lower hourly rate.",
        ],
      },
      {
        id: "how-we-quote",
        heading: "How to get an accurate quote",
        paragraphs: [
          "An accurate quote needs a clear picture of what you want to build. Before you contact any development team, prepare: a short description of the problem the app solves, the main user types, a list of must-have features, any apps you like as references, and your target launch date.",
          "At Genikode we turn that into a scoped plan during a free consultation, then send a fixed quote with milestones — so you know the total before any work starts.",
        ],
      },
    ],
    faqs: [
      { question: "How much does a simple app cost?", answer: `A simple MVP app typically costs ${tier(app, 0)} with an offshore team, depending on the number of features and whether it needs a custom backend.` },
      { question: "Is it cheaper to build for iOS and Android at the same time?", answer: "Usually yes. With React Native, one codebase serves both platforms, which is typically cheaper and faster than building two separate native apps." },
      { question: "How long does it take to build an app?", answer: `An MVP usually takes ${app.tiers[0].timeline}, a full business app ${app.tiers[1].timeline}, and a complex platform ${app.tiers[2].timeline}.` },
      { question: "Is a freelancer cheaper than an agency?", answer: "A freelancer's hourly rate can be lower, but you take on more risk around availability, code quality and long-term support. An agency gives you a team, a process and continuity if someone is unavailable." },
      { question: "Do I own the source code?", answer: "You should. Make sure your contract assigns intellectual property to you and that the code lives in a repository you control. At Genikode, clients own their code." },
    ],
    related: [
      { title: "Mobile app development services", href: "/mobile-app-development" },
      { title: "React Native development", href: "/react-native-development" },
      { title: "Services & pricing (USD)", href: "/services" },
      { title: "How to outsource software development", href: "/resources/outsourcing-software-development" },
    ],
  },

  // ───────────────────────────────────────────────────────── Website cost
  {
    slug: "website-development-cost",
    metaTitle: "How Much Does a Website Cost in 2026?",
    metaDescription: `What a website costs in 2026, in USD: starter sites ${tier(web, 0)}, business sites ${tier(web, 1)}, web apps ${tier(web, 2)}. Costs, timelines and hidden fees.`,
    h1: "How much does a website cost in 2026?",
    intro:
      "Website prices range from a few dollars a month for a template to tens of thousands for a custom web application. This guide explains what you actually get at each price point, so you can choose the right option for your business and budget.",
    shortAnswer: `A professionally built starter website typically costs ${tier(web, 0)} with an experienced offshore agency, a 5–15 page business website with a content management system ${tier(web, 1)}, and a custom web application ${tier(web, 2)}. Agencies in the US or UK typically charge several times more for the same scope. Ongoing costs — domain, hosting and maintenance — usually add $20–$300 per month.`,
    published: PUBLISHED,
    updated: PUBLISHED,
    readMinutes: 8,
    sections: [
      {
        id: "at-a-glance",
        heading: "Website cost at a glance",
        table: {
          head: ["Website type", "What's included", "Cost (offshore agency)", "Typical timeline"],
          rows: web.tiers.map((t) => [t.name, t.includes.join(", "), formatTierPrice(t), t.timeline ?? ""]),
        },
        after: ["These are typical ranges for a custom-designed, professionally built site — not a template you set up yourself."],
      },
      {
        id: "builder-freelancer-agency",
        heading: "Website builder vs. freelancer vs. agency",
        paragraphs: ["There are three main ways to get a website. Each suits a different stage of business:"],
        table: {
          head: ["Option", "Typical cost", "Best for", "Trade-offs"],
          rows: [
            ["DIY website builder", "Roughly $15–$60 / month", "Very early businesses testing an idea", "Limited design and SEO control; you do the work"],
            ["Freelancer", "Varies widely", "Small, well-defined sites", "Quality and availability depend on one person"],
            ["Agency", `${tier(web, 0)} upwards`, "Businesses that need a reliable, growing website", "Higher upfront cost than DIY, but a team, a process and support"],
          ],
        },
      },
      {
        id: "cost-drivers",
        heading: "What drives the cost of a website?",
        bullets: [
          "Number of pages and unique templates.",
          "Custom design versus adapting a template.",
          "A content management system (CMS) so your team can edit pages without a developer.",
          "E-commerce — products, checkout, payments and inventory.",
          "Integrations with CRMs, booking tools, email marketing and analytics.",
          "Performance and technical SEO — fast load times and clean structure help rankings.",
          "Copywriting, photography and video, if you need them created.",
          "Accounts, dashboards and other web-app features.",
        ],
      },
      {
        id: "ongoing-costs",
        heading: "Ongoing website costs",
        table: {
          head: ["Cost", "Typical range"],
          rows: [
            ["Domain name", "$10 – $20 per year"],
            ["Hosting", "Free tiers for small sites, up to $100+ per month for high traffic"],
            ["Maintenance & updates", "From around $50 per month, or on demand"],
            ["SEO & content", "Optional; ongoing retainers typically $600+ per month"],
          ],
        },
      },
      {
        id: "performance-seo",
        heading: "Why speed and SEO are worth paying for",
        paragraphs: [
          "A beautiful site that loads slowly or that search engines can't understand will struggle to bring in customers. Google uses page experience signals such as loading speed, and visitors leave slow pages quickly.",
          "Modern frameworks like Next.js render pages on the server, so they load fast and are easy for search engines — and AI search tools — to read. Clean page structure, descriptive titles and structured data help your pages appear in search results and AI-generated answers.",
        ],
      },
      {
        id: "accurate-quote",
        heading: "How to get an accurate website quote",
        bullets: [
          "A list of the pages you need (a simple sitemap).",
          "Two or three websites you like, and what you like about them.",
          "Any features beyond content pages — booking, payments, member areas, integrations.",
          "Whether your text and images are ready, or need to be created.",
          "Your deadline and budget range.",
        ],
        after: ["With this, any good agency can give you a fixed quote quickly. Genikode offers a free consultation and sends a fixed USD quote with milestones."],
      },
    ],
    faqs: [
      { question: "How much does a small business website cost?", answer: `A professionally built small business website typically costs ${tier(web, 0)} for up to five pages, or ${tier(web, 1)} for a larger site with a CMS.` },
      { question: "How long does it take to build a website?", answer: `A starter website usually takes ${web.tiers[0].timeline}, a business website ${web.tiers[1].timeline}, and a custom web application ${web.tiers[2].timeline}.` },
      { question: "Is a website builder good enough?", answer: "For testing an idea, yes. As your business grows, a custom-built site usually gives you better speed, SEO, design control and integrations." },
      { question: "Do I need to pay for maintenance?", answer: "Not always, but websites need occasional updates for security, content and new features. Many businesses use an on-demand or small monthly arrangement." },
      { question: "Will my website be SEO-friendly?", answer: "It should be. Ask for fast load times, clean page titles and descriptions, structured data and a sitemap as standard — all included in Genikode builds." },
    ],
    related: [
      { title: "Web development services", href: "/web-development" },
      { title: "Services & pricing (USD)", href: "/services" },
      { title: "How much does an app cost?", href: "/resources/app-development-cost" },
    ],
  },

  // ─────────────────────────────────────────────────────── Outsourcing guide
  {
    slug: "outsourcing-software-development",
    metaTitle: "How to Outsource Software Development in 2026",
    metaDescription:
      "A practical guide to outsourcing software development: engagement models, costs by region, how to vet a partner, contracts, and red flags to avoid.",
    h1: "How to outsource software development: a practical guide for 2026",
    intro:
      "Outsourcing can give you a senior development team at a fraction of local costs — or it can go badly wrong. The difference is almost always in how you choose and manage the partner. This guide covers the decisions that matter, from engagement models to contracts.",
    shortAnswer:
      "To outsource software development successfully: define a clear scope, choose the right engagement model (fixed-price, dedicated team or hourly), vet partners on live products and references, start with a small paid milestone, keep your code and accounts in your own name from day one, and agree a daily overlap window and communication routine upfront.",
    published: PUBLISHED,
    updated: PUBLISHED,
    readMinutes: 10,
    sections: [
      {
        id: "when-it-makes-sense",
        heading: "When outsourcing makes sense",
        bullets: [
          "You need to launch a product but don't have an in-house engineering team.",
          "Local hiring is slow or expensive, and you need experienced developers now.",
          "Your team needs extra capacity for a specific project or skill set.",
          "You want predictable costs with fixed-price milestones.",
        ],
        after: [
          "Outsourcing is harder when requirements change daily and nobody on your side can own decisions. In that case, assign a product owner internally before you bring in an external team.",
        ],
      },
      {
        id: "engagement-models",
        heading: "Choose the right engagement model",
        table: {
          head: ["Model", "Best for", "Pricing", "Watch out for"],
          rows: [
            ["Fixed-price project", "Well-defined scope with clear deliverables", `${formatTierPrice(dev.tiers[2])} per project, quoted upfront`, "Changes need a change request"],
            ["Dedicated developer / team", "Ongoing product development", `${formatTierPrice(dev.tiers[1])}`, "You manage priorities day to day"],
            ["Time & materials (hourly)", "Maintenance, small tasks, evolving scope", `${formatTierPrice(dev.tiers[0])}`, "Needs good time reporting"],
          ],
        },
      },
      {
        id: "costs-by-region",
        heading: "Costs by region",
        paragraphs: ["Rates differ far more than the tools or frameworks used. Typical agency rates in 2026:"],
        table: regionalRates,
        after: ["Lower rates only save money if the team is experienced. Judge partners on the quality of their shipped work, not on the lowest quote."],
      },
      {
        id: "vetting",
        heading: "How to vet a development partner",
        bullets: [
          "Look at live products, not just screenshots — download the apps, visit the sites.",
          "Ask for references and speak to past clients.",
          "Meet the people who will actually build your product, not only a salesperson.",
          "Ask how they run projects: planning, demos, testing, and how they report progress.",
          "Check communication: clear written English and responsiveness during the sales process are good predictors.",
          "Confirm they are a registered business with a real address and a written contract.",
        ],
      },
      {
        id: "red-flags",
        heading: "Red flags to avoid",
        bullets: [
          "A quote far below everyone else's, with no detailed scope behind it.",
          "Reluctance to give you access to the code repository or staging environment.",
          "No named team members or references.",
          "Pressure to pay a large share upfront before any work is delivered.",
          "Vague answers about who owns the intellectual property.",
        ],
      },
      {
        id: "contracts-ip",
        heading: "Contracts, IP and accounts",
        bullets: [
          "NDA and an intellectual-property assignment clause — the code should be yours.",
          "Code in a repository you own (GitHub, GitLab or Bitbucket) from the first commit.",
          "Cloud hosting, domains and app-store accounts registered in your company's name.",
          "Milestone-based payments tied to working, demonstrable software.",
          "A warranty or bug-fix period after launch, and a clear handover process if you part ways.",
        ],
      },
      {
        id: "time-zones",
        heading: "Working across time zones",
        paragraphs: [
          "Agree a daily overlap window and a routine: a short weekly demo, written progress updates, and a shared task board. A Pakistan-based team, for example, overlaps fully with Gulf and UK working hours and can cover US East Coast mornings.",
          "Async communication is a strength when it's done well — you can review progress at the start of your day, with work completed overnight.",
        ],
      },
      {
        id: "process",
        heading: "A simple six-step outsourcing process",
        bullets: [
          "1. Write a one-page brief: the problem, users, must-have features and deadline.",
          "2. Shortlist 3–5 partners and review their live work.",
          "3. Hold discovery calls and compare written scopes and quotes.",
          "4. Start with a small paid milestone, such as designs or a prototype.",
          "5. Move to full development with milestones, weekly demos and shared tracking.",
          "6. Launch, then agree support and a roadmap for the next version.",
        ],
      },
    ],
    faqs: [
      { question: "Is outsourcing software development safe?", answer: "It is when you own your code and accounts from day one, sign a contract with an IP assignment clause, and pay by milestone for working software." },
      { question: "How much can I save by outsourcing?", answer: "Savings come mainly from hourly rates: typical agency rates in South Asia are $20–$50 per hour, compared with $100–$200 in the United States. Total savings depend on the team's experience and how well the project is managed." },
      { question: "What is the best engagement model?", answer: "Fixed-price works best for a clearly defined project; a dedicated developer suits ongoing product work; hourly suits maintenance and small changes." },
      { question: "How do I communicate with an offshore team?", answer: "Agree an overlap window, a weekly demo, written progress updates and a shared task board. Good teams over-communicate." },
      { question: "Does Genikode work with international clients?", answer: "Yes. Genikode builds websites, mobile apps and custom software for clients worldwide, invoices in USD and works remotely across time zones." },
    ],
    related: [
      { title: "Hire dedicated developers", href: "/hire-developers" },
      { title: "Services & pricing (USD)", href: "/services" },
      { title: "How much does an app cost?", href: "/resources/app-development-cost" },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
