import SectionOne from "@/src/components/home/SectionOne";
import SectionThree from "@/src/components/home/SectionThree";
import SectionTwo from "@/src/components/home/SectionTwo";
import Header from "@/src/components/reusable/header";
import Footer from "@/src/components/reusable/footer";
import React from "react";
import SectionFive from "@/src/components/home/SectionFive";
import HoverLine from "@/src/components/reusable/hoverLine";
import MenuLines from "@/src/components/home/MenuLines";

const page = () => {
  return (
    <div className="">
      <span className="w-[100px] fixed right-0 top-1/2 transform -translate-y-1/2 bg-black/50">
        <MenuLines />
      </span>
      <span id="home">
        <SectionOne />
      </span>
      <span id="about">
        <SectionTwo />
      </span>
      <span id="services">
        <SectionThree />
      </span>
      <span id="glance">
        <SectionFive />
      </span>
    </div>
  );
};

export default page;
