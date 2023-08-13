"use client"; // Error components must be Client Components

import { useEffect } from "react";
import snappLogo from "../public/assets/images/snappmarket-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen bg-snp-white flex  justify-center items-center">
      <div className="bg-snp-lightgray py-8 w-1/2 h-1/2 flex flex-col justify-center items-center rounded border shadow-lg">
        <div>
          <Image src={snappLogo}></Image>
        </div>
        <p className=" font-iransans text-xl text-snp-primary my-5">
          متاسفانه خطایی رخ داده است!
          {/* {error.message || "مشکلی به وجود آمده!"} */}
        </p>
        <div className="flex items-center gap-2 font-iransans">
          <Link
            href={"/"}
            className="bg-snp-primary hover:bg-snp-primaryh text-snp-white p-2 rounded-md flex items-center gap-1"
          >
            <AiOutlineHome />
            خانه
          </Link>
          <button
            className="bg-snp-primary hover:bg-snp-primaryh text-snp-white p-2 rounded-md"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            لطفا مجدد تلاش کنید
          </button>
        </div>
      </div>
    </div>
  );
}
