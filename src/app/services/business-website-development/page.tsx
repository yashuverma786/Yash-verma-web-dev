import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Layers,
  CheckCircle,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
  Code2,
  Globe,
  Sparkles,
  Server,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Business Website Developer | Hire Custom Web Developer India",
  description:
    "Hire Yash Verma, an experienced Web Developer building conversion-driven business websites, client portals, and web platforms in Delhi NCR, Gurgaon, and worldwide. 3+ years of full-stack production expertise.",
  keywords: [
    "Website Developer for Business",
    "Hire Web Developer",
    "Business Website Development India",
    "Web Developer Delhi NCR",
    "Web Developer Gurgaon",
    "Custom Web Development",
    "Freelance Web Developer India",
    "Lead Generation Website Developer",
    "Full-Stack Web Developer",
  ],
  alternates: {
    canonical: "/services/business-website-development",
  },
  openGraph: {
    title: "Custom Business Website Development | Yash Verma — Web Developer",
    description:
      "Conversion-focused business websites, booking platforms, and full-stack web applications by Yash Verma.",
    url: `${siteConfig.url}/services/business-website-development`,
    type: "website",
    images: [
      {
        url: "/assets/yash-verma.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Verma — Business Website Developer",
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
      name: "Business Website Development",
      item: `${siteConfig.url}/services/business-website-development`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Business Website Development Services",
  serviceType: "Business Web Development",
  description:
    "Conversion-focused business websites, booking portals, and full-stack web applications built with Next.js, WordPress, and PHP/Laravel by Yash Verma.",
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
  url: `${siteConfig.url}/services/business-website-development`,
};

const faqs = [
  {
    q: "What type of business websites do you build?",
    a: "I build corporate business websites, service agency portals, tour and booking engines, dynamic lead capture platforms, and custom web applications. Each site is tailored to the client's business goals, target audience, and speed requirements.",
  },
  {
    q: "How do you choose between WordPress, Next.js, or Laravel for a project?",
    a: "It depends on your business goals: WordPress is ideal for content-heavy sites and marketing teams needing intuitive CMS editing; Next.js is best for high-performance, SEO-critical web applications; and Laravel is optimal for complex database architectures, custom logic, and enterprise workflows.",
  },
  {
    q: "Can you assist with domain configuration, hosting, and SSL setup?",
    a: "Yes. I manage end-to-end deployment including DNS configuration, SSL/TLS certificate installation, Linux server setup, database provisioning, and continuous deployment via Vercel or cloud servers.",
  },
  {
    q: "How long does a typical business website project take?",
    a: "A standard business website typically takes 2 to 4 weeks depending on the number of pages, custom integrations, and content readiness. Full-stack portals or custom API workflows take 4 to 8 weeks.",
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

export default function BusinessWebsiteDevelopmentPage() {
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
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Business Websites</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 uppercase mb-4">
              <Briefcase className="w-3.5 h-3.5 mr-1" />
              <span>Full-Stack &bull; High Conversion &bull; Production Ready</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Custom Business Website Development
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Fast, scalable, and conversion-focused websites engineered to turn visitors into leads and customers. Built by <strong>Yash Verma</strong> using Next.js, WordPress, and PHP/Laravel.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md text-sm sm:text-base"
              >
                Request a Project Proposal
              </Link>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Business%20Website%20Inquiry`}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700 text-sm sm:text-base"
              >
                Direct Email Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Offerings Section */}
        <section className="mt-20 py-16 bg-white dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Built for Growth
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Web Solutions for Businesses &amp; Startups
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Corporate &amp; Agency Sites</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Clean, modern business presence showcasing your services, client proof, team, and credibility across all device screens.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lead Generation &amp; Inquiries</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimized form workflows, spam protection, instant email notifications, and automated database storage to capture every customer inquiry.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Custom Portals &amp; Booking</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Custom database architectures for booking engines, travel packages, and client self-service modules (e.g. JMT Travel platforms).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Technical SEO &amp; Speed</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Structured data schemas, semantic HTML5, sub-second response times, and mobile responsiveness so your business outranks competitors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">API &amp; Payment Integration</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Seamlessly connecting payment gateways (Stripe, Razorpay, PayPal), CRM systems, webhooks, and third-party data services.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hosting, DNS &amp; Maintenance</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Domain configuration, SSL certificates, Linux cloud servers, regular backups, and zero-downtime production deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Production Proof */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Proven Track Record
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Real-World Business Platforms
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Visaa.in Immigration Portal</h3>
                  <span className="text-xs font-mono text-emerald-500 font-bold">Next.js / MongoDB</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Dynamic country-specific content, automated lead collection pipeline, mobile-first design, and high-performance server-side rendering for a visa consultation business.
                </p>
                <div className="pt-2">
                  <a
                    href="https://visaa.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Visit visaa.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">JMT Travel Platforms</h3>
                  <span className="text-xs font-mono text-emerald-500 font-bold">WordPress / PHP / MySQL</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Developed and maintained full-stack tour package websites (<span className="font-mono">jmttravel.in</span> and <span className="font-mono">journeymytrip.com</span>) featuring inquiry capture, responsive UI, speed tuning, and ongoing production support.
                </p>
                <div className="pt-2">
                  <a
                    href="https://jmttravel.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Visit jmttravel.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Methodology
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                How We Collaborate on Your Website
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding business goals, user personas, required features, and conversion metrics." },
                { step: "02", title: "Architecture", desc: "Selecting optimal technology (Next.js, WordPress, or Laravel), database schemas, and wireframes." },
                { step: "03", title: "Development", desc: "Clean, modular frontend and backend engineering following security and performance standards." },
                { step: "04", title: "Testing", desc: "Rigorous cross-browser, mobile responsiveness, forms, and API endpoint verification." },
                { step: "05", title: "Deployment", desc: "Production release on Vercel or Linux servers with SSL certificates and DNS configuration." },
                { step: "06", title: "SEO & Growth", desc: "Search Console setup, XML sitemap submission, structured schema, and post-launch tuning." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                    Step {item.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
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
              Ready to Upgrade Your Business Website?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Contact Yash Verma to build a fast, dependable, and lead-generating web platform for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md text-sm sm:text-base"
              >
                Get In Touch
              </Link>
              <Link
                href="/services/wordpress-development"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 text-sm sm:text-base"
              >
                View WordPress Services &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
