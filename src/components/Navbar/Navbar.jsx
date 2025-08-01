
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const link = <>
        <NavLink 
        to={'/'}
        className={({isActive}) =>
        isActive ? "font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent" : "font-normal"
        }
        >
            Home
        </NavLink>
        <NavLink 
        to={'/jobDetails'}
        className={
            ({isActive}) =>
        isActive ? "font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent" : "font-normal"
        }
        >
            Job Details</NavLink>
    </>

  return (
    <div className="navbar bg-base-100 shadow-sm py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>{link}</li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">HireLink</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="flex flex-row">{link}</li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white">Star Applying</a>
      </div>
    </div>
  );
};

export default Navbar;
