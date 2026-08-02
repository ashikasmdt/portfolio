import { useEffect, useState } from "react"

import { getTechnologies } from "../../services/technologyService"


function Technologies() {

  const [technologies, setTechnologies] = useState([])


  useEffect(() => {

    getTechnologies()
      .then((response) => {
        setTechnologies(response.data.results)
      })

      .catch((error) => {
        console.log(error)
      })

  }, [])


  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold">
          Technologies
        </h2>


        <div className="mt-8 grid md:grid-cols-3 gap-6">

          {
            technologies.map((technology) => (
              
                <div
                    key={technology.id}
                    className="
                        bg-white
                        rounded-xl
                        shadow-md
                        p-6
                        text-center
                        hover:shadow-xl
                        transition
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


                    <p className="text-gray-500 mt-2">
                        {technology.category}
                    </p>

                </div>

            ))
          }

        </div>


      </div>

    </section>
  )
}

export default Technologies