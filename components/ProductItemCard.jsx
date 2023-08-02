"use client";
import clsx from "clsx";
import Image from "next/image";
import Button from "./button/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/redux/cartSlice";
import { useCallback, useRef, useState } from "react";

export const ProductItemCard = ({
  id,
  images,
  name,
  quantity,
  discount,
  price,
  cartClassName,
  imageClass,
}) => {
  const Price = (price * (100 - discount)) / 100;
  const prodPrice = Price.toFixed(3);
  const dispatch = useDispatch();
  const [isHide, setIsHide] = useState(false);
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  const handleAdd = useCallback(() => {
    dispatch(add({ id, name, price, discount, images, count: 0 }));
    setIsHide(true);
  }, []);
  return (
    <div
      className={clsx(
        "bg-snp-white overflow-hidden px-3.5 py-2 w-56 h-[356px]  group transition-all duration-400 ",
        cartClassName
      )}
    >
      <Link href={`/products/${id}`} className=" transition-all duration-300">
        <Image
          className={`group-hover:${imageClass}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={images[0]}
        ></Image>
        <p className="text-snp-black mt-2 text-sm min-h-[3.5rem] font-iransansl ">
          {name}
        </p>
        <p className="text-xs text-gray-400 font-iransansl">{quantity}</p>
      </Link>
      <div className="flex w-full h-[53px] mt-2">
        <div className="w-1/2 mt-auto">
          {discount ? (
            <div className="flex items-center w-full mb-1">
              <div className=" bg-snp-highdiscount text-snp-white px-1 rounded-md font-iransans ">
                <div className="flex items-center">
                  <p>{discount}</p>
                  <p>٪</p>
                </div>
              </div>
              <p className=" line-through text-xs text-snp-gray mr-2">
                {price}
              </p>
            </div>
          ) : null}
          <div className="w-full mt-auto">
            <div className="flex items-center">
              <p className="text-snp-black font-iransans text-md">
                {prodPrice}
              </p>
              <p className=" text-gray-600 mr-2 text-xs font-iransansl">
                تومان
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-auto">
          {cart.filter((item) => item.id == id)[0]?.count > 0 ? (
            <>
              {cart
                .filter((item) => item.id == id)
                .map((item) => {
                  return (
                    <div className="flex items-center">
                      {item.count == 1 ? (
                        <Button btnStyleparam={"bin_addtoCartR"}></Button>
                      ) : (
                        <Button btnStyleparam={"minus_addtoCartR"}></Button>
                      )}

                      <p className="mx-2 text-snp-primaryh font-iransansb text-lg">
                        {item.count}
                      </p>
                      <Button btnStyleparam={"plus_addtoCartR"}></Button>
                    </div>
                  );
                })}
            </>
          ) : (
            <button
              onClick={handleAdd}
              className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2"
            >
              افزودن به سبد
            </button>
          )}
          {/* {cart
            .filter((item) => !item ?  item.id == id : [])
            .map((item) => {
              item ? (
                <>
                  <button
                    onClick={handleAdd}
                    className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2"
                  >
                    افزودن به سبد
                  </button>
                </>
              ) : (
                <div className="flex justify-center items-center w-full">
                  {item.count == 1 ? (
                    <Button btnStyleparam={"bin_addtoCartR"}></Button>
                  ) : (
                    <Button btnStyleparam={"minus_addtoCartR"}></Button>
                  )}

                  <p className="mx-2 text-snp-primaryh font-iransansb text-lg">
                    {item.count}
                  </p>
                  <Button btnStyleparam={"plus_addtoCartR"}></Button>
                </div>
              );
            })} */}
          {/* {!isHide ? (
            <button
              onClick={handleAdd}
              className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2"
            >
              افزودن به سبد
            </button>
          ) : (
            <>
              {cart
                .filter((item) => item.id == id)
                .map((item) => {
                  return (
                    <div className="flex justify-center items-center w-full">
                      {item.count == 1 ? (
                        <Button btnStyleparam={"bin_addtoCartR"}></Button>
                      ) : (
                        <Button btnStyleparam={"minus_addtoCartR"}></Button>
                      )}

                      <p className="mx-2 text-snp-primaryh font-iransansb text-lg">
                        {item.count}
                      </p>
                      <Button btnStyleparam={"plus_addtoCartR"}></Button>
                    </div>
                  );
                })}
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};
