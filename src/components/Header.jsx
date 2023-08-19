import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "bg-gray-700 text-gray-200" : "";
  };

  return (
    <header className="bg-gray-800 text-white border-0 border-b border-b-gray-950">
      <div className="container p-6 max-w-6xl mx-auto px-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-semibold">
            FashionHub
          </Link>
        </div>
        <nav className="p-0 md:px-4 font-semibold  flex items-center justify-between md: flex-grow">
          <div className="inline">
            <input
              type="text"
              placeholder="Search for products"
              className="border-none font-semibold text-white placeholder:text-gray-200 rounded-md bg-gray-600 py-2 px-4 focus:outline-none cursor-pointer"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={`py-2 px-4 border-2 rounded-md border-transparent hover:border-gray-200 hover:text-gray-200 ${isActive(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`py-2 px-4 border-2 rounded-md border-transparent hover:border-gray-200 hover:text-gray-200 ${isActive(
                "/products"
              )}`}
            >
              Products
            </Link>
            <Link
              to="/dashboard"
              className={`py-2 px-4 border-2 rounded-md border-transparent hover:border-gray-200 hover:text-gray-200 ${isActive(
                "/dashboard"
              )}`}
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className={`py-2 px-4 border-2 rounded-md border-transparent hover:border-gray-200 hover:text-gray-200 ${isActive(
                "/about"
              )}`}
            >
              About
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute top-12 right-0 bg-gray-800 border border-gray-700 rounded shadow-lg">
                <Link
                  to="/"
                  className={`block px-4 py-2 text-white hover:bg-gray-700 ${isActive(
                    "/"
                  )}`}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className={`block px-4 py-2 text-white hover:bg-gray-700 ${isActive(
                    "/products"
                  )}`}
                >
                  Products
                </Link>
                <Link
                  to="/dashboard"
                  className={`block px-4 py-2 text-white hover:bg-gray-700 ${isActive(
                    "/dashboard"
                  )}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/about"
                  className={`block px-4 py-2 text-white hover:bg-gray-700 ${isActive(
                    "/about"
                  )}`}
                >
                  About
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
