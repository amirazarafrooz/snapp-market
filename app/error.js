"use client"; // Error components must be Client Components

import { useEffect } from "react";
import snappLogo from "../public/assets/images/snappmarket-logo.svg";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen bg-snp-white flex  justify-center items-center">
      <div className="bg-snp-lightgray py-8 w-1/2 flex flex-col justify-center items-center rounded border shadow-lg">
        <div>
          <Image src={snappLogo}></Image>
        </div>
        <p className=" font-iransans text-xl text-snp-primary my-5">
          مشکلی به وجود آمده!
        </p>
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
  );
}
