import React from 'react';
import { getLocalData } from '../../lib/localdata';
import Link from 'next/link';
import Image from 'next/image';


const data = await getLocalData();
const categories = data.categories


export const Categories = () => {

    return (
        
        <div className='flex flex-wrap gap-2 justify-center items-center'>
            {categories.map((item) => (
            <div className='flex items-center rounded-md h-20 w-[30%]  bg-snp-light'>
                
                <Link className='flex items-center justify-start w-full p-2' href={`/${item.main}`}> 
                
                
                <Image className='ml-2' width={53} height={53} src="https://api.snapp.market/uploads/images/mobile-sliders/63d636d2a3219.png"></Image>
                
                <span className='font-iransans text-xs'>{item.mainFA} </span>
                </Link>
                </div>))}
        </div>
    );
};

