import Header from '@/components/Header'
import { projectsData } from '@/data/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return Object.keys(projectsData).map(slug => ({ slug }))
}

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projectsData[slug]

  if (!project) return notFound()

  return (
    <main className="flex flex-col gap-20">
      <Header title={project.title} desc={project.description} />
      <section>

      </section>
    </main>
  )
}