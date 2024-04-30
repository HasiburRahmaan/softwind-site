import SectionOne from "@/src/components/portfolio/SectionOne";
import SectionThree from "@/src/components/portfolio/SectionThree";
import SectionTwo from "@/src/components/portfolio/SectionTwo";
import Footer from "@/src/components/reusable/footer";
import React from "react";

const page = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
