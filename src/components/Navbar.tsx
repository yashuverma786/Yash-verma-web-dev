"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const offsetTop = elem.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-neutral-200/80 dark:border-neutral-800/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center space-x-2 focus:outline-none"
            aria-label="Yash Verma Homepage"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-emerald-600 transition-colors">
              Y
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Yash Verma
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-sm focus:outline-none"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fade-in">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg text-base font-medium text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-colors"
            >
              <span>Contact Yash Verma</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
