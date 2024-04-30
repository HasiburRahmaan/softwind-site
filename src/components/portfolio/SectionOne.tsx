import React from "react";
import Header from "../reusable/header";
import DownloadIcon from "../icons/DownloadIcon";

const bgGradient = {
  background: "linear-gradient(102.93deg, rgba(61, 34, 10, 0.7) -0.7%, rgba(61, 34, 10, 0.5) 99.28%)",
  backgroundSize: "cover",
};

const SectionOne = () => {
  return (
    <div className="lg:px-[10%] px-5 py-[20px] flex flex-col w-full lg:pb-[150px] pb-[67px]" style={bgGradient}>
      <Header />

      <div className="flex lg:pt-16 pt-[38px] w-full">
        <div className="text-white flex-grow  flex flex-col justify-center lg:w-1/2 w-full">
          <h1 className="lg:text-[65px] md:text-[35px] font-semibold text-[28px] leading-[1.15] lg:mb-[16px] mb-[10px]">
            Our Works
          </h1>
          <p className="lg:text-[24px] text-[16px] leading-[1.67] max-w-[600px] mb-[16px]">
            Consequat bibendum nisi aptent ad cursus tortor quisque orci molestie pharetra.
          </p>
          <p className="lg:text-[18px] text-[15px] leading-[1.67] max-w-[600px] mb-[30px]">
            Tellus hendrerit vivamus fames est sollicitudin et cursus, faucibus lobortis nascetur posuere platea
            habitant dui torquent, ullamcorper arcu varius class sodales himenaeos.
          </p>
          <hr className="bg-[#FFFFFF] max-w-[600px]" />
          <div className="flex xs:flex-row flex-col xs:justify-between xs:items-center gap-4 max-w-[600px] mt-7 font-semibold">
            <div className="flex lg:gap-5 gap-[10px] leading-[1] items-center">
              <p className="lg:text-[45px] sm:text-[24px] text-[20px]">250+</p>
              <p className="lg:text-[24px] sm:text-[16px] text-[14px] w-[130px]">PROJECTS DONE</p>
            </div>
            <div className="flex items-center lg:gap-4 gap-[10px]">
              <span className="lg:w-[43px] lg:h-[43px] w-[31px] h-[31px]">
                <DownloadIcon />
              </span>
              <p className="lg:text-xl sm:text-[16px] text-[14px] leading-[1]">ALL PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
