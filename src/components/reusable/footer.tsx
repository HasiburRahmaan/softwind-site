import React from "react";
import LogoBlack from "../icons/logo-black";

const Footer = () => {
  return (
    <div className="px-[10%] py-[30px] mt-[20px] grid grid-cols-4  gap-20">
      <div>
        <LogoBlack />
        <p className="w-[310px] mt-[20px]">
          We understand the complexities of modern markets and translate them into real business solutions.
        </p>
      </div>

      <div>
        <FooterTitle title="Contact Us" />

        <FooterContent content="">
          <p>info@softwindtech.com</p>
        </FooterContent>

        <FooterContent content="">
          <a href="tel:+8801730433711">01730-433711</a>
        </FooterContent>

        <FooterContent content="">
          <address>House: 73, Road-13/A, Block: D, Banani, Dhaka-1213, Bangladesh</address>
        </FooterContent>
      </div>

      <div>
        <FooterTitle title="Our Services" />
        <FooterContent>Home</FooterContent>
        <FooterContent>About Us</FooterContent>
        <FooterContent>Services</FooterContent>
        <FooterContent>Portfolio</FooterContent>
      </div>

      <div>
        <FooterTitle title="Quick Link" />
        <FooterContent>Contact</FooterContent>
        <FooterContent>Career</FooterContent>
        <FooterContent>Privacy Policy</FooterContent>
      </div>
    </div>
  );
};

export default Footer;

const FooterTitle = ({ title }: any) => {
  return <p className="text-[#001343] font-bold text-[24px] leading-[34px]">{title}</p>;
};

function FooterContent({ children }: any) {
  return <div className="text-[18px] leading-[18px]">{children}</div>;
}
