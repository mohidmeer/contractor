'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import useEmblaCarousel from 'embla-carousel-react';
import Title from './inputs/Title';
import HeroForm from './HeroForm';
import { contactInfo, hero2 } from '@/data';
import { trackCallClick } from '@/lib/analytics';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Hero2 = () => {
  const slides = hero2.slides.map((slide, index) => ({
    id: index,
    ...slide,
  }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused || consultationOpen) return;
    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, 5500);
    return () => clearInterval(id);
  }, [emblaApi, isPaused, consultationOpen]);

  return (
    <>
      <section
        className="relative h-screen select-none overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="h-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 h-full"
              >
                <div className="absolute inset-0 bg-black/35 z-[1]" />
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={slide.id === 0}
                />

                <div className="relative z-10 h-full container mx-auto w-full p-4 pt-24 md:pt-28 flex items-center">
                  <div className="w-full max-w-2xl text-white flex flex-col gap-4">
                    <Title text={slide.tagline} />
                    <h1>{slide.title}</h1>
                    <p className="p1 !text-white/90">{slide.description}</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
                      <a
                        href={contactInfo.phone.href}
                        className="animate-ring-pulse relative inline-flex items-center gap-2 bg-secondary px-8 py-3.5 text-base sm:text-lg text-white font-bold rounded-sm hover:brightness-110 transition-[filter] duration-200"
                        onClick={trackCallClick('Hero2 Call Button')}
                      >
                        <BsFillTelephoneFill size={22} className="shrink-0" />
                        {contactInfo.phone.text}
                      </a>
                      <button
                        type="button"
                        className="animate-ring-pulse relative inline-flex items-center justify-center bg-primary px-8 py-3.5 text-base sm:text-lg text-white font-bold rounded-sm hover:brightness-110 transition-[filter] duration-200"
                        onClick={() => setConsultationOpen(true)}
                      >
                        Book a Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={scrollPrev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center bg-black/40 text-white border border-white/20 hover:bg-secondary transition-colors cursor-pointer"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={scrollNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center bg-black/40 text-white border border-white/20 hover:bg-secondary transition-colors cursor-pointer"
        >
          <FaChevronRight size={18} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((slide) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${slide.id + 1}`}
              onClick={() => scrollTo(slide.id)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === slide.id
                  ? 'w-8 bg-secondary'
                  : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      <Dialog open={consultationOpen} onOpenChange={setConsultationOpen}>
        <DialogContent className="max-w-xl p-0 border-0 bg-transparent shadow-none sm:rounded-sm overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>Book a Free Consultation</DialogTitle>
            <DialogDescription>
              Fill out the form to request a free consultation.
            </DialogDescription>
          </DialogHeader>
          <HeroForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero2;
