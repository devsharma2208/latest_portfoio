"use client";
import Button from "@/custom/Button/page";
import React from "react";

const MainContent = () => {
  const button_name = {
    title: "More about me",
  };
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mt-[10rem]">
        <div className="font-bold">
          <h1 className="text-green-600 text-5xl font-[poppins]">
            I'M DEV SHARMA
          </h1>
          <div className="px-2">
            <h1 className="text-gray-500 text-5xl px-0 pt-6">
              WEB DESIGNER /{" "}
            </h1>
            <h1 className="text-gray-500 text-3xl px-0 pt-1 text-green-900">
              APPLICATION DEVELOPER
            </h1>
          </div>
        </div>
        <div className="text-gray-200 text-xl p-6 font-[sans] text-justify">
          <p>
            I'm a DEV SHARMA based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
        </div>
        <div className="items-start w-full ml-12">
          <Button title={button_name.title} />
        </div>
      </div>
    </div>
  );
};
export default MainContent;
