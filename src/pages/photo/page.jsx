import React from "react";
const Photo = () => {
  return (
    <div className="relative ">
      <div
        className="fixed right-[-83%] top-[-50%] bg-green-400 w-[100%] h-[200%]"
        style={{
          transform: "rotate(15deg)",
        }}
      />
      <div className="absolute top-0 right-0 w-full h-screen flex items-center justify-center z-20">
        <div className=" flex items-center justify-center">
          <img
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
            alt="Placeholder"
            className="w-[28rem] h-[30rem] rounded-2xl shadow-[0_4px_10px_rgba(255,255,255,0.6)] bg-black/50"
          />
          {/* https://developers.google.com/profile/badges/events/io/2025/registered/ */}
        </div>
      </div>
    </div>
  );
};
export default Photo;
