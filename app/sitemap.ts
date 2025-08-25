import { serviceAreasData, siteUrl } from '@/data'
import { projectsData } from '@/data';
import { servicesData } from '@/data'
import type { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

export const revalidate = 259200


export async function getAllBlogs() {
    return await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' },
        select: {
            slug: true,
            createdAt: true,
        },
    });
}

const services = Object.keys(servicesData).map((key) => ({
    url: `${siteUrl}services/${key}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
}));
const projects = Object.keys(projectsData).map((key) => ({
    url: `${siteUrl}services/${key}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
}));
const servicearea = serviceAreasData.map((key) => ({
    url: `${siteUrl}service-areas${key.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
}));


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const blogs = await getAllBlogs();

    const blogSiteMap = blogs.map((blog) => ({
        url: `${siteUrl}blogs/${blog.slug}`,
        lastModified: blog.createdAt,
        changeFrequency: 'never' as const,
        priority: 0.7,
    }));

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: siteUrl + 'services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...services,
        {
            url: siteUrl + 'projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...projects,
        {
            url: siteUrl + 'service-areas',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...servicearea,
        {
            url: siteUrl + 'blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogSiteMap,
        {
            url: siteUrl + 'about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: siteUrl + 'contact',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },


    ]
}