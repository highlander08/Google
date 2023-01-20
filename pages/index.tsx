import type { NextPage } from "next";
import Head from "next/head";
import Avatar from "../components/Avatar";
import { CiCircleList } from "react-icons/ci";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <CiCircleList size={20} />
          <Avatar url="https://avatars.githubusercontent.com/u/38596921?s=96&v=4" />
        </div>
      </header>
      {/* <Body/> */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <AiOutlineSearch />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <BiMicrophone />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
