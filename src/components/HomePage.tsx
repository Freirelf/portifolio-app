import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'
import profile from '../assets/perfil1.png';

export const HomePage = () => {
  const navigate = useNavigate()

  const redirectToProjects = () => {
    navigate("/projects")
  }

  return (
    <div id="home" className="flex w-full h-screen bg-[#edede9]">
      <div className="flex flex-col justify-center max-w-[800px] mx-auto px-8 sm:px-20">
        <div className="flex flex-col">
          <p className="text-black">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
            Lucas Freire
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#848794]">
            I'm a web developer.
          </h2>
          <p className="text-[#848794] py-4 max-w-[700px]">
            Thanks for visiting my page, feel free to check out my portfolio
          </p>
          <div>
            <button onClick={redirectToProjects} className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex ">
        <img className="w-full h-auto rounded-3xl mt-20" src={profile} alt="" />
      </div>
    </div>
  );
};
