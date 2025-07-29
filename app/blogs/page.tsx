import Header from '@/components/Header';
import Pagination from '@/components/pagination';
import SideBar from '@/components/SideBar';
import { navItems, siteName } from '@/data/constants';
import Link from 'next/link';
import React from 'react';
import { MdCalendarMonth, MdTimer } from 'react-icons/md';

const blogs = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Roofing Tips #${i + 1}`,
  slug: `roofing-tips-${i + 1}`,
  description: 'Learn effective ways to maintain your roof and avoid costly repairs.',
  date: '2025-07-29',
  author: 'Total Care Roofing',
}));

const page = () => {
  return (
    <main className='flex flex-col gap-10'>
      <Header cta={false} desc={''} title={'Our Blogs'} />
      <section className='container w-full mx-auto p-4' >
        <div className='grid-cols-4 grid gap-10 p-4'>
          <div className='col-span-3'>
            <ul className='flex-col flex gap-6 '>
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <article className='rounded-md shadow-sm border border-primary/30 flex-col gap-4 bg-white p-4'>
                    <header className='mb-2'>
                      <h2 className='!text-xl font-semibold'>
                        {blog.title}
                      </h2>
                      <div className="text-sm font-medium  flex flex-wrap items-center gap-4 mt-2">
                        <span>By <span className="font-bold ">{siteName}</span></span>
                        <span className="flex items-center gap-1 ">
                          <MdCalendarMonth  className='text-secondary' size={16} /> <span className="font-bold ">July 29, 2025</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MdTimer className='text-secondary' size={16} />  <span className=" font-bold ">5 Minute read </span>
                        </span>
                      </div>
                    </header>
                    <div className='mb-2'>
                      <p className='text-gray-700'>{blog.description}</p>
                    </div>
                    <Link href={`/blogs/${blog.slug}`} className='hover:underline text-primary font-bold'>Continue Reading</Link>
                  </article>
                </li>
              ))}
            </ul>

            <div className='mt-8 flex justify-center bg-white shadow-md p-6 border-primary/30 border rounded-md'>
              <Pagination totalPages={10} currentPage={1} />
            </div>
          </div>
          <div className='h-fit flex flex-col gap-8'>
            <SideBar/>
          </div>

        </div>



      </section>
    </main>
  );
};

export default page;