import React from "react";
import Image from "next/image";
import headerbanner from "../../public/assets/images/header-banner.png";
import logo from "../../public/assets/images/snappmarket-logo.svg";
import marketlogo from "../../public/assets/images/market-logo.jpg";
import clock from "../../public/assets/images/clock-icon.svg";
import delivery from "../../public/assets/images/delivery-icon.svg";
import search from "../../public/assets/images/search-icon.svg";


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
              <div className="hidden  tablet:w-64 tablet:flex  tablet:items-center  tablet:p-2 laptop:w-52 desktop:w-96">
                <form className="tablet:relative tablet:flex  tablet:items-center tablet:w-full ">
                  <input
                    type="text"
                    className="tablet:block  h-9 font-iransans rounded-full indent-10  placeholder-gray-900 text-xs tablet:w-full tablet:h-10"
                    placeholder="جست و جوی برند یا محصول"
                  ></input>
                  <button className="absolute flex  justify-center items-center w-10">
                    <Image alt="search button" src={search} />
                  </button>
                </form>
              </div>
              {/* user info */}
              <div className="flex items-center  laptop:mx-4 h-full">
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
              </div>
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
            <div className="flex  items-center  p-2 w-full">
              <form className="relative flex  items-center w-full">
                <input
                  type="text"
                  className="block w-full  h-9 font-iransans rounded-full indent-10  placeholder-gray-900 text-xs tablet:w-96 tablet:h-10"
                  placeholder="جست و جوی برند یا محصول"
                ></input>
                <button className="absolute flex  justify-center items-center w-10">
                  <Image alt="search button" src={search} />
                </button>
                {/* <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* navbar menu-scrolled */}
      <div className="hidden tablet:flex tablet:justify-center tablet:w-full tablet:bg-white shadow-2xl ">
        <div className="tablet:flex tablet:justify-between tablet:items-center tablet:px-2 tablet:pt-4 tablet:pb-5 tablet:h-12  tablet:w-188 laptop:w-248 desktop:w-300">
       
       {/* right container */}
            <div className="tablet:flex ">
                <div className="tablet:w-25 tablet:flex tablet:justify-start tablet:items-center tablet:font-iransans tablet:text-sm tablet:ml-6">
                        <svg className="ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        style={{ width: 20, height: 20 }}
                        >
                        <defs>
                            <symbol id="GridOutlineIcon" viewBox="0 0 32 32">
                            <path d="M3.875 2.098c-.684.187-1.355.77-1.676 1.449l-.168.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184h8.75l.36-.168c.417-.196.976-.7 1.202-1.086.344-.59.348-.652.332-5.133l-.02-4.113-.198-.422a2.866 2.866 0 00-1.317-1.317l-.422-.199-4.156-.011c-3.512-.012-4.21 0-4.5.078m15.426.02a2.797 2.797 0 00-1.602 1.429l-.168.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184 4.281.015c4.77.02 4.57.036 5.242-.41.399-.261.828-.816.988-1.277.106-.305.114-.621.114-4.578v-4.25l-.2-.422a2.866 2.866 0 00-1.316-1.317l-.422-.199-4.187-.011c-3.907-.016-4.211-.008-4.543.097M12.16 4.34l.152.156v3.77c0 3.683-.004 3.777-.126 3.906-.19.207-.285.21-4.14.191l-3.606-.02-.144-.14-.14-.144-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153m15.5 0l.152.156v3.777c0 3.625-.003 3.782-.12 3.922l-.118.149H19.94l-.144-.14-.14-.145-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153M3.8 17.617a2.797 2.797 0 00-1.6 1.43l-.169.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184h8.75l.36-.168c.417-.196.976-.7 1.202-1.086.344-.59.348-.652.332-5.133l-.02-4.113-.198-.422a2.866 2.866 0 00-1.317-1.317l-.422-.199-4.187-.011c-3.906-.016-4.211-.008-4.543.097m15.5 0a2.797 2.797 0 00-1.602 1.43l-.168.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184 4.281.015c4.77.02 4.57.036 5.242-.41.399-.262.828-.816.988-1.277.106-.305.114-.621.114-4.578v-4.25l-.2-.422a2.866 2.866 0 00-1.316-1.317l-.422-.199-4.187-.011c-3.907-.016-4.211-.008-4.543.097m-7.14 2.223l.152.156v3.77c0 3.683-.004 3.777-.126 3.906-.19.207-.285.21-4.14.191l-3.606-.02-.144-.14-.14-.144-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153m15.5 0l.152.156v3.777c0 3.625-.003 3.782-.12 3.922l-.118.149h-7.633l-.144-.14-.14-.145-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153"></path>
                            </symbol>
                        </defs>
                        <use href="#GridOutlineIcon" xlinkHref="#GridOutlineIcon"></use>
                        </svg>
                        <span >دسته بندی ها</span>
                </div>


                <div className="tablet:w-40 tablet:flex tablet:justify-start tablet:items-center tablet:font-iransans tablet:text-sm">
                <svg className="ml-1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
      style={{ width: 20, height: 20 }}
    >
      <defs>
        <symbol id="DiscountColorfulIcon" viewBox="0 0 16 16">
          <g fill="none">
            <path
              fill="#60E1A9"
              d="M9.536 1.8a1.07 1.07 0 001.755.52c.812-.741 2.073.076 1.742 1.129-.242.77.408 1.526 1.198 1.394 1.08-.18 1.702 1.195.86 1.9a1.087 1.087 0 00.26 1.827c1.006.437.792 1.934-.294 2.068-.795.098-1.207 1.008-.76 1.678.611.916-.37 2.06-1.356 1.58-.722-.352-1.556.19-1.54.997.024 1.104-1.414 1.53-1.986.588a1.068 1.068 0 00-1.83 0c-.572.942-2.01.516-1.987-.588.017-.808-.817-1.349-1.539-.998-.985.48-1.967-.663-1.356-1.579.447-.67.035-1.58-.76-1.678-1.086-.134-1.3-1.63-.294-2.068.735-.32.876-1.31.26-1.826-.842-.706-.22-2.081.86-1.9.79.131 1.44-.625 1.198-1.395-.33-1.053.93-1.87 1.742-1.13a1.07 1.07 0 001.755-.52C7.751.734 9.25.734 9.536 1.8z"
            ></path>
            <path
              fill="#88F6C6"
              d="M16 8.538c0 .505-.363 1.009-1.022 1.084-.618.07-1.022.56-1.022 1.08 0 .204.062.413.199.602.142.197.205.405.205.605 0 .73-.836 1.355-1.674.977a1.23 1.23 0 00-.206-.071c.315-.2.526-.54.526-.906 0-.2-.063-.408-.205-.605-.137-.19-.2-.398-.2-.602 0-.52.405-1.01 1.023-1.08.66-.075 1.022-.579 1.022-1.084 0-.397-.224-.796-.703-.988-.457-.184-.702-.59-.702-.999 0-.304.136-.611.42-.832.858-.663.314-1.92-.725-1.92a1.35 1.35 0 00-.207.016c-.732.113-1.353-.426-1.353-1.067 0-.108.017-.219.055-.33.172-.507-.053-.959-.431-1.21.21-.144.442-.208.668-.208.718 0 1.38.646 1.117 1.418a1.023 1.023 0 00-.055.33c0 .641.62 1.18 1.353 1.067.071-.01.14-.016.207-.016 1.039 0 1.583 1.257.726 1.92-.285.22-.42.528-.42.832 0 .41.244.815.702.999.479.192.702.59.702.988z"
            ></path>
            <path
              fill="#000"
              d="M6.18 16a1.62 1.62 0 01-.447-.064 1.564 1.564 0 01-1.135-1.554.573.573 0 00-.267-.505.555.555 0 00-.553-.032 1.551 1.551 0 01-1.866-.38 1.572 1.572 0 01-.125-1.926.578.578 0 00.045-.573.563.563 0 00-.45-.332A1.561 1.561 0 01.017 9.292a1.567 1.567 0 01.932-1.68.57.57 0 00.341-.451.575.575 0 00-.202-.534 1.571 1.571 0 01-.421-1.881c.3-.654.978-1.014 1.685-.896a.557.557 0 00.521-.189.577.577 0 00.117-.562 1.569 1.569 0 01.658-1.814 1.55 1.55 0 011.898.165c.15.137.348.183.541.126a.566.566 0 00.395-.406C6.669.47 7.28 0 8 0s1.33.47 1.518 1.17c.054.2.198.349.395.406.193.057.39.01.54-.126a1.55 1.55 0 011.899-.165c.612.39.876 1.12.658 1.813-.063.2-.02.406.117.563a.557.557 0 00.521.189 1.555 1.555 0 011.685.896 1.57 1.57 0 01-.42 1.88.575.575 0 00-.203.535.57.57 0 00.34.45c.662.288 1.037.964.933 1.681a1.561 1.561 0 01-1.365 1.342.563.563 0 00-.45.332.578.578 0 00.045.573 1.572 1.572 0 01-.125 1.926 1.551 1.551 0 01-1.866.38.555.555 0 00-.553.032.573.573 0 00-.267.505 1.565 1.565 0 01-1.135 1.554 1.553 1.553 0 01-1.78-.695.56.56 0 00-.487-.276.56.56 0 00-.487.276A1.553 1.553 0 016.18 16zM8 13.965a1.56 1.56 0 011.342.757.548.548 0 00.645.253.562.562 0 00.415-.572 1.573 1.573 0 01.728-1.368 1.555 1.555 0 011.53-.09.547.547 0 00.675-.138.57.57 0 00.046-.713 1.58 1.58 0 01-.122-1.545c.23-.5.692-.84 1.236-.907a.56.56 0 00.498-.493.565.565 0 00-.341-.62 1.57 1.57 0 01-.932-1.225 1.576 1.576 0 01.55-1.444.569.569 0 00.155-.696.552.552 0 00-.612-.328 1.558 1.558 0 01-1.44-.518 1.578 1.578 0 01-.317-1.52.567.567 0 00-.242-.67.546.546 0 00-.686.06 1.555 1.555 0 01-1.496.348 1.566 1.566 0 01-1.08-1.107A.556.556 0 008 1a.556.556 0 00-.553.429 1.566 1.566 0 01-1.079 1.107 1.556 1.556 0 01-1.496-.347.546.546 0 00-.686-.06.567.567 0 00-.242.67c.167.531.049 1.1-.316 1.519-.361.415-.9.609-1.441.518a.552.552 0 00-.612.328.569.569 0 00.155.696c.424.355.63.895.55 1.444a1.57 1.57 0 01-.932 1.225.565.565 0 00-.341.62.56.56 0 00.498.493 1.564 1.564 0 011.236.907 1.579 1.579 0 01-.122 1.545.57.57 0 00.046.713.547.547 0 00.676.139 1.555 1.555 0 011.529.089c.468.3.74.81.728 1.368a.563.563 0 00.415.573.548.548 0 00.645-.254A1.56 1.56 0 018 13.965z"
            ></path>
            <path
              fill="#000"
              d="M5.5 11a.498.498 0 01-.354-.854l5-5a.5.5 0 11.708.708l-5 5A.498.498 0 015.5 11zM6 7a1.001 1.001 0 010-2 1.001 1.001 0 010 2zm4 4a1.001 1.001 0 010-2 1.001 1.001 0 010 2z"
            ></path>
          </g>
        </symbol>
      </defs>
      <use
        fill="#1A1C23"
        href="#DiscountColorfulIcon"
        xlinkHref="#DiscountColorfulIcon"
      ></use>
               </svg>
                    <span className="whitespace-nowrap">تخفیف‌های امروز</span>
                </div>
            </div>
   
    {/* left container */}
            <div className="w-40 flex justify-end items-center font-iransans text-sm">
        
                <span className=" whitespace-nowrap">سوالات متداول</span>
            </div>

        </div>
      </div>













      
    </div>
  );
};
