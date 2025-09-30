// components/Navbar.tsx
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = async (id: string | null) => {
    if (location.pathname !== "/") {
      await navigate("/");
      setTimeout(() => {
        if (id) {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
        }
      }, 100);
    } else {
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#080808] via-[#8d99ae] to-[#080808] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Mahlathini Tebatso</div>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => handleScrollTo(null)}
              className="text-white hover:text-gray-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("about")}
              className="text-white hover:text-gray-200"
            >
              About
            </button>
          </li>
           <li>
            <button
              onClick={() => handleScrollTo("skills")}
              className="text-white hover:text-gray-200"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("projects")}
              className="text-white hover:text-gray-200"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("contact")}
              className="text-white hover:text-gray-200"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
