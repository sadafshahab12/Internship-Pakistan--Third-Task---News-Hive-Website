import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Swal from "sweetalert2";
const Header = ({ setSearch }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) =>
      setUser(currentUSer)
    );
    return () => unsubscribe();
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      Swal.fire({
        icon : "success",
        text : ""
      })
    } catch (error) {
      console.error("Logout Failed :", error.message);
    }
  };
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const closeMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="bg-white w-full sticky top-0 z-50 font-OpenSans shadow-md">
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
          className={`md:hidden flex flex-col items-center fixed top-14 left-0 w-full h-screen gap-8 font-medium text-sm bg-white p-5 transition-all duration-300 z-50 ${
            toggleMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link to="/" className="hover:text-red-600" onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="/politics"
            className="hover:text-red-600"
            onClick={closeMenu}
          >
            Politics
          </Link>
          <Link to="/sports" className="hover:text-red-600" onClick={closeMenu}>
            Sports
          </Link>
          <Link to="/tech" className="hover:text-red-600" onClick={closeMenu}>
            Tech
          </Link>
          <Link
            to="/business"
            className="hover:text-red-600"
            onClick={closeMenu}
          >
            Business
          </Link>
          <Link
            onClick={closeMenu}
            to="/signup"
            className="px-4 py-2 xs:hidden block bg-red-600 text-[12px] text-white rounded-md hover:bg-slate-800 transition-all duration-300"
          >
            Sign Up
          </Link>
          <div className="relative w-60  block md:hidden">
            <input
              type="text"
              placeholder="Search news..."
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
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-sm py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800">
            <IoIosSearch className="w-6 h-6" />
          </button>
        </div>

        {/* Login / Signup */}
        <div className="flex gap-2">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 border rounded-md text-[12px] text-slate-800 hover:text-white hover:bg-rose-600 transition-all duration-300 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
