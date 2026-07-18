"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Title from "@/components/inputs/Title";
import type { ProjectView } from "@/actions/projects";

type ProjectsCarouselProps = {
  items: ProjectView[];
  limit?: number;
  showHeader?: boolean;
  heading?: string;
};

export default function ProjectsCarousel({
  items,
  limit,
  showHeader = true,
  heading = "Our Projects",
}: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const visible = limit ? items.slice(0, limit) : items;
  const total = items.length;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    emblaApi?.plugins()?.autoplay?.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    emblaApi?.plugins()?.autoplay?.reset();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      emblaApi?.plugins()?.autoplay?.reset();
    },
    [emblaApi]
  );

  if (!visible.length) return null;

  const navControls = (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-heading/70 whitespace-nowrap">
        <span className="text-primary font-bold">{total}</span> Projects
      </span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous projects"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white text-primary shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
        >
          <MdArrowBack className="text-lg" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next projects"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white text-primary shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
        >
          <MdArrowForward className="text-lg" />
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {showHeader ? (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <Title text="Our Projects" />
            <h2 className="text-heading">{heading}</h2>
          </div>
          <div className="self-end sm:self-auto">{navControls}</div>
        </div>
      ) : (
        <div className="mb-6 flex justify-end">{navControls}</div>
      )}

      <div className="embla py-4 md:py-6" ref={emblaRef}>
        <div className="embla__container flex gap-5 md:gap-6 items-stretch">
          {visible.map((project, z) => {
            const isActive = selectedIndex === z;
            return (
            <div
              className={`flex-[0_0_88%] sm:flex-[0_0_52%] md:flex-[0_0_42%] lg:flex-[0_0_34%] transition-all duration-500 ease-out ${
                isActive ? "z-10" : "z-0"
              }`}
              key={project.slug}
            >
              <Link
                href={`/projects/${project.slug}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
                  isActive
                    ? "scale-[1.06] bg-primary text-white"
                    : "scale-[0.94] bg-white shadow-md"
                }`}
                aria-label={`View project: ${project.title}`}
                aria-current={isActive ? "true" : undefined}
              >
                <div className={`relative overflow-hidden transition-all duration-500 ${isActive ? "h-[220px] md:h-[240px]" : "h-[180px] md:h-[200px]"}`}>
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      fill
                      sizes="(max-width: 768px) 90vw, 34vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={project.title}
                      unoptimized
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className={`flex items-center justify-center rounded-xl font-bold shadow-lg transition-all duration-500 ${
                      isActive
                        ? "h-10 w-10 text-sm bg-white/15 text-white shadow-black/10"
                        : "h-8 w-8 text-xs bg-primary text-white shadow-primary/30"
                    }`}>
                      {String(z + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className={`font-bold text-white leading-snug line-clamp-2 drop-shadow-sm transition-all duration-500 ${
                      isActive ? "text-lg md:text-xl" : "text-base"
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col gap-3 p-4 md:p-5">
                  <p className={`line-clamp-2 font-light leading-relaxed ${
                    isActive ? "text-white/90 text-base" : "p1"
                  }`}>
                    {project.description}
                  </p>
                  <span className={`mt-auto inline-flex items-center gap-1.5 font-bold group-hover:gap-2.5 transition-all ${
                    isActive ? "text-sm text-secondary" : "text-xs text-primary"
                  }`}>
                    Learn more
                    <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                  isActive
                    ? "w-full bg-gradient-to-r from-secondary via-white/80 to-secondary"
                    : "w-0 bg-primary group-hover:w-full"
                }`} />
              </Link>
            </div>
            );
          })}
        </div>
      </div>

      {scrollSnaps.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-primary/25 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
