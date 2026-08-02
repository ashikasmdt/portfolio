function Pagination({ next, previous, onPageChange }) {


    return (

        <div className="flex justify-center gap-4 mt-12">


            <button
                disabled={!previous}
                onClick={() => onPageChange(previous)}
                className="
                    px-5
                    py-2
                    rounded-lg
                    bg-gray-200
                    disabled:opacity-50
                "
            >
                Previous
            </button>


            <button
                disabled={!next}
                onClick={() => onPageChange(next)}
                className="
                    px-5
                    py-2
                    rounded-lg
                    bg-blue-600
                    text-white
                    disabled:opacity-50
                "
            >
                Next
            </button>


        </div>

    )

}


export default Pagination