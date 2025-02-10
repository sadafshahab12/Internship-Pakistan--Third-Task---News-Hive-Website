import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="bg-white w-full sticky top-0 z-50 font-OpenSans">
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-600 flex items-center gap-3"
        >
          {toggleMenu ? (
            <IoClose
              className="w-5 h-5 cursor-pointer md:hidden block"
              onClick={handleToggleMenu}
            />
          ) : (
            <HiMenuAlt2
              className="w-5 h-5 cursor-pointer md:hidden block"
              onClick={handleToggleMenu}
            />
          )}
          NewsHive
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 font-medium text-sm">
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>
          <Link to="/politics" className="hover:text-red-600">
            Politics
          </Link>
          <Link to="/sports" className="hover:text-red-600">
            Sports
          </Link>
          <Link to="/tech" className="hover:text-red-600">
            Tech
          </Link>
          <Link to="/business" className="hover:text-red-600">
            Business
          </Link>
        </nav>
        {/* MobileMenu   */}
        <nav
          className={`md:hidden flex flex-col items-center h-screen fixed top-14 ${
            toggleMenu ? "left-0" : "-left-full"
          } w-full  gap-8 font-medium text-sm bg-white p-5 transition-all duration-300`}
        >
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>
          <Link to="/politics" className="hover:text-red-600">
            Politics
          </Link>
          <Link to="/sports" className="hover:text-red-600">
            Sports
          </Link>
          <Link to="/tech" className="hover:text-red-600">
            Tech
          </Link>
          <Link to="/business" className="hover:text-red-600">
            Business
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 xs:hidden block bg-red-600 text-[12px] text-white rounded-md hover:bg-slate-800 transition-all duration-300"
          >
            Sign Up
          </Link>
          <div className="relative w-60  block md:hidden">
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-sm py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800">
              <IoIosSearch className="w-6 h-6" />
            </button>
          </div>
        </nav>
        {/* Search Bar */}
        <div className="relative lg:w-80 w-100  hidden md:block">
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-sm py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800">
            <IoIosSearch className="w-6 h-6" />
          </button>
        </div>

        {/* Login / Signup */}
        <div className="flex gap-2">
          <Link
            to="/login"
            className="px-4 py-2 border rounded-md text-[12px] text-slate-800 hover:text-white hover:bg-rose-600 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 xs:block hidden  bg-red-600 text-[12px] text-white rounded-md hover:bg-slate-800 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
