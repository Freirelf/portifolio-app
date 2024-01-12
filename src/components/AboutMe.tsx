import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Lucas, nice to meet you. Pleace take a look around.</p>
          </div>
          <div>
            <p>I bring a passion for creative initiatives that not only drive positive social change but also illuminate trajectories for a better future. My ability to resolve challenges and dedication are the lighthouses that put me in a position to navigate unknown scenarios, like an experienced navigator in unexplored waters.</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/Freirelf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mx-4"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-freire-879814205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mx-4"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
