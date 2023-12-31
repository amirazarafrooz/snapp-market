'use client'
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { HeaderEx } from '../header/HeaderEx';
import { HeaderSc } from '../header/HeaderSc';
import { NavbarMobile } from './NavbarMobile';
import { ShoppingCard } from './ShoppingCart';



export const HeaderSelector =  ({categoryItems , searchItem, subCategory, layout}) => {

if(layout =='sublayout'){
  return (
    <>
    <div className='sticky left-0 top-0 h-[112px] w-full z-20'>
<HeaderSc searchItem={searchItem} categoryItems={categoryItems} subCategory={subCategory}/>
</div>
<NavbarMobile categoryItems={categoryItems}/>
</>
)}
else {



// logic
    const [stickyClass, setStickyClass] = useState('hidden');

  

    useEffect(() => {
      
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 256 ? setStickyClass('notHidden') : setStickyClass('hidden');
        }
      };

        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
          console.log(stickyClass);
        };
      }, []);


    


    return (
        <>


                <div className={`relative z-20`}><HeaderEx searchItem={searchItem} categoryItems={categoryItems} subCategory={subCategory}/>
                </div>
                

        <div className={stickyClass==='hidden'?
           ` fixed left-0 top-0 w-full -translate-y-28 transition-all duration-0 z-10` :
           ` fixed left-0 top-0 w-full translate-y-0 transition-all duration-0 z-10` }>
            <HeaderSc searchItem={searchItem} categoryItems={categoryItems} subCategory={subCategory}/>
        </div>
            
            <NavbarMobile categoryItems={categoryItems}/>
          
        </>
    );
    }
};
  
 