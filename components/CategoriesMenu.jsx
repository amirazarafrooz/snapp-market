import React from 'react';
import { getLocalData } from '../lib/localdata';
import Link from 'next/link';

const data = await getLocalData();
const menu = data.categories


export const CategoriesMenu = ({showToggle}) => {


    return (
        <>
        {(showToggle) && (
        <div className=' right-0 top-0 fixed flex flex-col w-72 h-full bg-snp-white z-50 px-6 pt-6 pb-2 '>
            <div className='flex justify-between items-center mb-6 font-iransansb'> 
                <h1>دسته‌بندی‌ها</h1>
                <span>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="close-icon"
      viewBox="0 0 32 32"
      style={{ width: 12, height: 12 }}
    >
      <defs>
        <symbol id="CrossIcon" viewBox="0 0 32 32">
          <path d="M18.828 16L31.414 3.418a2.004 2.004 0 000-2.832 2.004 2.004 0 00-2.832 0L16 13.172 3.418.586a2.004 2.004 0 00-2.832 0 2.004 2.004 0 000 2.832L13.172 16 .586 28.582A2.004 2.004 0 002 32a2.01 2.01 0 001.418-.586L16 18.828l12.582 12.586c.395.39.906.586 1.418.586a2.004 2.004 0 001.414-3.418zm0 0"></path>
        </symbol>
      </defs>
      <use fill="#757575" href="#CrossIcon" xlinkHref="#CrossIcon"></use>
                 </svg>
                </span>
                </div>
            {menu.map((item) => 
            (   <Link className='group hover:bg-white' href={`/categories/${item.main}`}>
                
                <div className='flex flex-col font-iransans py-3 leading-5'>

                <div className='text-snp-primary text-sm leading-5 '>{item.mainFA} </div>

                <div className='  truncate block text-ellipsis text-gray-400 text-sm leading-5 pt-1 w-52 group-hover:text-snp-lowdiscount'>{item.subs.map((item)=>(<span className=''>{item} ، </span>))} </div>

             </div>
             </Link>))}
        </div>
        )}
        </>
    );
};

