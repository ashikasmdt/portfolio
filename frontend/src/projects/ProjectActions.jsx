function ProjectActions({ githubUrl, liveDemoUrl }) {
    return (
        <section className="mt-16">

            <div className="flex flex-wrap gap-4">

                {liveDemoUrl && (
                    <a
                        href={liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-6
                            py-3
                            rounded-lg
                            font-semibold
                            transition
                        "
                    >
                        🌐 Live Demo
                    </a>
                )}

                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            border
                            border-gray-800
                            hover:bg-gray-900
                            hover:text-white
                            text-gray-800
                            px-6
                            py-3
                            rounded-lg
                            font-semibold
                            transition
                        "
                    >
                        💻 GitHub Repository
                    </a>
                )}

            </div>

        </section>
    )
}

export default ProjectActions