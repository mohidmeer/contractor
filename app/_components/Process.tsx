
import { ourProcessData } from '@/data';
import React from 'react'


const Process = () => {
    return (
        <section className='grid grid-cols-1 xl:grid-cols-3 min-h-[90vh]'>
            <div className=' flex items-center flex-col gap-2 justify-center  bg-primary text-white py-16'>
                <h2 className="font-bold text-center">
                    {ourProcessData.heading}
                </h2>
                <p className='md:text-lg text-center'>
                    {ourProcessData.description}
                </p>
            </div>

            <div className='md:col-span-2 h-full xl:py-32 '>
                <div className='h-full '>
                    <div className='grid md:grid-cols-2 bg-white md:px-10 card shadow-md'>

                        {ourProcessData.list.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className=" rounded-lg p-6 transition-shadow duration-300 cursor-pointer flex flex-col gap-4"
                                >

                                    <Icon size={46} className="text-primary" />
                                    <h3 className="text-2xl font-semibold  ">
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
