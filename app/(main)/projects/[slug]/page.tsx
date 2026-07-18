import Process from "@/app/_components/Process";
import Projects from "@/app/_components/Projects";
import Testimonials from "@/app/_components/Testimonials";
import AreaOfServices from "@/components/AreaOfServices";
import FAQs from "@/components/Faqs";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import SideBar from "@/components/SideBar";
import WhyUS from "@/components/WhyUS";
import { siteName, siteUrl } from "@/data";
import { BUSINESS_ID } from "@/jsonld";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MdLocationPin, MdTimelapse } from "react-icons/md";
import { getProjectBySlug, getProjectSlugs } from "@/actions/projects";
import { toMediaUrl } from "@/lib/media";
import { asParagraphs } from "@/lib/paragraphs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const canonical = `${siteUrl}projects/${slug}`;
  const image = project.image ? toMediaUrl(project.image) : undefined;

  return {
    title: `${project.title} | ${siteName}`,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonical,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  const image = project.image ? toMediaUrl(project.image) : "";
  const paragraphs = asParagraphs(project.content);
  const lead = paragraphs[0];
  const rest = paragraphs.slice(1);
  const galleryImages = [
    ...(project.imageUrl ? [project.imageUrl] : []),
    ...project.imageUrls.filter((url) => url !== project.imageUrl),
  ];
  const materials = project.materials.filter(Boolean);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    provider: { "@id": BUSINESS_ID },
    url: `${siteUrl}/projects/${slug}`,
    image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/projects/${slug}`,
    },
  };

  return (
    <main className="flex flex-col">
      <Header cta title={project.title} desc={project.description} />

      <section className="bg-secondary/10 py-14 md:py-20">
        <div className="xl:container mx-auto w-full px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
            <article className="lg:col-span-3 flex flex-col gap-8">
              {project.imageUrl && (
                <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-primary/5 shadow-lg shadow-primary/10 sm:aspect-[2.4/1]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/55 via-heading/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                    {(project.location || project.duration) && (
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        {project.location && (
                          <span className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                            <MdLocationPin className="text-sm" />
                            {project.location}
                          </span>
                        )}
                        {project.duration && (
                          <span className="inline-flex items-center gap-1 rounded-lg bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                            <MdTimelapse className="text-sm" />
                            {project.duration}
                          </span>
                        )}
                      </div>
                    )}
                    <h2 className="!text-white font-bold text-xl sm:text-2xl drop-shadow-md max-w-3xl">
                      {project.label}
                    </h2>
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-md overflow-hidden relative">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/[0.04]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-10 bottom-24 h-32 w-32 rounded-full bg-secondary/20"
                  aria-hidden
                />

                {!project.imageUrl && (
                  <div className="mb-8 relative">
                    {(project.location || project.duration) && (
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        {project.location && (
                          <p className="flex items-center gap-1 text-sm font-semibold text-primary">
                            <MdLocationPin size={18} />
                            {project.location}
                          </p>
                        )}
                        {project.duration && (
                          <p className="flex items-center gap-1 text-sm font-semibold text-primary">
                            <MdTimelapse size={18} />
                            {project.duration}
                          </p>
                        )}
                      </div>
                    )}
                    <h2 className="text-heading mb-2">{project.label}</h2>
                    <span className="block h-1 w-16 rounded-full bg-secondary" />
                  </div>
                )}

                {project.description && (
                  <div className="relative mb-8 rounded-2xl border-l-4 border-primary bg-secondary/15 px-5 py-4 md:px-6 md:py-5">
                    <p className="text-base md:text-lg font-medium leading-relaxed text-heading">
                      {project.description}
                    </p>
                  </div>
                )}

                <div className="relative space-y-0">
                  {lead && (
                    <p className="p1 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold first-letter:text-5xl first-letter:leading-none first-letter:text-primary md:first-letter:text-6xl">
                      {lead}
                    </p>
                  )}

                  {rest.length > 0 && (
                    <div className="mt-8 grid gap-6 md:gap-8">
                      {rest.map((paragraph, i) => (
                        <div
                          key={i}
                          className="group grid grid-cols-[auto_1fr] gap-4 md:gap-5"
                        >
                          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            {String(i + 2).padStart(2, "0")}
                          </span>
                          <p className="p1 border-b border-primary/5 pb-6 group-last:border-0 group-last:pb-0">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {materials.length > 0 && (
                  <div className="mt-10 border-t border-primary/10 pt-10">
                    <div className="relative mb-5 overflow-hidden">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -left-1 -top-3 select-none text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-primary/[0.07]"
                      >
                        Materials
                      </span>
                      <h3 className="relative !text-lg md:!text-xl font-bold text-heading pt-4">
                        Materials used
                      </h3>
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {materials.map((material, z) => (
                        <li
                          key={z}
                          className="flex items-start gap-2 text-sm text-heading"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="font-medium leading-snug">
                            {material}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {galleryImages.length > 0 && (
                <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-md">
                  <div className="relative mb-6 overflow-hidden">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-1 -top-3 select-none text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-primary/[0.07]"
                    >
                      Gallery
                    </span>
                    <h3 className="relative !text-lg md:!text-xl font-bold text-heading pt-4">
                      What our work looks like
                    </h3>
                  </div>
                  <Gallery images={galleryImages} />
                </div>
              )}
            </article>

            <aside className="hidden h-fit flex-col gap-5 lg:flex lg:sticky lg:top-28">
              <SideBar />
            </aside>
          </div>
        </div>
      </section>

      <Process />
      <Projects />
      <WhyUS />
      <Testimonials />
      <FAQs />
      <AreaOfServices />
      <GoogleMap />
      <JsonLd data={jsonLdData} />
    </main>
  );
}
