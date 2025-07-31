import { faqs } from '@/data/constants';
import { FAQ } from '@/types';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQs = ({ faqItems = faqs }: { faqItems?: FAQ[] }) => {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-3 min-h-[90vh]">
            
            <div className="flex items-center flex-col gap-2 border justify-center bg-primary text-white p-2 xl:order-2 py-16 border-black w-full">
                <h2 className="font-bold text-center">FAQs</h2>
                <p className="text-lg text-center">
                    Common questions our customers ask before starting their roofing project.
                </p>
            </div>
            <div className="col-span-2 h-full lg:py-32 xl:order-1 ">
                <div className="h-full">
                    <div className="grid md:grid-cols-2 bg-white md:px-10 card ">
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