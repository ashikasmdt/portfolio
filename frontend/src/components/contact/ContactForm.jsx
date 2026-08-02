import { useState } from "react"

import { sendContactMessage } from "../../services/contactService"


function ContactForm() {


    const [formData, setFormData] = useState({

        name: "",

        email: "",

        message: ""

    })


    const [status, setStatus] = useState("")



    const handleChange = (event) => {

        setFormData({

            ...formData,

            [event.target.name]: event.target.value

        })

    }



    const handleSubmit = (event) => {

        event.preventDefault()


        sendContactMessage(formData)

            .then(() => {

                setStatus(
                    "Message sent successfully!"
                )


                setFormData({

                    name: "",

                    email: "",

                    message: ""

                })

            })

            .catch(() => {

                setStatus(
                    "Something went wrong."
                )

            })

    }



    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >

            <input

                type="text"

                name="name"

                value={formData.name}

                onChange={handleChange}

                placeholder="Your Name"

                className="w-full border rounded-lg px-4 py-3"

            />


            <input

                type="email"

                name="email"

                value={formData.email}

                onChange={handleChange}

                placeholder="Your Email"

                className="w-full border rounded-lg px-4 py-3"

            />


            <textarea

                name="message"

                value={formData.message}

                onChange={handleChange}

                placeholder="Your Message"

                rows="5"

                className="w-full border rounded-lg px-4 py-3"

            />


            <button

                type="submit"

                className="
                    bg-blue-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                "

            >

                Send Message

            </button>


            {
                status && (
                    <p>
                        {status}
                    </p>
                )
            }


        </form>

    )

}


export default ContactForm