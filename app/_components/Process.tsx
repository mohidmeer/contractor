import { ourProcessData } from '@/sites/roofing/constants';
import React from 'react'


const Process = () => {
    return (
        <section className='grid grid-cols-3 h-[90vh]'>
            <div className=' flex items-center flex-col gap-2 border justify-center  bg-primary text-white'>
                <h2 className="font-bold text-center">
                    {ourProcessData.heading}
                </h2>
                <p className='text-lg text-center'>
                    {ourProcessData.description}
                </p>
            </div>
            <div className='col-span-2 h-full py-32 '>
                <div className='h-full '>
                    <div className='grid grid-cols-2 bg-white px-10'>

                        {ourProcessData.list.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className=" rounded-lg p-6 transition-shadow duration-300 cursor-pointer flex flex-col gap-4"
                                >

                                    <Icon size={46} className="text-primary" />
                                    <h3 className="!text-2xl font-semibold  ">
                                        {index + 1}. {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Process
