import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Image from "next/image";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="container w-full">
     <Hero />
     <About />
     <Features />
     <CaseStudies/>
     {/* @ts-expect-error Async Server Component */}
     <Testimonials />
     {/* @ts-expect-error Async Server Component */}
     <Projects />
     <Contact />
    </div>
  );
}
