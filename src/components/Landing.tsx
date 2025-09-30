import About from "../pages/About";
import Home from "../pages/Home";

function Landing() {
  const sectionButtonClass = "w-50 h-14 bg-[#DED3C4] text-[#3ec714] rounded text-3xl font-bold mb-4";

  return (
    <div className="min-h-screen">
      <div id="home" className="container mx-auto p-6">
        <Home />
      </div>

      <div id="about" className="container mx-auto p-6">
        <button className={sectionButtonClass}>About Me</button>
        <About />
      </div>

      <div id="skills" className="container mx-auto p-6">
        <button className={sectionButtonClass}>Skills</button>
        <p className="text-gray-100 mb-4 text-lg">Here are some of my skills...</p>
      </div>

      <div id="projects" className="container mx-auto p-6">
        <button className={sectionButtonClass}>Projects</button>
        <p className="text-gray-100 mb-4 text-lg">Here are some of my projects...</p>
      </div>

      <div id="contact" className="container mx-auto p-6">
        <button className={sectionButtonClass}>Contact</button>
        <p className="text-gray-100 mb-4 text-lg">Contact form or details here...</p>
      </div>
    </div>
  );
}


export default Landing;
