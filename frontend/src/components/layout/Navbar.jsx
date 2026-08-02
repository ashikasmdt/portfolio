import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">
            ASHIK
          </h1>

          <p className="text-sm text-gray-500">
            Python Full Stack Developer
          </p>
        </div>


        {/* Navigation */}
        <div className="flex gap-8">

          <Link 
            className="hover:text-blue-600 transition"
            to="/"
          >
            Home
          </Link>


          <Link 
            className="hover:text-blue-600 transition"
            to="/about"
          >
            About
          </Link>


          <Link 
            className="hover:text-blue-600 transition"
            to="/projects"
          >
            Projects
          </Link>


          <Link 
            className="hover:text-blue-600 transition"
            to="/contact"
          >
            Contact
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar