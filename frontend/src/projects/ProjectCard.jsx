import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="
        group
        block
        bg-white
        rounded-xl
        overflow-hidden
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Project Thumbnail */}
      {project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-52 object-cover"
        />
      ) : (
        <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}

      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-gray-900">
          {project.title}
        </h3>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((technology) => (
            <span
              key={technology.name}
              className="
                bg-blue-100
                text-blue-700
                text-sm
                font-medium
                px-3
                py-1
                rounded-full
              "
            >
              {technology.name}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          {project.short_description}
        </p>

        {/* View Project */}
        <div className="mt-6">
          <span className="text-blue-600 font-semibold group-hover:underline">
            View Project →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;