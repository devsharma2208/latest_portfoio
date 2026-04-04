"use client";
import Button from "@/custom/Button/page";
import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const MainContent = () => {
  const button_name = {
    title: "More about me",
    route: "/about",
  };
  return (
    <div className="w-full relative z-10 flex flex-col justify-center h-full sm:mt-10 lg:mt-0">
      <div className="flex flex-col md:items-start items-center md:text-left text-center">
        
        {/* Subtle Badge */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-6 inline-flex items-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold w-full"
        >
          <h1 className="text-zinc-500 text-xl sm:text-2xl lg:text-3xl font-sans tracking-tight mb-2">
            Hi There,
          </h1>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black font-sans tracking-tight leading-[1.1] mb-6 drop-shadow-md">
            I'm Dev <br className="hidden lg:block"/> Sharma.
          </h1>
          
          <div className="text-start mt-2">
            <span
              className="sm:text-2xl lg:text-3xl text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500"
              style={{ display: "inline-block" }}
            >
              <ReactTyped
                strings={[
                  `Front-End Developer`,
                  `React JS Developer`,
                  `Next JS Developer`,
                  `Full-Stack Developer`,
                  `Web Designer`,
                  `Application Developer`,
                ]}
                typeSpeed={50}
                loop
                backSpeed={30}
                cursorChar="|"
                showCursor={true}
                smartBackspace={true}
              />
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-400 text-lg lg:text-xl font-normal leading-relaxed max-w-xl z-20 mt-8 mb-10"
        >
          <p>
            An India based web designer & developer focused on crafting clean, exceptionally user-friendly, and highly performant digital experiences. Passionate about building excellent software that fundamentally improves lives.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex md:justify-start justify-center z-20"
        >
          <div className="hover:scale-105 transition-transform duration-300">
            <Button title={button_name.title} route={button_name?.route} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default MainContent;
