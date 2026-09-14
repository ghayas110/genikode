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

const batches: Batch[] = [
  {
    id: "batch-8",
    title: "Batch 08",
    count: userProjects.length,
    dateRange: "2026 / CURRENT",
    projects: userProjects,
  },
];

export default function WorkList() {
  const [openBatch, setOpenBatch] = useState<string | null>("batch-8");
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleBatch = (batchId: string) => {
    setOpenBatch(openBatch === batchId ? null : batchId);
  };

  const scrollSlider = (batchId: string, direction: "left" | "right") => {
    const slider = sliderRefs.current[batchId];
    if (slider) {
      const scrollAmount = direction === "left" ? -400 : 400;
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-black text-white overflow-hidden">
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

        {/* Filters/Tabs Placeholder */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-0">
            <div className="flex gap-10 text-[10px] md:text-xs font-mono opacity-40">
                <span>BATCH</span>
                <span className="hidden md:block">PROJECTS</span>
            </div>
            <div className="text-[10px] md:text-xs font-mono opacity-40">
                TIMELINE
            </div>
        </div>

        {/* Batches Accordions */}
        <div className="divide-y divide-white/10">
          {batches.map((batch) => (
            <div key={batch.id} className="group">
              <button 
                onClick={() => toggleBatch(batch.id)}
                className="w-full flex justify-between items-center py-6 md:py-8 hover:bg-white/5 transition-colors px-2"
              >
                <div className="flex items-center gap-10 md:gap-40">
                    <span className="text-xl md:text-2xl font-bold">[ {batch.title} ]</span>
                    <span className="hidden md:block text-sm md:text-base opacity-40">[{batch.count}]</span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="text-[10px] md:text-sm font-mono opacity-40 uppercase">{batch.dateRange}</span>
                    {openBatch === batch.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openBatch === batch.id ? "max-h-[800px] opacity-100 mb-12" : "max-h-0 opacity-0"
                }`}
              >
                {batch.projects.length > 0 ? (
                  <div className="relative pt-8">
                    {/* Horizontal Slider */}
                    <div 
                      ref={el => { sliderRefs.current[batch.id] = el }}
                      className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-10 px-2 scroll-smooth"
                    >
                      {batch.projects.map((project) => {
                        const isExternal = project.href.startsWith("http");
                        const cardInner = (
                          <>
                            <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden mb-4 border border-white/5 group-hover/card:border-white/20 transition-colors">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-70 group-hover/card:opacity-100 transition-all duration-500 scale-100 group-hover/card:scale-105"
                              />
                              {/* Badges */}
                              <div className="absolute top-4 left-4 flex gap-2">
                                {project.badges.map(badge => (
                                    <span key={badge} className="bg-white/10 backdrop-blur-md text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-sm text-white uppercase tracking-wider">
                                        {badge}
                                    </span>
                                ))}
                              </div>
                              {isExternal && (
                                <span className="absolute top-4 right-4 flex items-center gap-1 bg-emerald-500/90 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-sm text-white uppercase tracking-wider">
                                  Live
                                </span>
                              )}
                            </div>
                            <div>
                                <h3 className="text-sm md:text-base font-bold mb-1 uppercase tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-[10px] md:text-xs opacity-40 uppercase font-medium">
                                    {project.category}
                                </p>
                            </div>
                          </>
                        );
                        return (
                          <div key={project.id} className="min-w-[280px] md:min-w-[450px] flex-shrink-0">
                            {isExternal ? (
                              <a href={project.href} target="_blank" rel="noopener noreferrer" className="group/card block">
                                {cardInner}
                              </a>
                            ) : (
                              <Link href={project.href} className="group/card block">
                                {cardInner}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Slider Navigation */}
                    <div className="flex gap-2 mt-4 justify-center md:justify-start">
                        <button 
                            onClick={() => scrollSlider(batch.id, "left")}
                            className="p-3 border border-white/10 hover:border-white/40 transition-colors rounded-full"
                        >
                            <ChevronLeft className="w-5 h-5 text-zinc-400" />
                        </button>
                        <button 
                            onClick={() => scrollSlider(batch.id, "right")}
                            className="p-3 border border-white/10 hover:border-white/40 transition-colors rounded-full"
                        >
                            <ChevronRight className="w-5 h-5 text-zinc-400" />
                        </button>
                    </div>
                  </div>
                ) : (
                    <div className="py-20 text-center opacity-20 font-mono italic">
                        No projects in this archive batch.
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
