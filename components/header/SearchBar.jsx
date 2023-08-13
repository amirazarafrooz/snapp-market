'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import search from "../../public/assets/images/search-icon.svg";
import Link from 'next/link';
import {useRouter, useSearchParams } from 'next/navigation';




export const SearchBar = ({handleChange,searchterm,handleCloseSearch}) => {

  const router = useRouter()
  let searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )


  function handleSubmit(event) {
    event.preventDefault();
    if(searchterm?.length>=2){
    router.push('/search' + '?' + createQueryString('term', searchterm))
  }
  
  }



    return (
        <>
              <form onSubmit={handleSubmit} className="relative flex  items-center w-full z-[202]">
                      <input
                        onChange={handleChange}
                        type="text"
                        className="block w-full transition-transform ease-in-out delay-700  h-9 font-iransans rounded-full focus:rounded-b-none focus:outline-none focus:rounded-t-lg indent-10  placeholder-gray-900 text-xs tablet:w-96 tablet:h-10"
                        placeholder="جست و جوی برند یا محصول"
                      ></input>
                      
                      <button onClick={handleCloseSearch}
                       type='submit' className="absolute flex  justify-center items-center w-10">
                         <Image alt="search button" src={search} /> 
                      </button>  
                    </form>
        </>
    );
};

