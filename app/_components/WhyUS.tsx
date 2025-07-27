import Title from '@/components/inputs/Title';
import { FaUserTie, FaTools, FaHandshake, FaDollarSign, FaSmile, FaShieldAlt } from "react-icons/fa";

const WhyUS = () => {
    const features = [
        {
            title: "Qualified Experts",
            description: "Our team is made up of licensed and experienced professionals who bring unmatched expertise to every roofing project.",
            icon: FaUserTie
        },
        {
            title: "Workmanship Quality",
            description: "We use the finest materials and industry-best practices to deliver exceptional workmanship on every job.",
            icon: FaTools
        },
        {
            title: "Trusted & Reliable",
            description: "We have built our reputation on trust by delivering projects on time, within budget, and to the highest standards.",
            icon: FaHandshake
        },
        {
            title: "Affordable Pricing",
            description: "We provide competitive pricing without compromising on quality, giving you the best value for your investment.",
            icon: FaDollarSign
        },
        {
            title: "Customer Satisfaction",
            description: "Your satisfaction is our priority. We go above and beyond to ensure you are happy with the results.",
            icon: FaSmile
        },
        {
            title: "Safety & Compliance",
            description: "We strictly adhere to safety regulations and building codes, ensuring every project is compliant and secure.",
            icon: FaShieldAlt
        }
    ];

    const accomplishments = [
        { title: "Commercial Projects", number: 100 },
        { title: "Residential Projects", number: 250 },
        { title: "Hardworking Employees", number: 50 },
        { title: "Happy Customers", number: 500 },
    ];

    return (
        <section className="bg-pattren">
            <div className="text-center mb-10 flex items-center flex-col gap-2">
                <Title text='Why Choose Us' />
                <h2 className="text-3xl font-bold text-heading">What Makes Us Different</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6  hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col gap-4"
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
            <div className='my-20 max-w-7xl mx-auto  grid-cols-4 grid gap-8 px-6'>
                {accomplishments.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 bg-white rounded-lg p-4 shadow-md  ">
                        <h3 className="!text-6xl font-bold text-primary">{item.number}+</h3>
                        <p className="text-lg font-bold">{item.title}</p>
                    </div>
                ))}


            </div>
        </section>
    );
};

export default WhyUS;