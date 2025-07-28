import { FaQuestionCircle } from 'react-icons/fa';

const FAQs = () => {
    const faqItems = [
        {
            question: "How long does a roofing project usually take?",
            answer: "Most residential roofing projects are completed within 1–3 days, depending on the size and complexity of the roof."
        },
        {
            question: "Do you offer free roof inspections?",
            answer: "Yes, we provide free inspections and estimates for all our roofing services across Florida."
        },
        {
            question: "What roofing materials do you use?",
            answer: "We use premium materials such as asphalt shingles, metal roofing, and flat roofing systems from trusted manufacturers."
        },
        {
            question: "Are your roofing services covered by warranty?",
            answer: "Absolutely! All our roofing installations come with a material and workmanship warranty for your peace of mind."
        },
        {
            question: "Do you provide emergency roof repair services?",
            answer: "Yes, we offer 24/7 emergency roof repair services to handle storm damage and unexpected leaks."
        },
        {
            question: "Are you licensed and insured?",
            answer: "Yes, we are fully licensed and insured to perform roofing services in Florida, ensuring safety and compliance with local regulations."
        }
    ];

    return (
        <section className="grid grid-cols-3 h-[90vh]">
            <div className="flex items-center flex-col gap-2 border justify-center bg-primary text-white p-2 order-2">
                <h2 className="font-bold text-center">FAQs</h2>
                <p className="text-lg text-center">
                    Common questions our customers ask before starting their roofing project.
                </p>
            </div>
            <div className="col-span-2 h-full py-32 order-1">
                <div className="h-full">
                    <div className="grid grid-cols-2 bg-white px-10">
                        {faqItems.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-lg p-6 transition-shadow duration-300 cursor-pointer flex flex-col gap-4 "
                            >
                                <FaQuestionCircle size={40} className="text-primary" />
                                <h3 className="!text-2xl font-semibold">
                                    {index + 1}. {faq.question}
                                </h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;