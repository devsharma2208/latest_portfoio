"use client";
import Button from "@/custom/Button/page";
import React from "react";
import { ReactTyped } from "react-typed";

const MainContent = () => {
  const button_name = {
    title: "More about me",
    route: "/about",
  };
  return (
    <div className="order-3 md:order-2 pb-10">
      <div className="flex flex-col sm:items-center sm:justify-center sm:mx-0 mx-5 mt-[8rem] sm:mt-[10rem] ">
        <div className="font-bold ">
          <h1 className="text-green-600 text-xl sm:text-5xl font-[poppins] z-20">
            I'M DEV SHARMA
          </h1>
          <div className="px-2 text-center">
            {/* <h1 className="text-gray-500 text-2xl sm:text-5xl px-0 sm:pt-6 pt-2 sm:text-start text-end z-20">
              WEB DESIGNER /{" "}
            </h1>
            <h1 className="sm:text-3xl text-xl px-0 pt-1 text-green-700 z-20">
              APPLICATION DEVELOPER
            </h1> */}
            <span className="sm:text-3xl text-xl px-0 pt-1 z-20 font-semibold tracking-wide">
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
        <div className="text-gray-200 text-xl sm:p-6 sm:mt-0 mt-5 font-[sans] text-justify z-20">
          <p>
            I'm a DEV SHARMA based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
        </div>
        <div className="items-start w-full sm:ml-12 sm:mt-0 mt-20">
          <Button title={button_name.title} route={button_name?.route} />
        </div>
      </div>
    </div>
  );
};
export default MainContent;
