"use client";

import { WORK_PROCESS } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            Development Workflow
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Bring Projects To Life
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A structured, 6-step engineering approach ensuring quality, security, performance, and seamless launch.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORK_PROCESS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                    {stepItem.step}
                  </span>
                  {idx < WORK_PROCESS.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-700 hidden lg:block group-hover:text-emerald-500 transition-colors" />
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {stepItem.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Progress Line */}
              <div className="mt-6 w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ width: `${((idx + 1) / WORK_PROCESS.length) * 100}%` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
