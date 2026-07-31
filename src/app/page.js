import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { Projects } from "./projects/page";
import { Contact } from "./contact/page";

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
