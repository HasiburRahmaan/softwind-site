import React from "react";
import GroupEmployee from "../../assets/group-employee.jpg";
import Image1 from "../../assets/porfolio/image-1.png";
import Image2 from "../../assets/porfolio/image-2.png";
import Image from "next/image";


const SectionTwo = () => {
  return (
    <div className="relative lg:px-[10%] px-5 lg:pt-[75px] pt-[30px] lg:pb-[150px] md:pb-[80px] pb-8 text-[#505151] flex lg:flex-row flex-col lg:gap-16 gap-10">
      <div className="lg:w-1/4 w-full max-w-[345px] ">
        <h2 className="text-[#021441] lg:text-[45px] text-[24px] font-medium mb-7 block lg:hidden">We're proud of what we've built.</h2>
        <p className="lg:text-[18px] text-[15px] leading-[1.67] max-w-[1100px] mb-[36px] lg:hidden block">
          Tellus hendrerit vivamus fames est sollicitudin et cursus, faucibus lobortis nascetur posuere platea habitant dui torquent, ullamcorper arcu varius class sodales himenaeos.
        </p>
        <div className="lg:sticky lg:top-[3rem] lg:left-0">
          <div className="py-[50px] lg:px-[46px] px-[30px] rounded-[20px] border-[1.5px] border-[#02144140] flex flex-col gap-10">
            <h4 className=" text-2xl font-semibold text-[#021441] leading-[1]">INDUSTRIES</h4>
            <h5 className="text-xl text-[#021441] leading-[1] font-semibold">All Industries</h5>
            <p className="text-xl leading-[1] cursor-pointer">Healthcare</p>
            <p className="text-xl leading-[1] cursor-pointer">Finance</p>
            <p className="text-xl leading-[1] cursor-pointer">Education</p>
            <p className="text-xl leading-[1] cursor-pointer">Information technology</p>
            <p className="text-xl leading-[1] cursor-pointer">Other Industries</p>
          </div>
        </div>
      </div>
      <div className="lg:w-3/4 w-full">
        <h2 className="text-[#021441] lg:text-[45px] text-[24px] font-medium mb-7 hidden lg:block">We're proud of what we've built.</h2>
        <p className="lg:text-[18px] text-[15px] leading-[1.67] max-w-[1100px] mb-[36px] hidden lg:block">
          Tellus hendrerit vivamus fames est sollicitudin et cursus, faucibus lobortis nascetur posuere platea habitant dui torquent, ullamcorper arcu varius class sodales himenaeos.
        </p>
        <div className="flex flex-wrap lg:flex-row flex-col lg:gap-12 gap-6 text-[#021441]">
          <div className="portfolio-category">
            <img className="w-full lg:mb-5 mb-[14px] box-shadow max-w-[550px] rounded-2xl" src={Image1.src} />
            <p className="lg:text-[19px] text-[14px] mb-[10px] leading-[1.12] font-medium uppercase">PROJECT CATEGORY</p>
            <h3 className="lg:text-3xl text-xl font-semibold">Vitae augue ultrices pharetra justo per pretium </h3>
          </div>
          <div className="portfolio-category">
            <img className="w-full lg:mb-5 mb-[14px] box-shadow max-w-[550px] uppercase" src={Image2.src} />
            <p className="lg:text-[19px] text-[14px] mb-[10px] leading-[1.12] font-medium uppercase">PROJECT CATEGORY</p>
            <h3 className="lg:text-3xl text-xl font-semibold">Vitae augue ultrices pharetra justo per pretium </h3>
          </div>
          <div className="portfolio-category">
            <img className="w-full lg:mb-5 mb-[14px] box-shadow max-w-[550px] rounded-2xl" src={Image1.src} />
            <p className="lg:text-[19px] text-[14px] mb-[10px] leading-[1.12] font-medium uppercase">PROJECT CATEGORY</p>
            <h3 className="lg:text-3xl text-xl font-semibold">Vitae augue ultrices pharetra justo per pretium </h3>
          </div>
          <div className="portfolio-category">
            <img className="w-full lg:mb-5 mb-[14px] box-shadow max-w-[550px] uppercase" src={Image2.src} />
            <p className="lg:text-[19px] text-[14px] mb-[10px] leading-[1.12] font-medium uppercase">PROJECT CATEGORY</p>
            <h3 className="lg:text-3xl text-xl font-semibold">Vitae augue ultrices pharetra justo per pretium </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
