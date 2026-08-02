import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Technologies from "../components/sections/Technologies";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

function Home() {

    return (

        <>
            <Navbar />

            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Contact />

            <Footer />
        </>
    )
}

export default Home;