"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import categoruIcon from "../../public/assets/images/category-icon.svg";
import cartIcon from "../../public/assets/images/cartbtn-icon.svg";
import arrowIcon from "../../public/assets/images/arrow-icon.svg";



const Button = ({ btnStyleparam, children }) => {
  const theme =
    "flex justify-center items-center rounded-md whitespace-nowrap font-iransans ";
  const themeR =
    "flex justify-center items-center border border-snp-lightgray rounded-full whitespace-nowrap font-iransans text-xs bg-snp-white text-snp-primary  hover:bg-snp-primary hover:text-snp-white hover:border-none";

    const themeRplus =  "flex justify-center items-center  rounded-full whitespace-nowrap font-iransans text-xs bg-snp-primary text-snp-white  hover:text-snp-white hover:bg-snp-primaryh ";

  return (
    <>

    {/* ------------------------------------ categories button -----------------------------------------*/}

      {btnStyleparam === "categories" ? (
        <button className={`${theme} bg-snp-white w-32 h-10 p-3 text-sm`}>
          <Image alt="category-icon" className="ml-2" width={15} height={15} src={categoruIcon} />
          {children}
        </button>
      ) : null}

    {/* ------------------------------------ normal add to cart button -----------------------------------------*/}

      {btnStyleparam === "addtoCart" ? (
        <button className={`${theme} bg-snp-primary text-white w-60 h-12 p-4 hover:bg-snp-primaryh text-[13px]`}>
          {children}
        </button>
      ) : null}

    {/* ------------------------------------ cart button -----------------------------------------*/}


      {btnStyleparam === "cart" ? (
        <button className={`${theme} w-36 h-9 py-1 px-3 text-sm font-medium bg-snp-white text-snp-primary `}>
          <Image alt="cart-icon" className="ml-2" width={20} height={20} src={cartIcon} />
          {children}
          <div className="flex justify-center items-center font-iransans text-md text-snp-primary rounded-full bg-snp-lightgray w-6 h-6 mr-3 pt-1">
            14
          </div>
        </button>
      ) : null}

          {/* ------------------------------------ show all products in campaign button -----------------------------------------*/}

      {btnStyleparam === "allProduct" ? (
        <button
          className={`${theme} text-xs rounded-md border-snp-white border-2 text-snp-white w-48 h-9 py-2 px-7 text-[13px]`}
        >
          {children}
          <Image alt="productbtn-icon" className="mr-1" width={12} height={12} src={arrowIcon} />
        </button>
      ) : null}

          {/* ------------------------------------ Finalize the purchase button -----------------------------------------*/}

      {btnStyleparam === "finalizeorder" ? (
        <button
          className={`${theme} relative bg-snp-lowdiscount w-96 h-11 pr-4 pl-3 text-xl text-snp-white hover:bg-snp-finalizeBytnh`}
        >
          {children}
          <div className="absolute top-2 left-2 items-center font-iransans text-md text-sm text-snp-white rounded-md bg-gray-700 bg-opacity-30  mr-3 py-1 px-2">
            8.900 تومان
          </div>
        </button>
      ) : null}

      {/* ------------------------------------ add to cart fully rounded button -----------------------------------------*/}

      {btnStyleparam === "addtoCartR" ? (
        <button className={`${themeR}    h-9 px-4 `}>{children}</button>
      ) : null}

          {/* ------------------------------------ addtocart in product items sub button -----------------------------------------*/}

      {btnStyleparam === "minus_addtoCartR" ? (
        <button className={`${themeR}    h-9 w-9 px-1 `}>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ width: 24, height: 24 }}
    >
      <defs>
        <symbol id="SnappCircleMinusNoBorderIcon" viewBox="0 0 24 24">
          <g fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M8 13a1 1 0 010-2h8a1 1 0 010 2H8z"
            ></path>
          </g>
        </symbol>
      </defs>
      <use
        fill="bg-snp-primary"
        href="#SnappCircleMinusNoBorderIcon"
        xlinkHref="#SnappCircleMinusNoBorderIcon"
      ></use>
    </svg>
          {children}
        </button>
      ) : null}
      {btnStyleparam === "plus_addtoCartR" ? (
        <button className={`${themeR}    h-9 w-9 px-1 `}>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ width: 24, height: 24 }}
    >
      <defs>
        <symbol id="SnappCirclePlusNoBorderIcon" viewBox="0 0 24 24">
          <g fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M12 7a1 1 0 011 1v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 011-1z"
            ></path>
          </g>
        </symbol>
      </defs>
      <use
        fill="bg-snp-primary"
        href="#SnappCirclePlusNoBorderIcon"
        xlinkHref="#SnappCirclePlusNoBorderIcon"
      ></use>
    </svg>
          {children}
        </button>
      ) : null}
      {btnStyleparam === "bin_addtoCartR" ? (
        <button className={`${themeR}   h-9 w-9 px-2 `}>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ width: 16, height: 16 }}
    >
      <defs>
        <symbol id="SnappTrashIcon" viewBox="0 0 24 24">
          <g fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M7 6V5a3 3 0 013-3h4a3 3 0 013 3v1h3a1 1 0 010 2h-1v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8H4a1 1 0 110-2h3zm2 0h6V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zm8 2H7v11a1 1 0 001 1h8a1 1 0 001-1V8zm-8 4a1 1 0 012 0v5a1 1 0 01-2 0v-5zm4 0a1 1 0 012 0v5a1 1 0 01-2 0v-5z"
            ></path>
          </g>
        </symbol>
      </defs>
      <use
        fill="bg-snp-primary"
        href="#SnappTrashIcon"
        xlinkHref="#SnappTrashIcon"
      ></use>
    </svg>
          {children}
        </button>
      ) : null}


          {/* ------------------------------------ addtocart in product details sub button -----------------------------------------*/}

          {btnStyleparam === "minus_addtoCart" ? (
        <button className={`${themeRplus}    h-11 w-11  `}>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ width: 24, height: 24 }}
    >
      <defs>
        <symbol id="SnappCircleMinusNoBorderIcon" viewBox="0 0 24 24">
          <g fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M8 13a1 1 0 010-2h8a1 1 0 010 2H8z"
            ></path>
          </g>
        </symbol>
      </defs>
      <use
        fill="#fffff"
        href="#SnappCircleMinusNoBorderIcon"
        xlinkHref="#SnappCircleMinusNoBorderIcon"
      ></use>
           </svg>
          {children}
        </button>
      ) : null}
      {btnStyleparam === "plus_addtoCart" ? (
        <button className={`${themeRplus}    h-11 w-11  `}>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ width: 24, height: 24 }}
    >
      <defs>
        <symbol id="SnappCirclePlusNoBorderIcon" viewBox="0 0 24 24">
          <g fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M12 7a1 1 0 011 1v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 011-1z"
            ></path>
          </g>
        </symbol>
      </defs>
      <use
        fill="#fffff"
        href="#SnappCirclePlusNoBorderIcon"
        xlinkHref="#SnappCirclePlusNoBorderIcon"
      ></use>
    </svg>
          {children}
        </button>
      ) : null}
      {btnStyleparam === "bin_addtoCart" ? (
        <button className={`${themeRplus}   h-11 w-11  `}>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ width: 16, height: 16 }}
    >
      <defs>
        <symbol id="SnappTrashIcon" viewBox="0 0 24 24">
          <g fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M7 6V5a3 3 0 013-3h4a3 3 0 013 3v1h3a1 1 0 010 2h-1v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8H4a1 1 0 110-2h3zm2 0h6V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zm8 2H7v11a1 1 0 001 1h8a1 1 0 001-1V8zm-8 4a1 1 0 012 0v5a1 1 0 01-2 0v-5zm4 0a1 1 0 012 0v5a1 1 0 01-2 0v-5z"
            ></path>
          </g>
        </symbol>
      </defs>
      <use
        fill="#fffff"
        href="#SnappTrashIcon"
        xlinkHref="#SnappTrashIcon"
      ></use>
    </svg>
          {children}
        </button>
      ) : null}
    </>
  );
};

export default Button;





// --------------------------------- Btns Template ------------------------------

/* <Button btnStyleparam={'allProduct'} >مشاهده همه محصولات</Button>
<Button btnStyleparam={'addtoCartR'} >افزودن به سبد</Button>
<Button btnStyleparam={'minus_addtoCartR'}></Button>
<Button btnStyleparam={'plus_addtoCartR'}></Button>
<Button btnStyleparam={'bin_addtoCartR'}></Button> 

<Button btnStyleparam={'addtoCart'} >افزودن به سبد</Button>   
  <Button btnStyleparam={'minus_addtoCart'}></Button>
      <Button btnStyleparam={'plus_addtoCart'}></Button>
      <Button btnStyleparam={'bin_addtoCart'}></Button>
      <Button btnStyleparam={'finalizeorder'} >نهایی کردن خرید</Button>
*/
