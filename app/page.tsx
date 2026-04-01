import ParticleWrapper from "@/components/ParticleWrapper";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import LayoutPortfolio from "@/components/LayoutPortfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ParticleWrapper />
      <Nav />
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <Experience />
        <div id="work"><Portfolio /></div>
        <div id="designs"><LayoutPortfolio /></div>
        <div id="contact"><Contact /></div>
      </main>
    </>
  );
}
