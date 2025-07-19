function Home() {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold mb-6">Hi.</h1>
<p className="text-black mb-4 text-lg font-medium">I'm Tebatso.</p>
        <h2 className="text-gray-800 text-2xl font-bold italic">
          Aspiring Software Developer
        </h2>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/profile.jpg" // Replace with your image path
          alt="Tebatso"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
