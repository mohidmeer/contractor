import { getBlog, getMoreBlogs } from "@/actions/blogs";
import { BlogSectionBlocks } from "./BlogContentBlocks";
import AreaOfServices from "@/components/AreaOfServices";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MoreBlogsCarousel from "@/components/MoreBlogsCarousel";
import Services from "@/components/Services";
import SideBar from "@/components/SideBar";
import { siteName, siteUrl } from "@/data";
import { BUSINESS_ID } from "@/jsonld";
import { toMediaUrl } from "@/lib/media";
import type { Blog } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MdCalendarMonth, MdTimer } from "react-icons/md";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};

  const canonical = `${siteUrl}blogs/${blog.slug}`;
  const imageUrl = toMediaUrl(blog.image);

  return {
    title: blog.seo_title,
    description: blog.seo_description,
    alternates: { canonical },
    openGraph: {
      title: blog.seo_title,
      description: blog.seo_description,
      url: canonical,
      images: imageUrl ? [imageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo_title,
      description: blog.seo_description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog?.content) return notFound();

  const moreBlogs = await getMoreBlogs(blog.slug, 8);

  const postUrl = `${siteUrl}/blogs/${blog.slug}`;
  const BLOG_ID = `${siteUrl}/blogs#blog`;
  const imageUrl = toMediaUrl(blog.image);
  const sections = blog.content as Blog["content"];
  const publishedLabel = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.seo_title,
    description: blog.seo_description,
    url: postUrl,
    image: imageUrl,
    isPartOf: { "@type": "Blog", "@id": BLOG_ID },
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    datePublished: new Date(blog.createdAt).toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  return (
    <main className="flex flex-col">
      <Header cta title={blog.title} desc={blog.seo_description ?? ""} />

      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 via-secondary/10 to-white py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/[0.04] to-transparent"
          aria-hidden
        />
        <div className="xl:container relative mx-auto w-full px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
            <article className="lg:col-span-3 flex flex-col gap-6 md:gap-8">
              {imageUrl && (
                <div className="overflow-hidden rounded-2xl bg-primary/5 shadow-lg shadow-primary/10">
                  <div className="relative aspect-[21/9] sm:aspect-[2.4/1]">
                    <Image
                      src={imageUrl}
                      alt={blog.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 75vw"
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heading/35 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-primary/5 bg-white/90 px-4 py-3 text-sm text-heading/70 backdrop-blur-sm sm:px-5">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <MdCalendarMonth className="text-primary" size={16} />
                      {publishedLabel}
                    </span>
                    {blog.read_time ? (
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <MdTimer className="text-primary" size={16} />
                        {blog.read_time} read
                      </span>
                    ) : null}
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-md shadow-primary/5 sm:p-7 md:p-8">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.035]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-14 bottom-20 h-40 w-40 rounded-full bg-secondary/25"
                  aria-hidden
                />

                <div className="relative w-full max-w-4xl">
                  {!imageUrl && (
                    <div className="mb-6">
                      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-heading/65">
                        <span className="inline-flex items-center gap-1.5">
                          <MdCalendarMonth className="text-primary" size={16} />
                          {publishedLabel}
                        </span>
                        {blog.read_time ? (
                          <span className="inline-flex items-center gap-1.5">
                            <MdTimer className="text-primary" size={16} />
                            {blog.read_time} read
                          </span>
                        ) : null}
                      </div>
                      <h2 className="text-heading mb-3 !text-3xl md:!text-4xl font-bold tracking-tight">
                        {blog.title}
                      </h2>
                      <span className="block h-1 w-14 rounded-full bg-secondary" />
                    </div>
                  )}

                  {blog.seo_description ? (
                    <p className="mb-5 text-lg md:text-xl font-normal leading-relaxed tracking-wide text-heading/70">
                      {blog.seo_description}
                    </p>
                  ) : null}

                  <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-primary/8 py-3 text-sm text-heading/60">
                    <span>
                      By{" "}
                      <span className="font-semibold text-heading">
                        {siteName}
                      </span>
                    </span>
                    <span className="hidden text-heading/25 sm:inline" aria-hidden>
                      ·
                    </span>
                    <span className="hidden sm:inline">{publishedLabel}</span>
                    {blog.read_time ? (
                      <>
                        <span
                          className="hidden text-heading/25 sm:inline"
                          aria-hidden
                        >
                          ·
                        </span>
                        <span className="hidden sm:inline">
                          {blog.read_time} read
                        </span>
                      </>
                    ) : null}
                  </div>

                  <div className="space-y-10 md:space-y-12">
                    {sections.map((section, index) => (
                      <section key={index} className="group">
                        <div className="mb-4 flex items-start gap-3">
                          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold tracking-wide text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1 pt-0.5">
                            {section.heading ? (
                              <h3 className="!text-2xl md:!text-3xl font-bold tracking-tight text-heading">
                                {section.heading}
                              </h3>
                            ) : (
                              <span className="sr-only">
                                Section {index + 1}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="md:pl-11">
                          <BlogSectionBlocks
                            section={section}
                            postTitle={blog.title}
                          />
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <aside className="hidden h-fit flex-col gap-5 lg:sticky lg:top-28 lg:flex">
              <SideBar />
            </aside>
          </div>
        </div>
      </section>

      <MoreBlogsCarousel items={moreBlogs} />
      <Services />
      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
}
