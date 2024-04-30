"use client";
import React, { useEffect, useState } from "react";

const HoverLine = ({ active = false, text, colorVariant = "white" }: any) => {
  const [isHovered, setIsHovered] = useState(active);
  useEffect(() => {
    setIsHovered(active);
  }, [active]);
  const handleMouseEnter = () => {
    if (active) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (active) return;
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full h-[30px]  overflow-hidden "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`text-sm  transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{ color: colorVariant }}
      >
        {text}
      </span>
      <div
        className={`absolute h-[2px]   transition-all duration-300 ${
          isHovered ? "right-0 w-full  h-[4px]" : "-right-1/2 w-full"
        }`}
        style={{ backgroundColor: colorVariant }}
      />
      {/* top-[-20px] left-1/2 transform -translate-x-1/2 */}
    </div>
  );
};

export default HoverLine;
