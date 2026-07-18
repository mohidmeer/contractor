import Title from '@/components/inputs/Title';
import { accomplishmentData, WhyUSData } from '@/data';


const WhyUS = () => {

    return (
        <section className="bg-secondary/10 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-10 flex items-center flex-col gap-2">
                    <Title text='Why Choose Us' />
                    <h2 className="font-bold text-heading">What Makes Us Different</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {WhyUSData.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col gap-3 card"
                            >
                                <div className="rounded-xl bg-primary/10 p-3 w-fit">
                                    <Icon size={28} className="text-primary" />
                                </div>
                                <h3 className="font-bold text-heading">
                                    {feature.title}
                                </h3>
                                <p className="p1">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {accomplishmentData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 bg-white rounded-2xl p-5 shadow-md card">
                            <h3 className="text-3xl md:text-4xl font-bold text-primary">{item.number}+</h3>
                            <p className="text-base font-bold text-center text-heading">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUS;
