import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import type { Metadata } from "next";
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
    default: "Genikode | Software House, Web & App Development, Karachi",
    template: "%s | Genikode"
  },
  description: "Genikode is a software house and web & mobile app development company in Karachi, Pakistan. We build custom software, high-performance websites, and iOS/Android apps for startups and businesses worldwide.",
  keywords: ["software house", "software development company", "web development company", "mobile app development", "app development company Karachi", "website development", "React Native development", "Next.js development", "software house Karachi", "UI/UX design"],
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
    title: "Genikode | Software House & App Development Company, Karachi",
    description: "A Karachi software house building custom software, websites, and mobile apps for startups and businesses worldwide.",
    siteName: "Genikode",
    images: [{
      url: "/og-image.jpg", // Create this image later or assume it exists in public/
      width: 1200,
      height: 630,
      alt: "Genikode Official Banner"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Genikode | Software House & App Development Company, Karachi",
    description: "A Karachi software house building custom software, websites, and mobile apps for startups and businesses worldwide.",
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K75J0E2FJY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-K75J0E2FJY');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased bg-black text-white`}
      >
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
