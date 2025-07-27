import React from 'react'
import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { FaComments, FaHammer } from 'react-icons/fa6';

const Process = () => {
    const processSteps = [
        {
            title: "Initial Consultation",
            description: "We start by understanding your roofing needs, budget, and design preferences through a detailed consultation.",
            icon: FaComments
        },
        {
            title: "Roof Inspection",
            description: "Our experts perform a thorough inspection to assess the current condition of your roof and identify potential issues.",
            icon: FaSearch
        },
        {
            title: "Custom Proposal",
            description: "We provide a transparent and detailed proposal outlining materials, timelines, and pricing for your roofing project.",
            icon: FaFileAlt
        },
        {
            title: "Project Scheduling",
            description: "Once approved, we schedule the project at your convenience and prepare everything for a smooth installation process.",
            icon: FaCalendarAlt
        },
        {
            title: "Roofing Installation",
            description: "Our skilled team executes the roofing work with precision, using premium materials and following industry best practices.",
            icon: FaHammer
        },
        {
            title: "Final Inspection & Handover",
            description: "We conduct a thorough quality check and final inspection to ensure your satisfaction before completing the project.",
            icon: FaCheckCircle
        }
    ];
    return (
        <section className='grid grid-cols-3 h-[90vh]'>
            <div className=' flex items-center flex-col gap-2 border justify-center  bg-primary text-white'>
                <h2 className="font-bold text-center">
                    Our Process
                </h2>
                <p className='text-lg text-center'>
                    From concept to completion, we make bathroom remodeling seamless and stress-free.
                </p>
            </div>
            <div className='col-span-2 h-full py-32 '>
                <div className='h-full '>
                    <div className='grid grid-cols-2 bg-white px-10'>

                        {processSteps.map((feature, index) => {
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
