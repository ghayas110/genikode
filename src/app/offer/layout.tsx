import type { Metadata } from "next";

// /offer is a client component, so its metadata lives here. Without this it
// inherited the homepage title and description (duplicate titles).
export const metadata: Metadata = {
  title: {
    absolute: "Professional Business Website for $400 | Genikode",
    // A plain-string title here would stop the root "%s | Genikode" template
    // reaching child pages such as /offer/first-project.
    template: "%s | Genikode",
  },
  description:
    "Get a professional, mobile-responsive business website of up to 5–7 pages for $400, with design, development and a dedicated project manager.",
  alternates: { canonical: "https://genikode.com/offer" },
};

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return children;
}
