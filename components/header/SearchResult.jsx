"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import search from "../../public/assets/images/search-icon.svg";
import categoruIcon from "../../public/assets/images/category-icon.svg";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

export const SearchResult = ({ device, searchItem,searchterm, categoryItems, subDevice , subCategory }) => {
  // const [searchterm, setSearchterm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
console.log(searchterm,'searchTerm');
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
      <div className="flex flex-col items-start justify-start  w-full ">
          {subDevice === "mobiledown" ? (
                  <div className="flex flex-col items-start justify-start  px-2 w-full ">

                    {/* form  */}
                    {/* <SearchBar handleChange={handleChange}/> */}
                      <div>
                         
                            <div className="relative flex justify-start top-20  h-fit  tablet:top-44 tablet:right-4 laptop:right-36 w-full  mx-6 mobile:mx-0 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  ">
                              {searchItem && (
                                <div className="bg-white w-full rounded-b-md shadow-md px-2 py-2  tablet:w-96 mobile:w-full text-gray-500 text-sm ">
                                  {searchterm !== "" && (
                                    <div className="w-full tablet:w-96 mt-6 font-iransans">
                                      <div className="p-2 flex">
                                        <Image
                                          className="ml-2"
                                          alt="search button"
                                          src={search}
                                        />
                                        نتایج جستجوی"{searchterm}" در هایپراستار صبا
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
                                  <Link
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
              
                  </div>
          ):(
            <div className="flex flex-col items-start justify-start  px-2 w-full ">
              {/* form  */}
            {/* <SearchBar handleChange={handleChange}/> */}
              <div>
                {searchterm !== "" && (
                 
                    <div className="relative flex justify-start top-52  h-fit  tablet:top-44 tablet:right-4 laptop:right-36 w-full  mx-6 mobile:mx-0 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  ">
                        <div className="bg-snp-white w-full rounded-b-md shadow-md px-2 py-2  tablet:w-96 mobile:w-full text-gray-500 text-sm ">
                          {searchterm !== "" && (
                            <div className="w-full tablet:w-96 mt-6 font-iransans">
                              <div className="p-2 flex">
                                <Image
                                  className="ml-2"
                                  alt="search button"
                                  src={search}
                                />
                                نتایج جستجوی"{searchterm}" در هایپراستار صبا
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
                                  <Link
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
                    </div>
                )}
              </div>
          </div>
          )}
              </div> 
               ) : (
   
            <div className="hidden tablet:w-64 tablet:flex  tablet:items-center  tablet:p-2 laptop:w-52 desktop:w-96">
              {/* form  */}
              {/* <SearchBar handleChange={handleChange}/> */}
                <div>
                  {searchterm !== "" && (
                   
                      <div className="relative flex justify-start top-2  h-fit  tablet:top-0 tablet:right-[115px] laptop:right-[500px] desktop:right-[535px] w-full  mx-6 mobile:mx-0 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  ">
                        {searchItem && (
                          <div className="bg-snp-white  w-full rounded-b-md shadow-md px-2 py-2  tablet:w-56 laptop:w-44 desktop:w-[350px] mobile:w-full text-gray-500 text-sm ">
                            {searchterm !== "" && (
                              <div className="w-full tablet:w-96 mt-2 font-iransans">
                                <div className="p-2 flex">
                                  <Image
                                    className="ml-2"
                                    alt="search button"
                                    src={search}
                                  />
                                  <span className="w-44 laptop:w-32 break-words">
                                    نتایج جستجوی"{searchterm}" در هایپراستار صبا
                                  </span>
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
                                    <Link
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





