import Header from "@/components/Header";
import Hero from "../components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Lab from "@/components/sections/Lab";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import StickyChatButton from "@/components/chat/StickyChatButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Stack />
        <Lab />
        <About />
        <Contact />
      </main>
      <StickyChatButton />
      <footer className="border-t border-[var(--color-border)] py-8 px-6 text-center text-xs text-[var(--color-muted)] font-mono">
        Construit avec Next.js · Tailwind · n8n · Paris 2026
      </footer>
    </>
  );
}
