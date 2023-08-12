"use client";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { ShoppingItem } from "./ShoppinItem";
import Button from "../common/button/Button";
import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import freeBasket from "../../public/assets/images/freeBasket.svg";
import { finalShoppingCardPrice } from "@/utils/finalShoppingCardPrice";
import { profitShoppingCardPrice } from "@/utils/profitShoppingCardPrice";
import { amountProducts } from "@/utils/amountProducts";
import { efarsi } from "@/utils/efarsi";

export const ShoppingCard = ({ handlemodalShop, handleCloseShop }) => {
  const cart = useSelector((store) => store.cart);

  const finalPrice = useMemo(() => finalShoppingCardPrice(cart), [cart]);
  const finalProfitPrice = useMemo(() => profitShoppingCardPrice(cart), [cart]);
  const amount = useMemo(() => amountProducts(cart), [cart]);

  const isProfitProducts = cart.filter((c) => c.discount > 0 && c)[0]?.discount;

  const atLeastPrice = finalPrice < 100;

  // const handleDecrement = (id) => {
  //   dispatch(decrement(id))
  // }
  // const handleAdd = () => {
  //   dispatch(add({id, name, price, discount, images }))
  // }

  // ("fixed z-50 w-full max-w-md h-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0 text-gray-900 bg-white flex flex-col");
  return (
    <div
      onClick={handlemodalShop}
      className="fixed z-50 w-full max-w-md h-full max-h-full overflow-x-hidden overflow-y-auto  text-gray-900 bg-white flex flex-col"
    >
      <div className="flex items-start justify-between py-3 pr-3 shadow border-b border-b-snp-lightgray font-iransans">
        <div className="flex items-center">
          <p>سبد خرید من</p>
          {cart.length > 0 ? (
            <>
              <span className="text-xs text-snp-lightblack mt-0.5 mx-2.5">
                <span className="mx-0.5">{efarsi(amount)}</span>
                <span>کالا</span>
              </span>
              <Button btnStyleparam={"deleteAll"}></Button>
            </>
          ) : null}
        </div>
        <button
          type="button"
          className="  bg-transparent  w-6 h-6 inline-flex justify-center items-center ml-2"
          onClick={handleCloseShop}
        >
          <IoCloseOutline className=" text-snp-secondary w-full h-full" />
        </button>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
            <div className=" font-iransansl ">
              {cart.map((c) => {
                return <ShoppingItem details={c} />;
              })}
            </div>
          </div>
          <div className="flex items-center flex-col border-t p-2 gap-1 mt-auto">
            {atLeastPrice ? (
              <>
                <div className="w-full text-center bg-snp-light text-snp-primary rounded py-2.5 mb-1">
                  <p className=" font-iransansl">حداقل سفارش 100٬000 تومان</p>
                </div>
                <Button
                  disable={true}
                  btnStyleparam={"finalizeorder"}
                  product={cart}
                  finalPrice={finalPrice}
                  finalProfitPrice={finalProfitPrice}
                >
                  نهایی کردن خرید
                </Button>
              </>
            ) : (
              <>
                {isProfitProducts > 0 ? (
                  <>
                    <div className="w-full text-center bg-snp-light text-snp-primary rounded py-2.5 mb-1 font-iransansl">
                      <span>{finalProfitPrice}</span>
                      <span className="mr-1">تومان سود خرید</span>
                    </div>
                    <Button
                      btnStyleparam={"finalizeorder"}
                      product={cart}
                      finalPrice={finalPrice}
                      finalProfitPrice={finalProfitPrice}
                    >
                      نهایی کردن خرید
                    </Button>
                  </>
                ) : (
                  <Button
                    btnStyleparam={"finalizeorder"}
                    product={cart}
                    finalPrice={finalPrice}
                    finalProfitPrice={finalProfitPrice}
                  >
                    نهایی کردن خرید
                  </Button>
                )}
              </>
            )}
          </div>
        </>
      ) : (
        <div className="h-full flex flex-col justify-center items-center text-center">
          <div className="w-3/5 mx-auto">
            <Image
              src={freeBasket}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "fit-content", height: "fit-coontent" }}
            ></Image>
          </div>
          <p className=" font-iransansl text-gray-500 mt-4">
            سبد خرید شما خالی است :(
          </p>
        </div>
      )}
    </div>
  );
};
