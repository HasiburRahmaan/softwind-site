import React from "react";
import SendIcon from "../icons/SendIcon";

const bgGradient = {
  background: "linear-gradient(102.93deg, rgba(19, 10, 38) -0.7%, rgba(50, 88, 127) 99.28%)",
  backgroundSize: "cover",
};
const SectionThree = () => {
  return (
    <div className="lg:px-[10%] px-5 lg:py-[102px] md:py-[80px] py-[50px]" style={bgGradient}>
      <div className="rounded-[30px] xl:p-14 lg:p-8 p-[10px] flex lg:flex-row flex-col items-center max-w-[1410px] bg-white w-full lg:gap-0 gap-10">
        <div className="lg:w-[55%] w-full lg:order-1 order-2 lg:px-0 px-[10px] lg:pr-4">
          <h2 className="text-[#021441] lg:text-[45px] text-[24px] font-semibold lg:mb-16 mb-7 max-w-[530px] ">Ready to discuss
            your project with us?</h2>
          <form className="portfolio-form form flex flex-wrap">
            <div className="relative mb-10 w-full">
              <input className="w-full border-b-[#CCCCD2] border-b-[1px] outline-none py-4" placeholder="" type="text" name="name" id="name" required />
              <label className="absolute top-1/2 -translate-y-1/2 left-0" htmlFor="name">Full Name</label>
            </div>

            <div className="relative mb-10 lg:w-1/2 w-full lg:pr-2">
              <input className="w-full border-b-[#CCCCD2] border-b-[1px] outline-none py-4" placeholder="" type="email" name="email" id="email" required />
              <label className="absolute top-1/2 -translate-y-1/2 left-0" htmlFor="email">Email address</label>
            </div>
            <div className="relative mb-10  lg:w-1/2 w-full lg:pl-2">
              <input className="w-full border-b-[#CCCCD2] border-b-[1px] outline-none py-4" placeholder="" type="phone" name="phone" id="phone" required />
              <label className="absolute top-1/2 -translate-y-1/2 left-0" htmlFor="phone">Phone Number</label>
            </div>
            <div className="relative mb-10 w-full ">
              <input className="w-full border-b-[#CCCCD2] border-b-[1px] outline-none py-4" placeholder="" type="about" name="about" id="about" required />
              <label className="absolute top-1/2 -translate-y-1/2 left-0" htmlFor="about">About Project</label>
            </div>
            <div className="flex lg:flex-row flex-col lg:justify-between w-full items-start gap-[20px]">
              <p className="privacy-policy-text lg:max-w-[343px] md:max-w-[600px]">By sending this form I confirm that I have read and accept the <span className="text-[#4398C8]">Privacy Policy</span></p>
              <button className="w-fit flex gap-4 items-center bg-[#021441] rounded-full px-[23px] py-[15px] text-white te
              xt-xl leading-[1] font-semibold">SEND MESSAGE <span className="rounded-full w-[34px] h-[34px] flex justify-center items-center bg-white"><SendIcon /></span></button>
            </div>
          </form>
        </div>
        <div className="lg:w-[45%] w-full lg:order-2 order-1 lg:pl-4">
          <div className="lg:px-10  py-10 px-[10px] bg-[#D8DEEE40] rounded-[30px] ">
            <h3 className="lg:mb-10 mb-7 lg:text-[30] text-[24px] font-semibold">Testimonial</h3>
            <hr className="bg-[#CCCCD2] lg:mb-10 mb-7" />
            <p className="lg:text-[18px] text-[15px] leading-[1.67] mb-[30px]">
              Non magna vulputate interdum ridiculus gravida etiam ultrices egestas iaculis, fringilla potenti sapien enim faucibus fermentum platea laoreet, scelerisque ornare aptent malesuada neque fusce aliquam feugiat. Eros nascetur porta habitant ad libero enim rutrum nec curabitur vel quisque, massa a nulla mauris iaculis in lectus leo fames vulputate dignissim fringilla, dapibus malesuada platea auctor ridiculus duis sociis aliquet hendrerit ornare.
            </p>
            <div className="flex items-center gap-5">
              <div className="w-[80px] h-[80px] rounded-full bg-gray-400"></div>
              <div className="leading-[1]">
                <h4 className="lg:text-[24px] text-[18px] font-semibold text-[#021441] mb-[5px]">Yohan Ruso</h4>
                <p className="lg:text-[18px] text-[15px] ">CEO & Founder @ pro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
