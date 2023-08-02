'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { HeaderEx } from '../header/HeaderEx';
import { HeaderSc } from '../header/HeaderSc';
import { NavbarMobile } from './NavbarMobile';



export const HeaderSelector =  ({categoryItems}) => {


// logic
    const [stickyClass, setStickyClass] = useState('hidden');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
          console.log(stickyClass);
        };
      }, []);


      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 256 ? setStickyClass('notHidden') : setStickyClass('hidden');
        }
      };


    return (
        <>


                <div className={`relative z-20`}><HeaderEx categoryItems={categoryItems}/>
                </div>
                

        <div className={stickyClass==='hidden'?
           ` fixed left-0 top-0 w-full -translate-y-28 transition-all duration-0 z-10` :
           ` fixed left-0 top-0 w-full translate-y-0 transition-all duration-0 z-10` }>
            <HeaderSc/>
        </div>
            <NavbarMobile/>
        </>
    );
};

 