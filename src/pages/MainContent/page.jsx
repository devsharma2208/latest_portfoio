"use client";
import Button from "@/custom/Button/page";
import React from "react";

const MainContent = () => {
  const button_name = {
    title: "More about me",
  };
  return (
    <div className="">
      <div className="flex flex-col sm:items-center sm:justify-center sm:mx-0 mx-5 mt-[8rem] sm:mt-[10rem] ">
        <div className="font-bold ">
          <h1 className="text-green-600 text-xl sm:text-5xl font-[poppins] z-20">
            I'M DEV SHARMA
          </h1>
          <div className="px-2">
            <h1 className="text-gray-500 text-2xl sm:text-5xl px-0 sm:pt-6 pt-2 sm:text-start text-end z-20">
              WEB DESIGNER /{" "}
            </h1>
            <h1 className="sm:text-3xl text-xl px-0 pt-1 text-green-700 z-20">
              APPLICATION DEVELOPER
            </h1>
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
          <Button title={button_name.title} />
        </div>
      </div>
    </div>
  );
};
export default MainContent;
