import { useEffect, useState } from "react";
import { getTechnologies } from "../../services/technologyService";

function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryLabels = {
    FRONTEND: "Frontend Development",
    BACKEND: "Backend Development",
    DATABASE: "Database",
    TOOL: "Development Tool",
  };

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await getTechnologies();
        setTechnologies(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-500 text-lg">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-red-600 text-lg">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Technologies
          </h2>

          <p className="mt-3 text-gray-500">
            Technologies I use to build modern, scalable, and efficient web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="
                bg-white
                rounded-xl
                shadow-md
                p-6
                text-center
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {technology.icon ? (
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-16 h-16 mx-auto object-contain"
                />
              ) : (
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  ?
                </div>
              )}

              <h3 className="text-xl font-semibold mt-4">
                {technology.name}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {categoryLabels[technology.category] ?? technology.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;