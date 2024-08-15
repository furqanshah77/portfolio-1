import About from "@/component/about";
import Form from "@/component/form";
import HeroSection from "@/component/herosection";
import Navbar from "@/component/navbar";
import Service from "@/component/service";
import Skills from "@/component/skill";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Service />
      <Skills />
      <Form />
    </>
  );
}
