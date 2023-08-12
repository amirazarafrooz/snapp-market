"use client";
import { useState } from "react";
import { SubCategoryPageProduct } from "./SubCategoryPageProduct";

export const SubCategoryPageMain = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  const sortProductHandler = (type) => {
    switch (type) {
      case "exp":
        const expensiveProducts = [...products];
        expensiveProducts.sort((a, b) => b.price - a.price);
        setSortedProducts(expensiveProducts);
        break;
      case "cheap":
        const cheapProducts = [...products];
        cheapProducts.sort((a, b) => a.price - b.price);
        setSortedProducts(cheapProducts);
        break;
      case "discount":
        const discountProduct = [...products];
        discountProduct.sort((a, b) => b.discount - a.discount);
        setSortedProducts(discountProduct);
        break;
      default:
        setSortedProducts(products);
        break;
    }
  };

  return (
    <>
      {/* filter products */}
      <div className="flex items-center h-[62px] p-1 mobile:p-4 border-[1px] rounded-t text-xs mobile:text-xs mt-8 bg-snp-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 32 32"
          className="mx-1"
          style={{ width: 20, height: 20 }}
        >
          <defs>
            <symbol id="SortIcon" viewBox="0 0 32 32">
              <path d="M30.524 8.853l-5.902-5.76c-.071-.089-.178-.124-.284-.178l-.196-.142-.302-.053c-.107-.018-.178-.053-.284-.053l-.178.036a1.11 1.11 0 00-.409.071l-.142.107a1.75 1.75 0 00-.338.213l-5.902 5.76a1.529 1.529 0 102.133 2.187l.001-.001 3.307-3.2v18.649a1.529 1.529 0 103.058 0V7.822l3.307 3.218c.276.273.656.442 1.076.442a1.525 1.525 0 001.058-2.629zM12.267 19.644l-3.307 3.2V4.195a1.529 1.529 0 10-3.058 0v18.667l-3.307-3.236A1.534 1.534 0 00.461 21.83l5.902 5.76c.107.107.249.178.356.231l.142.089a1.534 1.534 0 001.166-.004l-.01.004.124-.089c.124-.071.249-.124.356-.231l5.902-5.76a1.529 1.529 0 00-2.135-2.185l.001-.001z"></path>
            </symbol>
          </defs>
          <use href="#SortIcon" xlinkHref="#SortIcon"></use>
        </svg>
        <span className="hidden tablet:block font-iransans mobile:mx-3">
          مرتب سازی بر اساس :
        </span>
        <ul className="flex justify-evenly items-center font-iransans ">
          <li
            className="px-2 py-2 whitespace-nowrap rounded-full cursor-pointer mx-1 active:bg-snp-secondary active:text-snp-white hover:bg-snp-lightgray hover:text-snp-secondary"
            onClick={() => sortProductHandler("default")}
          >
            پیش فرض
          </li>
          <li
            className="px-2 py-2 rounded-full cursor-pointer active:bg-snp-secondary active:text-snp-white hover:bg-snp-lightgray hover:text-snp-secondary mx-1"
            onClick={() => sortProductHandler("exp")}
          >
            گران‌ترین
          </li>
          <li
            className="px-2 py-2 rounded-full cursor-pointer mx-1 active:bg-snp-secondary active:text-snp-white hover:bg-snp-lightgray hover:text-snp-secondary"
            onClick={() => sortProductHandler("cheap")}
          >
            ارزان‌ترین
          </li>
          <li
            className="px-2 py-2 rounded-full cursor-pointer mx-1 active:bg-snp-secondary active:text-snp-white hover:bg-snp-lightgray hover:text-snp-secondary"
            onClick={() => sortProductHandler("discount")}
          >
            بیشترین تخفیف
          </li>
        </ul>
      </div>

      {/* items load here */}
      <div className="flex justify-center mobile:justify-start w-full items-start flex-wrap border-l-[1px] border-b-[1px]  border-r-[1px]">
        <SubCategoryPageProduct products={sortedProducts} />
      </div>

      {/* pagination btns here */}
      {/* <div className="flex items-center justify-center h-[62px] p-4 border-[1px] rounded-b">
        <ul className="flex justify-evenly items-center font-iransans">
          <li className="w-9 h-9 px-3 py-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{ width: 15, height: 15 }}
              width="32"
              height="32"
              fill="currentColor"
              color="gray"
            >
              <path
                fill="gray"
                d="M25.011 15.262L10.069.32c-.214-.214-.46-.321-.738-.321s-.524.107-.738.321L6.99 1.923c-.214.214-.321.459-.321.738s.107.524.321.737l12.601 12.601L6.99 28.6c-.214.214-.321.46-.321.737s.107.524.321.738l1.603 1.603c.214.214.46.321.738.321s.524-.107.738-.321L25.01 16.736c.214-.214.321-.46.321-.738s-.106-.524-.32-.738z"
              ></path>
            </svg>
          </li>
          <li className="w-9 h-9 px-3 py-1 mx-1 flex items-center justify-center rounded-lg bg-snp-secondary text-snp-white">
            1
          </li>
          <li className="w-9 h-9 px-3 py-1 mx-1 flex items-center justify-center rounded-lg bg-[#F2F7FF]">
            2
          </li>
          <li className="w-9 h-9 px-3 py-1 mx-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{ width: 13, height: 13 }}
              width="32"
              height="32"
              fill="currentColor"
              color="gray"
            >
              <path
                fill="gray"
                d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"
              ></path>
            </svg>
          </li>
        </ul>
      </div> */}
    </>
  );
};
