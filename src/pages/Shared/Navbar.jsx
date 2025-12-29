import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  // ! function for logout a user

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink to={"/"}>
        <li className="mx-2">Home</li>
      </NavLink>
      <li className="mx-2">Contact Us</li>

      {user && (

          <NavLink to={"/myApplications"}>My Applications</NavLink>
  
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">TopTalent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end"></div>

        {/* ! show the user logout button afte login */}
        {user ? (
          <button onClick={handleSignout} className="btn btn-primary px-5">
            {" "}
            Logout
          </button>
        ) : (
          <>
            <NavLink to={"/register"}>
              <button className="btn btn-primary px-5 mx-5">Register</button>
            </NavLink>
            <NavLink to={"/login"}>
              <button className="btn btn-primary px-5 ">Login</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
