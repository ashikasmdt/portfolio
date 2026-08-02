import { useEffect, useState } from "react"

import { getFeaturedProjects } from "../../services/projectService"
import ProjectCard from "../../projects/ProjectCard"

import { Link } from "react-router-dom"

function FeaturedProjects() {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    getFeaturedProjects()
      .then((response) => {
        setProjects(response.data.results)
      })
      .catch(() => {
        setError("Failed to load featured projects.")
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p>Loading projects...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p>{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between mb-10">

            <div>

                <h2 className="text-4xl font-bold">
                Featured Projects
                </h2>

                <p className="text-gray-500 mt-2">
                A selection of projects that showcase my skills and experience.
                </p>

            </div>

            <Link
                    to="/projects"
                    className="
                        bg-blue-600
                        text-white
                        px-5
                        py-3
                        rounded-lg
                        hover:bg-blue-700
                        transition
                    "
                    >
                    View All Projects
                </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedProjects