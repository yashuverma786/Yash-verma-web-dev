import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Shield,
  Sparkles,
  Server,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Next.js & React Developer | High-Performance Web Applications",
  description:
    "Hire Yash Verma, an experienced Next.js and React.js Developer with 3 years of production experience building SSR/SSG web platforms, enterprise dashboards, and scalable full-stack applications in Delhi NCR and Gurgaon.",
  keywords: [
    "Next.js Developer",
    "React.js Developer",
    "Next.js Developer India",
    "Next.js Developer Delhi NCR",
    "Next.js Developer Gurgaon",
    "Hire Next.js Developer",
    "Full-Stack React Developer",
    "TypeScript Next.js Engineer",
    "React Web Developer",
  ],
  alternates: {
    canonical: "/services/react-nextjs-development",
  },
  openGraph: {
    title: "React & Next.js Development Services | Yash Verma",
    description:
      "Enterprise dashboards, dynamic lead portals, and modern web applications built with Next.js, React, TypeScript, and MongoDB by Yash Verma.",
    url: `${siteConfig.url}/services/react-nextjs-development`,
    type: "website",
    images: [
      {
        url: "/assets/yash-verma.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Verma — React and Next.js Developer",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteConfig.url}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteConfig.url}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "React & Next.js Development",
      item: `${siteConfig.url}/services/react-nextjs-development`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "React & Next.js Web Development Services",
  serviceType: "Next.js & React Development",
  description:
    "High-performance single-page and full-stack web applications with Next.js App Router, SSR/SSG, TypeScript, Tailwind CSS, and REST APIs by Yash Verma.",
  provider: {
    "@type": "Person",
    name: "Yash Verma",
    url: `${siteConfig.url}/`,
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "Country", name: "India" },
  ],
  url: `${siteConfig.url}/services/react-nextjs-development`,
};

const faqs = [
  {
    q: "Why choose Next.js over traditional React single-page apps (SPAs)?",
    a: "Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG), which solve the search indexing and performance challenges of client-only React apps. This ensures immediate search engine visibility, fast initial page loads, and excellent Core Web Vitals.",
  },
  {
    q: "What version of Next.js do you work with?",
    a: "I work with Next.js 14 App Router, utilizing Server Components, Server Actions, Route Handlers, TypeScript, and modern CSS frameworks like Tailwind CSS.",
  },
  {
    q: "Do you build full-stack features with databases and APIs?",
    a: "Yes. I have hands-on production experience connecting Next.js applications to databases (MongoDB, MySQL) and designing secure RESTful API endpoints for authentication, lead storage, analytics, and third-party services.",
  },
  {
    q: "Are you available for contract or full-time Next.js development roles?",
    a: "Yes. I am available for freelance project contracts, business website builds, and developer roles in Delhi NCR, Gurugram, or remote globally.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function ReactNextjsDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100">
      <StructuredData data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <Navbar />

      <main className="flex-grow pt-28 pb-20 md:pt-36">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-emerald-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">React &amp; Next.js</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 uppercase mb-4">
              <Code2 className="w-3.5 h-3.5 mr-1" />
              <span>Next.js &bull; React &bull; TypeScript &bull; Full-Stack</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              High-Performance React &amp; Next.js Development
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Modern frontend and full-stack web applications built with Next.js App Router, Server-Side Rendering (SSR), TypeScript, Tailwind CSS, and REST API architecture by <strong>Yash Verma</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md text-sm sm:text-base"
              >
                Hire Yash for Next.js
              </Link>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Next.js%20Development%20Inquiry`}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700 text-sm sm:text-base"
              >
                Email Yash Directly
              </a>
            </div>
          </div>
        </div>

        {/* Services Details */}
        <section className="mt-20 py-16 bg-white dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Capabilities
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                What I Build with React &amp; Next.js
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Next.js App Router (SSR &amp; SSG)</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fast page rendering, optimized static generation, dynamic routing, and search engine crawlability with modern Next.js architecture.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Enterprise Analytics Dashboards</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-world experience at Oodles Technologies building sales pipeline analytics, marketing activity charts, and data drill-down modules.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">TypeScript &amp; Tailwind Architecture</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Type-safe, maintainable frontend systems with reusable components, responsive utility styling, and zero stylesheet conflicts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">REST API &amp; Database Connections</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Connecting Next.js Route Handlers to MongoDB, MySQL, and external services for lead capture, authentication, and content storage.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Web Vitals Optimization</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Next/Image optimization, font preloading, layout stability (CLS), and low server response times for maximum Lighthouse scores.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Production Vercel Deployments</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Continuous deployment configuration, environment secret handling, custom domain routing, SSL enforcement, and edge caching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Featured Project: visaa.in */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Featured Next.js Project
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Visaa.in &bull; Visa &amp; Immigration Web Platform
            </h2>

            <div className="mt-8 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Live Production App</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500">Next.js &bull; MongoDB &bull; TypeScript</span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Built from the ground up by Yash Verma. Features dynamic country-wise immigration guides, automated lead capture workflows with MongoDB validation, responsive mobile UI, and technical SEO architecture.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Fast SSR/SSG rendering with Next.js App Router</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Automated lead management and API pipeline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Responsive mobile-first interface designed for high conversion</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://visaa.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-sm shadow-sm"
                  >
                    <span>Visit visaa.in Live</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900">
                <Image
                  src="/assets/visaa-screenshot.png"
                  alt="Visaa.in Platform developed by Yash Verma"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
              Next.js &amp; Modern Frontend Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Next.js 14",
                "React 18",
                "TypeScript",
                "Tailwind CSS",
                "JavaScript (ES6+)",
                "Node.js",
                "Express.js",
                "MongoDB",
                "RESTful APIs",
                "Framer Motion",
                "Git & GitHub",
                "Vercel",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Common Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Let&apos;s Build Your Next.js Application
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Discuss your feature specifications, dashboard requirements, or Next.js migration with Yash Verma.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md text-sm sm:text-base"
              >
                Hire Next.js Developer
              </Link>
              <Link
                href="/services/business-website-development"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 text-sm sm:text-base"
              >
                View Business Website Dev &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
