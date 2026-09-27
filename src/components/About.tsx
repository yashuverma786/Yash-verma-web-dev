"use client";

import Image from "next/image";
import { GraduationCap, Award, CheckCircle, Code, Server, Globe, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const CORE_PILLARS = [
  {
    icon: Globe,
    title: "WordPress & CMS Expert",
    desc: "Custom theme & plugin development, Elementor customization, speed optimization, and production maintenance."
  },
  {
    icon: Code,
    title: "React & Next.js Modern Frontend",
    desc: "Building high-performance SSR/SSG web platforms with TypeScript, Tailwind CSS, clean architecture, and responsive UI."
  },
  {
    icon: Server,
    title: "PHP & Laravel Full-Stack",
    desc: "RESTful API creation, MySQL database architecture, backend business logic, authentication, and payment integrations."
  },
  {
    icon: Cpu,
    title: "Deployment & Technical SEO",
    desc: "Linux server hosting, SSL/DNS setup, Core Web Vitals optimization, cross-layer debugging, and technical SEO."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            About Yash Verma
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            3 Years of Engineering Fast & Reliable Web Solutions
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Secondary Photo & Education Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={PERSONAL_INFO.avatarSecondary}
                  alt="Yash Verma working"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Yash Verma</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Web & Software Developer</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Delhi, India
                </div>
              </div>
            </div>

            {/* Education Badge */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Education & Studies</h4>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                  Bachelor of Computer Administration (BCA)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  IGNOU &bull; Pursuing
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Content & Core Strengths */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I am a passionate <strong>Web Developer with 3 years of hands-on experience</strong> designing, building, and maintaining business websites and web applications across <strong>WordPress, PHP/Laravel, React.js, and Next.js</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                My work spans enterprise analytics dashboards at <strong>Oodles Technologies</strong>, full-stack travel platforms at <strong>JMT Travel</strong> (journeymytrip.com and jmttravel.in), client websites, and a Next.js visa/immigration platform (visaa.in).
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {CORE_PILLARS.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Key Capabilities Checklist */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                Key Production Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>REST API Development & Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>MySQL & MongoDB Database Handling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Technical SEO & Core Web Vitals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>SSL, DNS & Linux Hosting Support</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
