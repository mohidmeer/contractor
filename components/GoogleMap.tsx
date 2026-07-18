import React from 'react'
import { MdLocationPin, MdAccessTime, MdPhone, MdArrowOutward } from 'react-icons/md'
import { contactInfo } from '@/data'
import Link from 'next/link'

const mapEmbedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.34883771467!2d-80.1446295!3d26.1201667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d900f8f1f3e0d9%3A0x1369d39a6c77350e!2s300%20SW%201st%20Ave%20suite%20155%2C%20Fort%20Lauderdale%2C%20FL%2033301%2C%20USA!5e0!3m2!1sen!2s!4v1754560984887!5m2!1sen!2s'

const GoogleMap = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/15 bg-primary">
          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
            <div className="relative bg-white min-h-[320px] md:min-h-[420px] lg:min-h-[480px] order-2 lg:order-1">
              <iframe
                title="Google Maps"
                name="Google Maps"
                src={mapEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-center gap-5 px-8 py-10 md:px-10 md:py-12 text-white relative overflow-hidden order-1 lg:order-2">
              <span className="absolute -right-6 -bottom-8 text-[9rem] font-bold leading-none text-white/[0.06] select-none pointer-events-none">
                ⌖
              </span>

              <div className="relative z-[1] space-y-4">
                <p className="flex items-center gap-1.5">
                  <span className="bg-secondary w-6 h-1 block rounded-full" />
                  <span className="font-bold text-white/95">Our Location</span>
                </p>
                <h2 className="!text-white font-bold">
                  Plan your visit today
                </h2>
                <p className="text-base font-light text-white/85 leading-relaxed max-w-sm">
                  Stop by our office or get directions — we&apos;re ready to help with your next project.
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <MdLocationPin className="text-secondary text-lg" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Address</p>
                      <p className="text-sm font-medium text-white/95 leading-snug mt-0.5">
                        {contactInfo.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <MdAccessTime className="text-secondary text-lg" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Hours</p>
                      <p className="text-sm font-medium text-white/95 leading-snug mt-0.5">
                        {contactInfo.workingHours}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <MdPhone className="text-secondary text-lg" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Phone</p>
                      <a
                        href={contactInfo.phone.href}
                        className="text-sm font-medium text-white/95 leading-snug mt-0.5 hover:text-secondary transition-colors inline-block"
                      >
                        {contactInfo.phone.text}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3 pt-3">
                  <a
                    href={contactInfo.mapEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition-all"
                  >
                    Get directions
                    <MdArrowOutward className="text-base" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-sm border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleMap
