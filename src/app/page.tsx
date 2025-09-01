import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Books from "@/components/Books";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex">
      <Header />
      <div className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Resume />
        <Portfolio />
        <Books />
        <Services />
      </div>
    </main>
  );
}

