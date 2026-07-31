import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
