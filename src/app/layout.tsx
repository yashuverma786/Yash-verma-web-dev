import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
  metadataBase: new URL("https://yashverma.dev"),
  title: "Yash Verma | Web Developer | WordPress, React & Laravel",
  description:
    "Yash Verma is a Web Developer specializing in WordPress, PHP/Laravel, React, Next.js and full-stack web development with 3 years of production experience.",
  keywords: [
    "Yash Verma",
    "Web Developer",
    "WordPress Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "PHP Developer",
    "Full-Stack Developer",
    "Delhi Web Developer",
    "visaa.in",
    "jmttravel.in",
  ],
  authors: [{ name: "Yash Verma", url: "https://github.com/yashverma" }],
  creator: "Yash Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashverma.dev",
    title: "Yash Verma | Web Developer | WordPress, React & Laravel",
    description:
      "Web Developer with 3 years of experience building business websites, enterprise dashboards, and Next.js applications.",
    siteName: "Yash Verma Portfolio",
    images: [
      {
        url: "/assets/yash-verma.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Verma - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Verma | Web Developer",
    description:
      "Web Developer specializing in WordPress, PHP/Laravel, React, Next.js and Node.js.",
    images: ["/assets/yash-verma.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
