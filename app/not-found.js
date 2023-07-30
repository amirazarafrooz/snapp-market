import React from "react";
import Link from "next/link";
import Image from "next/image";
import img404 from "../public/assets/images/404.png";

export default function NotFound() {
  return (
    <div className="w-full  flex justify-center my-4 px-4">
      <div className="flex flex-col items-center p-8   ">
        <div className="flex flex-none">
          <Image className="object-cover w-64 h-72" src={img404} />
        </div>

        <div className="flex items-center flex-col">
          <h1 className="font-iransansb text-center leading-9 text-xl mt-4 mb-9">
            صفحه‌ای که دنبالش بودی رو نداریم!
          </h1>
          <p className="flex items-center font-iransansb text-sm text-snp-secondary">
            <Link className="flex " href="/">
              <span className="">ثبت سفارش</span>
              <div className="mr-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  style={{ width: 10, height: 10 }}
                >
                  <defs>
                    <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
                      <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
                    </symbol>
                  </defs>
                  <use
                    fill="#2446F5"
                    href="#AngleLeftIcon"
                    xlinkHref="#AngleLeftIcon"
                  ></use>
                </svg>
              </div>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
