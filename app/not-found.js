import React from "react";
import Link from "next/link";
import Image from "next/image";
import img404 from "../public/assets/images/404.png";
import headerbanner from "../public/assets/images/header-banner.png";
import logo from "../public/assets/images/snappmarket-logo.svg";

export default function NotFound() {
  return (
    <>
      {/* exclusive header for 404 page */}
      <div
        className="w-full flex justify-center p-2 bg-slate-400 h-[107px] tablet:h-[60px]"
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundImage: `url(${headerbanner.src})`,
        }}
      >
        <div className="w-full h-full flex justify-between items-center tablet:w-192 laptop:w-248 desktop:w-300">
          {" "}
          {/* logo */}
          <Link href={'/'}><Image className="h-full w-12 tablet:w-14  " src={logo}></Image></Link>
         <Link href={''}> <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            fill="currentColor"
            className="ml-[10px]"
            viewBox="0 0 32 32"
            style={{ width: 18, height: 18 }}
          >
            <defs>
              <symbol id="UserIcon" viewBox="0 0 32 32">
                <path d="M27.313 20.688a15.92 15.92 0 00-6.083-3.817 9.244 9.244 0 003.602-10.367 9.247 9.247 0 00-8.836-6.508 9.246 9.246 0 00-8.832 6.508 9.244 9.244 0 003.602 10.367A16.03 16.03 0 00-.004 32h2.5c0-7.457 6.047-13.5 13.5-13.5 7.457 0 13.5 6.043 13.5 13.5h2.5a15.88 15.88 0 00-4.683-11.313zM15.995 16a6.752 6.752 0 01-6.75-6.75 6.752 6.752 0 016.75-6.75 6.75 6.75 0 110 13.5zm0 0"></path>
              </symbol>
            </defs>
            <use fill="#FFF" href="#UserIcon" xlinkHref="#UserIcon"></use>
          </svg></Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-4 px-4">
        <div className="w-full flex  min-h-fit flex-col items-center p-8 bg-snp-white tablet:w-192 laptop:w-248 desktop:w-300">
          <div className="flex flex-col h-[306px]">
            <Image
              className="w-[252px] h-auto max-w-xl z-20"
              alt="404 page"
              width={252}
              height={306}
              src={img404}
            />
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
    </>
  );
}
