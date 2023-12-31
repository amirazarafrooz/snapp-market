"use client";
import Image from "next/image";
import Link from "next/link";
import megamenu from "../../public/assets/images/MegaMenuBg.png";
import { useRef, useEffect } from "react";

const CategoriesMenu = ({ categoryItems, handlemodal, handleClose }) => {
  const modal = useRef(null);

  return (
    <div>
      {categoryItems && (
        <div
          className=" w-full flex justify-center items-start -mt-4  "
          onClick={handlemodal}
        >
          <div
            className="fixed overflow-scroll right-0 top-0 z-50 flex flex-col   laptop:flex  laptop:justify-start laptop:items-center laptop: laptop:flex-wrap laptop:gap-0 w-72 h-full bg-snp-white px-6 pt-6 pb-2
                        laptop:relative laptop:w-248 laptop:shadow-md laptop:h-96 laptop:px-6 laptop:pt-5 laptop:pb-2 laptop:mx-auto laptop:rounded-b-lg laptop:rounded-tl-lg desktop:w-300"
          >
            <div className="flex justify-between items-center mb-6  font-iransansb laptop:hidden">
              <h1>دسته‌بندی‌ها</h1>
              <span onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="close-icon cursor-pointer"
                  viewBox="0 0 32 32"
                  style={{ width: 12, height: 12 }}
                >
                  <defs>
                    <symbol id="CrossIcon" viewBox="0 0 32 32">
                      <path d="M18.828 16L31.414 3.418a2.004 2.004 0 000-2.832 2.004 2.004 0 00-2.832 0L16 13.172 3.418.586a2.004 2.004 0 00-2.832 0 2.004 2.004 0 000 2.832L13.172 16 .586 28.582A2.004 2.004 0 002 32a2.01 2.01 0 001.418-.586L16 18.828l12.582 12.586c.395.39.906.586 1.418.586a2.004 2.004 0 001.414-3.418zm0 0"></path>
                    </symbol>
                  </defs>
                  <use
                    fill="#757575"
                    href="#CrossIcon"
                    xlinkHref="#CrossIcon"
                  ></use>
                </svg>
              </span>
            </div>
            {categoryItems
              .filter((item) => item.subs.length > 0)
              ?.map((item) => (
                <Link
                  onClick={handleClose}
                  className=" group hover:bg-white laptop:h-1/6   laptop:my-1"
                  href={`/categories/${item.main}`}
                >
                  <div className="flex flex-col font-iransans py-3 laptop:py-1 laptop:p-0 laptop:h-16 leading-5">
                    <div
                      className='flex items-center text-snp-primary text-sm leading-5 before:ml-2 before:text-snp-secondary before:opacity-50 before:content-["•"] before:text-2xl
                                     before:group-hover:text-snp-primaryh before:group-hover:opacity-100 before:group-hover:scale-125'
                    >
                      {item.mainFA}{" "}
                    </div>

                    <div className="  truncate block text-ellipsis text-gray-400 text-sm leading-5 pt-1 w-52 laptop:w-44 group-hover:text-snp-lowdiscount">
                      {item.subs.map((item) => (
                        <span className="">{item} ، </span>
                      ))}{" "}
                    </div>
                  </div>
                </Link>
              ))}
            <div className="hidden  laptop:flex items-end justify-end  h-full">
              <Image
                alt="mega-menu"
                width={201}
                height={143}
                src={megamenu}
              ></Image>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesMenu;
