"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import { motion, useScroll, useTransform } from "framer-motion";

// Image import path as per your requirement
import devImg from "../../assests/image/profile.jpeg";

const MainContent = () => {
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 400], [0, 1]);
  const scale = useTransform(progress, [0, 1], [1, 0.35]);
  const x = useTransform(
    progress,
    (val) => `calc(${val} * (-50vw + 17.5% + 24px))`,
  );
  const y = useTransform(progress, (val) => `${val * -32.5}%`);

  return (
    <div className="w-full relative z-10 flex flex-col justify-center h-full min-h-screen">
      <div className="flex flex-col md:items-start items-center md:text-left text-center">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto z-20">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mb-12 inline-flex items-center gap-2 shadow-xl mt-12 sm:mt-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open to Exciting Opportunities
          </motion.div>

          {/* Main Heading with ReactTyped and Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full mb-10 flex flex-col items-center"
          >
            <div className="text-4xl sm:text-5xl lg:text-[5rem] font-bold tracking-wide text-white px-3 flex flex-col items-center justify-center w-full">
              {/* Profile Image Section (Stitch Style) with Sticky & Scroll Animation */}
              <div className="sticky top-4 sm:top-6 z-[100] w-full flex justify-center mb-6 sm:mb-8 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  style={{ scale, x, y }}
                  className="relative group flex justify-center pointer-events-auto"
                >
                  {/* Massive Backglow */}
                  <div className="absolute -inset-6 sm:-inset-10 bg-linear-to-r from-blue-400 to-purple-600 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>

                  <div className="relative  rounded-[2.5rem] bg-linear-to-br from-white/10 via-white/2 to-transparent border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl inline-flex items-center justify-center">
                    <img
                      src={devImg.src}
                      alt="Dev Sharma Profile"
                      className="relative w-32 h-32 sm:w-52 sm:h-60 rounded-4xl object-fill transition-all duration-1000 group-hover:scale-105 block"
                    />
                    {/* Overlay Gradient on Image */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none rounded-[2.5rem]" />
                    <div className="absolute bottom-5 left-0 right-0 text-[8px] font-black text-white tracking-[0.4em] uppercase opacity-40 text-center w-full flex justify-center">
                      MERN • REACT NATIVE • AI
                    </div>
                  </div>
                </motion.div>
              </div>

              <p className="mb-6 sm:mb-8"> Crafting scalable </p>

              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 text-center block w-full mt-2">
                <ReactTyped
                  strings={[
                    "MERN stack applications.",
                    "React Native mobile apps.",
                    "AI-powered experiences.",
                  ]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                />
              </span>
            </div>
          </motion.div>

          {/* Description Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mb-12"
          >
            <p className="text-zinc-500 text-lg sm:text-2xl font-light leading-relaxed tracking-tight">
              I'm{" "}
              <span className="text-white font-bold italic">Dev Sharma</span>. A
              MERN Stack, React Native & AI Developer focused on building
              high-performance, scalable, and visually exceptional digital
              experiences for modern businesses and startups.
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
              Let's Build Together
            </a>

            <a
              href="https://github.com/devsharma2208"
              target="_blank"
              rel="noreferrer"
              className="h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-xs tracking-widest border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] uppercase flex items-center justify-center gap-3 group"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
