import React from "react";
import Image from "next/image";
import search from "../../public/assets/images/search-icon.svg";

export const SearchBar = ({ device }) => {

  return (
    <>
      {device === "mobile" ? (
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
          </form>
        </div>
      ) : (
        <div className="hidden tablet:w-64 tablet:flex  tablet:items-center  tablet:p-2 laptop:w-52 desktop:w-96">
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
      )}
    </>
  );
};