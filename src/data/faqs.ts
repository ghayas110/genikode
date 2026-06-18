import type { FaqItem } from "@/components/Faq";

// NOTE: Pricing uses a "starts from" figure. CONFIRM/REPLACE the number below
// with your real entry-point price before relying on it — it is quoted verbatim
// in the visible FAQ and in FAQPage structured data shown to Google and AI engines.
const MOBILE_APP_STARTING_PRICE = "$2,000 (approximately PKR 560,000)"; // TODO: confirm real starting price

export const homeFaqs: FaqItem[] = [
  {
    question: "How much does a mobile app cost in Pakistan?",
    answer: `At Genikode, mobile app development starts from ${MOBILE_APP_STARTING_PRICE}. The final cost depends on scope — number of platforms (iOS, Android, or both), features, backend complexity, and integrations. A simple MVP sits at the lower end, while a feature-rich, multi-platform product with custom infrastructure costs more. We share a fixed quote after a short discovery call.`,
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Genikode is based in Karachi, Pakistan, and works with startups, founders, and growing businesses worldwide. We collaborate remotely across time zones using clear async updates, scheduled calls, and shared project tracking, and we invoice international clients in USD.",
  },
  {
    question: "React Native vs native — which should I choose?",
    answer:
      "Choose React Native when you want one codebase shipping to both iOS and Android with a faster timeline and lower cost — ideal for most MVPs, content, commerce, and social apps. Choose fully native (Swift/Kotlin) when you need platform-specific performance, heavy on-device processing, AR, or deep hardware access. Genikode builds both and recommends the right fit during discovery rather than defaulting to one.",
  },
  {
    question: "How long does it take to build a mobile app or website?",
    answer:
      "A typical marketing website takes 2–4 weeks, and a mobile app MVP takes 6–12 weeks depending on features. Timelines firm up after we scope the project together; we work in short milestones so you see progress every week.",
  },
  {
    question: "What technologies does Genikode use?",
    answer:
      "We build web products with Next.js and Node.js, and mobile apps with React Native (and fully native when required). Our stack also covers headless CMS, cloud infrastructure on AWS, and modern UI tooling — chosen per project for performance, scalability, and maintainability.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. After launch we offer maintenance and support plans covering updates, monitoring, security patches, and new features, so your website or app keeps performing as your business grows.",
  },
];

