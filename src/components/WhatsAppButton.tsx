"use client";

// Floating WhatsApp contact button. One tap opens a pre-filled WhatsApp chat,
// and fires a `whatsapp_click` GA event for conversion tracking.

const WHATSAPP_NUMBER = "923002661456";
const PREFILLED_MESSAGE = "Hi Genikode! I'd like to discuss a project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  PREFILLED_MESSAGE
)}`;

function fireEvent() {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", "whatsapp_click", { event_category: "contact" });
}

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={fireEvent}
      aria-label="Chat with Genikode on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 md:hover:pr-6"
    >
      {/* WhatsApp glyph */}
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 fill-current"
        aria-hidden="true"
      >
        <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.255.59 4.46 1.71 6.405L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.233 1.587h.005c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.633-3.748-9.05A12.71 12.71 0 0 0 16.003 3.2zm0 23.34h-.004a10.57 10.57 0 0 1-5.385-1.475l-.386-.23-3.9 1.022 1.04-3.802-.252-.39a10.55 10.55 0 0 1-1.617-5.64c0-5.866 4.776-10.64 10.65-10.64 2.844 0 5.516 1.108 7.526 3.12a10.57 10.57 0 0 1 3.116 7.527c0 5.866-4.776 10.64-10.638 10.64zm5.834-7.967c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.78-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.737-.987-2.38-.26-.623-.523-.538-.72-.548l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.67 0 1.575 1.147 3.097 1.307 3.31.16.213 2.253 3.44 5.46 4.826.763.33 1.36.527 1.824.674.766.244 1.464.21 2.016.127.615-.092 1.892-.773 2.16-1.52.266-.747.266-1.387.186-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 md:inline-block md:group-hover:max-w-[140px] md:group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
