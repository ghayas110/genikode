"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

// Scripted (rule-based) chatbot. No backend — it's a guided decision tree that
// funnels visitors toward either WhatsApp or booking a consultation.

const WHATSAPP_URL = "https://wa.me/923002661456";
const BOOKING_URL = "https://calendar.app.google/HpyRLVVFM573gGKHA";

type NodeKey =
  | "start"
  | "services"
  | "about"
  | "pricing"
  | "contact"
  | "afterLink"
  | "end";

type Option = {
  label: string;
  next?: NodeKey;
  href?: string;
  event?: string;
  variant?: "whatsapp" | "primary" | "default";
};

type BotMessage = { text?: string; list?: string[] };
type ChatNode = { messages: BotMessage[]; options: Option[] };

const SERVICES = [
  "Web Design & Development",
  "Mobile App Development (iOS & Android)",
  "UI/UX Design",
  "Logo & Brand Identity",
  "SEO & Content",
  "Social Media Management",
  "Video & Motion Animation",
  "Graphic Design",
];

const nodes: Record<NodeKey, ChatNode> = {
  start: {
    messages: [
      { text: "👋 Hi! I'm Genikode's assistant. What would you like to know?" },
    ],
    options: [
      { label: "What services do you offer?", next: "services" },
      { label: "Why work with Genikode?", next: "about" },
      { label: "How much does it cost?", next: "pricing" },
      { label: "I want to get in touch", next: "contact", variant: "primary" },
    ],
  },
  services: {
    messages: [
      { text: "We design, build & scale digital products end to end:" },
      { list: SERVICES },
      { text: "Want a quote or to talk it through with us?" },
    ],
    options: [
      { label: "Get in touch", next: "contact", variant: "primary" },
      { label: "How much does it cost?", next: "pricing" },
      { label: "Back to start", next: "start" },
    ],
  },
  about: {
    messages: [
      {
        text: "Genikode is a digital agency building high-performance websites and mobile apps with Next.js, React Native, and Node.js. We partner with startups, founders, and growing businesses worldwide — focused on speed, scalability, and measurable results.",
      },
    ],
    options: [
      { label: "What services do you offer?", next: "services" },
      { label: "Get in touch", next: "contact", variant: "primary" },
    ],
  },
  pricing: {
    messages: [
      {
        text: "It depends on scope, but mobile apps start from $2,000 (≈ PKR 560,000). We share a fixed quote after a short discovery call — no surprises.",
      },
    ],
    options: [
      { label: "Get a quote", next: "contact", variant: "primary" },
      { label: "What services do you offer?", next: "services" },
    ],
  },
  contact: {
    messages: [{ text: "Great! How would you like to connect?" }],
    options: [
      {
        label: "Chat on WhatsApp",
        href: WHATSAPP_URL,
        event: "whatsapp_click",
        variant: "whatsapp",
      },
      {
        label: "Book a consultation",
        href: BOOKING_URL,
        event: "book_consultation_click",
        variant: "primary",
      },
      { label: "Back to start", next: "start" },
    ],
  },
  afterLink: {
    messages: [
      { text: "👍 Opening that for you. Anything else I can help with?" },
    ],
    options: [
      { label: "What services do you offer?", next: "services" },
      { label: "Get in touch", next: "contact" },
      { label: "No, thanks", next: "end" },
    ],
  },
  end: {
    messages: [
      { text: "Thanks for stopping by — we're here whenever you need us. 🚀" },
    ],
    options: [{ label: "Start over", next: "start" }],
  },
};

type Message = { from: "bot" | "user"; text?: string; list?: string[] };

function fireEvent(name: string) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", name, { event_category: "chatbot" });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const pushNode = (key: NodeKey) => {
    const node = nodes[key];
    setMessages((prev) => [
      ...prev,
      ...node.messages.map((m) => ({ from: "bot" as const, ...m })),
    ]);
    setOptions(node.options);
  };

  const openChat = () => {
    setOpen(true);
    if (messages.length === 0) {
      fireEvent("chatbot_open");
      pushNode("start");
    }
  };

  const handleOption = (opt: Option) => {
    setMessages((prev) => [...prev, { from: "user", text: opt.label }]);
    setOptions([]);
    if (opt.event) fireEvent(opt.event);
    if (opt.href) {
      window.open(opt.href, "_blank", "noopener,noreferrer");
      setTimeout(() => pushNode("afterLink"), 250);
      return;
    }
    if (opt.next) setTimeout(() => pushNode(opt.next!), 250);
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? "Close chat" : "Open chat with Genikode"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-black" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Genikode"
          className="fixed bottom-24 right-6 z-[60] flex w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-2xl shadow-black/50"
          style={{ maxHeight: "min(70vh, 560px)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-zinc-800 bg-black px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black font-bold text-sm">
              G
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Genikode Assistant</p>
              <p className="text-xs text-emerald-400">● Online — replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) =>
              m.from === "bot" ? (
                <div key={i} className="max-w-[85%]">
                  {m.text && (
                    <p className="rounded-2xl rounded-tl-sm bg-zinc-800 px-4 py-2.5 text-sm leading-relaxed text-zinc-100">
                      {m.text}
                    </p>
                  )}
                  {m.list && (
                    <ul className="mt-1 space-y-1.5 rounded-2xl rounded-tl-sm bg-zinc-800 px-4 py-3 text-sm text-zinc-100">
                      {m.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-4 py-2.5 text-sm font-medium text-black">
                    {m.text}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Quick-reply options */}
          {options.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-zinc-800 bg-black/40 px-4 py-3">
              {options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleOption(opt)}
                  className={
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors " +
                    (opt.variant === "whatsapp"
                      ? "bg-[#25D366] text-white hover:bg-[#1ebe5b]"
                      : opt.variant === "primary"
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "border border-zinc-700 text-zinc-200 hover:border-white hover:text-white")
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
