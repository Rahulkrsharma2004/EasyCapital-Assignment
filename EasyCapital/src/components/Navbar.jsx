import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isLoggedIn, setIsLoggedIn} = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    alert("Logout Successfully")
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://easycapital.co.in/images/easy-capital-logo.png"
              alt="Easy Capital Logo"
              className="h-12 w-auto"
            />
            <h2 className="text-black text-3xl font-bold">
              <span className="text-blue-600">Easy</span> Capital
            </h2>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <div
            className={`flex-col md:flex-row md:flex md:items-center space-y-2 md:space-y-0 md:space-x-4 ${
              isOpen ? "flex" : "hidden"
            } md:flex`}
          >
            <Link to="/" className="text-black hover:text-blue-500 font-bold">
              HOME
            </Link>
            <Link
              to="/blog"
              className="text-black hover:text-blue-500 font-bold"
            >
              BLOG
            </Link>

            <button className="text-white bg-blue-500 border border-blue-500 px-4 py-2 rounded-lg font-bold">
              Call Us: +91-87459-45682
            </button>
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleLogout}
                  className="text-black border border-blue-500 px-4 py-2 rounded-lg font-bold hover:text-blue-500 hover:border-blue-600"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-blue-500 font-bold border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
