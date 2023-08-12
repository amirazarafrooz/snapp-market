"use client";
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import categoruIcon from "../../public/assets/images/category-icon.svg";
import cartIcon from "../../public/assets/images/cartbtn-icon.svg";
import arrowIcon from "../../public/assets/images/arrow-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement, removeItem, reset } from "@/redux/cartSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { addToHistory } from "@/redux/historySlice";
import { efarsi } from "@/utils/efarsi";
import { amountProducts } from "@/utils/amountProducts";

const Button = ({
  btnStyleparam,
  children,
  product,
  finalPrice,
  finalProfitPrice,
  disable,
  plusDisable,
}) => {
  const cart = useSelector((store) => store.cart);
  const cartCounts = useMemo(() => amountProducts(cart), [cart]);
  const dispath = useDispatch();
  const handleAdd = useCallback(() => {
    dispath(add({ ...product, count: 0 }));
  }, []);
  const handleDecrement = useCallback(() => {
    dispath(decrement(product.id));
  }, []);
  const handleDelete = useCallback(() => {
    dispath(removeItem(product.id));
  }, []);
  const handleReset = useCallback(() => {
    dispath(reset());
  }, []);
  const handleAddToHistory = useCallback(() => {
    dispath(
      addToHistory({
        items: product,
        finalPrice: finalPrice,
        finalProfitPrice: finalProfitPrice,
      })
    );
    dispath(reset());
  }, [finalPrice, cart]);
  const theme =
    "flex justify-center items-center rounded-md whitespace-nowrap font-iransans ";
  const themeR =
    "flex justify-center items-center border border-snp-lightgray rounded-full whitespace-nowrap font-iransans text-xs bg-snp-white text-snp-primary  hover:bg-snp-primary hover:text-snp-white hover:border-none";

  const themeRplus =
    "flex justify-center items-center  rounded-full whitespace-nowrap font-iransans text-xs bg-snp-primary text-snp-white  hover:text-snp-white hover:bg-snp-primaryh ";

  return (
    <>
      {/* -----------------ProcutInfo Page NavbarMobile ---------------- */}
      {btnStyleparam === "navbar" ? (
        <button
          className="flex justify-center items-center rounded-full whitespace-nowrap bg-snp-primary text-white p-2.5 hover:bg-snp-primaryh text-[16px]"
          onClick={handleAdd}
        >
          {children}
        </button>
      ) : null}
      {/* ------------ deleteALL ----------- */}
      {btnStyleparam === "deleteAll" ? (
        <button
          className=" bg-snp-lightgray hover:bg-snp-gray text-snp-lightblack p-1.5 rounded-full"
          onClick={handleReset}
        >
          <RiDeleteBinLine />
        </button>
      ) : null}

      {/* ------------------------------------ categories button -----------------------------------------*/}

      {btnStyleparam === "categories" ? (
        <button className={`${theme} bg-snp-white w-32 h-10 p-3 text-sm`}>
          <Image
            alt="category-icon"
            className="ml-2"
            width={15}
            height={15}
            src={categoruIcon}
          />
          {children}
        </button>
      ) : null}

      {/* ------------------------------------ normal add to cart button -----------------------------------------*/}

      {btnStyleparam === "addtoCart" ? (
        <button
          className={`${theme} bg-snp-primary text-white w-full h-12 p-4 hover:bg-snp-primaryh text-[13px]`}
          onClick={handleAdd}
        >
          {children}
        </button>
      ) : null}

      {/* ------------------------------------ cart button -----------------------------------------*/}

      {btnStyleparam === "cart" ? (
        <button
          className={`${theme} w-36 h-9 py-1 px-3 text-sm font-medium bg-snp-white text-snp-primary `}
        >
          <Image
            alt="cart-icon"
            className="ml-2"
            width={20}
            height={20}
            src={cartIcon}
          />
          {children}
          <div className="flex justify-center items-center font-iransans text-md text-snp-primary rounded-full bg-snp-lightgray w-6 h-6 mr-3 ">
            {efarsi(cartCounts)}
          </div>
        </button>
      ) : null}

      {/* ------------------------------------ show all products in campaign button -----------------------------------------*/}

      {btnStyleparam === "allProduct" ? (
        <button
          className={`${theme} text-xs rounded-md border-snp-white border-2 text-snp-white h-9 py-2 px-7 text-[8px] mobile:text-[13px] w-5/6 mobile:w-48`}
        >
          {children}
          <Image
            alt="productbtn-icon"
            className="mr-1"
            width={12}
            height={12}
            src={arrowIcon}
          />
        </button>
      ) : null}

      {/* ------------------------------------ Finalize the purchase button -----------------------------------------*/}
      {disable ? (
        <>
          {btnStyleparam === "finalizeorder" ? (
            <button
              disabled
              className={`${theme} relative bg-green-300 w-full h-11 pr-4 pl-3 text-xl text-snp-white cursor-not-allowed`}
              onClick={handleAddToHistory}
            >
              {children}
              {finalPrice != 0 && (
                <span className="absolute left-2 items-center font-iransans text-md text-sm text-snp-white rounded-md bg-gray-700 bg-opacity-30  mr-3 py-1 px-2">
                  <span>{finalPrice}</span>
                  <span className="mr-1">تومان</span>
                </span>
              )}
            </button>
          ) : null}
        </>
      ) : (
        <>
          {btnStyleparam === "finalizeorder" ? (
            <button
              className={`${theme} relative bg-snp-lowdiscount w-full h-11 pr-4 pl-3 text-xl text-snp-white hover:bg-snp-finalizeBytnh`}
              onClick={handleAddToHistory}
            >
              {children}
              {finalPrice != 0 && (
                <span className="absolute left-2 items-center font-iransans text-md text-sm text-snp-white rounded-md bg-gray-700 bg-opacity-30  mr-3 py-1 px-2">
                  <span>{finalPrice}</span>
                  <span className="mr-1">تومان</span>
                </span>
              )}
            </button>
          ) : null}
        </>
      )}
      {/* // {btnStyleparam === "finalizeorder" ? (
      //   <button
      //     className={`${theme} relative bg-snp-lowdiscount w-full h-11 pr-4 pl-3 text-xl text-snp-white hover:bg-snp-finalizeBytnh`}
      //     onClick={handleAddToHistory}
      //   >
      //     {children}
      //     {finalPrice != 0 && (
      //       <span className="absolute left-2 items-center font-iransans text-md text-sm text-snp-white rounded-md bg-gray-700 bg-opacity-30  mr-3 py-1 px-2">
      //         <span>{finalPrice}</span>
      //         <span className="mr-1">تومان</span>
      //       </span>
      //     )}
      //   </button>
      // ) : null} */}

      {/* ------------------------------------ add to cart fully rounded button -----------------------------------------*/}

      {btnStyleparam === "addtoCartR" ? (
        <button className={`${themeR}    h-9 px-4 `} onClick={handleAdd}>
          {children}
        </button>
      ) : null}

      {/* ------------------------------------ addtocart in product items sub button -----------------------------------------*/}

      {btnStyleparam === "minus_addtoCartR" ? (
        <button
          className={`${themeR}    h-9 w-9 px-1 `}
          onClick={handleDecrement}
        >
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
      {plusDisable ? (
        <>
          {btnStyleparam === "plus_addtoCartR" ? (
            <button
              disabled
              className={`${themeR}    h-9 w-9 px-1 bg-snp-gray hover:bg-gray-400 cursor-not-allowed`}
              onClick={handleAdd}
            >
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
        </>
      ) : (
        <>
          {btnStyleparam === "plus_addtoCartR" ? (
            <button
              className={`${themeR}    h-9 w-9 px-1 `}
              onClick={handleAdd}
            >
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
        </>
      )}

      {btnStyleparam === "bin_addtoCartR" ? (
        <button className={`${themeR}   h-9 w-9 px-2 `} onClick={handleDelete}>
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
        <button
          className={`${themeRplus}    h-11 w-11  `}
          onClick={handleDecrement}
        >
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
      {plusDisable ? (
        <>
          {btnStyleparam === "plus_addtoCart" ? (
            <button
              disabled
              className={`${themeRplus}    h-11 w-11 bg-snp-gray hover:bg-gray-400 cursor-not-allowed `}
              onClick={handleAdd}
            >
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
        </>
      ) : (
        <>
          {btnStyleparam === "plus_addtoCart" ? (
            <button
              className={`${themeRplus}    h-11 w-11  `}
              onClick={handleAdd}
            >
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
        </>
      )}
      {/* {btnStyleparam === "plus_addtoCart" ? (
        <button className={`${themeRplus}    h-11 w-11  `} onClick={handleAdd}>
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
      ) : null} */}
      {btnStyleparam === "bin_addtoCart" ? (
        <button
          className={`${themeRplus}   h-11 w-11  `}
          onClick={handleDelete}
        >
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

      {/* ----------------------------------------user profile ----------------------------------------------- */}

      {btnStyleparam === "HeaderEx" ? (
        <button className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            fill="currentColor"
            className="ml-[10px]"
            viewBox="0 0 32 32"
            style={{ width: 18, height: 18 }}
          >
            <defs>
              <symbol id="UserIcon" viewBox="0 0 32 32">
                <path d="M27.313 20.688a15.92 15.92 0 00-6.083-3.817 9.244 9.244 0 003.602-10.367 9.247 9.247 0 00-8.836-6.508 9.246 9.246 0 00-8.832 6.508 9.244 9.244 0 003.602 10.367A16.03 16.03 0 00-.004 32h2.5c0-7.457 6.047-13.5 13.5-13.5 7.457 0 13.5 6.043 13.5 13.5h2.5a15.88 15.88 0 00-4.683-11.313zM15.995 16a6.752 6.752 0 01-6.75-6.75 6.752 6.752 0 016.75-6.75 6.75 6.75 0 110 13.5zm0 0"></path>
              </symbol>
            </defs>
            <use fill="#FFF" href="#UserIcon" xlinkHref="#UserIcon"></use>
          </svg>
          <span className="hidden tablet:text-snp-light tablet:w-24 tablet:truncate tablet:block tablet:ml-2 font-iransansl ">
            پایونیر تیم گروه دوم
          </span>
        </button>
      ) : null}
      {btnStyleparam === "HeaderSc" ? (
        <button className=" flex items-center cursor-pointer laptop:mx-4 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            fill="currentColor"
            className="ml-[10px]"
            viewBox="0 0 32 32"
            style={{ width: 18, height: 18 }}
          >
            <defs>
              <symbol id="UserIcon" viewBox="0 0 32 32">
                <path d="M27.313 20.688a15.92 15.92 0 00-6.083-3.817 9.244 9.244 0 003.602-10.367 9.247 9.247 0 00-8.836-6.508 9.246 9.246 0 00-8.832 6.508 9.244 9.244 0 003.602 10.367A16.03 16.03 0 00-.004 32h2.5c0-7.457 6.047-13.5 13.5-13.5 7.457 0 13.5 6.043 13.5 13.5h2.5a15.88 15.88 0 00-4.683-11.313zM15.995 16a6.752 6.752 0 01-6.75-6.75 6.752 6.752 0 016.75-6.75 6.75 6.75 0 110 13.5zm0 0"></path>
              </symbol>
            </defs>
            <use fill="#FFF" href="#UserIcon" xlinkHref="#UserIcon"></use>
          </svg>
          <span className="hidden tablet:text-snp-light   tablet:truncate tablet:block tablet:ml-2 font-iransansl tablet:text-xs laptop:w-20 laptop:text-base">
            پایونیر تیم گروه دوم
          </span>
        </button>
      ) : null}
    </>
  );
};

export default Button;

// --------------------------------- Btns Template ------------------------------

{
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
<Button btnStyleparam={'deleteAll'} ></Button> */
}
