import Hero from "@/components/Hero";
import GetToKnow from "./_components/GetToKnow";
import Services from "@/components/Services";
import ThemeSwitcher from "@/components/Theme";
import WhyUS from "../components/WhyUS";
import Projects from "./_components/Projects";
import Testimonials from "./_components/testimonials";
import Process from "./_components/Process";
import FAQs from "@/components/Faqs";
import AreaOfServices from "@/components/AreaOfServices";


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
