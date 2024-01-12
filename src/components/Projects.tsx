const projectsData = [
  {
    title: "Rt-news",
    description: "The rt.news project is a blog where users can access the content of each post according to their subscription status.",
    languages: ["JavaScript", "React"],
    githubLink: "https://github.com/Freirelf/rt-news",
  },
  {
    title: "Dashup",
    description: "Information panel, indicators and metrics important for the functioning of a company. The idea of this tool is to present the data in a visual and practical way, making it easier for everyone involved to understand.",
    languages: ["JavaScript", "React"],
    githubLink: "https://github.com/Freirelf/dashup",
  },
  {
    title: "Control Money",
    description: "Control Money is a simple and effective alternative for managing your finances, allowing you to register inflows and outflows and organize them into categories.",
    languages: ["React", "Typscritp",],
    githubLink: "https://github.com/Freirelf/control-money",
  },
  {
    title: "Your notes",
    description: "This project provides a way for you to archive notes, being able to filter them and add text content, studies, pending issues, among others, as you wish.",
    languages: ["JavaScript", "Typescript"],
    githubLink: "https://github.com/Freirelf/yournotes-web",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">

      <div className="sm:text-right pb-8 pl-4">
        <p className="text-4xl font-bold inline border-b-4 border-gray-700">
          Projects
        </p>
      </div>


        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 rounded-md transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-gray-400 mb-2">
                Languages: {project.languages.join(", ")}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
