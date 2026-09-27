"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate reliable form submission processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/60 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            Let&apos;s Connect
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Whether you need a custom WordPress site, a Next.js web application, or full-stack Laravel development, I&apos;m ready to collaborate.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-4 border-b border-slate-100 dark:border-slate-800">
                Direct Contact Details
              </h3>

              {/* Email Box */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg text-slate-500 hover:text-emerald-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Phone</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                      className="block text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg text-slate-500 hover:text-emerald-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="flex items-center space-x-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold text-xs transition-colors border border-slate-200/80 dark:border-slate-800/80"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold text-xs transition-colors border border-slate-200/80 dark:border-slate-800/80"
                >
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the form below and I will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Thank you for reaching out, {formData.name || "friend"}. I have received your message and will reply shortly to <span className="font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Web Project Inquiry / Role Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, or requirements..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-md flex items-center justify-center space-x-2 text-sm sm:text-base disabled:opacity-50 focus:outline-none"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
