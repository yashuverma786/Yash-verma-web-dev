import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Chatbot from "@/components/Chatbot";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yash-verma-portfolio-drab.vercel.app/"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name} — ${siteConfig.author.role}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.gitHub }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "https://yash-verma-portfolio-drab.vercel.app/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/assets/yash-verma.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Web Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/yash-verma.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://yash-verma-portfolio-drab.vercel.app/#person",
  name: siteConfig.author.name,
  jobTitle: siteConfig.author.role,
  url: "https://yash-verma-portfolio-drab.vercel.app/",
  image: "https://yash-verma-portfolio-drab.vercel.app/assets/yash-verma.jpg",
  sameAs: [siteConfig.author.gitHub, siteConfig.author.linkedIn],
  email: siteConfig.author.email,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.author.company,
    location: {
      "@type": "Place",
      name: siteConfig.author.companyLocation,
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi NCR",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Web Development",
    "WordPress",
    "WordPress Theme Development",
    "WordPress Plugin Development",
    "Next.js",
    "React.js",
    "PHP",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
    "Technical SEO",
    "Core Web Vitals",
    "MySQL",
    "MongoDB",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://yash-verma-portfolio-drab.vercel.app/#website",
  url: "https://yash-verma-portfolio-drab.vercel.app/",
  name: `${siteConfig.name} — Web Developer Portfolio`,
  description: siteConfig.description,
  publisher: {
    "@id": "https://yash-verma-portfolio-drab.vercel.app/#person",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData data={[personSchema, websiteSchema]} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white`}
      >
        <ThemeProvider>
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
