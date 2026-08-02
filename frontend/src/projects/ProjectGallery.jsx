import { useState } from "react"

function ProjectGallery({ images }) {

    if (!images || images.length === 0) {
        return null
    }

    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
        <section className="mt-16">

            <h2 className="text-3xl font-bold mb-8">
                Project Gallery
            </h2>

            {/* Large Preview */}
            <div className="overflow-hidden rounded-xl shadow-lg">

                <img
                    src={selectedImage.image}
                    alt={selectedImage.caption || "Project"}
                    className="w-full h-[550px] object-cover transition-all duration-300"
                />

            </div>

            {selectedImage.caption && (
                <p className="mt-4 text-center text-gray-600">
                    {selectedImage.caption}
                </p>
            )}

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                {images.map((image, index) => (

                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`
                            overflow-hidden
                            rounded-lg
                            border-4
                            transition-all
                            duration-200

                            ${
                                selectedImage.image === image.image
                                    ? "border-blue-600"
                                    : "border-transparent hover:border-gray-300"
                            }
                        `}
                    >

                        <img
                            src={image.image}
                            alt={image.caption || "Thumbnail"}
                            className="w-full h-32 object-cover"
                        />

                    </button>

                ))}

            </div>

        </section>
    )
}

export default ProjectGallery