// Tailored FAQs per service slug. Falls back to a generic set if a slug is missing.
export const serviceFaqs: Record<string, FaqItem[]> = {
  "web-design": [
    {
      question: "What does Genikode's web design process include?",
      answer:
        "Discovery and strategy, wireframes, high-fidelity design, responsive build in Next.js, performance optimization, and launch. You review and approve work at each milestone.",
    },
    {
      question: "Will my website be fast and mobile-friendly?",
      answer:
        "Yes. We build on Next.js with performance and Core Web Vitals as a priority, so your site loads quickly and adapts flawlessly across phones, tablets, and desktops.",
    },
    {
      question: "Can I update the website content myself?",
      answer:
        "Yes — we can integrate a headless CMS so your team can edit pages, blogs, and media without touching code.",
    },
  ],
  "logo-design": [
    {
      question: "How many logo concepts do I get?",
      answer:
        "We present multiple distinct concepts after a brand discovery session, then refine your chosen direction through revision rounds until it's right.",
    },
    {
      question: "What files will I receive?",
      answer:
        "You receive scalable vector files (AI, SVG, EPS) plus PNG/JPG exports and brand guidelines covering color, spacing, and usage.",
    },
    {
      question: "Do you also design full brand identities?",
      answer:
        "Yes. Logo design can be part of a wider brand identity system including typography, color palettes, and visual guidelines — see our Brand Building service.",
    },
  ],
  "mobile-app": [
    {
      question: "How much does it cost to build a mobile app?",
      answer: `Mobile app development at Genikode starts from ${MOBILE_APP_STARTING_PRICE} and scales with features, platforms, and backend complexity. We provide a fixed quote after scoping.`,
    },
    {
      question: "Do you build for both iOS and Android?",
      answer:
        "Yes. We primarily use React Native to ship a single codebase to both iOS and Android, and build fully native apps when a project demands platform-specific performance.",
    },
    {
      question: "Do you handle App Store and Play Store submission?",
      answer:
        "Yes. We manage the full deployment process, including store guidelines, assets, and review requirements, for a smooth public launch.",
    },
  ],
  "video-animation": [
    {
      question: "What types of video animation do you produce?",
      answer:
        "Explainer videos, kinetic typography, logo reveals, and Lottie web animations — tailored to your brand and where the video will be used.",
    },
    {
      question: "How long should an explainer video be?",
      answer:
        "Most explainer videos perform best between 30 and 90 seconds. We script tightly so the message lands without losing viewer attention.",
    },
    {
      question: "Can animations be embedded in my website or app?",
      answer:
        "Yes. We export lightweight Lottie animations that drop directly into web and app code without hurting performance.",
    },
  ],
  "graphic-design": [
    {
      question: "What graphic design deliverables do you offer?",
      answer:
        "Marketing collateral, social media kits, editorial layouts, pitch decks, and custom illustration — all consistent with your brand system.",
    },
    {
      question: "Can you match my existing brand guidelines?",
      answer:
        "Absolutely. We work within your established colors, typography, and tone, or help define them if you don't have guidelines yet.",
    },
    {
      question: "Do you provide source files?",
      answer:
        "Yes, editable source files and export-ready formats are included so your team can reuse and adapt assets.",
    },
  ],
  "ui-ux": [
    {
      question: "What's the difference between UI and UX design?",
      answer:
        "UX is the structure and flow — how a product works and feels to use; UI is the visual layer — colors, typography, and components. We handle both, from journey mapping to high-fidelity interfaces.",
    },
    {
      question: "Do you create clickable prototypes?",
      answer:
        "Yes. We build high-fidelity, clickable Figma prototypes so you can test and validate the experience before development begins.",
    },
    {
      question: "Can you audit my existing product's usability?",
      answer:
        "Yes. We run usability audits to find drop-off points and friction, then deliver prioritized recommendations to improve conversion.",
    },
  ],
  seo: [
    {
      question: "How long does SEO take to show results?",
      answer:
        "Technical fixes can show impact within weeks, while content and authority-driven rankings typically build over 3–6 months. We focus on durable, white-hat strategies rather than shortcuts.",
    },
    {
      question: "What does your SEO service include?",
      answer:
        "Technical audits, keyword architecture, on-page optimization, and content strategy — covering crawl health, Core Web Vitals, metadata, and internal linking.",
    },
    {
      question: "Do you offer local SEO for businesses in Pakistan?",
      answer:
        "Yes. We optimize for local search visibility, including structured data and Google Business presence, for businesses targeting customers in Karachi and across Pakistan.",
    },
  ],
  smm: [
    {
      question: "Which platforms do you manage?",
      answer:
        "We manage content and community across the platforms that fit your audience — typically Instagram, LinkedIn, and X — with strategy tailored to each.",
    },
    {
      question: "Do you also run paid ad campaigns?",
      answer:
        "Yes. We run ROI-focused Meta and LinkedIn ad campaigns with audience targeting, creative, and ongoing optimization.",
    },
    {
      question: "Will I get performance reporting?",
      answer:
        "Yes. You receive regular reports on reach, engagement, conversions, and growth, with clear insights and next steps.",
    },
  ],
  "brand-building": [
    {
      question: "What does brand building involve?",
      answer:
        "Defining your brand archetype, verbal identity, visual system, and go-to-market strategy — the complete foundation that makes a business recognizable and trusted.",
    },
    {
      question: "Is brand building only for new companies?",
      answer:
        "No. We build brands from scratch and also reposition or refresh established businesses that have outgrown their current identity.",
    },
    {
      question: "Do you deliver brand guidelines?",
      answer:
        "Yes. You receive a comprehensive guideline document covering logo usage, color, typography, tone of voice, and application across touchpoints.",
    },
  ],
  strategy: [
    {
      question: "What is experience strategy and design?",
      answer:
        "It's the high-level planning that aligns technology with business goals — market positioning, technology roadmaps, service design, and ROI modeling — before execution begins.",
    },
    {
      question: "Who is this service for?",
      answer:
        "Founders and organizations planning a digital transformation or a new product who want a clear, measurable roadmap before committing to a build.",
    },
    {
      question: "How is success measured?",
      answer:
        "We define KPIs and financial models up front so every initiative maps to measurable business outcomes and projected ROI.",
    },
  ],
  prototyping: [
    {
      question: "What does prototyping include?",
      answer:
        "Wireframing and high-fidelity, clickable prototypes that let you test flows and validate decisions before investing in full development.",
    },
    {
      question: "Why prototype before building?",
      answer:
        "Prototyping catches usability and product issues early — when they're cheap to fix — saving time and budget during development.",
    },
    {
      question: "What tools do you use?",
      answer:
        "We primarily prototype in Figma, producing interactive flows that stakeholders and users can click through and give feedback on.",
    },
  ],
  motion: [
    {
      question: "What is motion design used for?",
      answer:
        "Micro-interactions, animated transitions, logo reveals, and product motion that make digital experiences feel alive and premium.",
    },
    {
      question: "Will motion slow down my website or app?",
      answer:
        "No. We implement performant animations (including Lottie and GPU-friendly techniques) that enhance experience without hurting load times.",
    },
    {
      question: "Can you animate our existing brand assets?",
      answer:
        "Yes. We bring existing logos and visuals to life with motion that stays true to your brand identity.",
    },
  ],
  "web-app": [
    {
      question: "What kind of web apps does Genikode build?",
      answer:
        "Custom, scalable web applications — dashboards, SaaS platforms, portals, and progressive web apps — built with Next.js and Node.js.",
    },
    {
      question: "Can a web app work offline?",
      answer:
        "Yes. We build progressive web apps (PWAs) that can be installed and continue working with limited or no connectivity.",
    },
    {
      question: "How do you ensure the app scales?",
      answer:
        "We design robust architectures with modern backends, caching, and cloud infrastructure so your app stays fast as usage grows.",
    },
  ],
};

const genericServiceFaqs: FaqItem[] = [
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Genikode is based in Karachi, Pakistan, and serves startups and businesses worldwide, collaborating remotely across time zones.",
  },
  {
    question: "How do projects get started?",
    answer:
      "Every project begins with a short discovery call to understand your goals, after which we share a clear scope, timeline, and fixed quote.",
  },
  {
    question: "Do you provide ongoing support after delivery?",
    answer:
      "Yes. We offer maintenance and support plans covering updates, monitoring, and new features after launch.",
  },
];

export function getServiceFaqs(slug: string): FaqItem[] {
  return serviceFaqs[slug] ?? genericServiceFaqs;
}
