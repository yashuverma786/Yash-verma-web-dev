"use client";

import { useState } from "react";
import { Check, Code2, Database, Layout, Server, Wrench, ShieldCheck } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryNames = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return Layout;
      case "Backend":
        return Server;
      case "CMS & Web":
        return Code2;
      case "Databases":
        return Database;
      case "Tools & DevOps":
        return Wrench;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            Technical Matrix
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Core Capabilities
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Battle-tested technologies and frameworks used across production client & enterprise web applications.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none ${
                selectedCategory === cat
                  ? "bg-slate-900 dark:bg-emerald-500 text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grouped Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((group) => {
            const IconComp = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between group hover:border-emerald-500/40 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                            skill.level === "Expert"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                              : skill.level === "Advanced"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
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
