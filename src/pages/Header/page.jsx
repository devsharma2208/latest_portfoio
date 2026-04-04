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
    <div className="w-full max-w-2xl px-2">
      <div className="w-full flex items-center justify-center bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl">
        <ul className="flex flex-row gap-6 sm:gap-10 items-center justify-center w-full">
          {[
            { href: "/", icon: <FaHome />, label: "Home" },
            { href: "/about", icon: <FaUser />, label: "About" },
            { href: "/works", icon: <FaBriefcase />, label: "Portfolio" },
            { href: "/contact", icon: <FaEnvelopeOpen />, label: "Contact" },
            { href: "/blogs", icon: <FaComments />, label: "Blog" },
          ].map(({ href, icon, label }) => (
            <Link href={href} key={label} className="relative group flex items-center justify-center">
              <div className="text-xl sm:text-2xl text-zinc-400 group-hover:text-white transition-all duration-300 hover:scale-110">
                <span className="block drop-shadow-md">
                  {icon}
                </span>
              </div>
              {/* Tooltip for horizontal navbar */}
              <span className="absolute top-[150%] left-1/2 transform -translate-x-1/2 px-3 py-1.5 text-xs font-semibold bg-white text-black rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 shadow-xl pointer-events-none whitespace-nowrap">
                {label}
                {/* Arrow up */}
                <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white"></div>
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
