"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack, MdArrowForward, MdCalendarMonth, MdTimer } from "react-icons/md";
import SectionShadowHeading from "@/components/SectionShadowHeading";
import { toMediaUrl } from "@/lib/media";

export type MoreBlogItem = {
  id: number | string;
  slug: string;
  title: string;
  seo_description: string | null;
  read_time: string | null;
  image: string | null;
  createdAt: Date | string;
};

type MoreBlogsCarouselProps = {
  items: MoreBlogItem[];
  heading?: string;
};

export default function MoreBlogsCarousel({
  items,
  heading = "More insights",
}: MoreBlogsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: items.length > 2,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
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

  if (!items.length) return null;

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionShadowHeading shadow="Blogs" className="flex-1">
            <h2 className="text-heading">{heading}</h2>
            <p className="p1 mt-1">Keep reading — more tips and project insights.</p>
          </SectionShadowHeading>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Link
              href="/blogs"
              className="mr-1 text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous posts"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white text-primary shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
            >
              <MdArrowBack className="text-lg" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next posts"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white text-primary shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
            >
              <MdArrowForward className="text-lg" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-5">
            {items.map((blog, index) => {
              const imageUrl = toMediaUrl(blog.image);
              const dateLabel = new Date(blog.createdAt).toLocaleDateString(
                "en-US",
                { month: "short", day: "numeric", year: "numeric" }
              );

              return (
                <div
                  key={blog.id}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_31%]"
                >
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-secondary/10 shadow-sm hover:bg-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-[160px] overflow-hidden shrink-0">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 85vw, 31vw"
                          quality={70}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-sm font-medium text-primary/40 px-6 text-center">
                          {blog.title}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-heading/70 via-heading/15 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white shadow-md group-hover:bg-white group-hover:text-primary transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col gap-2 p-4">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-primary group-hover:text-secondary transition-colors">
                        <span className="inline-flex items-center gap-1">
                          <MdCalendarMonth className="text-sm" />
                          {dateLabel}
                        </span>
                        {blog.read_time && (
                          <span className="inline-flex items-center gap-1">
                            <MdTimer className="text-sm" />
                            {blog.read_time}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-heading leading-snug line-clamp-2 group-hover:text-white transition-colors">
                        {blog.title}
                      </h3>
                      {blog.seo_description && (
                        <p className="p1 !text-sm line-clamp-2 group-hover:!text-white/85 transition-colors">
                          {blog.seo_description}
                        </p>
                      )}
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-xs font-bold text-primary group-hover:text-secondary group-hover:gap-2.5 transition-all">
                        Read more
                        <MdArrowForward className="text-sm transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {scrollSnaps.length > 1 && (
          <div className="mt-5 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedIndex === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-primary/25 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
