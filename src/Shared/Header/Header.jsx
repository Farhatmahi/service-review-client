import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link className="">
          <img className="w-36 lg:w-64" src="https://i.ibb.co/XCZ3Y5J/signature.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="hidden lg:block btn btn-primary">Schedule a call</Link>
      </div>
    </div>
  );
};

export default Header;
