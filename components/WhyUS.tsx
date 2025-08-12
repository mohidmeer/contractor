import Title from '@/components/inputs/Title';
import { accomplishmentData, WhyUSData } from '@/data';


const WhyUS = () => {

    return (
        <section className="bg-pattren">
            <div className="text-center mb-10 flex items-center flex-col gap-2">
                <Title text='Why Choose Us' />
                <h2 className="text-3xl font-bold text-heading">What Makes Us Different</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
                {WhyUSData.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col gap-4 card"
                        >
                            <Icon size={46} className="text-primary" />
                            <h3 className="!text-2xl font-semibold  ">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
            <div className='my-20 max-w-7xl mx-auto  grid-cols-2 lg:grid-cols-4 grid gap-8 px-6'>
                {accomplishmentData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 bg-white rounded-lg p-4 shadow-md card  ">
                        <h3 className="!text-4xl md:!text-6xl font-bold text-primary">{item.number}+</h3>
                        <p className="text-lg font-bold  text-center">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUS;