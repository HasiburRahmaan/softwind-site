import React from "react";
import LogoWhite from "../icons/logo-white";
import SearchIcon from "../icons/SearchIcon";
import { ContractUsIcon } from "../icons/LottieAnimations/lottie";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link href={"/home"}>
        <div className="lg:w-[185px] w-[125px]">
          <LogoWhite />
        </div>
      </Link>
      <div className="flex justify-center items-center lg:gap-8 gap-3">
        <SearchIcon />
        <div className=" flex justify-center items-center text-white font-bold lg:gap-8 gap-3">
          CONTACT US
          <div className="bg-white rounded-full w-[30px] h-[30px] justify-center items-center">
            <ContractUsIcon fontSize={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
