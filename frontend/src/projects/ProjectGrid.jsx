import ProjectCard from "./ProjectCard"

function ProjectGrid({ projects }) {

    if (!projects.length) {
        return (
            <p className="text-center text-gray-500 py-10">
                No projects found.
            </p>
        )
    }

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((project) => (

                <ProjectCard
                    key={project.slug}
                    project={project}
                />

            ))}

        </div>
    )
}

export default ProjectGrid