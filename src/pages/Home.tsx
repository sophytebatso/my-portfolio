import TempProfile from "../assets/images/TempProfile.jpg"

function Home() {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-[#cec7ce]  text-5xl font-bold mb-6">Hi.</h1>
<p className="text-[#FFFFFF]  mb-3 text-lg font-medium">I'm Tebatso.</p>
        <h2 className="text-[#3ec714]  text-4xl font-bold italic mb-8">
          Aspiring Software Developer
        </h2>
        <button className="bg-[#3ec714] text-white py-2 px-4 rounded ">My Resume</button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
      <img
  src={TempProfile}
  alt="Tebatso"
  className="rounded-lg shadow-lg w-full h-auto object-cover"
/>
      </div>
    </div>
  );
}

export default Home;
