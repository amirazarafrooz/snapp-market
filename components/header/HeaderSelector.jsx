'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { HeaderEx } from '../header/HeaderEx';
import { HeaderSc } from '../header/HeaderSc';
import { NavbarMobile } from './NavbarMobile';



export const HeaderSelector = () => {

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
            {/* {stickyClass==='hidden'? */}
                <div className={`relative z-50`}><HeaderEx/></div>
                {/* :
                null
                 } */}

        <div className={stickyClass==='hidden'?
           ` fixed left-0 top-0 w-full -translate-y-28 transition-all duration-0 z-40` :
           ` fixed left-0 top-0 w-full translate-y-0 transition-all duration-0 z-40` }>
            <HeaderSc/>
        </div>
            <NavbarMobile/>
        </>
    );
};

 