import food from "../../assets/food.png";
import liftlab from "../../assets/liftlab.png";
import art from "../../assets/art.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  return (
    <div id="project" className="max-w-[1300px] mx-auto  lg:mt-20 md:mt-5 ">
      <h1 className="text-white text-[42px] font-semibold text-center ">
        Projects
      </h1>

      <p className="md:text-[20px] text-[17px] text-center  mt-3 leading-8 text-[#F2F3F494]">
        Each project is a unique piece of development
      </p>
      <div>
        {/* 1st project */}
        <div className="mt-8 md:mt-4 p-3">
          <div className="flex md:flex-row flex-col md:p-5 p-3 lg:gap-0 md:gap-3 ">
            <div className="flex-1 flex lg:justify-start justify-center">
              <img
                className="w-[600px] rounded-md h-[350px]"
                src={liftlab}
                alt=""
              />
            </div>
            <div className="flex-1  flex items-center">
              <div>
                <h1 className="text-center lg:text-2xl md:text-xl text-lg text-white font-semibold md:mt-0 mt-5">
                  LiftLab
                </h1>
                <h1 className="lg:text-[20px] md:text-[16px] text-[15px] text-center  md:mt-3 leading-8 text-[#F2F3F494]">
                Welcome to our gym-focused website, your ultimate destination for health and fitness. Whether you're a beginner or an experienced athlete, our comprehensive guides, workout plans, and nutrition tips are designed to help you achieve your fitness goals. Discover effective routines, stay motivated, and transform your lifestyle with our expert advice. Join our community and start your journey to a healthier, fitter you today!
                </h1>
                <div className="flex gap-6 justify-center lg:mt-8 md:mt-5 mt-4 ">
                  <a
                    href="https://github.com/programming-hero-web-course1/b9a12-client-side-Rejuan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaGithub className="text-lg text-white" /> Front-End Code
                  </a>

                  <a
                    href="https://github.com/programming-hero-web-course1/b9a12-server-side-Rejuan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaGithub className="text-lg text-white" /> Back-End Code
                  </a>

                  <a
                    href="https://lift-lab-baec7.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaExternalLinkAlt className="text-lg text-white" /> Live
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd project */}
        <div className="mt-8 md:mt-4 p-3">
          <div className="flex md:flex-row flex-col md:p-5 p-3 lg:gap-0 md:gap-3 ">
            <div className="flex-1  flex items-center">
              <div>
                <h1 className="text-center lg:text-2xl md:text-xl text-lg text-white font-semibold md:mt-0 mt-5">
                  Food Unity{" "}
                </h1>
                <h1 className="lg:text-[20px] md:text-[16px] text-[15px] text-center  md:mt-3 leading-8 text-[#F2F3F494]">
                Welcome to our food donation website, dedicated to fighting hunger and providing nourishment to those in need. Through your generous contributions, we deliver nutritious meals to the poor, ensuring no one goes hungry. Join our mission to make a difference, support local communities, and bring hope to countless lives. Together, we can create a world where everyone has access to healthy food.
                </h1>
                <div className="flex gap-6 justify-center lg:mt-8 md:mt-5 mt-4 ">
                  <a
                    href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-Rejuan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaGithub className="text-lg text-white" /> Front-End Code
                  </a>

                  <a
                    href="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-Rejuan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaGithub className="text-lg text-white" /> Back-End Code
                  </a>

                  <a
                    href="https://food-unity-539db.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaExternalLinkAlt className="text-lg text-white" /> Live
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 md:-order-none order-first flex lg:justify-start justify-center  ">
              <img
                className="w-[600px] rounded-md  h-[350px]"
                src={food}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 3rd project */}
        <div className="mt-8 md:mt-4 p-3">
          <div className="flex md:flex-row flex-col md:p-5 p-3 lg:gap-0 md:gap-3 ">
            <div className="flex-1 flex lg:justify-start justify-center">
              <img
                className="w-[600px] rounded-md h-[350px]"
                src={art}
                alt=""
              />
            </div>
            <div className="flex-1  flex items-center">
              <div>
                <h1 className="text-center lg:text-2xl md:text-xl text-lg text-white font-semibold md:mt-0 mt-5">
                  Art & Craft Avenue
                </h1>
                <h1 className="lg:text-[20px] md:text-[16px] text-[15px] text-center  md:mt-3 leading-8 text-[#F2F3F494]">
                Welcome to our art and craft website, where creativity meets craftsmanship in textile making. Explore a world of unique designs and handmade textile clothes, crafted with passion and precision. From traditional techniques to modern innovations, we offer tutorials, patterns, and inspiration to fuel your artistic journey. Join our community and discover the joy of creating beautiful, one-of-a-kind textiles.
                </h1>
                <div className="flex flex-wrap gap-6 justify-center lg:mt-8 md:mt-5 mt-4 ">
                  <a
                    href="https://github.com/programming-hero-web-course-4/B9A10-client-side-Rejuan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaGithub className="text-lg text-white" /> Code
                  </a>
                  <a
                    href="https://art-and-craft-avenue.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaExternalLinkAlt className="text-lg text-white" /> Live
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
