import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/dom/Navbar";
import Hero from "./components/dom/Hero";
import About from "./components/dom/About";
import Works from "./components/dom/Works";
import Contact from "./components/dom/Contact";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary min-h-screen w-screen overflow-x-hidden text-white">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Works />
                <div className='relative z-0'>
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
