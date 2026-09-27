"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO, HIGHLIGHT_STATS } from "@/data/portfolioData";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const offsetTop = elem.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Mesh Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Availability & Location Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 w-fit text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.location} &bull; Available for Opportunities</span>
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m <span className="text-emerald-600 dark:text-emerald-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="mt-2 text-base sm:text-xl font-medium text-slate-600 dark:text-slate-300">
                {PERSONAL_INFO.subTitle}
              </p>
            </div>

            {/* Big Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 leading-snug">
              &ldquo;{PERSONAL_INFO.headline}&rdquo;
            </h2>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Full-stack developer with <strong>3 years of experience</strong> building enterprise dashboards, booking portals, client sites, and Next.js applications with REST APIs, clean UI, and production readiness.
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg flex items-center space-x-2 text-sm sm:text-base focus:outline-none"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700 text-sm sm:text-base focus:outline-none"
              >
                <span>Contact Me</span>
              </a>

              <div className="flex items-center space-x-2 pl-2 border-l border-slate-200 dark:border-slate-800">
                <a
                  href={PERSONAL_INFO.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 dark:border-slate-800/80">
              {HIGHLIGHT_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-emerald-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-70" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
                
                {/* Image Aspect Box */}
                <div className="relative aspect-[4/4.5] w-full">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt="Yash Verma - Web Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Overlay Badge */}
                <div className="p-4 bg-slate-900/90 dark:bg-slate-950/95 backdrop-blur-md text-white border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Associate Consultant Dev</h3>
                      <p className="text-xs text-slate-400">Oodles Technologies &bull; Gurugram</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
