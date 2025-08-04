import React from "react";
import dev from "../../assests/image/dev__Image.png";
import Image from "next/image";

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

      {/* Image on top */}
      <div className="absolute top-0 right-0 w-full h-screen flex items-center justify-center z-20">
        <div className="sm:w-[28rem] sm:h-[30rem] h-[20rem] w-[20rem] rounded-2xl shadow-[0_4px_10px_rgba(255,255,255,0.6)] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-1">
          <Image
            src={dev}
            alt="Placeholder"
            width={448}
            height={480}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
