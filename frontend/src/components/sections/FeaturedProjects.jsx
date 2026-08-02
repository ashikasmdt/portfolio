import { useEffect, useState } from "react"

import { getFeaturedProjects } from "../../services/projectService"
import ProjectCard from "../../projects/ProjectCard"

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

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

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