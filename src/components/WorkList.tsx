import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  badges: string[];
}

const userProjects: Project[] = [
  // Real, live 2026 client sites — links go straight to the deployed product.
  {
    id: "dentalandcosmetics",
    title: "Dental & Cosmetics Clinic",
    category: "Healthcare / Clinic Website",
    image: "/images/work/dentalandcosmetics.png",
    href: "https://dentalandcosmetics.vercel.app",
    badges: ["WEB", "UI"],
  },
  {
    id: "royaldental",
    title: "Royal Dental & Aesthetic Clinic",
    category: "Healthcare / Clinic Website",
    image: "/images/work/royaldental.png",
    href: "https://royaldentalandaestheticclinic.vercel.app",
    badges: ["WEB"],
  },
  {
    id: "moosaministry",
    title: "Moosa Ministry",
    category: "Food & Restaurant Brand",
    image: "/images/work/moosaministry.png",
    href: "https://moosaministry.vercel.app",
    badges: ["WEB", "UI"],
  },
  {
    id: "alamantrust",
    title: "Al-Aman Trust",
    category: "Nonprofit / Trust Website",
    image: "/images/work/alamantrust.png",
    href: "https://alamantrustlltd.vercel.app",
    badges: ["WEB"],
  },
  {
    id: "shariahcompliance",
    title: "Shariah Compliance Solutions",
    category: "Finance & Consulting Website",
    image: "/images/work/shariahcompliance.png",
    href: "https://shariahcompliancessolutions.vercel.app",
    badges: ["WEB", "UI"],
  },
  {
    id: "sarah-palace",
    title: "Sarah Palace",
    category: "Banquet Hall Management System",
    image: "/images/work/sarah-palace.jpg",
    href: "/work/sarah-palace",
    badges: ["WEB", "UI"],
  },
  {
    id: "skyline-ballroom",
    title: "Skyline Ballroom",
    category: "Ballroom & Catering Management",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop",
    href: "/work/skyline-ballroom",
    badges: ["WEB", "UX"],
  },
  {
    id: "pos-system",
    title: "Smart Mini Mart",
    category: "Point of Sale System",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    href: "/work/pos-system",
    badges: ["WEB", "UX"],
  },
  {
    id: "textile-erp",
    title: "AJ Textiles",
    category: "Textile Industry ERP",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
    href: "/work/textile-erp",
    badges: ["WEB", "UI"],
  },
  {
    id: "clinic-management-system",
    title: "MediClinic",
    category: "Clinic Management System",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
    href: "/work/clinic-management-system",
    badges: ["WEB", "UX"],
  },
  {
    id: "restaurant-management-system",
    title: "ServeOS",
    category: "Restaurant Management System",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    href: "/work/restaurant-management-system",
    badges: ["APP", "WEB", "UI"],
  },
  {
    id: "digitalbank",
    title: "Bliq",
    category: "Fintech App",
    image: "/images/bliq.png",
    href: "/work/digitalbank",
    badges: ["UI", "DP"],
  },
  {
    id: "welab",
    title: "Welab Health",
    category: "Healthcare App",
    image: "/images/welab.png",
    href: "/work/welab",
    badges: ["UI", "UX"],
  },
  {
    id: "papersdock",
    title: "Papersdock",
    category: "LMS Platform",
    image: "/images/papersdock.png",
    href: "/work/papersdock",
    badges: ["WEB"],
  },
  {
    id: "xpertva",
    title: "Xpertva",
    category: "Corporate Website",
    image: "/images/xpertva.png",
    href: "/work/xpertva",
    badges: ["WEB", "UI"],
  },
];

// Landscape aspect variants give the masonry a gentle height rhythm without
// cropping website screenshots awkwardly.
const ratios = ["16 / 10", "4 / 3", "16 / 11", "3 / 2", "5 / 4", "16 / 10"];

export default function WorkList() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Grain/Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.2] z-10"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      ></div>

      {/* Decorative Large Years */}
      <div className="absolute top-10 left-4 md:left-10 text-[15vw] md:text-[20vw] font-bold leading-none text-white/5 select-none pointer-events-none z-0">
        '23
      </div>
      <div className="absolute top-10 right-4 md:right-10 text-[15vw] md:text-[20vw] font-bold leading-none text-white/5 select-none pointer-events-none z-0">
        '26
      </div>

      {/* Main Content */}
      <div className="relative z-20 pt-40 px-4 md:px-10 pb-20 max-w-[1920px] mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col items-center mb-24 text-center">
            <span className="text-xs md:text-sm font-mono tracking-widest uppercase mb-6 opacity-60">
                [ PORTFOLIO ]
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase max-w-4xl">
                Explore our digital crafts
            </h1>
            <p className="text-sm md:text-base opacity-60">
                A selection of our most recent and impactful work.
            </p>
        </div>

        {/* Masonry grid — every project visible at once */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {userProjects.map((project, i) => {
            const isExternal = project.href.startsWith("http");
            const inner = (
              <>
                <div
                  className="relative overflow-hidden rounded-xl bg-zinc-900 border border-white/10 group-hover/card:border-white/30 transition-colors"
                  style={{ aspectRatio: ratios[i % ratios.length] }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top opacity-80 group-hover/card:opacity-100 group-hover/card:scale-[1.04] transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.badges.map((badge) => (
                      <span key={badge} className="bg-white/10 backdrop-blur-md text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-sm text-white uppercase tracking-wider">
                        {badge}
                      </span>
                    ))}
                  </div>
                  {isExternal && (
                    <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500/90 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-sm text-white uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" /> Live
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-3 mb-1">
                  <h3 className="text-sm md:text-base font-bold uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[10px] md:text-xs opacity-40 uppercase font-medium">
                    {project.category}
                  </p>
                </div>
              </>
            );
            const cls = "mb-5 block break-inside-avoid group/card";
            return isExternal ? (
              <a key={project.id} href={project.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={project.id} href={project.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
