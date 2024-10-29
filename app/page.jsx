"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work/Work";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const loadLocoMotiveScroll = async () =>{
      const LocoMotiveScroll = (await import("locomotive-scroll")).default;
      new LocoMotiveScroll();
    }
    loadLocoMotiveScroll();
  }, []);
  return (
    <div>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
