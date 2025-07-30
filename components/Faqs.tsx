import { faqs } from '@/data/constants';
import { FAQ } from '@/types';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQs = ({ faqItems = faqs }: { faqItems?: FAQ[] }) => {
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