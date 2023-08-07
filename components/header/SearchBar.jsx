"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import search from "../../public/assets/images/search-icon.svg";
import categoruIcon from "../../public/assets/images/category-icon.svg";
import Link from "next/link";

export const SearchBar = ({ device, searchItem, categoryItems, subDevice , subCategory }) => {
  const [searchterm, setSearchterm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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

  const handleChange = useCallback((e) => {
    setSearchterm(e.target.value);
    setShowSearch(!showSearch);
  }, []);

  // const searchProduct =product.filter((item) => item.name == searchItem.name )
  // console.log(searchProduct);

  return (
    <>
      {device === "mobile" ? (
      <div className="flex flex-col items-start justify-start  w-full ">
          {subDevice === "mobiledown" ? (
                  <div className="flex flex-col items-start justify-start  px-2 w-full ">
                    <form className="relative flex  items-center w-full z-[202]">
                      <input
                        onChange={handleChange}
                        type="text"
                        className="block w-full  h-9 font-iransans rounded-full indent-10  placeholder-gray-900 text-xs tablet:w-96 tablet:h-10"
                        placeholder="جست و جوی برند یا محصول"
                      ></input>
                      <button className="absolute flex  justify-center items-center w-10">
                        <Image alt="search button" src={search} />
                      </button>
                    </form>
                    {showSearch && (
                      <div>
                        {searchterm !== "" && (
                          <div
                            className="fixed flex justify-center top-0 left-0 right-0 bottom-0 bg-[#0000006e]  z-[201] h-full "
                            onClick={searchHandler}
                          >
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
                                            href={`/categories/${
                                              categoryItems.filter(
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
                    )}
                  </div>
          ):(
            <div className="flex flex-col items-start justify-start  px-2 w-full ">
            <form className="relative flex  items-center w-full z-[202]">
              <input
                onChange={handleChange}
                type="text"
                className="block w-full  h-9 font-iransans rounded-full indent-10  placeholder-gray-900 text-xs tablet:w-96 tablet:h-10"
                placeholder="جست و جوی برند یا محصول"
              ></input>
              <button className="absolute flex  justify-center items-center w-10">
                <Image alt="search button" src={search} />
              </button>
            </form>
            {showSearch && (
              <div>
                {searchterm !== "" && (
                  <div
                    className="fixed flex justify-center top-0 left-0 right-0 bottom-0 bg-[#0000006e]  z-[201] h-full "
                    onClick={searchHandler}
                  >
                    <div className="relative flex justify-start top-52  h-fit  tablet:top-44 tablet:right-4 laptop:right-36 w-full  mx-6 mobile:mx-0 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  ">
                      {searchItem && (
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
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          )}
              </div> 
               ) : (
   
            <div className="hidden tablet:w-64 tablet:flex  tablet:items-center  tablet:p-2 laptop:w-52 desktop:w-96">
              <form className="tablet:relative tablet:flex  tablet:items-center tablet:w-full ">
                <input
                  onChange={handleChange}
                  type="text"
                  className="tablet:block  h-9 font-iransans rounded-full indent-10  placeholder-gray-900 text-xs tablet:w-full tablet:h-10"
                  placeholder="جست و جوی برند یا محصول"
                ></input>
                <button className="absolute flex  justify-center items-center w-10">
                  <Image alt="search button" src={search} />
                </button>
              </form>

              {showSearch && (
                <div>
                  {searchterm !== "" && (
                    <div
                      className="fixed flex justify-center top-[54px] left-0 right-0 bottom-0 bg-[#0000006e] overflow-hidden  z-[201] h-screen "
                      onClick={searchHandler}
                    >
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
                    </div>
                  )}
                </div>
              )}
            </div>
          
       
      )}
    </>
  );
};





// {subDevice === "mobiledown" ? (
//   <div className="hidden tablet:w-64 tablet:flex  tablet:items-center  tablet:p-2 laptop:w-52 desktop:w-96">
//   <form className="tablet:relative tablet:flex  tablet:items-center tablet:w-full ">
//     <input
//       onChange={handleChange}
//       type="text"
//       className="tablet:block  h-9 font-iransans rounded-full indent-10  placeholder-gray-900 text-xs tablet:w-full tablet:h-10"
//       placeholder="جست و جوی برند یا محصول"
//     ></input>
//     <button className="absolute flex  justify-center items-center w-10">
//       <Image alt="search button" src={search} />
//     </button>
//   </form>

//   {showSearch && (
//     <div>
//       {searchterm !== "" && (
//         <div
//           className="fixed flex justify-center top-[54px] left-0 right-0 bottom-0 bg-[#0000006e] overflow-hidden  z-[201] h-screen "
//           onClick={searchHandler}
//         >
//           <div className=" bg-pink-600 relative flex justify-start top-2  h-fit  tablet:top-0 tablet:right-[115px] laptop:right-[500px] desktop:right-[535px] w-full  mx-6 mobile:mx-0 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  ">
//             {searchItem && (
//               <div className="bg-pink-600  w-full rounded-b-md shadow-md px-2 py-2  tablet:w-56 laptop:w-44 desktop:w-[350px] mobile:w-full text-gray-500 text-sm ">
//                 {searchterm !== "" && (
//                   <div className="w-full tablet:w-96 mt-2 font-iransans">
//                     <div className="p-2 flex">
//                       <Image
//                         className="ml-2"
//                         alt="search button"
//                         src={search}
//                       />
//                       <span className="w-44 laptop:w-32 break-words">
//                         نتایج جستجوی"{searchterm}" در هایپراستار صبا
//                       </span>
//                     </div>
//                     <div className="p-2 text-snp-black text-xs">
//                       نتایج مرتبط
//                     </div>
//                     {/* {searchItem
//                 .filter((item) => item.name.includes(searchterm)) */}
//                     {searchResult.map((item) => (
//                       <div className="flex items-center py-1">
//                         <Image
//                           className="ml-2"
//                           width={15}
//                           height={15}
//                           src={categoruIcon}
//                         />
//                         <Link
//                           href={`/categories/${
//                             categoryItems.filter(
//                               (subitem) => subitem.mainFA == item
//                             )[0].main
//                           }`}
//                         >
//                           {item}
//                         </Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )}
// </div>


