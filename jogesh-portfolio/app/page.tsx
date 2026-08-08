import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/sections/Sidebar";
import { Profile } from "@/components/sections/Profile";
import { Experience } from "@/components/sections/Experience";
import { Tools } from "@/components/sections/Tools";
import { Dashboards } from "@/components/sections/Dashboards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 lg:grid lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8">
        <Sidebar />
        <div className="mt-8 grid gap-10 lg:mt-0">
          <Profile />
          <Experience />
          <Tools />
          <Dashboards />
        </div>
      </main>
      <Footer />
    </>
  );
}
