"use client";
import { useRef } from "react";

export const ShoppingCard = () => {
  const modalWrapperRef = useRef();
  const handleCloseClick = (e) => {
    e.preventDefault();
  };

  ("fixed z-50 w-full max-w-md h-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0 text-gray-900 bg-white flex flex-col");
  return (
    <div className=" fixed left-0 top-0 z-50 bg-snp-white h-full max-h-full w-full max-w-md overflow-x-hidden overflow-y-auto flex flex-col">
      <div
        className="flex items-start justify-between py-2 pr-3 shadow border-b border-b-snp-lightgray font-iransans"
        ref={modalWrapperRef}
      >
        <p>سبد خرید من</p>
        <button
          type="button"
          className=" text-snp-primary bg-transparent rounded-lg font-thin text-[2px] w-7 h-7 inline-flex justify-center items-center ml-2"
          data-modal-hide="defaultModal"
          onClick={handleCloseClick}
        >
          <svg
            className="w-3.5 h-3.5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div>
        <div className="p-2 h-full font-iransansl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            ut?
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col border-t p-1 mt-auto ">
        <div className="w-full text-center bg-snp-lightgray rounded py-1 text-sm mb-1">
          <p className=" font-iransansl"> حداقل سفارش 100٬000 تومان</p>
        </div>
        <div className="w-full text-center bg-snp-lowdiscount rounded py-2">
          <button className="w-full font-iransans text-snp-white">خرید</button>
        </div>
      </div>
    </div>
  );
};
