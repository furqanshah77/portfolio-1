import About from "@/component/about";
import HeroSection from "@/component/herosection";
import Navbar from "@/component/navbar";
import Service from "@/component/service";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Service />
    </>
  );
}
