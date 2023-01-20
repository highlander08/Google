import React from "react";
import HeaderOption from "./HeaderOption";
import { AiOutlineSearch, AiOutlineAlignLeft } from "react-icons/ai";
import {
  BsFillImageFill,
  BsCameraVideoFill,
  BsFillPinMapFill,
  BsNewspaper,
} from "react-icons/bs";

const HeaderOptions: React.FC = () => {
  return (
    <header className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption title="All" Icon={AiOutlineSearch} selected />
        <HeaderOption title="Images" Icon={BsFillImageFill} />
        <HeaderOption title="Videos" Icon={BsCameraVideoFill} />
        <HeaderOption title="News" Icon={BsNewspaper} />
        <HeaderOption title="Maps" Icon={BsFillPinMapFill} />
        <HeaderOption title="More" Icon={AiOutlineAlignLeft} />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </header>
  );
};

export default HeaderOptions;
