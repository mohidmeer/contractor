import Hero from "@/components/Hero";
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
    <main className="flex flex-col gap-20 ">
      <ThemeSwitcher />
      <Hero />
      <GetToKnow />
      <Services />
      <Process />
      <WhyUS />
      <FAQs />
      <Projects />
      <Testimonials />
      <AreaOfServices />
    </main>
  );
}
