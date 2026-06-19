import type { AnswerPageData } from "@/components/AnswerPage";

// Pricing anchors — confirmed entry-point prices (2026-06-19). These appear in
// visible copy and in Service/FAQ structured data, so keep them in sync with
// faqs.ts (MOBILE_APP_STARTING_PRICE) if they ever change.
const WEB_DEV_START = "$600 (≈ PKR 170,000)";
const APP_DEV_START = "$2,000 (≈ PKR 560,000)"; // matches site-wide mobile app figure

// Shared "why us" block — answers the full human question:
// "Which software house is trusted, affordable, and works with overseas clients?"
const trustPoints = [
  {
    title: "Trusted & identifiable",
    desc: "Genikode is a registered Karachi-based agency founded by Ghayas Ali, with real case studies, named clients, and a public track record — not an anonymous freelancer.",
  },
  {
    title: "Affordable, fixed quotes",
    desc: "Pakistan-based delivery means world-class engineering at a fraction of US/EU agency rates. You get a clear, fixed quote up front — no hidden costs or scope surprises.",
  },
  {
    title: "Built for overseas clients",
    desc: "We work with founders across the US, UK, Gulf, and beyond — collaborating async across time zones, communicating in clear English, and invoicing in USD.",
  },
];

export const answerPages: Record<string, AnswerPageData> = {
  "web-development": {
    slug: "web-development",
    serviceType: "Web Development",
    metaTitle: "Web Development Company in Pakistan for Overseas Clients | Genikode",
    metaDescription:
      "Genikode is a trusted, affordable web development company in Karachi, Pakistan, building fast, scalable websites and web apps for clients worldwide with Next.js and Node.js.",
    h1: "Looking for a trusted, affordable web development company that works with overseas clients?",
    intro:
      "Genikode is a Karachi-based web development company that builds fast, scalable, search-friendly websites and web apps for founders and businesses worldwide — with fixed quotes, clear communication, and a public track record you can verify.",
    definition: {
      heading: "What is web development?",
      lead: "Web development is the work of designing, building, and maintaining websites and web applications — everything from a marketing site to a complex, data-driven platform that runs in the browser.",
      body: [
        "It spans front-end development (the interface users see and interact with), back-end development (servers, databases, and business logic), and the infrastructure that keeps a site fast, secure, and online.",
        "At Genikode we build with modern, production-grade tools — Next.js and React on the front end, Node.js on the back end — so your site loads quickly, ranks well, and scales as your traffic grows.",
      ],
    },
    process: {
      heading: "Our web development process",
      intro: "A clear, milestone-based process so you always know what's happening and what comes next.",
      steps: [
        { title: "Discovery & strategy", desc: "We learn your goals, audience, and requirements, then agree on scope, timeline, and a fixed quote." },
        { title: "Design & prototype", desc: "Wireframes and high-fidelity designs you review and approve before any code is written." },
        { title: "Development", desc: "We build your site in Next.js with clean, maintainable code, sharing progress every week." },
        { title: "Testing & QA", desc: "Cross-device, cross-browser testing plus performance and SEO checks against Core Web Vitals." },
        { title: "Launch", desc: "We deploy to fast, reliable hosting and handle the full go-live, including analytics and search setup." },
        { title: "Support & growth", desc: "Optional maintenance plans for updates, monitoring, and new features as you grow." },
      ],
    },
    cost: {
      heading: "How much does web development cost in Pakistan?",
      lead: "Cost depends on scope — a marketing website is far less than a custom web application with user accounts and integrations. Because we deliver from Pakistan, you get senior-level work at rates well below US and European agencies.",
      startingPrice: WEB_DEV_START,
      factors: [
        "Number of pages and templates",
        "Custom design vs. template-based",
        "CMS or headless content management",
        "Integrations (payments, CRM, APIs)",
        "Custom functionality and user accounts",
        "Ongoing maintenance and support",
      ],
      note: "Every project gets a transparent, fixed quote after a short discovery call — no hidden fees.",
    },
    trust: {
      heading: "Why founders worldwide choose Genikode for web development",
      points: trustPoints,
    },
    faqs: [
      {
        question: "Do you build websites for clients outside Pakistan?",
        answer:
          "Yes. Genikode is based in Karachi but works with clients across the US, UK, Gulf, and worldwide. We collaborate remotely, communicate in clear English, and invoice in USD.",
      },
      {
        question: "How much does a website cost?",
        answer: `Web development at Genikode starts from ${WEB_DEV_START} and scales with scope — pages, custom design, CMS, and integrations. You receive a fixed quote after a short discovery call.`,
      },
      {
        question: "What technology do you use?",
        answer:
          "We build with Next.js and React on the front end and Node.js on the back end, with headless CMS and cloud hosting — chosen for speed, SEO, and scalability.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A typical marketing website takes 2–4 weeks; a custom web application takes longer depending on features. We confirm a timeline during scoping and work in weekly milestones.",
      },
      {
        question: "Will my website be fast and good for SEO?",
        answer:
          "Yes. We build with performance and Core Web Vitals as a priority and follow technical SEO best practices — semantic HTML, fast load times, structured data, and mobile-first design.",
      },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    serviceType: "Mobile App Development",
    metaTitle: "Mobile App Development Company in Pakistan for Overseas Clients | Genikode",
    metaDescription:
      "Genikode is a trusted, affordable mobile app development company in Karachi building iOS and Android apps for startups and businesses worldwide with React Native.",
    h1: "Need a trusted, affordable mobile app development company that builds for iOS and Android worldwide?",
    intro:
      "Genikode is a Karachi-based mobile app development company that ships polished iOS and Android apps for startups and businesses around the world — primarily with React Native, with fixed quotes and end-to-end delivery from idea to App Store.",
    definition: {
      heading: "What is mobile app development?",
      lead: "Mobile app development is the process of building software applications that run on smartphones and tablets — covering design, front-end and back-end engineering, testing, and store deployment for iOS and Android.",
      body: [
        "Apps can be native (built separately for each platform) or cross-platform (one codebase serving both). Most products are best served by cross-platform development with React Native, which ships to iOS and Android faster and at lower cost.",
        "At Genikode we handle the full lifecycle — UX, development, secure backends on Node.js, testing, and submission to the Apple App Store and Google Play.",
      ],
    },
    process: {
      heading: "Our mobile app development process",
      intro: "From idea to live app, with weekly progress and no surprises.",
      steps: [
        { title: "Discovery & scoping", desc: "We define features, platforms, and budget, then agree on a fixed quote and timeline." },
        { title: "UX & UI design", desc: "Clickable prototypes you can test and approve before development begins." },
        { title: "Development", desc: "Cross-platform builds in React Native with a scalable Node.js backend." },
        { title: "Testing & QA", desc: "Device testing, performance tuning, and security checks across iOS and Android." },
        { title: "App Store launch", desc: "We handle Apple App Store and Google Play submission, guidelines, and assets." },
        { title: "Maintenance", desc: "Post-launch updates, monitoring, and new features as your user base grows." },
      ],
    },
    cost: {
      heading: "How much does a mobile app cost in Pakistan?",
      lead: "App cost depends on scope — platforms, features, and backend complexity. Delivering from Pakistan, Genikode offers senior engineering at rates well below US and European studios, without compromising quality.",
      startingPrice: APP_DEV_START,
      factors: [
        "iOS, Android, or both",
        "Number and complexity of features",
        "Backend, APIs, and real-time data",
        "Third-party integrations (payments, maps, chat)",
        "Design complexity and animations",
        "Ongoing maintenance and updates",
      ],
      note: "We provide a fixed quote after a short discovery call so you know the full cost up front.",
    },
    trust: {
      heading: "Why startups worldwide choose Genikode for app development",
      points: trustPoints,
    },
    faqs: [
      {
        question: "Do you build apps for international clients?",
        answer:
          "Yes. Genikode is based in Karachi and builds mobile apps for startups and businesses worldwide, collaborating remotely across time zones and invoicing in USD.",
      },
      {
        question: "How much does it cost to build a mobile app?",
        answer: `Mobile app development at Genikode starts from ${APP_DEV_START} and scales with platforms, features, and backend complexity. You get a fixed quote after scoping.`,
      },
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes. We primarily use React Native to ship a single codebase to both iOS and Android, and build fully native apps when a project needs platform-specific performance.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer:
          "Yes. We manage the full deployment process — store guidelines, assets, and review requirements — for a smooth public launch.",
      },
      {
        question: "How long does it take to build an app?",
        answer:
          "A mobile app MVP typically takes 6–12 weeks depending on features. We confirm the timeline during scoping and deliver in weekly milestones.",
      },
    ],
  },

  "react-native-development": {
    slug: "react-native-development",
    serviceType: "React Native Development",
    metaTitle: "React Native Development Company in Pakistan for Overseas Clients | Genikode",
    metaDescription:
      "Genikode is a trusted, affordable React Native development company in Karachi building cross-platform iOS and Android apps for clients worldwide from a single codebase.",
    h1: "Want a trusted, affordable React Native company to build one app for both iOS and Android?",
    intro:
      "Genikode is a Karachi-based React Native development company that builds high-performance cross-platform apps — one codebase shipping to both iOS and Android — for founders and businesses worldwide, with fixed quotes and senior engineering.",
    definition: {
      heading: "What is React Native development?",
      lead: "React Native is a framework for building genuinely native mobile apps for iOS and Android from a single JavaScript and React codebase — so you ship to both platforms faster and at lower cost than building two native apps separately.",
      body: [
        "Because most of the code is shared, React Native cuts development time and budget while still delivering native performance and a native look and feel. It powers apps from Instagram to Shopify.",
        "At Genikode, React Native is our default for most mobile products. We pair it with a scalable Node.js backend and recommend fully native development only when a project genuinely needs platform-specific performance or deep hardware access.",
      ],
    },
    process: {
      heading: "Our React Native development process",
      intro: "Cross-platform delivery that's fast to ship and easy to maintain.",
      steps: [
        { title: "Discovery & scoping", desc: "We confirm whether React Native is the right fit, then agree on scope, timeline, and a fixed quote." },
        { title: "UX & UI design", desc: "Clickable prototypes designed for native iOS and Android patterns." },
        { title: "Cross-platform build", desc: "One React Native codebase serving both platforms, with a Node.js backend." },
        { title: "Testing & QA", desc: "Testing on real iOS and Android devices, with performance and stability tuning." },
        { title: "Store launch", desc: "Submission to the Apple App Store and Google Play, handled end to end." },
        { title: "Maintenance & scale", desc: "Updates and new features shipped to both platforms at once, keeping costs low." },
      ],
    },
    cost: {
      heading: "How much does React Native development cost?",
      lead: "React Native usually costs less than building two separate native apps because most code is shared. Delivered from Pakistan, Genikode's rates are well below US and European studios for the same quality.",
      startingPrice: APP_DEV_START,
      factors: [
        "Number and complexity of features",
        "Backend, APIs, and real-time data",
        "Third-party integrations (payments, maps, chat)",
        "Custom native modules, if any",
        "Design complexity and animations",
        "Ongoing maintenance and updates",
      ],
      note: "You receive a fixed, transparent quote after a short discovery call.",
    },
    trust: {
      heading: "Why teams worldwide choose Genikode for React Native",
      points: trustPoints,
    },
    faqs: [
      {
        question: "Is React Native good for production apps?",
        answer:
          "Yes. React Native powers large-scale production apps and delivers native performance for the vast majority of products — social, commerce, content, on-demand, and more — while sharing one codebase across iOS and Android.",
      },
      {
        question: "React Native vs native — which should I choose?",
        answer:
          "Choose React Native for most apps: faster delivery, lower cost, one codebase for both platforms. Choose fully native when you need heavy on-device processing, AR, or deep hardware access. We recommend the right fit during discovery.",
      },
      {
        question: "How much does a React Native app cost?",
        answer: `React Native development at Genikode starts from ${APP_DEV_START} and scales with features and backend complexity — typically less than building two separate native apps.`,
      },
      {
        question: "Do you work with overseas clients?",
        answer:
          "Yes. Genikode is based in Karachi and builds React Native apps for clients across the US, UK, Gulf, and worldwide, collaborating remotely and invoicing in USD.",
      },
      {
        question: "Can you take over an existing React Native project?",
        answer:
          "Yes. We can audit, fix, and extend existing React Native codebases, or rebuild problem areas — starting with a review of your current code and goals.",
      },
    ],
  },
};
