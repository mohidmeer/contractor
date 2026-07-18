import { accomplishmentData, WhyUSData } from '@/data';
import SectionShadowHeading from '@/components/SectionShadowHeading';

const WhyUS = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="mb-10 md:mb-12 max-w-2xl mx-auto">
                    <SectionShadowHeading shadow="Why Choose Us" align="center">
                        <h2 className="font-bold text-heading">What Makes Us Different</h2>
                    </SectionShadowHeading>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {WhyUSData.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 md:p-6 flex flex-col gap-4 cursor-pointer hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25 transition-all duration-300"
                            >
                                <span className="absolute -right-1 -top-2 text-[4.5rem] font-bold leading-none text-primary/[0.06] select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className="relative z-[1] flex items-start justify-between gap-3">
                                    <div className="rounded-xl bg-primary text-white p-3 shadow-md shadow-primary/25 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                                        <Icon size={22} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 pt-1">
                                        Feature
                                    </span>
                                </div>

                                <div className="relative z-[1] space-y-2">
                                    <h3 className="font-bold text-heading group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="p1">{feature.description}</p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 md:mt-14 rounded-2xl overflow-hidden bg-primary shadow-xl shadow-primary/20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
                        {accomplishmentData.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center justify-center gap-1.5 px-4 py-7 md:py-9 text-center hover:bg-white/5 transition-colors"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform">
                                    {item.number}+
                                </p>
                                <p className="text-xs md:text-sm font-medium text-white/80 leading-snug max-w-[10rem]">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUS;
