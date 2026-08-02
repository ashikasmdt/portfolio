import { useEffect, useState } from "react"

import { getProjects } from "../services/projectService"

import ProjectGrid from "../projects/ProjectGrid"

function Projects() {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        getProjects()

            .then((response) => {

                setProjects(response.data.results)

            })

            .catch(() => {

                setError("Unable to load projects.")

            })

            .finally(() => {

                setLoading(false)

            })

    }, [])

    if (loading) {
        return <h2 className="p-10">Loading...</h2>
    }

    if (error) {
        return <h2 className="p-10">{error}</h2>
    }

    return (

        <section className="max-w-7xl mx-auto px-8 py-20">

            <h1 className="text-5xl font-bold mb-12">

                Projects

            </h1>

            <ProjectGrid projects={projects} />

        </section>

    )
}

export default Projects