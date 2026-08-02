function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

        <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-52 object-cover"
        />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {project.short_description}
        </p>

        <button className="mt-6 text-blue-600 font-semibold hover:underline">
          View Project →
        </button>

      </div>

    </div>
  )
}

export default ProjectCard