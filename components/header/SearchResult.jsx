"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import search from "../../public/assets/images/search-icon.svg";
import categoruIcon from "../../public/assets/images/category-icon.svg";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

export const SearchResult = ({
  device,
  searchItem,
  searchterm,
  categoryItems,
  subDevice,
  subCategory,
  handlemodalSearch,
  handleCloseSearch
}) => {
  // const [searchterm, setSearchterm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchResult, "searchResult");
  useEffect(() => {
    const result = [
      ...new Set(
        searchItem
          ?.filter((item) => item.name.includes(searchterm))
          .map((item) => item.category.sub)
      ),
    ];
    setSearchResult(result);
  }, [searchterm]);

  const [showSearch, setShowSearch] = useState(false);
  const searchHandler = useCallback(() => {
    setShowSearch(!showSearch);
  }, [showSearch]);


 
 



  // const handleChange = useCallback((e) => {
  //   setSearchterm(e.target.value);
  //   setShowSearch(!showSearch);
  // }, []);

  // const searchProduct =product.filter((item) => item.name == searchItem.name )
  // console.log(searchProduct);

  return (
    <>
      {device === "mobile" ? (
        <div className="flex flex-col items-start justify-start   w-full " >
          {subDevice === "mobiledown" ? (
            <div className="flex flex-col items-center justify-center   w-full " onClick={handlemodalSearch}>
              {/* form  */}
              {/* <SearchBar handleChange={handleChange}/> */}

              {searchItem && (
                <div className="bg-white w-full rounded-b-md shadow-md py-2 mobile:w-full   text-gray-500 text-sm ">
                  {searchterm !== "" && (
                    <div className="w-full  tablet:w-96 mt-0 font-iransans">
                     <div className="p-2 flex items-center">
                        <span class="relative flex justify-center items-center h-full w-5 ml-2">
                        <span class="animate-ping absolute inline-flex h-3 w-3  rounded-full bg-sky-400 opacity-75"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1"
                            className="absolute inline-flex "
                            viewBox="0 0 96 96"
                          >
                            <path
                              d="M305 887c-97-33-172-98-214-187-37-79-37-201 0-280 33-70 99-136 169-169 46-22 69-26 140-26 86 0 127 13 203 62l27 18 118-118C841 94 868 72 878 82s-12 37-105 130L655 330l18 27c49 76 62 117 62 203 0 71-4 94-26 140-33 70-99 136-168 168-66 30-175 39-236 19zm229-61c105-51 161-144 161-266 0-85-21-142-74-203-82-92-237-121-353-64-160 79-215 278-118 430 80 126 246 170 384 103z"
                              transform="matrix(.1 0 0 -.1 0 96)"
                            ></path>
                            <path
                              d="M425 700l-69-70-33 32c-26 25-36 29-45 20-10-10-2-22 35-60l47-47 85 85c65 64 82 87 73 97-6 7-13 13-17 13s-38-31-76-70zM260 500c0-19 7-20 140-20s140 1 140 20-7 20-140 20-140-1-140-20zM260 380c0-19 7-20 140-20s140 1 140 20-7 20-140 20-140-1-140-20z"
                              transform="matrix(.1 0 0 -.1 0 96)"
                            ></path>
                         </svg>
                        </span>
                       <Link onClick={handleCloseSearch} href={{
                                pathname: "/search",
                                query: { term: searchterm },
                              }}  >
                          نتایج جستجوی"{searchterm}" در هایپراستار صبا
                          </Link>
                        </div>
                      <div className="p-2 text-snp-black text-xs">
                        نتایج مرتبط
                      </div>
                      {/* {searchItem
                                        .filter((item) => item.name.includes(searchterm)) */}
                      {searchResult.map((item) => (
                        <div className="flex items-center py-1">
                          <Image
                            className="ml-2"
                            width={15}
                            height={15}
                            src={categoruIcon}
                          />
                          <Link onClick={handleCloseSearch}
                            href={`/subcategories/${
                              subCategory.filter(
                                (subitem) => subitem.mainFA == item
                              )[0].main
                            }`}
                          >
                            {item}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex  flex-col items-start justify-start px-6 mobile:px-0 tablet:px-2 w-full " onClick={handlemodalSearch}>
              {/* form  */}
              {/* <SearchBar handleChange={handleChange}/> */}
              <div className="w-full">
                {searchterm !== "" && (
                  <div className="bg-snp-white w-full rounded-b-md shadow-md px-2 py-2  tablet:w-96 mobile:w-full text-gray-500 text-sm ">
                    {searchterm !== "" && (
                      <div className="w-full  mobile:w-[450px] tablet:w-96 mt-0 font-iransans">
                        <div className="p-2 flex items-center">
                        <span class="relative flex justify-center items-center h-full w-5 ml-2">
                        <span class="animate-ping absolute inline-flex h-3 w-3  rounded-full bg-sky-400 opacity-75"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1"
                            className="absolute inline-flex "
                            viewBox="0 0 96 96"
                          >
                            <path
                              d="M305 887c-97-33-172-98-214-187-37-79-37-201 0-280 33-70 99-136 169-169 46-22 69-26 140-26 86 0 127 13 203 62l27 18 118-118C841 94 868 72 878 82s-12 37-105 130L655 330l18 27c49 76 62 117 62 203 0 71-4 94-26 140-33 70-99 136-168 168-66 30-175 39-236 19zm229-61c105-51 161-144 161-266 0-85-21-142-74-203-82-92-237-121-353-64-160 79-215 278-118 430 80 126 246 170 384 103z"
                              transform="matrix(.1 0 0 -.1 0 96)"
                            ></path>
                            <path
                              d="M425 700l-69-70-33 32c-26 25-36 29-45 20-10-10-2-22 35-60l47-47 85 85c65 64 82 87 73 97-6 7-13 13-17 13s-38-31-76-70zM260 500c0-19 7-20 140-20s140 1 140 20-7 20-140 20-140-1-140-20zM260 380c0-19 7-20 140-20s140 1 140 20-7 20-140 20-140-1-140-20z"
                              transform="matrix(.1 0 0 -.1 0 96)"
                            ></path>
                         </svg>
                        </span>
                       <Link onClick={handleCloseSearch} href={{
                                pathname: "/search",
                                query: { term: searchterm },
                              }}  >
                          نتایج جستجوی"{searchterm}" در هایپراستار صبا
                          </Link>
                        </div>
                        <div className="p-2 text-snp-black text-xs">
                          نتایج مرتبط
                        </div>
                        {/* {searchItem
                                .filter((item) => item.name.includes(searchterm)) */}
                        {searchResult.map((item) => (
                          <div className="flex items-center py-1">
                            <Image
                              className="ml-2"
                              width={15}
                              height={15}
                              src={categoruIcon}
                            />
                           <Link onClick={handleCloseSearch}
                            href={`/subcategories/${
                              subCategory.filter(
                                (subitem) => subitem.mainFA == item
                              )[0].main
                            }`}
                          >
                            {item}
                          </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="hidden tablet:w-64 tablet:flex  tablet:items-center  laptop:w-52 desktop:w-96" onClick={handlemodalSearch}>
          {/* form  */}
          {/* <SearchBar handleChange={handleChange}/> */}
          <div>
            {searchterm !== "" && (
              <div>
                {searchItem && (
                  <div className="bg-snp-white  w-full rounded-b-md shadow-md px-2 py-2  tablet:w-60 laptop:w-48 desktop:w-[368px] mobile:w-full text-gray-500 text-sm ">
                    {searchterm !== "" && (
                      <div className="w-full tablet:w-96 mt-0 font-iransans">
                        <div className="p-2 flex items-center">
                        <span class="relative flex justify-center items-center h-full w-5 ml-2">
                        <span class="animate-ping absolute inline-flex h-3 w-3  rounded-full bg-sky-400 opacity-75"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1"
                            className="absolute inline-flex "
                            viewBox="0 0 96 96"
                          >
                            <path
                              d="M305 887c-97-33-172-98-214-187-37-79-37-201 0-280 33-70 99-136 169-169 46-22 69-26 140-26 86 0 127 13 203 62l27 18 118-118C841 94 868 72 878 82s-12 37-105 130L655 330l18 27c49 76 62 117 62 203 0 71-4 94-26 140-33 70-99 136-168 168-66 30-175 39-236 19zm229-61c105-51 161-144 161-266 0-85-21-142-74-203-82-92-237-121-353-64-160 79-215 278-118 430 80 126 246 170 384 103z"
                              transform="matrix(.1 0 0 -.1 0 96)"
                            ></path>
                            <path
                              d="M425 700l-69-70-33 32c-26 25-36 29-45 20-10-10-2-22 35-60l47-47 85 85c65 64 82 87 73 97-6 7-13 13-17 13s-38-31-76-70zM260 500c0-19 7-20 140-20s140 1 140 20-7 20-140 20-140-1-140-20zM260 380c0-19 7-20 140-20s140 1 140 20-7 20-140 20-140-1-140-20z"
                              transform="matrix(.1 0 0 -.1 0 96)"
                            ></path>
                         </svg>
                        </span>
                       <Link onClick={handleCloseSearch} href={{
                                pathname: "/search",
                                query: { term: searchterm },
                              }}  >
                          نتایج جستجوی"{searchterm}" در هایپراستار صبا
                          </Link>
                        </div>
                        <div className="p-2 text-snp-black text-xs">
                          نتایج مرتبط
                        </div>
                        {/* {searchItem
                            .filter((item) => item.name.includes(searchterm)) */}
                        {searchResult.map((item) => (
                          <div className="flex items-center py-1">
                            <Image
                              className="ml-2"
                              width={15}
                              height={15}
                              src={categoruIcon}
                            />
                           <Link onClick={handleCloseSearch}
                            href={`/subcategories/${
                              subCategory.filter(
                                (subitem) => subitem.mainFA == item
                              )[0].main
                            }`}
                          >
                            {item}
                          </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
