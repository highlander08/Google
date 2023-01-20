import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import Avatar from "./Avatar";
import  HeaderOptions  from "./HeaderOptions";

const Header: React.FC = () => {
  const router = useRouter();

  const searchInputRef: any = useRef<HTMLInputElement>(null);

  const search = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            className="flex-grow w-full text-gray-500 focus: outline-none"
            ref={searchInputRef}
          />
          <AiFillDelete
            size={20}
            style={{ color: "#c0bdbd" }}
            className="cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <BiMicrophone
            size={24}
            className="mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-1 border-gray-300"
          />
          <AiOutlineSearch
            size={21}
            className="mr-3 hidden sm:inline-flex text-blue-500"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://avatars.githubusercontent.com/u/38596921?s=96&v=4"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
