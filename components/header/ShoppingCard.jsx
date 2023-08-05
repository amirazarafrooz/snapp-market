"use client";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { ShoppingItem } from "../ShoppinItem";
import Button from "../button/Button";
import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

export const ShoppingCard = ({ cartHandler, showCart }) => {
  const cart = useSelector((store) => store.cart);
  const totalPrice = useMemo(
    () =>
      cart.reduce(
        (init, cur) =>
          (init += cur.discount
            ? cur.count * (cur.price * ((100 - cur.discount) / 100))
            : cur.count * cur.price),
        0
      ),
    [cart]
  );
  const finalPrice = useMemo(() => totalPrice.toFixed(3), [cart]);
  const profitPrice = useMemo(
    () =>
      cart.reduce(
        (init, cur) => (init += cur.count * ((cur.price * cur.discount) / 100)),
        0
      ),
    [cart]
  );
  const finalProfitPrice = useMemo(() => profitPrice.toFixed(3), [cart]);
  const amount = useMemo(
    () => cart.reduce((init, cur) => (init += cur.count), 0),
    [cart]
  );
  const modal = useRef(null);

  useEffect(() => {
    // Applying on mount
    if (showCart) {
      // document.body.style.overflow = "hidden";
      console.log("makhfi");
    } else {
      document.body.style.overflow = "visible";
      console.log("ashkara");
    }
    // Applying on unmount
    return () => {};
  }, [cartHandler]);

  // const handleDecrement = (id) => {
  //   dispatch(decrement(id))
  // }
  // const handleAdd = () => {
  //   dispatch(add({id, name, price, discount, images }))
  // }

  // ("fixed z-50 w-full max-w-md h-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0 text-gray-900 bg-white flex flex-col");
  return (
    <>
      <div onClick={cartHandler} ref={modal}>
        <Button btnStyleparam={"cart"}>سبد خرید</Button>
      </div>
      {showCart && (
        <div className="fixed flex justify-end top-0 left-0 right-0 bottom-0 bg-[#0000006e]  z-[201] h-screen ">
          <div className=" relative left-0 top-0 bg-snp-white h-full max-h-full w-full max-w-md  flex flex-col z-[202]">
            <div className="flex items-start justify-between py-3 pr-3 shadow border-b border-b-snp-lightgray font-iransans">
              <div className="flex items-center">
                <p>سبد خرید من</p>
                {cart.length > 0 ? (
                  <>
                    <span className="text-xs text-snp-lightblack mt-0.5 mx-2.5">
                      <span className="mx-0.5">{amount}</span>
                      <span>کالا</span>
                    </span>
                    <Button btnStyleparam={"deleteAll"}></Button>
                  </>
                ) : null}
              </div>
              <button
                type="button"
                className="  bg-transparent  w-6 h-6 inline-flex justify-center items-center ml-2"
                onClick={cartHandler}
              >
                <IoCloseOutline className=" text-snp-secondary w-full h-full" />
              </button>
            </div>
            <div className="overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
              <div className=" font-iransansl ">
                {cart.map((c) => {
                  return <ShoppingItem details={c} />;
                })}
              </div>
            </div>
            <div className="flex items-center flex-col border-t p-2 gap-1 mt-auto">
              {finalPrice < 100 ? (
                <div className="w-full text-center bg-snp-light text-snp-primary rounded py-2.5 mb-1">
                  <p className=" font-iransansl"> حداقل سفارش 100٬000 تومان</p>
                </div>
              ) : (
                <>
                  {cart.filter((c) => c.discount > 0 && c)[0]?.discount > 0 ? (
                    <>
                      <div className="w-full text-center bg-snp-light text-snp-primary rounded py-2.5 mb-1">
                        <span>{finalProfitPrice}</span>
                        <span className="mr-1">تومان سود خرید</span>
                      </div>
                    </>
                  ) : null}
                </>
              )}
              <Button btnStyleparam={"finalizeorder"} finalPrice={finalPrice}>
                نهایی کردن خرید
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
