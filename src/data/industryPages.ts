import type { AnswerPageData } from "@/components/AnswerPage";
import { formatTierPrice, getPricing, HOURLY_RATE_RANGE } from "@/data/pricing";

// Industry landing pages (/industries/[slug]) and the hire-developers page.
// Each is built around real Genikode case studies, so the proof is specific.

const custom = getPricing("custom-software")!;
const CUSTOM_START = `$${custom.tiers[0].min.toLocaleString("en-US")}`;
const INDUSTRIES = { name: "Industries", href: "/industries" };

const sharedTrust = [
  {
    title: "Built around your workflow",
    desc: "We map how your team actually works before designing anything, so the system fits your process instead of forcing a new one.",
  },
  {
    title: "Fixed quotes, clear milestones",
    desc: "You get a fixed USD quote after a free consultation, and pay by milestone for working software.",
  },
  {
    title: "You own everything",
    desc: "Your code, data, hosting and accounts are in your name from day one, with a full handover at the end.",
  },
];

const sharedProcess = (thing: string) => [
  { title: "Discovery", desc: `We map your current process, users and pain points, and agree what the ${thing} must do first.` },
  { title: "Design", desc: "Wireframes and clickable designs, reviewed with the people who will use the system every day." },
  { title: "Build in milestones", desc: "Working software every few weeks, with demos so you see progress and can adjust early." },
  { title: "Launch & training", desc: "Data migration, staff training, and support while your team settles in." },
];

