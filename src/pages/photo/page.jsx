"use client";

import React from "react";
import dev from "../../assests/image/dev__Image.png";
import dev__black__white from "../../assests/image/dev__Image-modified.png";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";
import { FaEnvelope, FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";

const Photo = () => {
  return (
    <div className="relative order-2 md:order-3 min-h-[70vh]">
      <div
        className="fixed right-[-83%] top-[-50%] bg-green-600/80 sm:bg-green-600 w-full h-[200%]"
        style={{
          transform: "rotate(15deg)",
        }}
      />

      <div className="absolute md:top-0 top-10 right-0 w-full h-screen flex flex-col items-center justify-center z-20 gap-10">
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

        <div className="md:hidden flex items-start w-full gap-4 z-50 pl-8">
          <a
            href="https://www.linkedin.com/in/dev-sharma-007301173/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-full shadow-lg animate-pulse"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/devsharma2208"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#171515] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://topmate.io/dev_sharma28"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#4B0082] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            title="Topmate"
          >
            <FaUserTie size={22} />
          </a>

          <a
            href="mailto:devsharmaelc@gmail.com"
            className="w-12 h-12 flex items-center justify-center bg-[#D44638] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            title="Gmail"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        <div className="group [perspective:1000px] sm:w-[28rem] sm:h-[30rem] h-[20rem] w-[20rem]">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            transitionSpeed={1000}
            className="w-full h-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_4px_10px_rgba(255,255,255,0.6)] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] ">
              <Image
                src={dev__black__white}
                alt="Dev B&W"
                width={448}
                height={480}
                className="w-full h-full object-contain rounded-2xl transition-opacity duration-500"
              />

              <Image
                src={dev}
                alt="Dev Color"
                width={448}
                height={480}
                className="w-full h-full object-contain rounded-2xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Photo;
