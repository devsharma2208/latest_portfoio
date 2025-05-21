import Link from "next/link";
import React from "react";
import {
  FaComments,
  FaBriefcase,
  FaEnvelopeOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="absolute w-[9rem] top-0 left-0 h-screen flex items-center justify-start p-5 z-20">
      <div>
        <div className="font-bold text-gray-500 flex flex-col items-start">
          <ul className="space-y-6 cursor-pointer flex flex-col">
            <Link href={"/"} className="relative group">
              <div className="text-lg font-bold border border-gray-900 rounded-full group-hover:border-yellow-400 group-hover:rounded-r-3xl p-3 bg-gray-900 text-white group-hover:bg-yellow-400 transition">
                <FaHome className="transform group-hover:rotate-[360deg] transition-transform duration-900" />
              </div>
              <span className="absolute left-8 top-1/2 transform -translate-y-1/2 border group-hover:border-yellow-400 whitespace-nowrap pr-5 py-[0.7rem] text-sm bg-yellow-400 text-white rounded-r-3xl opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:translate-x-2 transition">
                Home
              </span>
            </Link>
            <Link href={"/about"} className="relative group">
              <div className="text-lg font-bold border border-gray-900 rounded-full group-hover:border-yellow-400 group-hover:rounded-r-3xl p-3 bg-gray-900 text-white group-hover:bg-yellow-400 transition">
                <FaUser className="transform group-hover:rotate-[360deg] transition-transform duration-900" />
              </div>
              <span className="absolute left-8 top-1/2 transform -translate-y-1/2 border group-hover:border-yellow-400 whitespace-nowrap pr-5 py-[0.7rem] text-sm bg-yellow-400 text-white rounded-r-3xl opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:translate-x-2 transition">
                About
              </span>
            </Link>
            <Link href={"/"} className="relative group">
              <div className="text-lg font-bold border border-gray-900 rounded-full group-hover:border-yellow-400 group-hover:rounded-r-3xl p-3 bg-gray-900 text-white group-hover:bg-yellow-400 transition">
                <FaEnvelopeOpen className="transform group-hover:rotate-[360deg] transition-transform duration-900" />
              </div>
              <span className="absolute left-8 top-1/2 transform -translate-y-1/2 border group-hover:border-yellow-400 whitespace-nowrap pr-5 py-[0.7rem] text-sm bg-yellow-400 text-white rounded-r-3xl opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:translate-x-2 transition">
                Contact
              </span>
            </Link>
            <Link href={"/"} className="relative group">
              <div className="text-lg font-bold border border-gray-900 rounded-full group-hover:border-yellow-400 group-hover:rounded-r-3xl p-3 bg-gray-900 text-white group-hover:bg-yellow-400 transition">
                <FaBriefcase className="transform group-hover:rotate-[360deg] transition-transform duration-900" />
              </div>
              <span className="absolute left-8 top-1/2 transform -translate-y-1/2 border group-hover:border-yellow-400 whitespace-nowrap pr-5 py-[0.7rem] text-sm bg-yellow-400 text-white rounded-r-3xl opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:translate-x-2 transition">
                Portfolio
              </span>
            </Link>
            <Link href={"/"} className="relative group">
              <div className="text-lg font-bold border border-gray-900 rounded-full group-hover:border-yellow-400 group-hover:rounded-r-3xl p-3 bg-gray-900 text-white group-hover:bg-yellow-400 transition">
                <FaComments className="transform group-hover:rotate-[360deg] transition-transform duration-900" />
              </div>
              <span className="absolute left-8 top-1/2 transform -translate-y-1/2 border group-hover:border-yellow-400 whitespace-nowrap pr-5 py-[0.7rem] text-sm bg-yellow-400 text-white rounded-r-3xl opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:translate-x-2 transition">
                Blog
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
