import React from "react";
import WebDesign from "../icons/WebDesign";
import Ecommerce from "../icons/Ecommerce";
import ReactApplication from "../icons/ReactApplication";
import Pwa from "../icons/Pwa";
import PenTest from "../icons/PenTest";
import AppDevelopment from "../icons/AppDevelopment";

const bgGradient = {
  background: "linear-gradient(180deg, rgba(0, 49, 78, 0.81) 0%, #00446A 100%)",
};
const SectionThree = () => {
  return (
    <div className="min-h-dvh mt-[40px] px-[10%]">
      <div className="text-center">
        <p className="text-[45px] leading-[65px]">Our Services</p>
        <p className="text-[18px] leading-[30px] w-[928px] mx-auto">
          We create experiences that put people first. We develop seamless software and UX/UI design by thinking like a
          user. We assess, design, build, test, and optimize core processes and applications for better business.{" "}
        </p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-4">
          {serviceData.map((services, index) => (
            <div key={index} className="flex flex-col  gap-4  ">
              {services.map((service, index) => (
                <div
                  key={index}
                  style={bgGradient}
                  className={`text-white flex flex-col justify-end p-4  ${
                    service.rowSpan == 2 ? "h-[240px]" : "h-[190px]"
                  }`}
                >
                  <span>{service.icon}</span>
                  <p className="mt-4 xxl:text-[22px] lg:text-[18px]">{service.title}</p>
                  <div className="flex items-center hover:cursor-pointer group">
                    <div className="bg-white h-[2px] w-[20px] group-hover:w-[30px] transition-all duration-300 mr-2"></div>
                    <p className="text-[20px] leading-[20px] flex">Learn More</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          {exploreData.map((item, index) => (
            <div className="flex justify-center w-full" key={index}>
              <div className=" flex flex-col items-center gap-y-3 cursor-pointer">
                <span className="bg-[#001343] text-white font-bold rounded-full px-4 text-[36px] flex items-center justify-center mr-2">
                  +
                </span>
                <span className="text-[#001343] text-[26px] font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

let serviceData = [
  [
    {
      title: "Web Design",
      content:
        "Integer malesuada ante erat placerat commodo pharetra auctor, sociis diam mattis metus congue cubilia scelerisque.",
      icon: <WebDesign />,
      rowSpan: 2,
    },
    {
      title: "Web Application Development",
      content: "",
      icon: <AppDevelopment />,
      rowSpan: 1,
    },
  ],
  [
    {
      title: "E-Commerce Development",
      content: "",
      icon: <Ecommerce />,
      rowSpan: 1,
    },
    {
      title: "React Application Development",
      content: "",
      icon: <ReactApplication />,
      rowSpan: 2,
    },
  ],
  [
    {
      title: "Progressive App Development",
      content: "",
      icon: <Pwa />,
      rowSpan: 2,
    },
    {
      title: "Vulnerability Assessment and Penetration Testing",
      content: "",
      icon: <PenTest />,
      rowSpan: 1,
    },
  ],
];

let exploreData = [
  {
    title: "Previous Works",
  },
  {
    title: "Explore industries",
  },
  {
    title: "Our Platforms",
  },
];
