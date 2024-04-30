import React from "react";
import GroupEmployee from "../../assets/group-employee.jpg";
import Image1 from "../../assets/porfolio/image-1.png";
import Image2 from "../../assets/porfolio/image-2.png";
import Image from "next/image";
import AccordionIcon from "../icons/AccordionIcon";


const SectionTwo = () => {
  return (
    <div className=" lg:px-[10%] px-5 lg:pt-[75px] pt-[30px] text-[#505151]">
      <div className="">
        <h2 className="text-[#021441] lg:text-[45px] text-[24px] font-medium mb-7 text-center">What We Do</h2>
        <p className="lg:text-[18px] text-[15px] leading-[1.67] max-w-[928px] mx-auto lg:mb-[40px] mb-[24px] text-center">
          Tellus hendrerit vivamus fames est sollicitudin et cursus, faucibus lobortis nascetur posuere platea habitant dui torquent, ullamcorper arcu varius class sodales himenaeos.
        </p>
        <div className="accordion-wrapper max-w-[1117px] mx-auto">
          <div className="pb-[30px] border-b-[1px] border-[#021441] mb-[30px]">
            <div className="flex justify-between items-center gap-4">
              <h3 className="lg:text-2xl text-xl leading-[1.5] font-semibold text-[#021441]">Web Design</h3>
              <span className="active w-[43px] h-[43px] rounded-full flex justify-center items-center cursor-pointer"><AccordionIcon /></span>
            </div>
            <p className="lg:text-[18px] text-[15px] leading-[1.67] mt-[10px]">
              Tellus hendrerit vivamus fames est sollicitudin et cursus, faucibus lobortis nascetur posuere platea habitant dui torquent, ullamcorper arcu varius class sodales himenaeos.
            </p>
          </div>
          <div className="pb-[30px] border-b-[1px] border-[#021441] mb-[30px]">
            <div className="flex justify-between items-center gap-4">
              <h3 className="lg:text-2xl text-xl leading-[1.5] font-semibold text-[#021441]">Web Design</h3>
              <span className="w-[43px] h-[43px] rounded-full flex justify-center items-center cursor-pointer"><AccordionIcon /></span>
            </div>

          </div>
          <div className="pb-[30px] border-b-[1px] border-[#021441] mb-[30px]">
            <div className="flex justify-between items-center gap-4">
              <h3 className="lg:text-2xl text-xl leading-[1.5] font-semibold text-[#021441]">Web Application Development</h3>
              <span className="w-[43px] h-[43px] rounded-full flex justify-center items-center cursor-pointer"><AccordionIcon /></span>
            </div>

          </div>
          <div className="pb-[30px] border-b-[1px] border-[#021441] mb-[30px]">
            <div className="flex justify-between items-center gap-4">
              <h3 className="lg:text-2xl text-xl leading-[1.5] font-semibold text-[#021441]">E-Commerce Development</h3>
              <span className="w-[43px] h-[43px] rounded-full flex justify-center items-center cursor-pointer"><AccordionIcon /></span>
            </div>

          </div>
          <div className="pb-[30px] border-b-[1px] border-[#021441] mb-[30px]">
            <div className="flex justify-between items-center gap-4">
              <h3 className="lg:text-2xl text-xl leading-[1.5] font-semibold text-[#021441]">React Application Development</h3>
              <span className="w-[43px] h-[43px] rounded-full flex justify-center items-center cursor-pointer"><AccordionIcon /></span>
            </div>

          </div>
          <div className="pb-[30px] border-b-[1px] border-[#021441] mb-[30px]">
            <div className="flex justify-between items-center gap-4">
              <h3 className="lg:text-2xl text-xl leading-[1.5] font-semibold text-[#021441]">Progressive Web App</h3>
              <span className="w-[43px] h-[43px] rounded-full flex justify-center items-center cursor-pointer"><AccordionIcon /></span>
            </div>
          </div>
          <div className="pb-[30px] border-b-[1px] border-[#021441] mb-[30px]">
            <div className="flex justify-between items-center gap-4">
              <h3 className="lg:text-2xl text-xl leading-[1.5] font-semibold text-[#021441]">Vulnerability Assessment and Penetration Testing</h3>
              <span className="w-[43px] h-[43px] rounded-full flex justify-center items-center cursor-pointer"><AccordionIcon /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
