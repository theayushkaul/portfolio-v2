import Hero from "@/components/Hero";
import TechToolkit from "@/components/TechToolkit";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechToolkit />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
