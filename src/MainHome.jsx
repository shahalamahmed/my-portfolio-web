import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";




const MainHome = () => {
    
    return (
        <div >
          <div className=" fixed z-50 bg-[#191924] top-0 w-full "> <Navbar></Navbar></div>
            <div className="mt-[75px]"><HeroSection></HeroSection>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
            </div>
        </div>

        
    );
};

export default MainHome;