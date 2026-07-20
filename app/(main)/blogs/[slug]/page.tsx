import { getBlog, getMoreBlogs } from "@/actions/blogs";
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
import { FaCheck } from "react-icons/fa6";
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
      <Header
        cta
        title={blog.title}
        desc={blog.seo_description ?? ""}
      />

      <section className="bg-secondary/10 py-14 md:py-20">
        <div className="xl:container mx-auto w-full px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
            <article className="lg:col-span-3 flex flex-col gap-8">
              {imageUrl && (
                <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-primary/5 shadow-lg shadow-primary/10 sm:aspect-[2.4/1]">
                  <Image
                    src={imageUrl}
                    alt={blog.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/55 via-heading/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        <MdCalendarMonth className="text-sm" />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      {blog.read_time && (
                        <span className="inline-flex items-center gap-1 rounded-lg bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          <MdTimer className="text-sm" />
                          {blog.read_time}
                        </span>
                      )}
                    </div>
                    <h2 className="!text-white font-bold text-xl sm:text-2xl drop-shadow-md max-w-3xl">
                      {blog.title}
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

                {!imageUrl && (
                  <div className="mb-8 relative">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                      <span className="inline-flex items-center gap-1">
                        <MdCalendarMonth size={16} />
                        {new Date(blog.createdAt).toDateString()}
                      </span>
                      {blog.read_time && (
                        <span className="inline-flex items-center gap-1">
                          <MdTimer size={16} />
                          {blog.read_time}
                        </span>
                      )}
                    </div>
                    <h2 className="text-heading mb-2">{blog.title}</h2>
                    <span className="block h-1 w-16 rounded-full bg-secondary" />
                  </div>
                )}

                {blog.seo_description && (
                  <div className="relative mb-8 rounded-2xl border-l-4 border-primary bg-secondary/15 px-5 py-4 md:px-6 md:py-5">
                    <p className="text-base md:text-lg font-medium leading-relaxed text-heading">
                      {blog.seo_description}
                    </p>
                  </div>
                )}

                <p className="mb-8 text-sm font-medium text-heading/70">
                  By <span className="font-bold text-heading">{siteName}</span>
                </p>

                <div className="relative space-y-10">
                  {sections.map((section, index) => {
                    const body = section.paragraph ?? section.body;
                    return (
                      <section
                        key={index}
                        className="group grid grid-cols-[auto_1fr] gap-4 md:gap-5"
                      >
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 border-b border-primary/5 pb-8 group-last:border-0 group-last:pb-0">
                          {section.heading && (
                            <h3 className="!text-lg md:!text-xl font-bold text-heading mb-3">
                              {section.heading}
                            </h3>
                          )}

                          {body && (
                            <p className="p1 mb-4 last:mb-0">{body}</p>
                          )}

                          {section.listItems && section.listItems.length > 0 && (
                            <ul className="mb-4 grid gap-2 sm:grid-cols-1">
                              {section.listItems.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2.5 text-sm text-heading"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                                    <FaCheck size={9} />
                                  </span>
                                  <span className="font-medium leading-snug">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {section.quote && (
                            <blockquote className="mb-4 rounded-2xl border-l-4 border-secondary bg-secondary/10 px-5 py-4 text-base md:text-lg font-medium italic text-heading leading-relaxed">
                              “{section.quote}”
                            </blockquote>
                          )}

                          {section.table && section.table.length > 0 && (
                            <div className="overflow-x-auto rounded-xl border border-primary/10">
                              <table className="min-w-full border-collapse text-sm">
                                <thead>
                                  <tr className="bg-primary text-white">
                                    {section.table[0].map((cell, colIndex) => (
                                      <th
                                        key={colIndex}
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wide"
                                      >
                                        {cell}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                {section.table.length > 1 && (
                                  <tbody>
                                    {section.table.slice(1).map((row, rowIndex) => (
                                      <tr
                                        key={rowIndex}
                                        className={
                                          rowIndex % 2 === 0
                                            ? "bg-secondary/10"
                                            : "bg-white"
                                        }
                                      >
                                        {row.map((cell, colIndex) => (
                                          <td
                                            key={colIndex}
                                            className="border-b border-primary/5 px-3 py-2.5 text-heading"
                                          >
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                )}
                              </table>
                            </div>
                          )}
                        </div>
                      </section>
                    );
                  })}
                </div>
              </div>
            </article>

            <aside className="hidden h-fit flex-col gap-5 lg:flex lg:sticky lg:top-28">
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
