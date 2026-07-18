import Title from '@/components/inputs/Title';
import { ourProcessData } from '@/data';
import React from 'react';

const Process = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center flex items-center justify-center flex-col gap-2 mb-10 md:mb-14 max-w-2xl mx-auto">
                    <Title text="Our Process" />
                    <h2 className="text-heading">{ourProcessData.heading}</h2>
                    <p className="p1 max-w-xl">
                        {ourProcessData.description}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {ourProcessData.list.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative rounded-2xl bg-secondary/10 border border-primary/10 p-5 md:p-6 flex flex-col gap-4 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary/25 hover:bg-white transition-all duration-300"
                            >
                                <span className="absolute -right-2 -top-3 text-[5.5rem] font-bold leading-none text-primary/[0.07] select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className="flex items-center justify-between gap-3 relative z-[1]">
                                    <div className="rounded-xl bg-primary text-white p-3 shadow-md shadow-primary/25 group-hover:scale-105 transition-transform">
                                        <Icon size={22} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary/70">
                                        Step {index + 1}
                                    </span>
                                </div>

                                <div className="relative z-[1] space-y-2">
                                    <h3 className="font-bold text-heading group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="p1">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
