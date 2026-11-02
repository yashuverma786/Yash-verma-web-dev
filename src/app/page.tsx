import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profilepage`,
  url: `${siteConfig.url}/`,
  name: "Yash Verma — Web Developer Portfolio",
  description: siteConfig.description,
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  mainEntity: {
    "@id": `${siteConfig.url}/#person`,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <StructuredData data={profilePageSchema} />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
