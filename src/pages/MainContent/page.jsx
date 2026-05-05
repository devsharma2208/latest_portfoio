"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// ⬇️ FIX: Image Import Path
// Kyunki aapki file 'src/pages/MainContent/page.jsx' hai,
// aur image 'src/Images/devProfile.jpg' mein hai, toh humein 3 level upar jaana hoga (../../../).
import devImg from "../../assests/image/logo_image_colored.png";

const MainContent = () => {
  return (
    <div className="w-full relative z-10 flex flex-col justify-center h-full">
      <div className="flex flex-col md:items-start items-center md:text-left text-center">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto z-20">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 text-xs sm:text-sm font-medium mb-8 inline-flex items-center gap-2 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Accepting New Projects
          </motion.div>

          {/* Added Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-8 relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            {/* Image */}
            <img
              src={devImg.src} // Next.js imported image ka path
              alt="Dev Sharma Profile"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.05] text-white overflow-hidden pb-2 mb-4">
              Building intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                digital products.
              </span>
            </h1>
          </motion.div>

          {/* Description Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 max-w-2xl"
          >
            <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed text-balance">
              I'm <span className="text-white font-medium">Dev Sharma</span>. A
              Full-Stack & AI Engineer focused on creating exceptionally fast,
              accessible, and remarkably beautiful web experiences.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="mailto:devsharmaelc@gmail.com"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/devsharma2208"
              target="_blank"
              className="px-6 py-3 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors"
            >
              View Github
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
