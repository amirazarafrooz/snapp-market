"use client";
import React, {  useEffect, useState } from "react";
import Image from "next/image";
import categoruIcon from '../../public/assets/images/category-icon.svg'
import cartIcon from '../../public/assets/images/cartbtn-icon.svg'
import arrowIcon from '../../public/assets/images/arrow-icon.svg'
import minus from '../../public/assets/images/minus-icon.svg'
import plus from '../../public/assets/images/plus-icon.svg'
import bin from '../../public/assets/images/bin-icon.svg'
const Button = ({btnStyleparam,children}) => {
  



const theme="flex justify-center items-center rounded-lg whitespace-nowrap font-iransans text-sm";
const theme2="flex justify-center items-center rounded-md whitespace-nowrap font-iransans text-xs";
const theme3="flex justify-center items-center rounded-full whitespace-nowrap font-iransans text-xs";

  return (
<>
      {btnStyleparam==='categories'?<button className={`${theme} bg-snp-white w-32 h-10 p-3`}><Image className="ml-2" width={15} height={15} src={categoruIcon}/>{children}</button>:null} 
      {btnStyleparam==='addtoCart'?<button className={`${theme} bg-snp-primary text-white w-60 h-12 p-4`} >{children}</button>:null} 
      {btnStyleparam==='cart'?<button className={`${theme} w-40 h-9 py-1 px-4 text-snp-primary`}><Image className="ml-2" width={20} height={20} src={cartIcon}/>{children}<div className="flex justify-center items-center font-iransans text-md text-snp-primary rounded-full bg-snp-lightgray w-6 h-6 mr-3 pt-1">1</div></button>:null} 
      {btnStyleparam==='allProduct'?<button className={`${theme2} border-snp-white border-2 text-snp-white w-48 h-9 py-2 px-7`}>{children}<Image className="mr-1" width={12} height={12} src={arrowIcon}/></button>:null} 
      {btnStyleparam==='finalizeorder'?<button className={`${theme} relative bg-snp-lowdiscount w-96 h-11 pr-4 pl-3 text-xl text-snp-white`}>{children}<div className="absolute top-2 left-2 items-center font-iransans text-md text-sm text-snp-white rounded-md bg-gray-700 bg-opacity-25  mr-3 py-1 px-2">8.900 تومان</div></button>:null} 
      {btnStyleparam==='addtoCartR'?<button className={`${theme3} bg-snp-white text-snp-primary  h-9 px-4 hover:bg-snp-primary hover:text-snp-white`} >{children}</button>:null}
     
      {btnStyleparam==='minus'?<button className={`${theme3} bg-snp-white text-snp-primary  h-9 w-9 px-1 hover:bg-snp-primary hover:text-snp-white`} ><Image src={minus}   />{children}</button>:null}
      {btnStyleparam==='plus'?<button className={`${theme3} bg-snp-white text-snp-primary  h-9 w-9 px-1 hover:bg-snp-primary hover:text-snp-white`} ><Image src={plus}  />{children}</button>:null}
      {btnStyleparam==='bin'?<button className={`${theme3} bg-snp-white text-snp-primary  h-9 w-9 px-2 hover:bg-snp-primary hover:text-snp-white`} ><Image src={bin}  />{children}</button>:null}


      </>  
  );
};

export default Button;
