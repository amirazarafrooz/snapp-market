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
  handlemodalSearch
}) => {
  // const [searchterm, setSearchterm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchterm, "searchTerm");
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
        <div className="flex flex-col items-start justify-start  w-full " >
          {subDevice === "mobiledown" ? (
            <div className="flex flex-col items-start justify-start  px-2 w-full " onClick={handlemodalSearch}>
              {/* form  */}
              {/* <SearchBar handleChange={handleChange}/> */}

              {searchItem && (
                <div className="bg-white w-full rounded-b-md shadow-md px-2 py-2 mobile:w-full tablet:w-96 text-gray-500 text-sm ">
                  {searchterm !== "" && (
                    <div className="w-full  tablet:w-96 mt-6 font-iransans">
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
                            href={{
                              pathname: "/search",
                              query: { term: item },
                            }}
                          >
                            {item}
                          </Link>
                          {/* <Link
                            href={`/subcategories/${
                              subCategory.filter(
                                (subitem) => subitem.mainFA == item
                              )[0].main
                            }`}
                          >
                            {item}
                          </Link> */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex  flex-col items-start justify-start  px-10 mobile:px-2 w-full " onClick={handlemodalSearch}>
              {/* form  */}
              {/* <SearchBar handleChange={handleChange}/> */}
              <div className="w-full">
                {searchterm !== "" && (
                  <div className="bg-snp-white w-full rounded-b-md shadow-md px-2 py-2  tablet:w-96 mobile:w-full text-gray-500 text-sm ">
                    {searchterm !== "" && (
                      <div className="w-full  mobile:w-[450px] tablet:w-96 mt-6 font-iransans">
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
                              href={{
                                pathname: "/search",
                                query: { term: item },
                              }}
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
                              href={{
                                pathname: "/search",
                                query: { term: item },
                              }}
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
