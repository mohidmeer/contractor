import React from "react";
import { MdLocationPin } from "react-icons/md";
import { serviceAreasData } from "@/data/constants";
import Link from "next/link";

const AreaOfServices = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 min-h-[90vh]">
      {/* Left Column */}
      <div className="flex items-center flex-col gap-4 border justify-center bg-primary text-white p-16 xl:order-2">
        <p className="font-bold">Locations</p>
        <h2 className="font-bold text-3xl text-center">
          Cities We Serve Across Florida
        </h2>
        <p className="text-lg text-center">
          Explore our service areas and find expert solutions near you.
        </p>
      </div>

      {/* Right Column */}
      <div className="col-span-2 h-full xl:py-24 order-1">
        <div className="h-full flex items-center w-full flex-col justify-center bg-white card ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6  w-full ">
            {serviceAreasData.map((city, index) => (
              <Link
                key={index}
                href={'/service-areas/'+city.href}
                className="rounded-lg p-4 bg-white hover:underline transition-all flex items-center gap-3 text-lg font-medium"
              >
                <MdLocationPin className="text-primary text-2xl shrink-0" />
                <span>{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaOfServices;
// import React from 'react'
// import Title from './inputs/Title'
// import { MdLocationPin } from 'react-icons/md'
// import { serviceAreasData } from '@/data/constants'
// import Link from 'next/link'

// const AreaOfServices = () => {
//     return (
//         <section className="bg-white">
//             <div className=' container mx-auto p-8 '>
//                 <div className="text-center flex flex-col gap-2 mb-8 justify-center items-center">
//                     <Title text="Locations" />
//                     <h2 className="text-heading">
//                         City we Serve in accross Florida
//                     </h2>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {serviceAreasData.map((city, index) => (
//                         <Link
//                             key={index}
//                             href={city.href}
//                             className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-all"
//                         >
//                             <MdLocationPin className="text-primary text-2xl" />
//                             <span>{city.name}</span>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AreaOfServices