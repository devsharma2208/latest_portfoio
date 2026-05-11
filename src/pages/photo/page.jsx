"use client";

import React from "react";
import dev from "../../assests/image/logo_image_colored.png";
import dev__black__white from "../../assests/image/logo_black_white.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Photo = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-8 md:pt-0 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        className="group [perspective:1200px] w-full aspect-[4/5] z-30"
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          scale={1.02}
          transitionSpeed={1500}
          className="w-full h-full relative"
        >
          {/* Subtle Outer Glow to mimic premium rendering */}
          <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-105 group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>

          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl group-hover:border-white/20 transition-all duration-500 box-content">
            <Image
              src={dev__black__white}
              alt="Dev B&W"
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-700 ease-in-out relative z-10 p-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] opacity-70 group-hover:opacity-0"
            />

            <Image
              src={dev}
              alt="Dev Color"
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-20 p-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] mix-blend-normal"
            />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Photo;
