import { getAllBlogs } from "@/actions/blogs";
import AreaOfServices from "@/components/AreaOfServices";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import Pagination from "@/components/pagination";
import SideBar from "@/components/SideBar";
import SectionShadowHeading from "@/components/SectionShadowHeading";
import { blogPage, siteName, siteUrl } from "@/data";
import { BUSINESS_ID } from "@/jsonld";
import { toMediaUrl } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdCalendarMonth, MdTimer } from "react-icons/md";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const page = async ({ searchParams }: Props) => {
  const { page: pageParam } = await searchParams;
  const currentPage = Number(pageParam) || 1;
  const { blogs, pagination } = await getAllBlogs(currentPage);

  const BLOG_ID = `${siteUrl}/blogs#blog`;
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: blogPage.seo.title,
    description: blogPage.seo.description,
    url: siteUrl + "blogs",
    mainEntity: {
      "@type": "Blog",
      "@id": BLOG_ID,
      name: blogPage.seo.title,
      url: `${siteUrl}/blogs`,
      publisher: { "@id": BUSINESS_ID },
    },
    hasPart: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.seo_title,
      description: blog.seo_description,
      datePublished: blog.createdAt,
      url: `${siteUrl}blogs/${blog.slug}`,
      author: { "@id": BUSINESS_ID },
      publisher: { "@id": BUSINESS_ID },
      isPartOf: { "@id": BLOG_ID },
    })),
  };

  return (
    <main className="flex flex-col">
      <Header
        cta={false}
        desc={blogPage.seo.description}
        title={blogPage.seo.title}
      />

      <section className="bg-secondary/10 py-14 md:py-20">
        <div className="xl:container mx-auto w-full px-4 md:px-6">
          <div className="mb-10 max-w-2xl">
            <SectionShadowHeading shadow="Insights">
              <h2 className="text-heading">{blogPage.seo.title}</h2>
              <p className="p1">{blogPage.seo.description}</p>
            </SectionShadowHeading>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
            <div className="lg:col-span-3 flex flex-col gap-6">
              {blogs.length > 0 ? (
                <ul className="grid gap-5 sm:grid-cols-2">
                  {blogs.map((blog, index) => {
                    const imageUrl = toMediaUrl(blog.image);
                    return (
                      <li key={blog.id}>
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-primary hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="relative h-[200px] md:h-[220px] overflow-hidden shrink-0">
                            {imageUrl ? (
                              <Image
                                src={imageUrl}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 40vw"
                                quality={70}
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-sm font-medium text-primary/40 px-6 text-center">
                                {blog.title}
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute top-3 left-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30 group-hover:bg-white group-hover:text-primary transition-colors">
                                {String(
                                  (pagination.currentPage - 1) *
                                    pagination.pageSize +
                                    index +
                                    1
                                ).padStart(2, "0")}
                              </span>
                            </div>

                            <div className="absolute bottom-3 left-3 right-3">
                              <div className="mb-1.5 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-secondary">
                                <span className="inline-flex items-center gap-1">
                                  <MdCalendarMonth className="text-xs" />
                                  {new Date(blog.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    }
                                  )}
                                </span>
                                {blog.read_time && (
                                  <span className="inline-flex items-center gap-1 text-white/80">
                                    <MdTimer className="text-xs" />
                                    {blog.read_time}
                                  </span>
                                )}
                              </div>
                              <h3 className="text-base md:text-lg font-bold text-white leading-snug drop-shadow-sm line-clamp-2">
                                {blog.title}
                              </h3>
                            </div>
                          </div>

                          <div className="relative flex flex-1 flex-col gap-3 p-4 md:p-5">
                            <p className="p1 !text-gray-600 line-clamp-3 group-hover:!text-white/90 transition-colors">
                              {blog.seo_description}
                            </p>
                            <div className="mt-auto flex items-center justify-between pt-1">
                              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-secondary group-hover:gap-2.5 transition-all">
                                Continue reading
                                <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
                              </span>
                              <span className="text-xs font-medium text-heading/50 group-hover:text-white/70 transition-colors">
                                {siteName}
                              </span>
                            </div>
                          </div>

                          <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-300" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="rounded-2xl bg-white p-10 text-center shadow-md">
                  <p className="text-heading font-bold text-xl mb-2">
                    No blogs published yet
                  </p>
                  <p className="p1">
                    Check back soon for tips, insights, and project stories.
                  </p>
                </div>
              )}

              {pagination.totalItems > pagination.pageSize && (
                <div className="rounded-2xl bg-white shadow-md border border-primary/10 px-4 py-5 flex justify-center">
                  <Pagination
                    totalPages={pagination.totalPages}
                    currentPage={pagination.currentPage as number}
                  />
                </div>
              )}
            </div>

            <aside className="hidden h-fit flex-col gap-5 lg:flex lg:sticky lg:top-28">
              <SideBar />
            </aside>
          </div>
        </div>
      </section>

      <AreaOfServices />
      <JsonLd data={jsonLdData} />
    </main>
  );
};

export default page;
