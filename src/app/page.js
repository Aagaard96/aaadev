import Example from "@/components/typewriter";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";

export default function Home() {
  return (
   <main>
    <Header/>
    <Hero/>
    <Projects/>
    <Resume/>
    <Contact/>
   </main>
  );
}