export const industryPages: AnswerPageData[] = [
  // ───────────────────────────────────────── Event venues / banquet halls
  {
    slug: "industries/event-venue-software",
    parent: INDUSTRIES,
    serviceType: "Event Venue Management Software",
    metaTitle: "Banquet Hall & Event Venue Management Software",
    metaDescription:
      "Custom booking and management software for banquet halls, ballrooms and event venues — availability, packages, catering and payments in one system.",
    h1: "Need custom software to manage bookings for your banquet hall or event venue?",
    intro:
      "Genikode builds custom booking and management systems for banquet halls, ballrooms, marquees and event venues — so availability, packages, catering, payments and follow-ups live in one place instead of phone notes, spreadsheets and chat threads.",
    definition: {
      heading: "What is event venue management software?",
      lead: "Event venue management software is a system that handles a venue's bookings end to end — checking date availability, quoting packages, taking payments and coordinating the event with staff and kitchen.",
      body: [
        "Off-the-shelf tools work for simple cases, but venues with multiple halls, in-house catering or custom packages often outgrow them. A custom system models your venue exactly: your halls, your packages, your pricing rules and your approval steps.",
        "Typical modules include an online enquiry and availability page, a booking calendar across halls, package and menu builders, quotations and invoices, payment tracking, staff assignment and reports.",
      ],
    },
    process: { heading: "How we build your venue system", steps: sharedProcess("system") },
    cost: {
      heading: "How much does venue management software cost?",
      lead: "A booking-focused system for a single venue sits at the lower end; multi-hall venues with catering, inventory and accounting integrations cost more.",
      startingPrice: CUSTOM_START,
      factors: [
        "Number of halls, spaces and package types",
        "Catering, menu and kitchen coordination",
        "Online enquiry / booking on your website",
        "Payments, invoices and accounting integration",
        "Staff roles, permissions and reports",
      ],
    },
    pricingId: "custom-software",
    related: {
      heading: "Venue systems we've built",
      items: [
        { title: "Sarah Palace — Banquet Hall Management", desc: "A booking and hall-management platform for a wedding and event venue.", href: "/work/sarah-palace" },
        { title: "Skyline Ballroom — Ballroom & Catering", desc: "One system for event bookings, hall availability, menus, guest counts and kitchen coordination.", href: "/work/skyline-ballroom" },
      ],
    },
    trust: { heading: "Why venues choose Genikode", points: sharedTrust },
    faqs: [
      { question: "Can customers check availability and enquire online?", answer: "Yes. We can add an availability and enquiry flow to your website that feeds straight into the booking system." },
      { question: "Can it handle multiple halls and catering?", answer: "Yes. Each event can carry the hall, date, package, guest count and catering menu as one record, visible to sales and kitchen teams." },
      { question: "How long does it take to build?", answer: `A single-module booking system typically takes ${custom.tiers[0].timeline}; a multi-module platform takes ${custom.tiers[1].timeline}.` },
      { question: "Can you migrate our existing bookings?", answer: "Yes. We import existing bookings and customer records from spreadsheets or your current tool as part of launch." },
    ],
  },

  // ─────────────────────────────────────────────────────────── ERP
  {
    slug: "industries/erp-software-development",
    parent: INDUSTRIES,
    serviceType: "Custom ERP Software Development",
    metaTitle: "Custom ERP Software Development for Manufacturers",
    metaDescription:
      "Custom ERP software for manufacturers and distributors — production, inventory, procurement, orders and reporting in one system built around your workflow.",
    h1: "Looking for custom ERP software built around how your business actually runs?",
    intro:
      "Genikode designs and builds custom ERP systems for manufacturers, distributors and growing businesses — connecting production, inventory, procurement, orders and reporting so your team stops re-keying data between spreadsheets.",
    definition: {
      heading: "What is custom ERP software?",
      lead: "ERP (enterprise resource planning) software connects a company's core operations — such as production, inventory, purchasing, sales and finance — in one system with a single source of truth.",
      body: [
        "Large ERP suites are powerful but expensive to license and customise, and many smaller manufacturers only use a fraction of them. A custom ERP includes exactly the modules you need, mirrors your production stages, and grows with you one module at a time.",
        "We typically start with the module causing the most pain — often inventory or production tracking — then add procurement, orders, reporting and accounting integration in phases.",
      ],
    },
    process: { heading: "How we build your ERP", steps: sharedProcess("ERP") },
    cost: {
      heading: "How much does custom ERP software cost?",
      lead: "Cost depends mainly on the number of modules and integrations. Building in phases lets you start with the highest-value module and spread the investment.",
      startingPrice: CUSTOM_START,
      factors: [
        "Number of modules (production, inventory, procurement, sales, HR…)",
        "Production stages and business rules",
        "Integrations with accounting and existing tools",
        "Data migration from spreadsheets or legacy systems",
        "Users, roles and reporting needs",
      ],
    },
    pricingId: "custom-software",
    related: {
      heading: "An ERP we've built",
      items: [
        { title: "AJ Textiles — Textile Industry ERP", desc: "Spinning, weaving, dyeing, inventory, production planning, procurement and order tracking in one platform.", href: "/work/textile-erp" },
      ],
    },
    trust: { heading: "Why manufacturers choose Genikode", points: sharedTrust },
    faqs: [
      { question: "Is custom ERP better than an off-the-shelf ERP?", answer: "It depends. Off-the-shelf ERP suits standard processes; custom ERP suits businesses with specific production stages or that only need some modules, without per-user licence fees." },
      { question: "Can we build the ERP in phases?", answer: "Yes — and we recommend it. Start with the module that solves your biggest problem, then add more once it's in use." },
      { question: "Can it integrate with our accounting software?", answer: "Yes. We integrate with accounting and other existing tools through their APIs or data exports." },
      { question: "Who owns the system?", answer: "You do. The code, data and hosting are in your name, with documentation and a full handover." },
    ],
  },

  // ─────────────────────────────────────────────────── Healthcare / clinics
  {
    slug: "industries/healthcare-software-development",
    parent: INDUSTRIES,
    serviceType: "Healthcare Software Development",
    metaTitle: "Clinic Management & Healthcare Software",
    metaDescription:
      "Custom clinic management systems and healthcare apps — appointments, patient records, billing, prescriptions and telemedicine, built around your practice.",
    h1: "Need a clinic management system or healthcare app built for your practice?",
    intro:
      "Genikode builds clinic management systems and healthcare apps that digitise appointments, patient records, billing, prescriptions and follow-ups — designed with doctors and front-desk staff so they're easy to use from day one.",
    definition: {
      heading: "What is clinic management software?",
      lead: "Clinic management software brings a practice's day-to-day operations — appointments, patient records, billing and prescriptions — into one secure system, replacing paper files and disconnected tools.",
      body: [
        "Beyond the clinic itself, many practices now add patient-facing features: online booking, reminders, telemedicine video consultations and secure sharing of reports.",
        "Health data is sensitive. We design with access controls, audit trails and encryption, and if you need to meet a specific regulation (such as HIPAA, GDPR or a local health-data law), we scope those requirements explicitly with you before building.",
      ],
    },
    process: { heading: "How we build healthcare software", steps: sharedProcess("system") },
    cost: {
      heading: "How much does clinic management software cost?",
      lead: "A single-clinic appointment and records system sits at the lower end; multi-branch platforms with telemedicine and integrations cost more.",
      startingPrice: CUSTOM_START,
      factors: [
        "Modules: appointments, records, billing, prescriptions, pharmacy, lab",
        "Patient-facing apps and online booking",
        "Telemedicine video and file sharing",
        "Compliance and security requirements",
        "Integrations with labs, insurers or existing systems",
      ],
    },
    pricingId: "custom-software",
    related: {
      heading: "Healthcare products we've built",
      items: [
        { title: "MediClinic — Clinic Management System", desc: "Appointments, medical records, billing, prescriptions and follow-ups in one platform.", href: "/work/clinic-management-system" },
        { title: "Welab Health — Telemedicine Platform", desc: "A telemedicine and diagnostics platform connecting patients with specialist doctors.", href: "/work/welab" },
      ],
    },
    trust: { heading: "Why practices choose Genikode", points: sharedTrust },
    faqs: [
      { question: "Is patient data secure?", answer: "We build with role-based access, audit logs and encryption, and host with reputable cloud providers. Specific compliance requirements are scoped with you before development starts." },
      { question: "Can patients book appointments online?", answer: "Yes. We can add online booking, reminders and a patient app or portal." },
      { question: "Can you add telemedicine?", answer: "Yes. We have built secure video consultations and diagnostic file sharing for a telemedicine platform." },
      { question: "Can it work for multiple branches?", answer: "Yes. Multi-branch setups with shared patient records and branch-level reporting are supported." },
    ],
  },

  // ─────────────────────────────────────────────────────────────── POS
  {
    slug: "industries/pos-software-development",
    parent: INDUSTRIES,
    serviceType: "Custom POS Software Development",
    metaTitle: "Custom POS Software Development for Retail & Food",
    metaDescription:
      "Custom point-of-sale software for retail stores and restaurants — fast billing, barcode scanning, inventory and real-time reporting, even when offline.",
    h1: "Need a custom POS system that fits how your store or restaurant really works?",
    intro:
      "Genikode builds custom point-of-sale systems for retail stores, mini marts and restaurants — fast billing, barcode scanning, inventory, multi-branch reporting and offline-first operation, so you keep selling even when the internet drops.",
    definition: {
      heading: "What is custom POS software?",
      lead: "POS (point-of-sale) software handles sales at the counter — billing, payments and receipts — and connects them to inventory and reporting.",
      body: [
        "Subscription POS products are a good start, but businesses with special pricing rules, multiple branches, custom workflows or specific hardware often need a system built around them — without per-terminal monthly fees.",
        "A custom POS can include billing and barcode scanning, inventory and stock alerts, purchase orders, customer loyalty, kitchen display for restaurants, multi-branch dashboards and integrations with accounting or tax systems.",
      ],
    },
    process: { heading: "How we build your POS", steps: sharedProcess("POS") },
    cost: {
      heading: "How much does custom POS software cost?",
      lead: "A single-store POS with inventory sits at the lower end; multi-branch systems with kitchen display, loyalty and integrations cost more.",
      startingPrice: CUSTOM_START,
      factors: [
        "Number of stores, terminals and users",
        "Inventory, purchasing and stock alerts",
        "Offline operation and data sync",
        "Hardware: barcode scanners, receipt printers, kitchen displays",
        "Integrations with accounting, tax or e-commerce",
      ],
    },
    pricingId: "custom-software",
    related: {
      heading: "A POS we've built",
      items: [
        { title: "Smart Mini Mart — Point of Sale System", desc: "An offline-first POS with billing, barcode scanning, inventory and real-time sales reporting.", href: "/work/pos-system" },
      ],
    },
    trust: { heading: "Why retailers choose Genikode", points: sharedTrust },
    faqs: [
      { question: "Does the POS work offline?", answer: "It can. We build offline-first systems that keep billing when the connection drops and sync automatically when it returns." },
      { question: "Can it manage multiple branches?", answer: "Yes. Central stock, pricing and reporting across branches are supported." },
      { question: "Does it work with barcode scanners and receipt printers?", answer: "Yes. We integrate standard POS hardware such as barcode scanners, receipt printers and cash drawers." },
      { question: "Why custom instead of a subscription POS?", answer: "Custom suits businesses with specific workflows, many terminals, or integration needs — and you avoid ongoing per-terminal fees." },
    ],
  },
];

