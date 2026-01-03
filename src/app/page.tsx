import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import Visual from "@/components/sections/Visual";
import News from "@/components/sections/News";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Hero />
      <Works />
      <About />
      <Visual />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
