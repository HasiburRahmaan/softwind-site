"use client";
import React from "react";
import Header from "../reusable/header";

const bgGradient = {
  background: "linear-gradient(102.93deg, rgba(16, 106, 158, 0.85) -0.7%, rgba(22, 53, 100, 0.85) 99.28%)",
};

const SectionOne = () => {
  return (
    <div className="min-h-dvh px-[10%] py-[20px] flex flex-col" style={bgGradient}>
      <Header />

      <div className="text-white flex-grow  flex flex-col justify-center">
        <p className="text-[65px] leading-[75px] w-[1119px] mb-[40px]">Software Development for Business Growth</p>
        <p className="text-[18px] leading-[30px] w-[768px] mb-[40px]">
          Softwind Tech is one of the leading Web, Mobile and AI Software Development and UX/UI Design companies in
          Bangladesh.
        </p>
        <div className="flex items-center hover:cursor-pointer group">
          <div className="bg-white h-[2px] w-[20px] group-hover:w-[30px] transition-all duration-300 mr-2"></div>
          <p className="text-[20px] leading-[20px] flex">SERVICES</p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
