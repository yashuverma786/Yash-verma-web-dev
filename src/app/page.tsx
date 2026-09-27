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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
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
