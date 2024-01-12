import Design from "../assets/design-icon.png";
import Developing from "../assets/developing-icon.png";
import Event from "../assets/event-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-[#78a7ad]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500">
            Skills
          </p>
          <p className="py-4">Take a look at my experiences</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-8">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 p-4">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold">Developing</p>
            <p className="my-4 text-left">
            A passionate and dedicated developer, I have solid skills in HTML, CSS and JavaScript, as well as practical experience in frameworks such as ReactJS and NodeJS. With a technical background in Full Stack Development and experience in projects, I am versatile, collaborative and am constantly improving my skills to create innovative and impactful solutions.
            </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 p-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Design</p>
            <p className="my-4 text-left">
            Versatile designer with proficiency in Figma and Canva, my creative approach is driven by color palette and the search for visually impactful solutions. With graphic design skills and an innovative mind, I am committed to transforming concepts into engaging visual experiences. My creativity combined with mastery of design tools results in aesthetically attractive and functional projects.
            </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 p-4">
            <img className="w-10 mx-auto" src={Event} alt="Event icon" />
            <p className="my-4 font-semibold">soft skills</p>
            <p className="my-4 text-left">
            With exceptional interpersonal communication skills, persuasion and a proactive stance, I excel at conflict resolution and remain calm under pressure. Demonstrating a strong sense of leadership, I integrate analytical skills to contribute positively in challenging environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
