import AreaOfServices from "@/components/AreaOfServices";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import Title from "@/components/inputs/Title";
import { JsonLdDataContact } from "@/jsonld";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { contactInfo, contactPage, siteName } from "@/data";
import FAQs from "@/components/Faqs";
import Process from "@/app/_components/Process";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.34883771467!2d-80.1446295!3d26.1201667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d900f8f1f3e0d9%3A0x1369d39a6c77350e!2s300%20SW%201st%20Ave%20suite%20155%2C%20Fort%20Lauderdale%2C%20FL%2033301%2C%20USA!5e0!3m2!1sen!2s!4v1754560984887!5m2!1sen!2s";

const contactCards = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: contactInfo.phone.text,
    href: contactInfo.phone.href,
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value: contactInfo.address,
    href: contactInfo.mapEmbedUrl,
  },
  {
    icon: FaClock,
    label: "Hours",
    value: contactInfo.workingHours,
  },
];

const page = () => {
  return (
    <main className="flex flex-col">
      <Header
        cta
        title={contactPage.seo.title}
        desc={contactPage.seo.description}
      />

      <section className="bg-secondary/10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="relative mb-10 md:mb-12 max-w-2xl overflow-hidden">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-1 -top-4 select-none text-[clamp(2.75rem,9vw,5rem)] font-bold leading-none tracking-tight text-primary/[0.07]"
            >
              Contact
            </span>
            <div className="relative pt-5 flex flex-col gap-2">
              <Title text="Get in touch" />
              <h2 className="text-heading">Let&apos;s start your project</h2>
              <p className="p1">{contactPage.seo.description}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <aside className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-primary text-white p-6 sm:p-8 shadow-xl shadow-primary/20">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-6 select-none text-[7rem] font-bold leading-none text-white/[0.07]"
              >
                {siteName.split(" ")[0]}
              </span>
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-secondary/25 blur-2xl"
              />

              <div className="relative z-[1] space-y-6">
                <div>
                  <p className="flex items-center gap-1.5 mb-2">
                    <span className="bg-secondary w-6 h-1 block rounded-full" />
                    <span className="text-sm font-bold text-white/95">
                      Reach us
                    </span>
                  </p>
                  <h3 className="!text-xl md:!text-2xl font-bold !text-white">
                    Talk with our team
                  </h3>
                  <p className="mt-2 text-sm font-light text-white/85 leading-relaxed">
                    Call, email, or send a message — we typically respond within
                    one business day.
                  </p>
                </div>

                <ul className="space-y-3">
                  {contactCards.map(({ icon: Icon, label, value, href }) => {
                    const content = (
                      <>
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <Icon size={16} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                            {label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-white leading-snug break-words">
                            {value}
                          </p>
                        </div>
                        {href ? (
                          <FaArrowRight className="shrink-0 text-white/30 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                        ) : null}
                      </>
                    );

                    const className =
                      "group flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 px-3.5 py-3.5 hover:bg-white/10 hover:border-white/20 transition-all";

                    if (href) {
                      return (
                        <li key={label}>
                          <a
                            href={href}
                            className={className}
                            {...(href.startsWith("http")
                              ? {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                          >
                            {content}
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={label}>
                        <div className={className}>{content}</div>
                      </li>
                    );
                  })}
                </ul>

                <div className="relative h-44 sm:h-52 overflow-hidden rounded-xl border border-white/10">
                  <iframe
                    title="Office location map"
                    src={mapEmbedSrc}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Process />
      <FAQs />
      <AreaOfServices />
      <JsonLd data={JsonLdDataContact} />
    </main>
  );
};

export default page;
