import React from "react";
import "../../index.css";

import { Link } from "react-router-dom";

import ThemeToggle from "../Toggle/ThemeToggle";

const Sidebar = () => {
  return (
    <div className="drawer w-fit lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="lg:hidden drawer-content flex flex-col items-center justify-center">
        <div className="navbar flex-row  w-screen bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="w-full lg:hidden flex gap-3 ">
            <div className="flex mx-2 w-full text-sm">💰 CoinTrackerr</div>
            <ThemeToggle />
            <div className="avatar placeholder">
              <div className="bg-gray-400  text-neutral-content rounded-full md:w-8 w-8 ring ring-black ring-offset-base-100 ring-offset-2 ">
                <span>U</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <nav className="menu p-4 h-full bg-base-200 text-base-content">
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
            Dashboard
          </Link>
          <Link to="/Transaction" className="block py-2 px-4 hover:bg-gray-700">
            Transaction
          </Link>
          <Link to="/Account" className="block py-2 px-4 hover:bg-gray-700">
            Account
          </Link>
          <Link to="/Report" className="block py-2 px-4 hover:bg-gray-700">
            Reports
          </Link>
          <Link to="/Budget" className="block py-2 px-4 hover:bg-gray-700">
            Budget
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
