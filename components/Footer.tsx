"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { contactInfo, FooterData, siteName, socialLinks } from "@/data";
import { BsClock, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowForward } from "react-icons/md";
import { trackCallClick } from "@/lib/analytics";
import type { NavItem } from "@/types";

const FOOTER_LINK_LIMIT = 6;

const Footer = ({ items }: { items: NavItem[] }) => {
  const services =
    items.find(
      (item) =>
        item.label.toLowerCase() === "services" ||
        item.href.replace(/\/+$/, "") === "/services"
    )?.children || [];
  const projects =
    items.find(
      (item) =>
        item.label.toLowerCase() === "projects" ||
        item.href.replace(/\/+$/, "") === "/projects"
    )?.children || [];
  const aboutLinks = items.filter((item) =>
    ["About Us", "Contact Us", "Blogs"].includes(item.label)
  );

  const visibleServices = services.slice(0, FOOTER_LINK_LIMIT);
  const visibleProjects = projects.slice(0, FOOTER_LINK_LIMIT);
  const hasMoreServices = services.length > FOOTER_LINK_LIMIT;
  const hasMoreProjects = projects.length > FOOTER_LINK_LIMIT;
  const watermark = siteName.split(" ")[0] || siteName;

  return (
    <footer className="relative overflow-hidden bg-primary text-white pt-14 pb-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 top-8 select-none text-[clamp(3.5rem,14vw,9rem)] font-bold leading-none tracking-tight text-white/[0.06]"
      >
        {watermark}
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/15 blur-3xl"
      />

      <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Logo />
            <p className="text-base font-light leading-relaxed !text-white/95">
              {FooterData.tagline}
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={contactInfo.phone.href}
                onClick={trackCallClick("Footer")}
                className="flex items-start gap-2.5 hover:text-secondary transition-colors"
              >
                <BsFillTelephoneFill
                  size={15}
                  className="text-secondary mt-0.5 shrink-0"
                />
                <span>{contactInfo.phone.text}</span>
              </a>
              <a
                href={contactInfo.mapEmbedUrl}
                className="flex items-start gap-2.5 hover:text-secondary transition-colors"
              >
                <FaLocationDot
                  size={15}
                  className="text-secondary mt-0.5 shrink-0"
                />
                <span>{contactInfo.address}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <BsClock size={15} className="text-secondary mt-0.5 shrink-0" />
                <span>{contactInfo.workingHours}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="!text-lg font-bold !text-white mb-1">Services</h2>
            <span className="mb-4 block h-1 w-10 rounded-full bg-secondary" />
            <ul className="space-y-2 text-sm">
              {visibleServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/90 hover:text-secondary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            {hasMoreServices && (
              <Link
                href="/services"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:gap-2.5 transition-all"
              >
                View more
                <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>

          {projects.length > 0 ? (
            <div>
              <h2 className="!text-lg font-bold !text-white mb-1">Projects</h2>
              <span className="mb-4 block h-1 w-10 rounded-full bg-secondary" />
              <ul className="space-y-2 text-sm">
                {visibleProjects.map((project) => (
                  <li key={project.href}>
                    <Link
                      href={project.href}
                      className="text-white/90 hover:text-secondary transition-colors"
                    >
                      {project.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {hasMoreProjects && (
                <Link
                  href="/projects"
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:gap-2.5 transition-all"
                >
                  View more
                  <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          ) : null}

          <div>
            <h2 className="!text-lg font-bold !text-white mb-1">Company</h2>
            <span className="mb-4 block h-1 w-10 rounded-full bg-secondary" />
            <ul className="space-y-2 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-secondary hover:scale-105 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookSquare size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-secondary hover:scale-105 transition-all"
                aria-label="Instagram"
              >
                <FaInstagramSquare size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-secondary hover:scale-105 transition-all"
                aria-label="Twitter"
              >
                <FaTwitterSquare size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/85">
            License #: CCC1336268 (Roofing), CGC1535671 (General Contractor) |
            Insured
          </p>
          <p className="text-sm font-medium text-white/90">
            © {new Date().getFullYear()} {siteName}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
