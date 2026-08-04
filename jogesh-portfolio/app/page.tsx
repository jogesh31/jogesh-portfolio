import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Tools } from "@/components/sections/Tools";
import { Dashboards } from "@/components/sections/Dashboards";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Stats />
        <Tools />
        <Dashboards />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
