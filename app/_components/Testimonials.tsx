'use client';

import Title from "@/components/inputs/Title";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { BsQuote } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { testimonialsData } from "@/data/testimonials";


const Testimonials = () => {
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 0.5 })
  ])

  return (
    <section className="bg-pattren ">
      <div className="text-center flex items-center justify-center flex-col gap-2">
        <Title text={'What Our Clients Say'} />
        <h2 className="text-heading">
          Client Testimonials
        </h2>
      </div>
      <div className="embla my-6  mx-auto" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="flex-[0_0_40%] bg-white  rounded-lg p-6 cursor-pointer flex-col gap-6 flex items-center border-primary/20 border"
              key={index}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className=" size-16  overflow-hidden shrink-0 rounded-full object-cover bg-black"
              />
              <div className="flex items-center">
                <MdStar className='text-primary' />
                <MdStar className='text-primary' />
                <MdStar className='text-primary' />
                <MdStar className='text-primary' />
                <MdStar className='text-primary' />
              </div>
              <div>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-sm text-center opacity-80">{testimonial.role}</p>
              </div>
              <p className="text-lg italic mb-6">
                <BsQuote size={36} className="text-primary" />
                {testimonial.feedback}
              </p>
              <div className="flex items-center gap-4 mt-auto">


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;