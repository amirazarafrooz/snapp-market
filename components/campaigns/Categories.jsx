import React from 'react';
import { getLocalData } from '../../lib/localdata';
import Link from 'next/link';
import Image from 'next/image';


const data = await getLocalData();
const categories = data.categories


export const Categories = () => {

    return (
        
        <div className='flex flex-wrap gap-2 justify-center items-center laptop:gap-4'>
            {categories.map((item) => (
            <div className='flex items-center rounded-lg h-20 w-[30%] bg-snp-light tablet:w-[23%] laptop:w-56 laptop:h-28 '>
                
                <Link className='flex items-center justify-start w-full p-2' href={`/${item.main}`}> 
                
                
                <Image className='ml-2 laptop:w-24 laptop:h-24' width={53} height={53} src={item.image}></Image>
                
                <span className='text-snp-lightblack font-iransans text-xs tablet:text-sm laptop:text-base'>{item.mainFA} </span>
                </Link>
                </div>))}
        </div>
    );
};

