import { faqs } from '@/data';
import { FAQ } from '@/types';
import { FaChevronDown, FaQuoteLeft } from 'react-icons/fa';

const FAQs = ({ faqItems = faqs }: { faqItems?: FAQ[] }) => {
    return (
        <section className="bg-secondary/10 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] gap-10 lg:gap-14 items-start">
                    <div className="flex flex-col gap-3 md:gap-4 order-2 lg:order-1">
                        {faqItems.map((faq, index) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white shadow-md open:shadow-xl open:ring-2 open:ring-primary/20 transition-all duration-300 overflow-hidden"
                            >
                                <summary className="list-none cursor-pointer flex items-start gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden group-open:bg-gradient-to-r group-open:from-primary/[0.04] group-open:to-transparent">
                                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-md shadow-primary/25 group-open:scale-105 transition-transform">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1 min-w-0 pt-1.5">
                                        <h3 className="font-bold text-heading text-base md:text-lg leading-snug group-open:text-primary transition-colors">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <span className="shrink-0 mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 text-primary group-open:bg-primary group-open:text-white group-open:rotate-180 transition-all duration-300">
                                        <FaChevronDown className="text-xs" />
                                    </span>
                                </summary>
                                <div className="px-5 md:px-6 pb-5 md:pb-6">
                                    <div className="relative w-full rounded-xl bg-secondary/15 border border-secondary/20 p-4 md:p-5 overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                                        <FaQuoteLeft className="absolute top-3 right-3 text-primary/15 text-2xl pointer-events-none" />
                                        <p className="relative z-[1] text-base font-medium text-heading/80 leading-relaxed pl-2">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="lg:sticky lg:top-28 order-1 lg:order-2">
                        <div className="rounded-2xl bg-primary text-white p-8 md:p-10 shadow-xl shadow-primary/20 overflow-hidden relative">
                            <span className="absolute -right-4 -bottom-6 text-[8rem] font-bold leading-none text-white/[0.07] select-none pointer-events-none">
                                ?
                            </span>
                            <div className="relative z-[1] space-y-4">
                                <p className="flex items-center gap-1.5">
                                    <span className="bg-secondary w-6 h-1 block rounded-full" />
                                    <span className="font-bold text-white/95">FAQs</span>
                                </p>
                                <h2 className="!text-white font-bold">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base font-light text-white/85 leading-relaxed">
                                    Common questions our customers ask before starting their project.
                                </p>
                                <div className="pt-2 flex items-center gap-3 text-sm font-semibold text-white/90">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-secondary text-lg font-bold">
                                        {faqItems.length}
                                    </span>
                                    <span>Questions answered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
