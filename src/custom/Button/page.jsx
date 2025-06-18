import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Button = (props) => {
  console.log(props);

  return (
    <div className="group relative inline-block overflow-hidden rounded-full border-2 border-[#72b626] ">
      <div className="absolute inset-0 bg-[#72b626] w-full translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
      <div className="relative flex items-center gap-10 cursor-pointer">
        <button
          className={`uppercase ${
            props.title === "More about me" ? "text-white" : "text-gray-700"
          } z-10 px-5 py-3 cursor-pointer font-[800] text-sm group-hover:text-white`}
        >
          {props.title}
        </button>
        {props.title === "More about me" && (
          <HiOutlineArrowNarrowRight className="text-white bg-[#72b626] p-2 w-12 h-12 rounded-full z-10" />
        )}
        {props.title === "Download CV" && (
          <FaDownload className="text-white bg-[#72b626] p-2 w-12 h-12 rounded-full z-10" />
        )}
        {props.title === "Send Message" && (
          <IoIosSend className="text-white bg-[#72b626] p-2 w-12 h-12 rounded-full z-10" />
        )}
      </div>
    </div>
  );
};

export default Button;
