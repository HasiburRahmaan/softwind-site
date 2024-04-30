import SectionThree from "@/src/components/services/SectionThree";
import SectionOne from "@/src/components/services/SectionOne";
import SectionTwo from "@/src/components/services/SectionTwo";

import React from "react";
import SectionFour from "@/src/components/services/SectionFour";

const page = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
