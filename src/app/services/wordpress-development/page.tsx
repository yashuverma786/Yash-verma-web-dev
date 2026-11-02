import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  CheckCircle,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Code2,
  Briefcase,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "WordPress Developer | Custom Themes, Plugins & Optimization",
  description:
    "Hire Yash Verma, an experienced WordPress Developer with 3 years of production experience in Delhi NCR and Gurgaon. Custom theme development, plugin customization, speed optimization, Elementor, and technical SEO.",
  keywords: [
    "WordPress Developer",
    "WordPress Developer India",
    "WordPress Developer Delhi NCR",
    "WordPress Developer Gurgaon",
    "Custom WordPress Development",
    "Hire WordPress Developer",
    "Elementor Developer Delhi",
    "WordPress Speed Optimization",
    "Freelance WordPress Developer",
  ],
  alternates: {
    canonical: "/services/wordpress-development",
  },
  openGraph: {
    title: "WordPress Development Services | Yash Verma — Web Developer",
    description:
      "Expert WordPress development by Yash Verma. Custom themes, plugins, Core Web Vitals optimization, and robust maintenance for businesses.",
    url: `${siteConfig.url}/services/wordpress-development`,
    type: "website",
    images: [
      {
        url: "/assets/yash-verma.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Verma — WordPress Developer",
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
      name: "WordPress Development",
      item: `${siteConfig.url}/services/wordpress-development`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Development Services",
  serviceType: "WordPress Development",
  description:
    "Custom WordPress theme and plugin development, Elementor customization, speed tuning, and ongoing client website maintenance by Yash Verma.",
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
  url: `${siteConfig.url}/services/wordpress-development`,
};

const faqs = [
  {
    q: "Do you build custom WordPress themes or customize existing ones?",
    a: "I work with both approaches based on business needs. I can develop custom themes from scratch using clean PHP, HTML5, and CSS, or tailor modern builder themes like Elementor to achieve pixel-perfect responsiveness and fast load times.",
  },
  {
    q: "Can you fix slow WordPress site performance and Core Web Vitals?",
    a: "Yes. I optimize database queries, minimize script and stylesheet bloat, configure caching, optimize images, and address Layout Shifts (CLS) and Largest Contentful Paint (LCP) issues to achieve high Lighthouse scores.",
  },
  {
    q: "Are you available for WordPress projects in Delhi NCR or Gurgaon?",
    a: "Yes. I am based in Delhi and currently working in Gurugram (Gurgaon). I work with local businesses across Delhi NCR as well as remote clients across India and internationally.",
  },
  {
    q: "How do you handle WordPress security and ongoing maintenance?",
    a: "I implement security best practices including SSL/TLS setup, secure file permissions, regular core/plugin updates, database backups, and clean code hygiene to protect against vulnerabilities.",
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

export default function WordPressDevelopmentPage() {
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
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">WordPress Development</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 uppercase mb-4">
              <Globe className="w-3.5 h-3.5 mr-1" />
              <span>WordPress Engineering &bull; Delhi NCR &bull; Remote</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Professional WordPress Development &amp; Custom Solutions
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Custom themes, plugin modifications, Elementor builds, speed optimization, and technical SEO developed by <strong>Yash Verma</strong> with 3+ years of production experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md text-sm sm:text-base"
              >
                Start a WordPress Project
              </Link>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=WordPress%20Development%20Inquiry`}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700 text-sm sm:text-base"
              >
                Email Yash Directly
              </a>
            </div>
          </div>
        </div>

        {/* What I Deliver */}
        <section className="mt-20 py-16 bg-white dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Services Offered
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Comprehensive WordPress Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Custom Theme Development</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Clean, lightweight PHP/CSS themes tailored precisely to your brand aesthetics without unnecessary framework bloat.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Elementor &amp; Builder Builds</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fast, visually compelling landing pages and multi-page websites built with Elementor Pro or Gutenberg with intuitive client editing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Speed &amp; Core Web Vitals</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Comprehensive performance auditing, asset minification, database cleanup, image optimization, and CDN integration for sub-second loads.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Plugin Customization &amp; APIs</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Extending WordPress plugins, integrating custom REST API endpoints, booking workflows, and third-party payment gateways.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security &amp; Maintenance</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Regular core, plugin, and theme updates, scheduled database backups, security hardening, malware protection, and uptime checks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Technical On-Page SEO</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Setting up XML sitemaps, robots.txt, schema markup, Open Graph tags, canonical links, and search console verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Production Proof */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Real Project Proof
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                WordPress Experience in Production
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Over 3 years of production work including client travel platforms at JMT Travel (<span className="font-mono text-emerald-600 dark:text-emerald-400">journeymytrip.com</span> and <span className="font-mono text-emerald-600 dark:text-emerald-400">jmttravel.in</span>), custom landing pages, and enterprise client support at Oodles Technologies.
              </p>

              <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  JMT Travel &bull; Travel Tour Portals
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Developed and maintained travel websites using WordPress, PHP, and MySQL. Handled tour package listings, inquiry capture, responsive UI updates, technical SEO, and production hosting maintenance.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 font-mono">WordPress</span>
                  <span className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 font-mono">PHP</span>
                  <span className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 font-mono">MySQL</span>
                  <span className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 font-mono">Technical SEO</span>
                  <span className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 font-mono">Hosting / DNS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
              Core WordPress Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "WordPress",
                "PHP 8+",
                "MySQL",
                "Elementor Pro",
                "WooCommerce",
                "REST API",
                "JavaScript (ES6+)",
                "HTML5 / CSS3",
                "Apache / Nginx",
                "Linux / cPanel",
                "Yoast / RankMath",
                "Cloudflare CDN",
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

        {/* Bottom CTA & Interlinks */}
        <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Ready to Build or Optimize Your WordPress Site?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Get in touch with Yash Verma today to discuss your project requirements, timeline, and goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md text-sm sm:text-base"
              >
                Send a Message
              </Link>
              <Link
                href="/services/react-nextjs-development"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 text-sm sm:text-base"
              >
                View React &amp; Next.js Services &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
