import { useState } from "react"

function ProjectSearch({ onSearch }) {

    const [value, setValue] = useState("")


    const handleChange = (event) => {

        const searchValue = event.target.value

        setValue(searchValue)

        onSearch(searchValue)

    }


    return (
        <div className="mb-10">

            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search projects..."
                className="
                    w-full
                    border
                    rounded-lg
                    px-5
                    py-3
                    text-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "
            />

        </div>
    )
}

export default ProjectSearch