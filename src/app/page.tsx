 "use client";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home (){
  useEffect (() =>{
    Aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    Aos.refresh()
  }, []);
  return(
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>

  );
}