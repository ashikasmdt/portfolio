function ProjectOrdering({ onOrderingChange }) {

    const handleChange = (event) => {

        onOrderingChange(event.target.value)

    }


    return (

        <div className="mb-10">

            <select
                onChange={handleChange}
                className="
                    border
                    rounded-lg
                    px-4
                    py-3
                    bg-white
                "
            >

                <option value="">
                    Default
                </option>

                <option value="title">
                    Name A-Z
                </option>

                <option value="-title">
                    Name Z-A
                </option>


            </select>

        </div>

    )
}

export default ProjectOrdering