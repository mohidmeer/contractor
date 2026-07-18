'use client';

import Title from "@/components/inputs/Title";
// import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { BsQuote } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { testimonialsData } from "@/data";


const Testimonials = () => {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 0.5 })
  ])

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center flex items-center justify-center flex-col gap-2 mb-10">
          <Title text={'What Our Clients Say'} />
          <h2 className="text-heading">
            Client Testimonials
          </h2>
        </div>
        <div className="embla my-6 mx-auto" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {testimonialsData.map((testimonial, index) => (
              <div
                className="flex-[0_0_100%] sm:flex-[0_0_75%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] bg-white rounded-2xl p-6 cursor-pointer flex-col gap-4 flex items-center card shadow-md border border-primary/5"
                key={index}
              >
                {/* <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className=" size-16  overflow-hidden shrink-0 rounded-full object-cover bg-black"
                /> */}

                <BsQuote size={40} className="text-primary" />
                <div className="flex items-center">
                  <MdStar className='text-primary' />
                  <MdStar className='text-primary' />
                  <MdStar className='text-primary' />
                  <MdStar className='text-primary' />
                  <MdStar className='text-primary' />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-center text-heading">{testimonial.name}</h3>
                  <p className="text-sm text-center opacity-80">{testimonial.role}</p>
                </div>
                <p className="p1 italic text-center">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
