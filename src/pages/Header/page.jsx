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
    <div
      className={`
        z-30 p-5 
        fixed lg:absolute 
        top-0 left-0 
        w-full lg:w-[9rem] 
        h-auto lg:h-screen 
        bg-green-600 lg:bg-transparent
        flex lg:items-center 
        justify-center lg:justify-start
      `}
    >
      <div>
        <div className="font-bold text-gray-500 flex flex-col lg:flex-col items-center lg:items-start">
          <ul className="flex lg:flex-col gap-4 lg:space-y-6 cursor-pointer">
            {[
              { href: "/", icon: <FaHome />, label: "Home" },
              { href: "/about", icon: <FaUser />, label: "About" },
              { href: "/works", icon: <FaBriefcase />, label: "Portfolio" },
              { href: "/contact", icon: <FaEnvelopeOpen />, label: "Contact" },
              { href: "/", icon: <FaComments />, label: "Blog" },
            ].map(({ href, icon, label }) => (
              <Link href={href} key={label} className="relative group">
                <div className="text-lg font-bold border border-gray-900 rounded-full group-hover:border-yellow-400 group-hover:rounded-r-3xl p-3 bg-gray-900 text-white group-hover:bg-yellow-400 transition">
                  <span className="block group-hover:rotate-[360deg] transition-transform duration-900">
                    {icon}
                  </span>
                </div>
                <span className="absolute left-8 top-1/2 transform -translate-y-1/2 border group-hover:border-yellow-400 whitespace-nowrap pr-5 py-[0.7rem] text-sm bg-yellow-400 text-white rounded-r-3xl opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:translate-x-2 transition">
                  {label}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
