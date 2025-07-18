function Navbar() {
  return (
    <>
      <nav className="bg-gradient-to-r from-[#183a37] via-[#0a0a2d] to-[#0a4148] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Name */}
          <div className="text-white text-xl font-bold">
            Mahlathini Tebatso
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-200 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
