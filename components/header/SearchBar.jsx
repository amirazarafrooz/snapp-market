import React from 'react';
import Image from 'next/image';
import search from "../../public/assets/images/search-icon.svg";



export const SearchBar = ({handleChange}) => {
    return (
        <>
              <form className="relative flex  items-center w-full z-[202]">
                      <input
                        onChange={handleChange}
                        type="text"
                        className="block w-full   h-9 font-iransans rounded-full focus:rounded-b-none focus:outline-none focus:rounded-t-lg indent-10  placeholder-gray-900 text-xs tablet:w-96 tablet:h-10"
                        placeholder="جست و جوی برند یا محصول"
                      ></input>
                      <button className="absolute flex  justify-center items-center w-10">
                        <Image alt="search button" src={search} />
                      </button>
                    </form>
        </>
    );
};

