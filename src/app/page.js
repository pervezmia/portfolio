import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}