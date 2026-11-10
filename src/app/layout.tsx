import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Genikode | Software Development Company for Global Clients",
    template: "%s | Genikode"
  },
  // Keep ≤ ~130 chars so it isn't truncated in search results.
  description: "Genikode builds custom software, fast websites and iOS & Android apps for startups and businesses worldwide. Free consultation, USD quotes.",
  keywords: ["software house", "software development company", "web development company", "mobile app development", "offshore software development", "custom software development", "website development", "React Native development", "Next.js development", "hire developers", "UI/UX design"],
  authors: [{ name: "Genikode" }],
  creator: "Genikode",
  metadataBase: new URL('https://genikode.com'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genikode.com",
    title: "Genikode | Software Development Company for Global Clients",
    description: "Custom software, websites and mobile apps for startups and businesses worldwide.",
    siteName: "Genikode",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Genikode Official Banner"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Genikode | Software Development Company for Global Clients",
    description: "Custom software, websites and mobile apps for startups and businesses worldwide.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "XOUsY1O9fbyf5D8kxozTzEabTE8Fexu3CA48zhKCpfQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased bg-black text-white`}
      >
        {/* Google tag (gtag.js) — loaded after hydration so it doesn't compete
            with the page becoming interactive (helps INP / performance). */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K75J0E2FJY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K75J0E2FJY');
          `}
        </Script>
        <SmoothScroll>
            <Navigation />
            {children}
            <Footer />
        </SmoothScroll>
        <Chatbot />
      </body>
    </html>
  );
}
