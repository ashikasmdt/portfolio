import { useEffect, useState } from "react"

import { getProjects } from "../services/projectService"

import useDebounce from "../hooks/useDebounce"

import ProjectGrid from "../projects/ProjectGrid"
import ProjectSearch from "../projects/ProjectSearch"
import ProjectOrdering from "../projects/ProjectOrdering"
import Pagination from "../projects/Pagination"


function Projects() {

    const [projects, setProjects] = useState([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    const [search, setSearch] = useState("")

    const [ordering, setOrdering] = useState("")

    const [nextPage, setNextPage] = useState(null)

    const [previousPage, setPreviousPage] = useState(null)


    const debouncedSearch = useDebounce(search, 500)



    const fetchProjects = (params = {}) => {

        setLoading(true)

        getProjects(params)

            .then((response) => {

                setProjects(response.data.results)

                setNextPage(response.data.next)

                setPreviousPage(response.data.previous)

            })

            .catch(() => {

                setError("Unable to load projects.")

            })

            .finally(() => {

                setLoading(false)

            })

    }



    useEffect(() => {

        fetchProjects({

            search: debouncedSearch,

            ordering: ordering

        })

    }, [debouncedSearch, ordering])



    const handleSearch = (value) => {

        setSearch(value)

    }



    const handleOrdering = (value) => {

        setOrdering(value)

    }



    const handlePageChange = (url) => {

        if (!url) return


        fetchProjects({

            url: url

        })

    }



    if (loading && projects.length === 0) {

        return (
            <h2 className="p-10">
                Loading...
            </h2>
        )

    }



    if (error) {

        return (
            <h2 className="p-10">
                {error}
            </h2>
        )

    }



    return (

        <section className="max-w-7xl mx-auto px-8 py-20">


            <h1 className="text-5xl font-bold mb-12">
                Projects
            </h1>



            <ProjectSearch
                onSearch={handleSearch}
            />



            <ProjectOrdering
                onOrderingChange={handleOrdering}
            />



            <ProjectGrid
                projects={projects}
            />



            <Pagination

                next={nextPage}

                previous={previousPage}

                onPageChange={handlePageChange}

            />


        </section>

    )

}


export default Projects