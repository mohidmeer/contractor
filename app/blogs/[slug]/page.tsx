import { getBlog } from "@/actions/blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SideBar from "@/components/SideBar";
import { siteName, siteUrl } from "@/data";
import { BUSINESS_ID } from "@/jsonld";
import { Blog } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MdCalendarMonth, MdTimer } from "react-icons/md";


type Props = {
  params:  Promise<{slug:string}>;
};

//;
export async function generateMetadata({ params }: Props ) {
  const { slug } = await params
  const blog = await getBlog(slug)
  const canonical = `${siteUrl}blogs/${blog?.title}`
  return {
    title: blog?.seo_title,
    description: blog?.seo_description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: blog?.seo_title,
      description: blog?.seo_description,
      url: canonical,
      images: [blog?.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog?.seo_title,
      description: blog?.seo_description,
      images: [blog?.image],
    },
  }
}

export default async function page({ params }: Props) {

  const { slug } = await params
  const blog = await getBlog(slug)
  if (!blog?.content) return notFound()


  const postUrl = `${siteUrl}/blogs/${blog.slug}`;
  const BLOG_ID = `${siteUrl}/blogs#blog`; 
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.seo_title,
    description: blog.seo_description,
    url: postUrl,
    image: blog.image,
    isPartOf: { "@type": "Blog", "@id": BLOG_ID },
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    datePublished: new Date(blog.createdAt).toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  return (
    <main className="flex flex-col gap-20">
      <article>
        <header className="relative flex flex-col items-center justify-center text-white bg-primary gap-4 py-10 px-4">
          <Breadcrumbs />
          <h1 className=" font-bold text-center container">{blog.title}</h1>
          <p className="text-white/90 text-center p1 max-w-3xl">
            {blog.seo_description}
          </p>
          <div className="text-sm font-medium text-white/80 flex flex-wrap justify-center items-center gap-4 mt-2">
            <span>By <span className="font-bold text-white "> {siteName}</span></span>
            <span className="flex items-center gap-1 ">
              <MdCalendarMonth size={16} /> <span className="font-bold text-white">{new Date(blog.createdAt).toDateString()}</span>
            </span>
            <span className="flex items-center gap-1">
              <MdTimer size={16} /><span className="font-bold text-white">{blog.read_time}</span>
            </span>
          </div>
        </header>
        <section className='xl:container mx-auto w-full overflow-hidden '>
          <div className=' grid-cols-1 lg:grid-cols-4 grid gap-10 p-4'>
            <div className='bg-white px-4 md:px-10 py-2 md:py-16 rounded-md flex-col gap-6 flex col-span-3 card'>
              <figure className="w-full">
                <div className="h-[500px] w-full relative">
                  <Image
                    fill
                    className="object-cover rounded-md"
                    alt="Preventing Roof Leaks"
                    src="/images/hero_bg_1.jpg"
                  />
                </div>
                <figcaption className="text-sm text-center text-gray-500 mt-2">
                  {blog?.title}
                </figcaption>
              </figure>
              {(blog.content as Blog['content']).map((section, index) => (
                <section key={index} className="">
                  <h2 className="!text-2xl font-bold mb-4">{section.heading}</h2>

                  {section.body && (
                    <p className="text-base leading-relaxed mb-4">
                      {section.body}
                    </p>
                  )}

                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="list-disc pl-6 mb-4  decoration-amber-600">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.quote && (
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mb-4 text-xl">
                      “{section.quote}”
                    </blockquote>
                  )}

                  {section.table && section.table.length > 0 && (
                    <div className="overflow-x-auto mb-4">
                      <table className="min-w-full border-collapse border border-gray-300">
                        <tbody>
                          {section.table.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, colIndex) => (
                                <td key={colIndex} className="border border-gray-300 p-2">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>
            {/* SIDE BARE SECTION */}
            <div className='sr-only lg:not-sr-only md:flex md:flex-col h-fit gap-8'>
              <SideBar />
            </div>
          </div>
        </section>
      </article>
      <JsonLd data={jsonLdData} />
    </main>
  )
}
