"use client";
import Lottie from "lottie-react";

import ContractUsJson from "./jsons/ContractUs.json";

export const ContractUsIcon = ({ fontSize = 30 }) => {
  return <Lottie animationData={ContractUsJson} loop={true} className={`w-[${fontSize}px] h-[${fontSize}px]`} />;
};
