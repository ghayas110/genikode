// Service Database combining overlapping terms
export const servicesData: Record<string, any> = {
    "web-design": {
        title: "Web Design",
        heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop",
        subtitle: "Digital experiences that mesmerize.",
        overview: "We construct immersive, high-performance web experiences that align seamlessly with your brand identity and drive user engagement.",
        approach: "At Genikode, we don't just build websites; we engineer digital ecosystems. By pairing cutting-edge technologies with world-class aesthetics, we ensure every pixel serves a purpose, bringing a highly professional and tailored feel to your online presence.",
        offerings: [
            { title: "Responsive Architecture", desc: "Fluid, custom layouts adapting flawlessly to any device." },
            { title: "Micro-interactions", desc: "Subtle, framer-motion powered animations that delight users." },
            { title: "Performance Optimization", desc: "Lightning-fast Next.js architecture for maximum retention." },
            { title: "Dynamic Integration", desc: "Headless CMS and API connections crafted to your needs." }
        ]
    },
    "logo-design": {
        title: "Logo Design",
        heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2940&auto=format&fit=crop",
        subtitle: "The profound mark of your identity.",
        overview: "Your logo is the face of your brand. We craft memorable, timeless logos that perfectly encapsulate your identity and resonate with your target audience.",
        approach: "We believe a logo must be deeply symbolic yet strikingly simple. Our design process digs into the core psychology of your brand to extract the perfect emblem—ensuring it works just as brilliantly on a massive billboard as it does on a tiny smartphone screen.",
        offerings: [
            { title: "Brand Discovery", desc: "Deep-dive workshops to understand your visual ethos." },
            { title: "Concept Generation", desc: "Multiple elegant, minimalist, or complex variations." },
            { title: "Vector Craftsmanship", desc: "Flawless mathematical precision in Adobe Illustrator." },
            { title: "Brand Guidelines", desc: "Comprehensive rules for logo usage, spacing, and application." }
        ]
    },
    "mobile-app": {
        title: "Mobile App Development",
        heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop",
        subtitle: "Native performance, unparalleled design.",
        overview: "We build intuitive, high-performance mobile applications for iOS and Android, ensuring your users get a flawless native experience on any device.",
        approach: "A great app isn't just about code; it's about how it feels in the user's hand. At Genikode, we combine React Native frameworks with bespoke UI/UX patterns so the final product feels incredibly fluid, natively responsive, and undeniably premium.",
        offerings: [
            { title: "Cross-Platform React Native", desc: "Write once, deploy flawlessly to both iOS and Android." },
            { title: "Custom Fluid Gestures", desc: "Swipes, pulls, and navigations that feel entirely natural." },
            { title: "Real-time Synchronization", desc: "Instant data updates using websockets and offline-first databases." },
            { title: "App Store Deployment", desc: "Handling all the rigorous guidelines for smooth public launches." }
        ]
    },
    "video-animation": {
        title: "Video Animation",
        heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop",
        subtitle: "Motion that tells a compelling story.",
        overview: "Bring your ideas to life with captivating motion graphics and video animations that tell your story in a dynamic, highly engaging format.",
        approach: "Still images only go so far. Genikode utilizes advanced After Effects and Cinema 4D techniques to build narrative animations. We focus on rhythm, pacing, and visual elegance to command attention and explain complex concepts effortlessly.",
        offerings: [
            { title: "Explainer Videos", desc: "Distilling complex products into easy, beautiful 60-second stories." },
            { title: "Kinetic Typography", desc: "Bold, animated text treatments that scream luxury and energy." },
            { title: "Logo Reveals", desc: "Slick, unforgettable opening animations for your brand." },
            { title: "Lottie Web Animations", desc: "Exporting smooth vectors directly into web and app code." }
        ]
    },
    "graphic-design": {
        title: "Graphic Design",
        heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Visual language that speaks volumes.",
        overview: "From marketing collateral to digital assets, our graphic design services ensure your visual communication is consistently sharp and impactful.",
        approach: "Design isn't just decoration; it's strategy made visible. Genikode brings a highly editorial, architectural approach to graphic asset creation, guaranteeing your pitch decks, social posts, and print materials look cohesive and top-tier.",
        offerings: [
            { title: "Marketing Collateral", desc: "Brochures, digital PDFs, and executive pitch decks." },
            { title: "Social Media Kits", desc: "Cohesive aesthetic templates for Instagram, LinkedIn, and X." },
            { title: "Editorial Design", desc: "Magazine-quality layouts with impeccable typography." },
            { title: "Custom Illustration", desc: "Bespoke artwork specifically tailored to your brand's voice." }
        ]
    },
    "ui-ux": {
        title: "UI/UX Design",
        heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Designing human-centric digital journeys.",
        overview: "Award-winning interfaces that guide users to conversion. We focus on human-centric design, mapping out intuitive journeys across every digital touchpoint.",
        approach: "We merge behavioral psychology with Swiss-style design principles. To us, UX is about removing friction, and UI is about generating delight. We test and prototype extensively in Figma before a single line of code is written.",
        offerings: [
            { title: "User Journey Mapping", desc: "Analyzing and optimizing every step a user takes." },
            { title: "Wireframing & Prototyping", desc: "High-fidelity, clickable Figma prototypes to test the flow." },
            { title: "Design Systems", desc: "Comprehensive token-based component libraries for scalability." },
            { title: "Usability Audits", desc: "Thorough reviews to find and fix drop-off points." }
        ]
    },
    "seo": {
        title: "Search Engine Optimization",
        heroImage: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Dominating the digital search ecosystem.",
        overview: "Climb the search rankings and drive organic traffic. We implement proven technical and content-focused SEO strategies to maximize your digital visibility.",
        approach: "SEO isn't magic; it's a science. Genikode dissects Google's algorithmic updates, performing deep technical audits of your Next.js/React architecture, combined with authoritative content strategies that cement you as an industry leader.",
        offerings: [
            { title: "Technical SEO Audits", desc: "Resolving crawl errors, core web vitals, and indexation issues." },
            { title: "Keyword Architecture", desc: "Mapping high-intent search terms to specific landing pages." },
            { title: "On-Page Optimization", desc: "Perfecting meta-tags, semantic HTML, and internal linking." },
            { title: "Content Strategy", desc: "Crafting authoritative, long-form content that ranks globally." }
        ]
    },
    "smm": {
        title: "Social Media Management",
        heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Building communities, driving conversation.",
        overview: "Social Media Management that builds communities. We craft tailored campaigns that consistently engage your audience and build genuine brand loyalty.",
        approach: "Modern brands are built in real-time. We curate feeds that act as digital galleries for your business while executing data-driven ad campaigns that dramatically lower your Customer Acquisition Cost (CAC).",
        offerings: [
            { title: "Content Calendars", desc: "Strategic scheduling to maximize peak engagement hours." },
            { title: "Community Management", desc: "Active engaging, replying, and nurturing of top followers." },
            { title: "Performance Campaigns", desc: "Highly targeted, ROI-focused Meta and LinkedIn ads." },
            { title: "Analytics & Reporting", desc: "Deep-dive monthly metrics on reach, conversion, and growth." }
        ]
    },
    "brand-building": {
        title: "Brand Building",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
        subtitle: "Forging iconic companies from scratch.",
        overview: "We turn businesses into iconic brands. Through comprehensive strategy and cohesive identity systems, we ensure you stand out in competitive markets.",
        approach: "A brand is far more than a logo; it's a feeling. Genikode architects the overarching vision, from the tone of voice to the color palette, ensuring every piece of outbound material uniformly screams luxury and authority.",
        offerings: [
            { title: "Brand Archetyping", desc: "Defining the psychological persona your company embodies." },
            { title: "Verbal Identity", desc: "Crafting taglines, tone-of-voice rules, and messaging pillars." },
            { title: "Visual Matrix", desc: "Holistic color, typography, and photographic art direction." },
            { title: "Go-to-Market Strategy", desc: "Orchestrating the master plan for your public brand launch." }
        ]
    },
    // Fallbacks for Agency Vision Services
    "strategy": {
        title: "Experience Strategy & Design",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
        subtitle: "Where foresight meets flawless execution.",
        overview: "We craft data-driven roadmaps that align technology with business goals. From market analysis to competitive positioning, we ensure every digital initiative delivers measurable ROI.",
        approach: "Genikode operates at the intersection of business logic and creative disruption. We don't just ask 'what to build', but 'why does this matter?' laying down an elite strategic foundation before execution.",
        offerings: [
            { title: "Market Positioning", desc: "Finding the white space where your brand can dominate." },
            { title: "Technology Roadmaps", desc: "Planning the stack infrastructure for 5, 10, and 20 years out." },
            { title: "Service Design", desc: "End-to-end mapping of physical-to-digital customer touchpoints." },
            { title: "Financial Modeling", desc: "Projecting ROI on comprehensive digital transformation initiatives." }
        ]
    },
    "3d-visualisation": {
        title: "3D Visualisation",
        heroImage: "/images/agency/agency_2.png",
        subtitle: "Hyper-realistic rendering and modeling.",
        overview: "Elevate your product presentation with photorealistic 3D rendering and immersive interactive models.",
        approach: "Instead of flat photography, we utilize advanced 3D software to build environments and products from scratch. This allows for impossible camera angles, perfect lighting control, and high-end luxury aesthetic generation.",
        offerings: [
            { title: "Product Rendering", desc: "Hyper-realistic asset creation for e-commerce." },
            { title: "Architectural Viz", desc: "Stunning 3D walkthroughs of unbuilt environments." },
            { title: "Motion 3D", desc: "Complex physics simulations and particle animations." },
            { title: "WebGL Realtime", desc: "Integrating interactive 3D models directly into your Next.js site (Three.js)." }
        ]
    },
    "prototyping": {
        title: "Rapid Concept Prototyping",
        heroImage: "/images/agency/development.png",
        subtitle: "From idea to interactive quickly.",
        overview: "Validate your ideas in weeks, not months. We build rapid, clickable prototypes to test the market before heavy engineering.",
        approach: "Genikode believes in failing fast and learning faster. We rapidly spin up high-fidelity prototypes that look and act like the real thing, allowing you to secure funding and stakeholder approval instantly.",
        offerings: [
            { title: "Clickable Dummies", desc: "Figma-based prototypes that mimic fully coded apps." },
            { title: "MVP Development", desc: "Bare-bones coded versions to test core functionality." },
            { title: "User Testing Loops", desc: "Watching real users interact with the prototype to gather data." },
            { title: "Stakeholder Decks", desc: "Packaging the prototype into a narrative designed to sell the vision." }
        ]
    },
    "motion": {
        title: "Motion & Production",
        heroImage: "/images/agency/motion.png",
        subtitle: "Cinematic quality for digital screens.",
        overview: "High-end video production combined with elite motion design to tell your brand story in the most compelling format possible.",
        approach: "We treat every digital touchpoint like a film premiere. Genikode blends live-action production strategy with advanced motion graphics, ensuring every second on screen reflects the absolute pinnacle of professionalism.",
        offerings: [
            { title: "Live Action Production", desc: "Directing, shooting, and editing brand documentaries." },
            { title: "VFX & Compositing", desc: "Adding seamless green screen and CGI extensions." },
            { title: "Sound Design", desc: "Custom foley, atmospheric audio, and professional mixing." },
            { title: "Color Grading", desc: "Cinema-grade coloring for that premium, moody Genikode look." }
        ]
    },
    "web-app": {
        title: "Website & App Experience",
        heroImage: "/images/agency/agency_1.png",
        subtitle: "The ultimate intersection of code and art.",
        overview: "We bring complex digital ecosystems to life, blending web technologies with app-like fluidity.",
        approach: "A website is no longer a static document; it's a living application. We utilize React and Next.js to provide zero-refresh routing and state-of-the-art micro-animations, making your browser feel like an expensive native app.",
        offerings: [
            { title: "Progressive Web Apps", desc: "Websites that can be installed on phones and work offline." },
            { title: "Complex WebGL Implementations", desc: "Heavy graphics rendering handled smoothly in the DOM." },
            { title: "E-Commerce Platforms", desc: "High conversion, custom checkout flows via Shopify Headless." },
            { title: "Dashboard UI", desc: "Clean, dark-mode analytical interfaces to manage complex data." }
        ]
    }
};
