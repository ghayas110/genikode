"use client";

// Floating "Chat on WhatsApp" button shown site-wide.
// Opens a WhatsApp chat (app on mobile, WhatsApp Web on desktop) with an empty
// message, and fires a Google Analytics event so WhatsApp leads are measurable.

const WHATSAPP_NUMBER = "923002661456"; // +92 300 2661456, digits only for wa.me
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  const handleClick = () => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "Floating WhatsApp button",
    });
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Chat with Genikode on WhatsApp"
      className="group fixed bottom-6 right-6 z-[60] flex items-center gap-3"
    >
      {/* Tooltip (desktop) */}
      <span className="hidden md:block max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white text-black text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:py-2 group-hover:opacity-100">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
        {/* Pulsing ring */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        <svg
          viewBox="0 0 32 32"
          className="relative h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.13 6.743 3.05 9.378L1.05 31.5l6.3-2.012A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0Zm9.31 22.59c-.386 1.09-1.92 1.994-3.143 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.528-1.9-4.824 0-2.296 1.166-3.424 1.636-3.894.386-.386.94-.562 1.472-.562.172 0 .326.008.466.016.42.018.63.044.906.704.344.83 1.18 2.882 1.28 3.092.102.21.204.494.062.804-.132.31-.248.448-.458.69-.21.242-.41.428-.62.69-.192.226-.408.47-.166.886.242.41 1.078 1.776 2.314 2.876 1.594 1.42 2.922 1.864 3.39 2.06.346.144.756.11 1.012-.16.326-.346.726-.92 1.134-1.486.29-.404.654-.454 1.04-.31.394.136 2.494 1.176 2.922 1.39.428.214.712.318.816.498.102.178.102 1.03-.284 2.12Z" />
        </svg>
      </span>
    </a>
  );
}
