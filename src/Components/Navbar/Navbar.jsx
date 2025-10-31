import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Movies</a>
      </li>
      <li>
        <a>Web series</a>
      </li>
      <li>
        <a>New</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black/40 backdrop-blur-md items-center">
      <div className="w-11/12 mx-auto">
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

          {/* this is the left side */}
          <div className="text-white">
            <a className=" text-2xl text-yellow-400 font-bold mr-5">dramaTic</a>
            <ul className="menu menu-horizontal px-1 text-lg font-medium">
              {links}
            </ul>
          </div>
        </div>

        {/* this is the right side */}
        <div className="navbar-end gap-4 items-center">
          {/* this is searchbar of navbar */}
          <label className="input rounded-4xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>

          {/* this is avatar for profile */}
          <div className="avatar ">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
