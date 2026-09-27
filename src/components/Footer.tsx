"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-base">
                Y
              </span>
              <span className="font-bold text-xl text-white tracking-tight">
                Yash Verma
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Web Developer specializing in WordPress, PHP/Laravel, React.js, Next.js, and modern full-stack development. Building fast, conversion-driven web apps.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PERSONAL_INFO.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills & Stack</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">What I Do</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Core Projects */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Live Platforms
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://visaa.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Visa Immigration Platform</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400">visaa.in</span>
                </a>
              </li>
              <li>
                <a href="https://jmttravel.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Travel & Tour Platform</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400">jmttravel.in</span>
                </a>
              </li>
              <li>
                <a href="https://journeymytrip.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Journey My Trip</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">journeymytrip.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Yash Verma. All rights reserved. Delhi, India.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors focus:outline-none"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
