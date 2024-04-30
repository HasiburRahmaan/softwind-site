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
        <FooterTitle title="Contact Us" className="mb-10" />

        {contactInformations.map((item, index) => (
          <FooterContent key={index} className="mb-6">
            {item.text}
          </FooterContent>
        ))}
      </div>

      <div>
        <FooterTitle title="Our Services" className="mb-10" />
        {services.map((item, index) => (
          <FooterContent key={index} className="mb-6">
            {item.text}
          </FooterContent>
        ))}
      </div>

      <div>
        <FooterTitle title="Quick Link" className="mb-10" />
        {quickLinks.map((item, index) => (
          <FooterContent key={index} className="mb-6">
            {item.text}
          </FooterContent>
        ))}
      </div>
    </div>
  );
};

export default Footer;

let contactInformations = [
  { text: <p>info@softwindtech.com</p> },
  { text: <a href="tel:+8801730433711">01730-433711</a> },
  { text: <address>House: 73, Road-13/A, Block: D, Banani, Dhaka-1213, Bangladesh</address> },
];
let quickLinks = [
  { text: "Contact", href: "" },
  { text: "Career", href: "" },
  { text: "Privacy Policy", href: "" },
];
let services = [
  { text: "Home", href: "" },
  { text: "About Us", href: "" },
  { text: "Services", href: "" },
  { text: "Portfolio", href: "" },
];

const FooterTitle = ({ title, className }: any) => {
  return <p className={`text-[#001343] font-bold text-[24px] leading-[34px] ${className}`}>{title}</p>;
};

function FooterContent({ children, className }: any) {
  return <div className={`text-[18px] leading-[18px] ${className}`}>{children}</div>;
}
