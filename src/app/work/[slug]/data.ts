// Project Database
export const projectsData: Record<string, any> = {
    // ⚠️ SCAFFOLD / PLACEHOLDER CASE STUDY — CrewLink World.
    // Replace every [PLACEHOLDER ...] string and the metric values below with real,
    // verified content before publishing. The metrics here are NOT real and must be
    // confirmed; they appear in visible copy and in CreativeWork structured data.
    "crewlink-world": {
        title: "CrewLink World",
        category: "Aviation Social App",
        image: "/images/work/crewlink-world.svg", // branded vector poster; swap for a real screenshot when available
        technology: ["React Native", "Node.js", "PostgreSQL", "WebSockets"],
        year: "2025",
        productAbout:
            "CrewLink World is a social networking app built for aviation professionals — pilots, cabin crew, and ground staff — to connect, coordinate layovers, swap rosters, and share verified industry knowledge in one trusted community.",
        howWeStarted:
            "[PLACEHOLDER: How the engagement began — the founder's insight, the gap in the market, and why Genikode was chosen. Replace with the real origin story.]",
        mission:
            "[PLACEHOLDER: The product mission in one or two sentences — what CrewLink World set out to change for aviation crews worldwide.]",
        clientProblem:
            "[PLACEHOLDER: The concrete problem the client faced — e.g. crews relying on fragmented WhatsApp groups with no verification, no roster tools, and no safe professional space.]",
        challenges:
            "[PLACEHOLDER: The hardest technical and product challenges — e.g. verifying aviation credentials, real-time messaging at scale, time-zone-aware layover coordination.]",
        solution:
            "[PLACEHOLDER: How Genikode solved it — React Native cross-platform app, real-time WebSocket messaging, a verification pipeline, and a scalable Node.js backend. Replace with the real solution narrative.]",
        // DEMO numbers for presentation — replace with REAL, verified metrics before launch.
        metrics: [
            { value: "25", suffix: "K+", label: "Verified crew members" },
            { value: "68", suffix: "%", label: "Monthly active users" },
            { value: "4.8", suffix: "★", label: "App Store rating" },
            { value: "40", suffix: "+", label: "Countries reached" },
        ],
    },
    // ⚠️ PLACEHOLDER PROJECT NAME ("ServeOS") and PLACEHOLDER METRICS.
    // Rename to the real product/client and replace the [X] metric values with
    // verified numbers before publishing — metrics flow into CreativeWork schema.
    // Images are royalty-free Unsplash photos (commercial use OK), NOT copied from
    // any third-party site. Swap for real product screenshots when available.
    "restaurant-management-system": {
        title: "ServeOS",
        category: "Restaurant Management System",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop",
        ],
        technology: ["React Native", "Next.js", "Node.js", "PostgreSQL"],
        year: "2025",
        productAbout:
            "ServeOS is an all-in-one restaurant management system that unifies point-of-sale, table and floor management, a kitchen display system, online ordering, inventory, and customer loyalty into a single platform — giving restaurants real-time control over every order, table, and ingredient.",
        howWeStarted:
            "Restaurants were running their floor on a patchwork of disconnected tools — one app for the POS, paper tickets for the kitchen, spreadsheets for stock, and a separate service for online orders. We set out to collapse all of it into one fast, reliable system built for the pace of a busy service.",
        mission:
            "To give restaurant owners a single source of truth — from the first tap on a waiter's tablet to the final end-of-day report — so they can run leaner, serve faster, and understand their business in real time.",
        clientProblem:
            "Staff wasted time re-keying orders between systems, kitchens missed tickets during rushes, stock counts were always out of date, and owners had no unified view of sales across branches. Every disconnected tool added friction and cost.",
        challenges:
            "The system had to stay fully responsive during peak service even on unreliable Wi-Fi, sync orders instantly between front-of-house tablets and the kitchen display, handle multi-branch operations, and remain simple enough for new staff to learn in a single shift.",
        solution:
            "We built an offline-first React Native app for waitstaff and a kitchen display system that sync in real time, a Next.js back-office dashboard for menus, inventory, staff, and analytics, and a Node.js backend with a PostgreSQL data layer. Orders flow instantly from table to kitchen, stock deducts automatically per sale, and owners get live, branch-level reporting from anywhere.",
        // DEMO numbers for presentation — replace with REAL, verified metrics before launch.
        metrics: [
            { value: "35", suffix: "%", label: "Faster order turnaround" },
            { value: "120", suffix: "+", label: "Restaurants onboarded" },
            { value: "28", suffix: "%", label: "Reduction in stock waste" },
            { value: "8", suffix: "s", label: "Avg. order-to-kitchen time" },
        ],
    },
    "pos-system": {
        title: "SwiftPOS",
        category: "Point of Sale System",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
        technology: ["React", "Electron", "Node.js", "PostgreSQL"],
        year: "2025",
        productAbout:
            "SwiftPOS is a fast, offline-first point-of-sale platform for retail stores — handling billing, barcode scanning, inventory, and real-time sales reporting from a single, intuitive interface that keeps selling even when the internet drops.",
        howWeStarted:
            "Retailers were losing sales to slow, internet-dependent terminals that froze during peak hours. We set out to build a POS that stays instant at the counter and never blocks a sale because of a weak connection.",
        mission:
            "To give shop owners a reliable, affordable point-of-sale system that works flawlessly at the till and gives them a clear, real-time view of their business across every branch.",
        clientProblem:
            "The client's existing POS depended entirely on a live connection, causing checkout failures during outages, and offered no unified view of stock across multiple stores.",
        challenges:
            "Building a truly offline-first architecture that keeps billing instant and inventory accurate, then syncs seamlessly and without conflicts the moment connectivity returns.",
        solution:
            "We built a desktop POS in React and Electron backed by a local database that syncs to a Node.js and PostgreSQL cloud backend. Sales continue offline and reconcile automatically, with live dashboards for multi-branch inventory, staff, and reporting.",
    },
    "textile-erp": {
        title: "LoomERP",
        category: "Textile Industry ERP",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
        technology: ["Next.js", "Node.js", "PostgreSQL", "GraphQL"],
        year: "2024",
        productAbout:
            "LoomERP is an enterprise resource planning platform built for textile manufacturers — managing spinning, weaving, dyeing, inventory, production planning, procurement, and order tracking end to end in one system.",
        howWeStarted:
            "A textile mill was running production on disconnected registers and legacy software that couldn't keep pace with orders. They needed a modern ERP that understood the realities of a factory floor.",
        mission:
            "To digitize the entire textile production lifecycle — from raw yarn to shipped order — giving management complete, real-time visibility and control over cost, quality, and delivery.",
        clientProblem:
            "Production data was scattered across departments, making it impossible to track a batch, forecast material needs, or spot bottlenecks before they delayed shipments.",
        challenges:
            "Modeling the complex, multi-stage textile workflow — spinning, weaving, dyeing, finishing — into a single data model, and rolling it out to floor staff without disrupting live production.",
        solution:
            "We built a modular ERP in Next.js with a Node.js, GraphQL, and PostgreSQL backend, mapping each production stage, inventory point, and order into one system with role-based dashboards, batch traceability, and automated material planning.",
    },
    "clinic-management-system": {
        title: "MediClinic",
        category: "Clinic Management System",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
        technology: ["Next.js", "Node.js", "PostgreSQL"],
        year: "2024",
        productAbout:
            "MediClinic is a clinic management system that digitizes appointments, electronic medical records, billing, prescriptions, and patient follow-ups in one secure, easy-to-use platform for doctors and their staff.",
        howWeStarted:
            "A private clinic was drowning in paper files and phone-based appointments, with patient histories that were slow to find and easy to lose. They wanted to modernize without adding complexity for their staff.",
        mission:
            "To help clinics deliver better care by making patient records, scheduling, and billing instant, secure, and effortless — so doctors spend less time on admin and more with patients.",
        clientProblem:
            "Paper records caused long wait times, appointment double-bookings were common, and there was no reliable way to track prescriptions, follow-ups, or revenue.",
        challenges:
            "Designing a system clinical staff could adopt in a day, while securely handling sensitive patient data and keeping records available instantly at the point of care.",
        solution:
            "We built a Next.js clinic platform on a secure Node.js and PostgreSQL backend with role-based access, structured electronic medical records, an appointment calendar with reminders, and integrated billing and prescription management.",
    },
    digitalbank: {
        title: "Bliq",
        category: "Fintech App",
        image: "/images/bliq.png",
        technology: ["React Native", "Node.js", "AWS", "GraphQL"],
        year: "2025",
        productAbout: "Bliq is a revolutionary digital banking platform designed to provide seamless financial management for the modern user. It integrates advanced analytics with intuitive money tracking, breaking the barriers of traditional banking.",
        howWeStarted: "The journey began with a bold observation: modern users are overwhelmed by their financial data but lack actionable insights. We set out to redefine what a banking app feels like—shifting from a mere utility to a personal financial advisor.",
        mission: "To simplify personal finance and empower individuals to make smarter monetary decisions through real-time data, beautiful interfaces, and uncompromising security.",
        clientProblem: "The client needed a scalable app capable of handling millions of simultaneous transactions while providing a personalized, zero-latency user experience. Existing solutions were clunky and alienating.",
        challenges: "Building a secure backend infrastructure that complied with strict international financial regulations while maintaining a blazing-fast front-end architecture, all within a tight go-to-market timeline.",
        solution: "We engineered a robust microservices architecture using Node.js and AWS, coupled with a highly optimized React Native frontend. We implemented end-to-end encryption protocols and a custom caching layer to ensure immediate data retrieval."
    },
    welab: {
        title: "Welab Health",
        category: "Healthcare App",
        image: "/images/welab.png",
        technology: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
        year: "2024",
        productAbout: "Welab Health is a comprehensive telemedicine and diagnostics platform connecting patients with specialist doctors, providing AI-driven preliminary health assessments.",
        howWeStarted: "Healthcare accessibility was a persistent issue in rural areas. Welab approached us to digitize the clinic experience without losing the human touch of medical care.",
        mission: "To democratize healthcare access by leveraging technology to bridge the gap between medical professionals and patients, no matter their geographical location.",
        clientProblem: "Patients experienced long wait times for specialist consultations, and doctors lacked an integrated system to view comprehensive patient histories remotely.",
        challenges: "Integrating HIPAA-compliant video conferencing and securely transmitting large diagnostic files (like MRIs) over varying network conditions without packet loss.",
        solution: "We developed a highly optimized progressive web app and native apps, utilizing WebRTC for secure video pipelines and custom compression algorithms for rapid diagnostic file sharing."
    },
    papersdock: {
        title: "Papersdock",
        category: "LMS Platform",
        image: "/images/papersdock.png",
        technology: ["React", "Firebase", "TailwindCSS"],
        year: "2023",
        productAbout: "Papersdock is an innovative Learning Management System tailored for creative professionals and universities, emphasizing portfolio-based learning and peer reviews.",
        howWeStarted: "Traditional LMS systems were rigid and text-heavy. We wanted to build a visual-first platform where design students could seamlessly upload, annotate, and critique visual work.",
        mission: "To transform digital education from a passive viewing experience into an active, collaborative studio environment.",
        clientProblem: "Educational institutions needed a platform that supported ultra-high-resolution image annotation and real-time collaborative whiteboarding for design critiques.",
        challenges: "Managing state across dozens of concurrent users modifying the same visual canvas, ensuring performance didn't degrade with heavy asset loads.",
        solution: "We implemented an edge-rendered architecture using React and Firebase Realtime Database, with a custom canvas engine optimized for smooth panning and zooming on heavy files."
    },
    xpertva: {
        title: "Xpertva",
        category: "Corporate Website",
        image: "/images/xpertva.png",
        technology: ["Next.js", "Framer Motion", "Sanity CMS"],
        year: "2025",
        productAbout: "Xpertva is a premier corporate web presence for a global consulting agency, designed to project authority, innovation, and trust through enterprise-grade digital aesthetics.",
        howWeStarted: "Xpertva's legacy site was outdated and failed to reflect their market position. They needed a complete digital transformation that served as a powerful lead-generation engine.",
        mission: "To craft a digital headquarters that acts not just as a brochure, but as an interactive testament to the firm's strategic capabilities and modern approach.",
        clientProblem: "The client struggled with low engagement on their case studies and a disjointed user journey that caused high bounce rates on key service pages.",
        challenges: "Balancing high-end, immersive animations with stringent accessibility standards and rapid page load speeds required for global SEO rankings.",
        solution: "We built a statically generated Next.js site powered by a headless Sanity CMS. We used advanced Framer Motion techniques for scroll-jacking and parallax effects without sacrificing performance."
    }
};
