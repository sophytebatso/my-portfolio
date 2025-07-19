import About from "../pages/About";
import Home from "../pages/Home";


function Landing() {
  return (
    <div className="min-h-screen">
      <div id="home" className="container mx-auto p-6">
       <Home />
      </div>
    <div id="about" className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <About />
      </div>
     <div id="skills" className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
       <p className="text-gray-700">
        here are some of y skills ...
       </p>

      </div>
      <div id="projects" className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-700">Here are some of my projects...</p>
      </div>

     
      <div id="contact" className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700">Contact form or details here...</p>
      </div>
    </div>
  );
}

export default Landing;
