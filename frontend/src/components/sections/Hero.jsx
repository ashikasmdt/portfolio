import { Link } from "react-router-dom"


function Hero() {
  return (
    <section className="bg-gray-900 text-white py-24">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">


        {/* Text Content */}
        <div>

          <h1 className="text-5xl font-bold">
            Hi, I'm Ashik
          </h1>


          <h2 className="text-3xl mt-4 text-blue-400">
            Python Full Stack Developer
          </h2>


          <p className="mt-6 text-gray-300 max-w-xl">
            I build scalable and user-friendly web applications
            using Python, Django, React, and modern technologies.
          </p>


          <div className="mt-8 flex gap-4">

            <Link
              to="/projects"
              className="bg-blue-600 px-6 py-3 rounded-lg"
            >
              View Projects
            </Link>


            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Contact Me
            </Link>

          </div>

        </div>


        {/* Image Placeholder */}
        <div className="flex justify-center">

          <div className="w-64 h-64 rounded-full bg-gray-700">
          </div>

        </div>


      </div>

    </section>
  )
}

export default Hero