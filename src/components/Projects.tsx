"use client";

import Image from "next/image";
import { ExternalLink, CheckCircle, Sparkles, Globe, Star } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50/60 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            Featured Case Studies
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Web Platforms
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world applications built with modern web stacks, focusing on conversion, performance, and scale.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Projects Stack Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const isPrimary = project.isPrimary;

            return (
              <div
                key={project.id}
                className={`group rounded-3xl bg-white dark:bg-slate-950 overflow-hidden transition-all duration-300 ${
                  isPrimary
                    ? "border-2 border-emerald-500/70 dark:border-emerald-500/50 shadow-2xl ring-4 ring-emerald-500/10"
                    : "border border-slate-200 dark:border-slate-800/90 shadow-xl hover:border-emerald-500/50"
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Left Column (or Right when reversed): Preview Visual Mockup */}
                  <div
                    className={`lg:col-span-6 relative p-4 sm:p-6 lg:p-8 bg-slate-900 flex items-center justify-center border-b lg:border-b-0 ${
                      isReversed
                        ? "lg:order-2 lg:border-l lg:border-slate-800"
                        : "lg:border-r lg:border-slate-800"
                    }`}
                  >
                    {/* Browser Shell Frame */}
                    <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 group-hover:scale-[1.01] transition-transform duration-500">
                      
                      {/* Browser Window Bar */}
                      <div className="flex items-center space-x-2 px-4 py-2.5 bg-slate-800/90 border-b border-slate-700/80 text-xs text-slate-400">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <div className="flex-1 text-center font-mono text-[11px] text-slate-300 bg-slate-900/80 py-0.5 px-3 rounded-md truncate">
                          🔒 {project.website}
                        </div>
                      </div>

                      {/* Actual Project Image */}
                      <div className="relative aspect-[16/9] w-full bg-slate-900">
                        <Image
                          src={project.image}
                          alt={`${project.title} Screenshot - Yash Verma Portfolio`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          priority={isPrimary}
                          loading={isPrimary ? "eager" : "lazy"}
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Information & Details */}
                  <div className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${isReversed ? "lg:order-1" : ""}`}>
                    
                    <div>
                      {/* Badge & Category */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {isPrimary ? (
                          <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-sm flex items-center gap-1.5">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>PRIMARY FEATURED PROJECT</span>
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80">
                            {project.badge}
                          </span>
                        )}

                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Key Deliverables
                      </h4>
                      <div className="space-y-1.5">
                        {project.highlights.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Website Button */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-white transition-all text-sm shadow-md focus:outline-none ${
                          isPrimary
                            ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
                            : "bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700"
                        }`}
                      >
                        <Globe className="w-4 h-4" />
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>

                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {project.website.replace("https://", "")}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
