"use client";
import Image from "next/image";
import { useRef } from "react";
import { useSelector } from "react-redux";

export const ShoppingCard = () => {
  const modalWrapperRef = useRef();
  const cart = useSelector((store) => store.cart);
  console.log(cart);
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
      <div className="overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
        <div className=" font-iransansl ">
          {cart.map((c) => {
            return (
              <div className="w-full h-full flex py-3 border-b border-b-gray-50 hover:border-b-gray-200">
                <div className=" w-28 h-full">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    src={c.images[0]}
                  ></Image>
                </div>
                <div className="w-full h-full">
                  <p className="text-sm tracking-tight">{c.name}</p>
                  <div className="flex justify-between items-center mt-5">
                    <div>
                      {c.discount ? (
                        <div className="flex items-center w-full mb-1">
                          <div className=" bg-snp-highdiscount text-snp-white px-1 rounded-md font-iransans text-sm">
                            <div className="flex items-center">
                              <p>{c.discount}</p>
                              <p>٪</p>
                            </div>
                          </div>
                          <p className="line-through text-xs text-gray-700 mr-2">
                            {c.price}
                          </p>
                        </div>
                      ) : null}
                      <div className="w-full mt-auto">
                        <div className="flex items-center">
                          <p className="text-snp-black font-iransans text-md">
                            {c.price}
                          </p>
                          <p className=" text-gray-700 mr-1 text-sm font-iransansl">
                            تومان
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center  h-full mt-auto py-3 px-6">
                      <button className="w-6 bg-blue-600">+</button>
                      <p>{c.count}</p>
                      <button className="w-6 bg-blue-600">-</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center flex-col border-t p-1 mt-auto">
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
