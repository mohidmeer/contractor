import Title from '@/components/inputs/Title';
import { faqs } from '@/data';
import { FAQ } from '@/types';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQs = ({ faqItems = faqs }: { faqItems?: FAQ[] }) => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center flex items-center justify-center flex-col gap-2 mb-10 md:mb-12 max-w-2xl mx-auto">
                    <Title text="FAQs" />
                    <h2 className="text-heading">Frequently Asked Questions</h2>
                    <p className="p1 max-w-xl">
                        Common questions our customers ask before starting their roofing project.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    {faqItems.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white border border-primary/5 shadow-md p-5 md:p-6 flex flex-col gap-3 card hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="rounded-xl bg-primary/10 p-3 w-fit">
                                <FaQuestionCircle size={22} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-heading">
                                {index + 1}. {faq.question}
                            </h3>
                            <p className="p1">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
