import React from "react";

const Photo = () => {
  return (
    <div className="relative">
      {/* Transparent rotated shape */}
      <div
        className="fixed right-[-83%] top-[-50%] bg-green-600/80 sm:bg-green-600 w-full h-[200%]"
        style={{
          transform: "rotate(15deg)",
        }}
      />

      {/* Image on top */}
      <div className="absolute top-0 right-0 w-full h-screen flex items-center justify-center z-20">
        <div className="flex items-center justify-center">
          <img
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
            alt="Placeholder"
            className="sm:w-[28rem] sm:h-[30rem] h-[20rem] w-[20rem] rounded-2xl shadow-[0_4px_10px_rgba(255,255,255,0.6)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
