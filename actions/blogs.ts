"use server";
import prisma from "@/lib/prisma";

export async function getAllBlogs(currentPage:number) {
  const pageSize = 8;
  const skip = (currentPage - 1) * pageSize;
  const [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        slug: true,
        title: true,
        seo_description: true,
        seo_title:true,
        read_time: true,
        createdAt: true,
      },
    }),
    prisma.blog.count(),
  ]);

  const totalPages = Math.ceil(total / pageSize);
  console.log(blogs.length)
  console.log(currentPage)
  return {
    blogs,
    pagination: {
      currentPage,
      pageSize,
      totalPages,
      totalItems: total,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    },
  };
  
}

export async function getBlog(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });
  return blog;
}
// dummyblog =  {
//   title: "Roofing Basics for Homeowners",
//   read_time: '5 minutes',
//   metadata: {
//     category: "Home Improvement",
//   },
//   image: '/images/hero_bg_1.jpg',
//   seo: {
//     title: "Roofing Basics for Homeowners",
//     description: "Learn the essentials of roofing for homeowners: types, maintenance tips, common problems, and when to call a professional."
//   },
//   content: [
//     {
//       heading: "Introduction to Roofing",
//       body: "Your roof is more than just a shelter overhead — it's your home’s first line of defense against the elements. A strong, well-maintained roof protects your family and belongings from rain, wind, snow, and sun. It also plays a key role in regulating indoor temperatures, improving energy efficiency, and preventing costly damage. Understanding how your roofing system works and what it needs to stay in good shape can save you thousands in repairs and improve your home's value over time.",
//       listItems: null,
//       table: null,
//       quote: null,
//     },
//     {
//       heading: "Common Roofing Materials",
//       body:
//         "When it comes to choosing roofing materials, homeowners are faced with a wide variety of options. Each type has its own advantages in terms of cost, durability, maintenance needs, and aesthetics. Asphalt shingles are among the most popular because of their affordability and ease of installation. Metal roofs offer superior longevity and fire resistance, while clay tiles are known for their traditional beauty and exceptional lifespan. Wood shakes provide a rustic charm, and slate is prized for both its natural appearance and extreme durability. Understanding these options helps you choose the right roof for your climate, budget, and design goals.",
//       listItems: [
//         "Asphalt Shingles",
//         "Metal Roofing",
//         "Clay and Concrete Tiles",
//         "Wood Shakes",
//         "Slate",
//       ],
//       table: [
//         ["Material", "Lifespan", "Pros", "Cons"],
//         [
//           "Asphalt Shingles",
//           "15–30 years",
//           "Affordable, easy to install",
//           "Less durable than others",
//         ],
//         [
//           "Metal",
//           "40–70 years",
//           "Long lifespan, fire resistant",
//           "Higher upfront cost",
//         ],
//         [
//           "Clay Tiles",
//           "50–100 years",
//           "Excellent longevity",
//           "Heavy and expensive",
//         ],
//       ],
//       quote: null,
//     },
//     {
//       heading: "Signs Your Roof Needs Attention",
//       body:
//         "Most roofing problems start small, but they can escalate quickly if left unchecked. Spotting the early signs of roof trouble can prevent leaks, structural damage, and mold growth inside your home. Look for shingles that are missing, cracked, or curling up at the edges. Indoors, water stains on the ceiling, peeling paint, or unexplained dampness can all indicate a leak. Moss or algae on the roof surface might look harmless, but it can actually retain moisture and damage roofing materials over time. Regular roof inspections — even from ground level — can catch these issues before they become serious.",
//       listItems: [
//         "Missing or curling shingles",
//         "Water stains on ceilings",
//         "Moss or mold growth",
//         "Sagging areas",
//       ],
//       table: null,
//       quote: "Small roof issues today become big repair bills tomorrow.",
//     },
//     {
//       heading: "Roof Maintenance Tips",
//       body:
//         "Maintaining your roof doesn't have to be a complex or time-consuming task. With a few simple habits, you can extend your roof’s life and keep it performing well year after year. One of the most important tasks is cleaning your gutters regularly — clogged gutters can back up water and cause leaks near the roof edge. Trim trees that hang over your home to prevent branches from scraping or damaging shingles. Also, inspect flashing (the metal strips around chimneys and vents) to ensure they’re sealed properly. A quick check after major storms can also help you spot and fix damage early.",
//       listItems: [
//         "Clean your gutters seasonally",
//         "Trim overhanging branches",
//         "Check flashing around chimneys and vents",
//         "Look for signs of animal intrusion",
//       ],
//       table: null,
//       quote: null,
//     },
//     {
//       heading: "When to Call a Roofing Professional",
//       body:
//         "Some roof issues can be handled with a little DIY knowledge, but others are best left to the pros. If you notice large leaks, extensive shingle loss, structural sagging, or visible damage after a storm, it’s time to call a professional roofing contractor. Experts can safely access your roof, identify the root cause of problems, and recommend repairs that meet building codes. Trying to fix serious issues on your own could not only be dangerous, but it might also void your home insurance or warranty. A good rule of thumb: if you're unsure, it's better to get a professional opinion.",
//       listItems: null,
//       table: null,
//       quote:
//         "If you're climbing the roof more often than using your ladder for decor, it's time to call the pros.",
//     },
//     {
//       heading: "Conclusion",
//       body:
//         "A well-maintained roof means peace of mind for any homeowner. By learning about the different materials, recognizing warning signs, and keeping up with basic maintenance, you’ll be better prepared to take care of one of your home’s most vital systems. And when repairs go beyond what you can safely handle, don’t hesitate to reach out to an experienced professional. Investing time and attention into your roof now can prevent major costs — and headaches — later.",
//       listItems: null,
//       table: null,
//       quote: null,
//     },
//   ],

// }