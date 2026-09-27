"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            Work History
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Track record of building enterprise web applications, WordPress solutions, and client projects.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Badge Node (Desktop) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-md">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                    
                    <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:border-emerald-500/50 transition-all text-left">
                      
                      {/* Top Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center space-x-1 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                          <span>{exp.period}</span>
                        </span>
                        
                        {exp.isCurrent && (
                          <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mr-1" />
                            <span>Present Role</span>
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                        <span>{exp.company}</span>
                        <span>&bull;</span>
                        <span className="flex items-center text-slate-500 dark:text-slate-400 font-normal text-xs">
                          <MapPin className="w-3 h-3 mr-0.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities List */}
                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Badges */}
                      <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
