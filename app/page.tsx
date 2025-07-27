import Hero from "@/components/Hero";
import GetToKnow from "./_components/GetToKnow";
import Services from "@/components/Services";
import ThemeSwitcher from "@/components/Theme";
import WhyUS from "./_components/WhyUS";
import Projects from "./_components/Projects";
import Testimonials from "./_components/Testimonials";
import Process from "./_components/Process";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <ThemeSwitcher/>
      <Hero />
      <GetToKnow/>
      <Services/>
      <WhyUS/>
      <Projects/>
      <Testimonials/>
      <Process/>
    </main>
  );
}
