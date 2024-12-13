import Footer from "@/components/footer";
import Example from "@/components/typewriter";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";

export default function Home() {
  return (
   <main className="bg-gradient-to-br from-gray-800 to-black">
    <Header/>
    <Hero/>
    <Projects/>
    <Resume/>
    <About/>
    {/* <Contact/> */}
    <Footer/>
   </main>
  );
}
