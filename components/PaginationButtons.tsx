import React from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <AiFillCaretLeft size={20} />
            <p>previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <AiFillCaretRight size={20} />
          <p>next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
