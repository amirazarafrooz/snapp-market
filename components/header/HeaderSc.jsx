import React from "react";
import Image from "next/image";
import headerbanner from "../../public/assets/images/header-banner.png";
import logo from "../../public/assets/images/snappmarket-logo.svg";
import marketlogo from "../../public/assets/images/market-logo.jpg";
import clock from "../../public/assets/images/clock-icon.svg";
import delivery from "../../public/assets/images/delivery-icon.svg";
import search from "../../public/assets/images/search-icon.svg";
import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import { SearchBar } from "./SearchBar";
import { UserProfile } from "./UserProfile";


export const HeaderSc = () => {
  return (
    <div>
      {/* main container */}
      <div
        className="w-full h-28 overflow-hidden p-2 tablet:h-16 "
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundImage: `url(${headerbanner.src})`,
        }}
      >
        {/*  upper row container  */}
        <div className="flex justify-center tablet:items-center tablet:flex tablet:h-full  ">
          <div className="w-144 h-12 flex border-b border-snp-lightgray border-opacity-25 justify-between px-2 pt-[2px] pb-[10px]  tablet:p-2 tablet:border-none tablet:justify-between tablet:w-188 laptop:w-248 desktop:w-300">
            {/* right container */}
            <div className="flex  tablet:justify-start tablet:w-full desktop:justify-between ">
              {/* logo */}
              <Image className="h-full w-12 tablet:w-14  " src={logo}></Image>

              {/* location container */}
              <div className="desktop:flex items-center p-2 hidden tablet:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6 ml-2 desktop:w-4 desktop:h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span className=" desktop:text-snp-light desktop:truncate desktop:block desktop:font-iransansl desktop:text-xs  desktop:w-32">
                  انقلاب، انقلاب اسلامی، ابوریحان، مير هادى، نانوایی سنگکی پلاک
                  22 واحد 22
                </span>
              </div>

              {/* market detail */}
              <div className="flex items-center justify-center mr-2 tablet:w-48 ">
                <Image
                  className="w-6 h-6 rounded-full ml-2 p-1 tablet:w-10 tablet:h-10 laptop:w-11 laptop:h-11 "
                  src={marketlogo}
                ></Image>
                <span className="font-iransans text-xs text-snp-light tablet:whitespace-nowrap">
                  <span className="hidden font-iransans text-snp-light tablet:inline-block">
                    خرید از
                  </span>{" "}
                  هایپر استار صبا
                </span>
              </div>
            </div>

            {/* left container */}
            <div className="tablet:flex  tablet:justify-around tablet:items-center tablet:w-full  ">
              {/* Search box */}
               <SearchBar device={'tablet+'}/> 
              
              {/* user info */}
                <UserProfile headerId={"HeaderSc"} />
              {/* <div className="flex items-center  laptop:mx-4 h-full">
                <svg
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
                </svg>
                <span className="hidden tablet:text-snp-light   tablet:truncate tablet:block tablet:ml-2 font-iransansl tablet:text-xs laptop:w-20 laptop:text-base">
                  پایونیر تیم گروه دوم
                </span>
              </div> */}
              {/* button cart  */}
              <div>
                <button className=" hidden md:bg-snp-light rounded text-snp-primary px-6 py-2 font-iransansl tablet:w-36 tablet:block">
                  سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower row container */}
        <div className=" flex justify-center items-center h-14 tablet:w-full tablet:hidden laptop:hidden desktop:hidden ">
          <div className="flex  items-center   w-144 tablet:justify-start  tablet:w-188 laptop:w-248 desktop:w-300">
            
            {/* Search box */}
            <SearchBar device={'mobile'} />
          </div>
        </div>
      </div>

    







    {/* navbar menu-scrolled */}
      <HeaderNav/>




      
    </div>
  );
};
