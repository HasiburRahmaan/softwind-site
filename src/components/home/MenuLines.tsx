"use client";

import { useEffect, useState } from "react";
import HoverLine from "../reusable/hoverLine";

export default function MenuLines() {
  let data = [
    { text: "Home", href: "home", colorVariant: "white" },
    { text: "About", href: "about", colorVariant: "red" },
    { text: "Services", href: "services", colorVariant: "red" },
    { text: "Glance", href: "glance", colorVariant: "red" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [activeColorVariation, setActiveColorVariation] = useState("#4A0404");
  let sections = data.map((item) => item.href);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      //   console.log({ scrollPosition });
      const sectionPositions: any = sections.map((section) => {
        const element = document.getElementById(section);
        return element ? element.offsetTop : null;
      });
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (sectionPositions[i] !== null && scrollPosition >= sectionPositions[i] - 100) {
          setActiveSection(sections[i]);
          setActiveColorVariation(data[i].colorVariant);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: any) => {
    let section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {data.map((item, index) => (
        <div onClick={() => handleClick(item.href)} key={index} className="flex gap-2 mb-8 cursor-pointer">
          <HoverLine active={item.href == activeSection} text={item.text} colorVariant={activeColorVariation} />
        </div>
      ))}
    </div>
  );
}
