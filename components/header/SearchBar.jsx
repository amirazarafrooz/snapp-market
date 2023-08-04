'use client'
import React, { useCallback, useState } from "react";
import Image from "next/image";
import search from "../../public/assets/images/search-icon.svg";
import categoruIcon from "../../public/assets/images/category-icon.svg";
import Link from "next/link";


export const SearchBar = ({ device , searchItem, categoryItems }) => {
  
  const [searchterm, setSearchterm] = useState('')


  
  const [showSearch, setShowSearch] = useState(false);
  const searchHandler = useCallback(() => {
    setShowSearch(!showSearch);
  }, [showSearch]);


  const handleChange = useCallback((e) => {
    setSearchterm(e.target.value)
    setShowSearch(!showSearch);
  
  },[] )


// const searchProduct =product.filter((item) => item.name == searchItem.name ) 
// console.log(searchProduct);

  return (
    <>
  {device === "mobile" ? (
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
  {(showSearch) && (  <div>
    {(searchterm !=='') && (
     <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0 bg-[#0000006e]  z-[201] h-full " onClick={searchHandler}>
            <div className="relative flex justify-start top-52  tablet:top-48 tablet:right-4 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300 h-full bg-purple-300 z-[202]  ">
          {(searchItem) && (<div className="bg-orange-500 w-[350px] rounded-b-md shadow-md px-10 py-2  tablet:w-96  ">
{(searchterm !=='') && (
     <div className="w-full tablet:w-96"> 
    {searchItem.filter((item) => item.name.includes(searchterm))
    .map((item) => (<div className="flex items-center py-1">
      <Image className="ml-2" width={15} height={15} src={categoruIcon} />
    <Link href={`/categories/${categoryItems.filter((subitem)=>subitem.mainFA==item.category.sub)[0].main}`}>{item.category.sub}</Link>
    </div>))
    }</div>
      )}
     </div>)}
     </div>
     
     </div>
     )}
     </div>
     ) }
        </div>

      ) : (
        <div className="hidden tablet:w-64 tablet:flex  tablet:items-center  tablet:p-2 laptop:w-52 desktop:w-96">
          <form className="tablet:relative tablet:flex  tablet:items-center tablet:w-full ">
            <input value={searchterm} onChange={handleChange}
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