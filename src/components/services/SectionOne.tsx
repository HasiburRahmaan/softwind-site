import React from "react";
import Header from "../reusable/header";
import DownloadIcon from "../icons/DownloadIcon";
import CountUp from "../reusable/CountUp";

const bgGradient = {
  background: "linear-gradient(102.93deg, rgba(1, 54, 70, 0.7) -0.7%, rgba(8, 40, 50) 99.28%)",
  backgroundSize: "cover",
};

const SectionOne = () => {
  return (
    <div className="lg:px-[10%] px-5 py-[20px] flex flex-col w-full lg:pb-[150px] pb-[67px]" style={bgGradient}>
      <Header />

      <div className="flex lg:pt-16 pt-[38px] w-full">
        <div className="text-white  flex flex-col justify-center max-w-[1395px] w-full">
          <h1 className="lg:text-[65px] md:text-[35px] font-semibold text-[28px] leading-[1.15] lg:mb-[16px] mb-[10px]">
            We design & build innovative products focused on user’s needs
          </h1>
          <p className="lg:text-[18px] text-[15px] leading-[1.67]  mb-[30px]">
            Suscipit nibh urna praesent torquent aenean laoreet eleifend, mus posuere fusce nullam mattis orci, egestas
            sociis felis sodales etiam montes. Pharetra risus fames lacus curabitur commodo mi, sed mauris tincidunt
            eget a semper, egestas cras est lobortis ultrices.
          </p>
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4  font-semibold max-w-[1077px] ">
            <div className="flex lg:gap-5 gap-[10px] leading-[1] items-center">
              <p className="lg:text-[45px] sm:text-[24px] text-[20px]">
                <CountUp endValue={14} duration={2} />
              </p>
              <p className="lg:text-[24px] sm:text-[16px] text-[14px] lg:w-[130px]">Years of Experience</p>
            </div>
            <div className="flex lg:gap-5 gap-[10px] leading-[1] items-center">
              <p className="lg:text-[45px] sm:text-[24px] text-[20px]">
                <CountUp endValue={20} duration={2} />
              </p>
              <p className="lg:text-[24px] sm:text-[16px] text-[14px] lg:w-[130px]">In-house specialists</p>
            </div>
            <div className="flex lg:gap-5 gap-[10px] leading-[1] items-center">
              <p className="lg:text-[45px] sm:text-[24px] text-[20px]">
                <CountUp endValue={2000} duration={2} />
              </p>
              <p className="lg:text-[24px] sm:text-[16px] text-[14px] lg:w-[130px]">Project Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
