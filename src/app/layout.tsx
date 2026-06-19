import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    default: "Genikode | Elite Digital Agency",
    template: "%s | Genikode"
  },
  description: "Genikode is a premium digital agency specializing in high-performance web development, mobile apps, UI/UX, and brand building. We engineer digital futures.",
  keywords: ["digital agency", "web development", "mobile apps", "UI/UX design", "seo", "branding", "web design"],
  authors: [{ name: "Genikode" }],
  creator: "Genikode",
  metadataBase: new URL('https://genikode.com'), // replace with actual prod domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genikode.com",
    title: "Genikode | Elite Digital Agency",
    description: "Genikode is a premium digital agency specializing in high-performance web development, mobile apps, UI/UX, and brand building.",
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
    title: "Genikode | Elite Digital Agency",
    description: "Genikode is a premium digital agency specializing in high-performance web development, mobile apps, UI/UX, and brand building.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
            <Navigation />
            {children}
            <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
