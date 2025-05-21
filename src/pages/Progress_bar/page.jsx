"use client";

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  return "#" + Array.from({ length: 6 })
    .map(() => letters[Math.floor(Math.random() * 16)])
    .join("");
};

const CircularProgress = ({ value }) => {
  const [color, setColor] = useState("#E65B87");

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <div className="w-24 h-24 flex items-center justify-center">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: "#fff",
          trailColor: "#222",
          strokeLinecap: "round",
        })}
      />
    </div>
  );
};

export default CircularProgress;
