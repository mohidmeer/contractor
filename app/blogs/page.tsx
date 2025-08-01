import { getAllBlogs } from '@/actions/blogs';
import AreaOfServices from '@/components/AreaOfServices';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import Pagination from '@/components/pagination';
import SideBar from '@/components/SideBar';
import { pages, siteName, siteUrl } from '@/data/constants';
import Link from 'next/link';
import { MdCalendarMonth, MdTimer } from 'react-icons/md';

type Props = {
  searchParams: Promise<{ page? : 1 }>
};
const page = async ({ searchParams }: Props) => {

  const { page } = await searchParams
  const { blogs, pagination } = await getAllBlogs(page || 1);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pages.blog.seo.title,
    description: pages.blog.seo.description,
    url: siteUrl + 'blogs',
    hasPart: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.seo_title,
      description: blog.seo_description,
      datePublished: blog.createdAt,
      url: `${siteUrl}blogs/${blog.slug}`,
      author: {
        "@type": "Organization",
        name: siteName,
      },
    })),
  };

  return (
    <main className='flex flex-col gap-10'>
      <Header cta={false} desc={pages.blog.seo.description} title={'Our Blogs'} />
      <section className='container w-full mx-auto p-4'>
        <div className='lg:grid-cols-4 grid gap-10 p-4'>
          <div className='col-span-3'>
            <ul className='flex-col flex gap-6 '>
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <article className='rounded-md shadow-sm  flex-col gap-4 bg-white p-4 card'>
                    <header className='mb-2'>
                      <h2 className='!text-xl font-semibold'>{blog.title}</h2>
          
                      <div className="text-sm font-medium flex flex-wrap items-center gap-4 mt-2">
                        <span>By <span className="font-bold">{siteName}</span></span>
                        <span className="flex items-center gap-1">
                          <MdCalendarMonth className='text-secondary' size={16} />
                          <span className="font-bold">{new Date(blog.createdAt).toDateString()}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MdTimer className='text-secondary' size={16} />
                          <span className="font-bold">{blog.read_time}</span>
                        </span>
                      </div>
                    </header>
                    <div className='mb-2'>
                      <p className='text-gray-700'>{blog.seo_description}</p>
                    </div>
                    <Link href={`/blogs/${blog.slug}`} className='hover:underline text-primary font-bold'>Continue Reading</Link>
                  </article>
                </li>
              ))}
            </ul>

            <div className='mt-8 flex justify-center bg-white shadow-md p-6 border-primary/30 border rounded-md'>
              <Pagination totalPages={pagination.totalPages} currentPage={pagination.currentPage} />
            </div>
          </div>
          <div className='sr-only lg:not-sr-only md:flex md:flex-col h-fit gap-8'>
            <SideBar />
          </div>
        </div>
      </section>
      <AreaOfServices/>
      <JsonLd data={jsonLdData} />
    </main>
  );
};

export default page;