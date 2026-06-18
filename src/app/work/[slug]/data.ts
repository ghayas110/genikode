// Project Database
export const projectsData: Record<string, any> = {
    // ⚠️ SCAFFOLD / PLACEHOLDER CASE STUDY — CrewLink World.
    // Replace every [PLACEHOLDER ...] string and the metric values below with real,
    // verified content before publishing. The metrics here are NOT real and must be
    // confirmed; they appear in visible copy and in CreativeWork structured data.
    "crewlink-world": {
        title: "CrewLink World",
        category: "Aviation Social App",
        image: "/images/work/crewlink-world.png", // TODO: add this image to /public/images/work/
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
        // TODO: Replace with REAL, verified metrics. These are placeholders.
        metrics: [
            { value: "[X]", suffix: "K+", label: "Verified crew members" },
            { value: "[X]", suffix: "%", label: "Monthly active users" },
            { value: "[X]", suffix: "★", label: "App Store rating" },
            { value: "[X]", suffix: "+", label: "Countries reached" },
        ],
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
