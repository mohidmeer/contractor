'use client';

import { useCallback, useEffect, useState } from "react";
import Title from "@/components/inputs/Title";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsQuote } from "react-icons/bs";
import { MdArrowBack, MdArrowForward, MdStar } from "react-icons/md";
import { testimonialsData } from "@/data";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <Title text="What Our Clients Say" />
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-heading">Client Testimonials</h2>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1">
                <div className="flex items-center gap-0.5 text-secondary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <MdStar key={i} className="text-sm" />
                  ))}
                </div>
                <span className="text-xs font-bold text-heading">5.0</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-sm font-semibold text-heading/70 whitespace-nowrap">
              <span className="text-primary font-bold">{testimonialsData.length}</span> Reviews
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white text-primary shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
              >
                <MdArrowBack className="text-lg" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white text-primary shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
              >
                <MdArrowForward className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        <div className="embla py-4 md:py-6" ref={emblaRef}>
          <div className="embla__container flex gap-5 md:gap-6 items-stretch">
            {testimonialsData.map((testimonial, index) => {
              const isActive = selectedIndex === index;
              return (
                <div
                  key={index}
                  className={`flex-[0_0_90%] sm:flex-[0_0_55%] md:flex-[0_0_42%] lg:flex-[0_0_34%] transition-all duration-500 ease-out ${
                    isActive ? "z-10" : "z-0"
                  }`}
                >
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
                      isActive
                        ? "scale-[1.05] bg-primary text-white"
                        : "scale-[0.95] bg-white shadow-md"
                    }`}
                  >
                    <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <span className={`flex items-center justify-center rounded-xl shadow-md transition-all ${
                          isActive
                            ? "bg-white/15 text-white h-11 w-11 shadow-black/10"
                            : "bg-primary text-white h-9 w-9 shadow-primary/25"
                        }`}>
                          <BsQuote className={isActive ? "text-xl" : "text-base"} />
                        </span>
                        <div className="flex items-center gap-0.5 text-secondary">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <MdStar key={i} className={isActive ? "text-base" : "text-sm"} />
                          ))}
                        </div>
                      </div>

                      <p className={`font-light leading-relaxed italic flex-1 ${
                        isActive
                          ? "text-base md:text-lg text-white/90"
                          : "text-sm md:text-base text-heading/75"
                      }`}>
                        &ldquo;{testimonial.feedback}&rdquo;
                      </p>

                      <div className={`pt-3 border-t flex items-center gap-3 ${
                        isActive ? "border-white/20" : "border-primary/10"
                      }`}>
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isActive
                            ? "bg-white text-primary"
                            : "bg-primary text-white"
                        }`}>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <h3 className={`text-sm md:text-base font-bold leading-tight truncate ${
                            isActive ? "text-white" : "text-heading"
                          }`}>
                            {testimonial.name}
                          </h3>
                          <p className={`text-xs mt-0.5 truncate ${
                            isActive ? "text-white/70" : "text-gray-500"
                          }`}>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                      isActive
                        ? "from-secondary via-white/80 to-secondary"
                        : "from-primary via-secondary to-primary opacity-80"
                    }`} />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {scrollSnaps.length > 1 && (
          <div className="mt-2 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
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
    </section>
  );
};

export default Testimonials;
