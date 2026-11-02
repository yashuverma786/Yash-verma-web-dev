"use client";

import Link from "next/link";
import { Globe, Layers, Code2, Server, Cpu, Zap, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Layers":
        return Layers;
      case "Code2":
        return Code2;
      case "Server":
        return Server;
      case "Cpu":
        return Cpu;
      default:
        return Zap;
    }
  };

  const getServiceLink = (id: string) => {
    switch (id) {
      case "wordpress":
      case "seo-performance":
        return {
          href: "/services/wordpress-development",
          text: "Explore WordPress Services",
        };
      case "react-next":
      case "api":
        return {
          href: "/services/react-nextjs-development",
          text: "Explore React & Next.js Services",
        };
      case "fullstack":
      case "laravel":
      default:
        return {
          href: "/services/business-website-development",
          text: "Explore Business Website Dev",
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/60 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            Services &amp; Expertise
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Web Development Services
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Professional web development services focused on performance, clean code, scalable architecture, and conversion for businesses and agencies.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* 6 Services Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const IconComponent = getIcon(srv.iconName);
            const linkInfo = getServiceLink(srv.id);

            return (
              <div
                key={srv.id}
                className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Tech Pills and Landing Page Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={linkInfo.href}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors pt-1"
                  >
                    <span>{linkInfo.text}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
