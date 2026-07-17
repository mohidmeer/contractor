"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import type { ProjectView } from "@/actions/projects";

type ProjectsCarouselProps = {
  items: ProjectView[];
  limit?: number;
};

export default function ProjectsCarousel({ items, limit }: ProjectsCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);

  const visible = limit ? items.slice(0, limit) : items;

  if (!visible.length) return null;

  return (
    <div className="embla my-6" ref={emblaRef}>
      <div className="embla__container flex gap-6 px-2">
        {visible.map((project, z) => (
          <div
            className="flex-[0_0_100%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
            key={project.slug}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="moving-border group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-primary/10 block h-full"
              aria-label={`Continue reading: ${project.title}`}
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
                  {z + 1}
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
                  <span>Continue reading</span>
                  <MdArrowForward className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
