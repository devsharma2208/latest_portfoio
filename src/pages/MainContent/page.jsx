"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// Image import path as per your requirement
import devImg from "../../assests/image/logo_image_colored.png";

const MainContent = () => {
  return (
    <div className="w-full relative z-10 flex flex-col justify-center h-full min-h-screen">
      <div className="flex flex-col md:items-start items-center md:text-left text-center">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto z-20">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mb-12 inline-flex items-center gap-2 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Projects
          </motion.div>

          {/* Profile Image Section (Stitch Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-12 relative group"
          >
            {/* Massive Backglow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>

            <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl">
              <img
                src={devImg.src} 
                alt="Dev Sharma Profile"
                className="relative w-32 h-32 sm:w-52 sm:h-52 rounded-[2rem] object-cover transition-all duration-1000 group-hover:scale-105"
              />
              {/* Overlay Gradient on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-0 right-0 text-[8px] font-black text-white tracking-[0.4em] uppercase opacity-40">
                AI ENGINEER
              </div>
            </div>
          </motion.div>

          {/* Main Heading with ReactTyped */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full mb-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-bold tracking-tighter leading-[0.95] text-white px-3">
              Building intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                <ReactTyped
                  strings={["digital products.", "AI experiences.", "fast systems."]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                />
              </span>
            </h1>
          </motion.div>

          {/* Description Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mb-12"
          >
            <p className="text-zinc-500 text-lg sm:text-2xl font-light leading-relaxed tracking-tight">
              I'm <span className="text-white font-bold italic">Dev Sharma</span>. A
              Full-Stack & AI Engineer focused on creating exceptionally fast,
              accessible, and remarkably beautiful web experiences.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="mailto:devsharmaelc@gmail.com"
              className="h-16 px-10 rounded-2xl bg-white text-black font-black text-xs tracking-widest hover:bg-zinc-200 transition-all active:scale-[0.98] uppercase flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(255,255,255,0.2)]"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/devsharma2208"
              target="_blank"
              rel="noreferrer"
              className="h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-xs tracking-widest border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] uppercase flex items-center justify-center gap-3 group"
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