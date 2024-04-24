import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-5xl">
     <Header/>
     <Hero />
     <About />
     <Features />
     <CaseStudies/>
     <Testimonials />
     <Contact />
    </div>
  );
}
