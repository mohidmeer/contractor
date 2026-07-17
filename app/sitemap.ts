import { serviceAreasData, siteUrl } from "@/data";
import type { MetadataRoute } from "next";
import prisma from "@/lib/prisma";
import { getSite } from "@/lib/site";

export const revalidate = 259200;

export async function getAllBlogs() {
  return await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      slug: true,
      createdAt: true,
    },
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = getSite();
  const blogs = await getAllBlogs();

  const [services, projects] = await Promise.all([
    prisma.service.findMany({
      where: { site },
      select: { slug: true, updatedAt: true },
    }),
    prisma.project.findMany({
      where: { site },
      select: { slug: true, updatedAt: true },
    }),
  ]);

  const serviceEntries = services.map((item) => ({
    url: `${siteUrl}services/${item.slug}`,
    lastModified: item.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectEntries = projects.map((item) => ({
    url: `${siteUrl}projects/${item.slug}`,
    lastModified: item.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicearea = serviceAreasData.map((key) => ({
    url: `${siteUrl}service-areas${key.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogSiteMap = blogs.map((blog) => ({
    url: `${siteUrl}blogs/${blog.slug}`,
    lastModified: blog.createdAt,
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: siteUrl + "services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...serviceEntries,
    {
      url: siteUrl + "projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectEntries,
    {
      url: siteUrl + "service-areas",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...servicearea,
    {
      url: siteUrl + "blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogSiteMap,
    {
      url: siteUrl + "about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: siteUrl + "contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
