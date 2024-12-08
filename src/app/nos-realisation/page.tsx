import { ProjectService } from '@/services/projectService';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

async function getProjects() {
  try {
    const projects = await ProjectService.getProjects();
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function RealisationsPage() {
  const projects = await getProjects();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Réalisations</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Découvrez nos projets d'installation de panneaux solaires réalisés pour nos clients.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project: any) => (
            <article key={project._id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={project.completionDate} className="text-gray-500">
                    {new Date(project.completionDate).toLocaleDateString('fr-FR')}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {project.clientType}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/nos-realisation/${project.slug}`}>
                      <span className="absolute inset-0" />
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                </div>
                <div className="mt-4 flex gap-x-4">
                  <div className="text-sm font-medium text-gray-900">
                    Puissance: {project.powerCapacity} kWc
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    Surface: {project.specifications.surface} m²
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
