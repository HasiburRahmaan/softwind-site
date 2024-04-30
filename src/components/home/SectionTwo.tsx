import React from "react";
import GroupEmployee from "../../assets/group-employee.jpg";

const SectionTwo = () => {
  return (
    <div className="px-[10%] flex min-h-dvh ">
      <div className="w-[70%] flex flex-col justify-center">
        <p className="text-[45px] leading-[65px] font-[500] w-[497px] mb-[30px]">We are more then a Software Firm</p>
        <p className="font-[18px] leading-[30px] w-[701px]">
          We are a technology consulting and services company with more than 7 year’s experience. We focus on
          conceptualizing, designing, engineering, marketing and managing digital products and experiences for
          high-growth companies looking to disrupt through innovation and velocity. <br />
          Our expertise addresses the growth needs of enterprises in dynamic industries such as Hi-tech, Manufacturing,
          Banking & Financial Services, Insurance, Consumer Services, Public Services and Healthcare.
        </p>
        <div className="flex items-center hover:cursor-pointer group mt-[30px]">
          <div className="bg-[#2074C7] h-[2px] w-[20px] group-hover:w-[30px] transition-all duration-300 mr-2"></div>
          <p className="text-[20px] leading-[20px] font-[600] flex text-[#2074C7]">SERVICES</p>
        </div>
      </div>
      <div className="w-[30%]">
        <img src={GroupEmployee.src} alt="section-two" className="w-[100%] h-[80%] mt-[20%] object-cover" />
      </div>
    </div>
  );
};

export default SectionTwo;
