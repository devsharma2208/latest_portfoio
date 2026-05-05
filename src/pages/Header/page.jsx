"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaComments,
  FaBriefcase,
  FaEnvelopeOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-50">
      <div className="w-full bg-[#111111]/70 backdrop-blur-md border border-white/10 rounded-full py-2 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <ul className="flex flex-row items-center justify-between w-full">
          {[
            { href: "/", icon: <FaHome />, label: "Home" },
            { href: "/about", icon: <FaUser />, label: "About" },
            { href: "/works", icon: <FaBriefcase />, label: "Portfolio" },
            { href: "/contact", icon: <FaEnvelopeOpen />, label: "Contact" },
            { href: "/blogs", icon: <FaComments />, label: "Blog" },
          ].map(({ href, icon, label }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className="relative group flex items-center justify-center p-1.5"
                >
                  <div
                    className={`text-xl transition-all duration-300 ${
                      isActive
                        ? "text-emerald-400"
                        : "text-zinc-400 group-hover:text-emerald-400"
                    }`}
                  >
                    <span className="block drop-shadow-md">{icon}</span>
                  </div>

                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400" />
                  )}

                  {/* Tooltip */}
                  <span className="absolute top-[140%] left-1/2 transform -translate-x-1/2 px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold bg-white text-black rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 shadow-2xl pointer-events-none whitespace-nowrap">
                    {label}
                    <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-white"></div>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;