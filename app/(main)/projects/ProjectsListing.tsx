"use client";

import FAQs from "@/components/Faqs";
import Header from "@/components/Header";
import Title from "@/components/inputs/Title";
import WhyUS from "@/components/WhyUS";
import { projectsPage } from "@/data";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import Process from "@/app/_components/Process";
import JsonLd from "@/components/JsonLd";
import AreaOfServices from "@/components/AreaOfServices";
import { MdArrowForward } from "react-icons/md";
import type { ProjectView } from "@/actions/projects";

type ProjectsListingProps = {
  items: ProjectView[];
  jsonLdData: Record<string, unknown>;
};

export default function ProjectsListing({
  items,
  jsonLdData,
}: ProjectsListingProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 0.3 }),
  ]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 0.3, direction: "backward" }),
  ]);

  const mid = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, mid).length < 5 ? items : items.slice(0, mid);
  const secondHalf = items.slice(mid);

  const renderCard = (project: ProjectView, index: number) => (
    <div
      className="flex-[0_0_100%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
      key={project.slug}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="moving-border group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-primary/10 block h-full"
      >
        <div className="relative h-[280px] overflow-hidden">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              alt={project.title}
              unoptimized
            />
          )}
          <div className="absolute top-4 left-4 bg-primary text-white text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            {index + 1}
          </div>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-heading text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex items-center gap-2 text-primary font-semibold mt-2 group-hover:gap-4 transition-all">
            <span>Read More</span>
            <MdArrowForward className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <main className="flex flex-col gap-10">
      <Header cta desc="" title={projectsPage.seo.title} />
      <section>
        <div className="text-center flex items-center justify-center flex-col gap-2 mb-10">
          <Title text={"Our Projects"} />
          <h2 className="text-heading">{projectsPage.seo.title}</h2>
        </div>

        <div className="embla my-6" ref={emblaRef}>
          <div className="embla__container flex gap-6 px-2">
            {firstHalf.map((project, z) => renderCard(project, z))}
          </div>
        </div>

        {items.length > 5 && (
          <div className="embla my-6" ref={emblaRef2}>
            <div className="embla__container flex gap-6 px-2">
              {secondHalf.map((project, z) => renderCard(project, z + mid))}
            </div>
          </div>
        )}
      </section>
      <WhyUS />
      <Process />
      <FAQs />
      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
}
