"use client";

import React from "react";
import dev from "../../assests/image/dev__Image.png";
import dev__black__white from "../../assests/image/dev__Image-modified.png";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";

const Photo = () => {
  return (
    <div className="relative order-2 md:order-3 min-h-[70vh]">
      {/* Transparent rotated shape */}
      <div
        className="fixed right-[-83%] top-[-50%] bg-green-600/80 sm:bg-green-600 w-full h-[200%]"
        style={{
          transform: "rotate(15deg)",
        }}
      />

      {/* Image and text section */}
      <div className="absolute top-0 right-0 w-full h-screen flex flex-col items-center justify-center z-20 gap-15">
        {/* Intro text for mobile */}
        <div className="font-bold md:hidden flex flex-col items-start justify-start w-full pl-8">
          <h1 className="text-blue-100 text-xl sm:text-5xl font-[poppins] z-20">
            Hi There,
          </h1>
          <h1 className="text-green-600 text-xl sm:text-5xl font-[poppins] z-20">
            I'M DEV SHARMA
          </h1>
          <div className="md:px-2 text-start md:text-center">
            <span
              className="sm:text-3xl text-xl px-0 pt-1 z-20 font-semibold tracking-wide"
              style={{ display: "inline-block" }}
            >
              <ReactTyped
                strings={[
                  `<span class='text-red-500'>Front-End Developer</span>`,
                  `<span class='text-blue-500'>React JS Developer</span>`,
                  `<span class='text-pink-500'>Next JS Developer</span>`,
                  `<span class='text-yellow-500'>Full-Stack Developer</span>`,
                  `<span class='text-green-500'>Web Designer</span>`,
                  `<span class='text-purple-500'>Application Developer</span>`,
                ]}
                typeSpeed={200}
                loop
                backSpeed={50}
                cursorChar="|"
                showCursor={true}
                smartBackspace={true}
                contentType="html"
              />
            </span>
          </div>
        </div>

        {/* Image Card with Tilt and hover color change */}
        <div className="group [perspective:1000px] sm:w-[28rem] sm:h-[30rem] h-[20rem] w-[20rem]">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            scale={1.02}
            transitionSpeed={1000}
            className="w-full h-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_4px_10px_rgba(255,255,255,0.6)] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-1">
              {/* Black & White image (base) */}
              <Image
                src={dev__black__white}
                alt="Dev B&W"
                width={448}
                height={480}
                className="w-full h-full object-contain rounded-2xl transition-opacity duration-500"
              />
              {/* Color image (hovered) */}
              <Image
                src={dev}
                alt="Dev Color"
                width={448}
                height={480}
                className="w-full h-full object-contain rounded-2xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Photo;
