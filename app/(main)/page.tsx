import Hero2 from "@/components/Hero2";
import HeroBar from "@/components/HeroBar";
import Services from "@/components/Services";
import ThemeSwitcher from "@/components/Theme";
import FAQs from "@/components/Faqs";
import AreaOfServices from "@/components/AreaOfServices";
import GetToKnow from "../_components/GetToKnow";
import Process from "../_components/Process";
import WhyUS from "@/components/WhyUS";
import Projects from "../_components/Projects";
import Testimonials from "../_components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ThemeSwitcher />
      <Hero2 />
      <HeroBar />
      <GetToKnow />
      <Services />
      <Process />
      <Projects />
      <WhyUS />
      <FAQs />
      <Testimonials />
      <AreaOfServices />
    </main>
  );
}
