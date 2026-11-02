import Link from "next/link";
import { ArrowLeft, Home, Globe, Code2, Briefcase, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist. Browse Yash Verma's web development services or return to the homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-2xl mx-auto text-center">
          {/* Status badge */}
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 uppercase">
            Error 404 &bull; Page Not Found
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Looking for web development solutions?
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Explore Yash Verma&apos;s portfolio or services below:
          </p>

          {/* Quick Service Links */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/services/wordpress-development"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all shadow-sm group"
            >
              <Globe className="w-5 h-5 text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">WordPress Dev</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Custom themes, plugins & speed tuning</p>
            </Link>

            <Link
              href="/services/react-nextjs-development"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all shadow-sm group"
            >
              <Code2 className="w-5 h-5 text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">React &amp; Next.js</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">High-performance modern web apps</p>
            </Link>

            <Link
              href="/services/business-website-development"
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all shadow-sm group"
            >
              <Briefcase className="w-5 h-5 text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Business Sites</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Conversion-focused platforms & portals</p>
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md text-sm"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
