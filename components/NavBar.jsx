'use client'
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [loggedon, setLoggedon] = useState(false);

  return (
    <header className="p-4 bg-black">
      <nav className="flex justify-between items-center w-[92%] mx-auto ">
        <div>
          <Link href="/">
            <h2 className="text-yellow-600 font-bold cursor-pointer">OnlineBooking</h2>
          </Link>
        </div>
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <Link href="/" className="hover:text-gray-500 text-white">Dashboard
            </Link>
            <Link href="/" className="hover:text-gray-500 text-white">Docs
            </Link>
            <Link href="/movie" className="hover:text-gray-500 text-white">Movies
            </Link>
            <Link href="/" className="hover:text-gray-500 text-white">Pubs
            </Link>
            <Link href="/" className="hover:text-gray-500 text-white">Contact us
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
          {loggedon && (
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          )}
          <Link href="/login" className="hover:text-gray-500 text-white">Login
            </Link><Link href="/signup" className="hover:text-gray-500 text-white">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
