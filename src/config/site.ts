/**
 * Centralized Site Configuration for SEO, Metadata, Canonical URLs & Social Profiles.
 *
 * NOTE ON DOMAINS:
 * - Current verified Google Search Console property: https://yash-verma-portfolio-drab.vercel.app/
 * - Former domain reference: https://yashverma.dev/ (currently unverified / not primary)
 *
 * All canonical tags, Open Graph URLs, Twitter cards, sitemaps, robots, and structured data
 * reference `siteConfig.url` to maintain 100% domain consistency.
 */

export const siteConfig = {
  name: "Yash Verma",
  title: "Yash Verma — Web Developer | WordPress, React & Next.js",
  shortTitle: "Yash Verma | Web Developer",
  description:
    "Yash Verma is a Web Developer with 3 years of production experience specializing in WordPress, React.js, Next.js, and PHP/Laravel. Available for freelance projects, business websites, and full-stack engineering in Delhi NCR, Gurgaon, and remote worldwide.",
  url: "https://yash-verma-portfolio-drab.vercel.app",
  locale: "en_US",
  author: {
    name: "Yash Verma",
    role: "Web Developer",
    email: "yashverma.u786@gmail.com",
    location: "Delhi, India",
    region: "Delhi NCR / Gurugram",
    country: "India",
    company: "Oodles Technologies",
    companyLocation: "Gurugram, India",
    education: "Bachelor of Computer Administration (BCA) — IGNOU",
    gitHub: "https://github.com/yashuverma786",
    linkedIn: "https://www.linkedin.com/in/yash-verma-webdeveloper/",
  },
  keywords: [
    "Yash Verma",
    "Yash Verma Web Developer",
    "Web Developer",
    "WordPress Developer",
    "WordPress Developer India",
    "WordPress Developer Delhi NCR",
    "WordPress Developer Gurgaon",
    "Next.js Developer",
    "React.js Developer",
    "Hire Web Developer",
    "Website Developer for Business",
    "Full-Stack Developer India",
    "PHP Laravel Developer",
    "Delhi Web Developer",
    "visaa.in",
    "jmttravel.in",
  ],
  services: [
    {
      slug: "wordpress-development",
      title: "WordPress Development Services",
      shortTitle: "WordPress Development",
      path: "/services/wordpress-development",
      description:
        "Custom WordPress theme and plugin development, Elementor customization, speed optimization, and production website maintenance by Yash Verma.",
      keywords: [
        "WordPress Developer",
        "WordPress Developer India",
        "WordPress Developer Delhi NCR",
        "WordPress Developer Gurgaon",
        "Custom WordPress Development",
        "Elementor Developer",
        "WordPress Speed Optimization",
      ],
    },
    {
      slug: "react-nextjs-development",
      title: "React & Next.js Development Services",
      shortTitle: "React & Next.js",
      path: "/services/react-nextjs-development",
      description:
        "High-performance single-page and full-stack web applications with Next.js App Router, SSR/SSG, TypeScript, Tailwind CSS, and REST APIs by Yash Verma.",
      keywords: [
        "Next.js Developer",
        "React.js Developer",
        "React Developer India",
        "Next.js Developer Delhi NCR",
        "Hire Next.js Developer",
        "Full-Stack React Developer",
      ],
    },
    {
      slug: "business-website-development",
      title: "Custom Business Website Development",
      shortTitle: "Business Websites",
      path: "/services/business-website-development",
      description:
        "Conversion-focused business websites, booking platforms, and lead generation portals built with Next.js, WordPress, and PHP/Laravel by Yash Verma.",
      keywords: [
        "Website Developer for Business",
        "Business Website Development India",
        "Hire Web Developer",
        "Web Developer Delhi NCR",
        "Lead Generation Website Developer",
        "Corporate Website Developer",
      ],
    },
  ],
};