export const getIndustryPage = (slug: string) =>
  industryPages.find((p) => p.slug === `industries/${slug}`);

// ───────────────────────────────────────────────────────── Hire developers
const dev = getPricing("dedicated-developers")!;

export const hireDevelopersPage: AnswerPageData = {
  slug: "hire-developers",
  serviceType: "Hire a Dedicated Developer",
  metaTitle: "Hire a Dedicated React Native & Next.js Developer",
  metaDescription: `Hire a senior React Native, Next.js and Node.js developer from ${formatTierPrice(dev.tiers[0])} or ${formatTierPrice(dev.tiers[1])}. An experienced engineer who joins your team.`,
  h1: "Need to hire a dedicated developer who works as part of your team?",
  intro:
    "Hire a senior React Native, Next.js and Node.js developer from Genikode — full-time or by the hour. You work directly with the engineer who writes your code: they join your standups, work in your tools and report to you, at offshore rates and without the cost and delay of local hiring.",
  definition: {
    heading: "What is a dedicated developer?",
    lead: "A dedicated developer is an engineer who works on your product as an extension of your team, on a monthly basis — without the cost, paperwork and delay of hiring locally.",
    body: [
      "It's the middle ground between hiring in-house and outsourcing a fixed project: you set the priorities day to day, and you can move between hourly and full-time as your roadmap changes.",
      "The work covers modern JavaScript and TypeScript: React Native for iOS and Android apps, Next.js and React for web, and Node.js for APIs and backends.",
    ],
  },
  process: {
    heading: "How hiring works",
    steps: [
      { title: "Share your needs", desc: "Tell us your stack, the work and the hours you need." },
      { title: "Meet your developer", desc: "Have a call with the engineer who will do the work, and review past projects and code." },
      { title: "Onboard", desc: "Your developer joins your repositories, task board and standups, with an agreed overlap window." },
      { title: "Work & report", desc: "Weekly progress reports, on a month-to-month basis — you can stop any time if the fit isn't right." },
    ],
  },
  cost: {
    heading: "How much does it cost to hire a developer?",
    lead: "Hourly work suits smaller or irregular tasks; a dedicated full-time developer suits ongoing product work. Both are billed in USD.",
    startingPrice: HOURLY_RATE_RANGE.split(" ")[0] + "/hr",
    factors: [
      "Stack and specialism (React Native, Next.js, Node.js)",
      "Full-time dedicated vs. hourly",
      "Hours per month and length of engagement",
      "Required overlap with your time zone",
    ],
  },
  pricingId: "dedicated-developers",
  related: {
    heading: "Products built at Genikode",
    items: [
      { title: "Bliq — Fintech App (React Native)", desc: "A digital banking app built with React Native, Node.js and AWS.", href: "/work/digitalbank" },
      { title: "AJ Textiles — ERP (Next.js)", desc: "An enterprise resource planning platform built with Next.js, Node.js and PostgreSQL.", href: "/work/textile-erp" },
    ],
  },
  trust: {
    heading: "Why teams hire a developer from Genikode",
    points: [
      { title: "Senior and hands-on", desc: "You work with an experienced engineer who has shipped real products, not a junior learning on your project." },
      { title: "Time-zone overlap", desc: "Working from UTC+5, we overlap easily with Gulf and European business hours, and calls can be scheduled for US mornings." },
      { title: "Flexible & low-risk", desc: "Month-to-month with no lock-in: scale hours up or down, or stop if it isn't the right fit." },
    ],
  },
  faqs: [
    { question: "How quickly can a developer start?", answer: "Usually within one to two weeks of agreeing the work and hours, depending on current availability." },
    { question: "Will the developer work only on my project?", answer: "A full-time engagement reserves 160 hours a month for your product. Hourly work is scheduled alongside other clients." },
    { question: "What hours will they work?", answer: "We agree a daily overlap window with your time zone, with written updates covering the rest of the day." },
    { question: "Who owns the code?", answer: "You do. Work is committed to your repositories and all IP is assigned to you." },
    { question: "Is there a minimum commitment?", answer: "Hourly work has no long-term commitment. Dedicated engagements run month to month." },
  ],
};
