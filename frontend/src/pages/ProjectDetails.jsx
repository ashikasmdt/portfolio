import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getProject } from "../services/projectService"
import ProjectGallery from "../projects/ProjectGallery"
import ProjectActions from "../projects/ProjectActions"

function ProjectDetails() {
    const { slug } = useParams()

    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getProject(slug)
            .then((response) => {
                setProject(response.data)
            })
            .catch(() => {
                setError("Project not found.")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [slug])

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto py-20 px-8">
                <h2 className="text-2xl font-semibold">
                    Loading project...
                </h2>
            </div>
        )
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto py-20 px-8">
                <h2 className="text-2xl text-red-600">
                    {error}
                </h2>
            </div>
        )
    }

    return (
        <section className="max-w-7xl mx-auto py-20 px-8">

            <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-[500px] object-cover rounded-xl"
            />

            <h1 className="text-5xl font-bold mt-10">
                {project.title}
            </h1>

            <p className="text-gray-600 text-lg mt-4">
                {project.short_description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
                {project.technologies.map((technology) => (
                    <span
                        key={technology.name}
                        className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                    >
                        {technology.name}
                    </span>
                ))}
            </div>

            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">
                    About this project
                </h2>

                <p className="leading-8 text-gray-700 whitespace-pre-line">
                    {project.full_description}
                </p>
            </div>

            <ProjectGallery images={project.images} />
            <ProjectActions
                githubUrl={project.github_url}
                liveDemoUrl={project.live_demo_url}
            />

        </section>
    )
}

export default ProjectDetails