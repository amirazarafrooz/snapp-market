import Image from "next/image";
import Button from "./button/Button";
import { useMemo } from "react";
import { itemCalculatePrice } from "@/utils/itemCalculatePrice";
import { ShoppingItemButton } from "./ShoppingItemButton";
import { efarsi } from "@/utils/efarsi";

export const ShoppingItem = ({ details }) => {
  const { images, name, discount, price, count } = details;
  const prodPrice = useMemo(() => itemCalculatePrice(price, discount));
  return (
    <div className="w-full h-full flex py-3 border-b border-b-gray-50 hover:border-b-gray-200">
      <div className=" w-28 h-full">
        <Image
          alt="shopicon-image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          src={images[0]}
        ></Image>
      </div>
      <div className="w-full h-full mr-3">
        <p className="text-sm tracking-tight">{name}</p>
        <div className="flex justify-between items-center mt-5">
          <div>
            {discount ? (
              <div className="flex items-center w-full mb-1">
                <div className=" bg-snp-highdiscount text-snp-white px-1 rounded-md font-iransans text-sm">
                  <div className="flex items-center">
                    <p>{efarsi(discount)}</p>
                    <p>٪</p>
                  </div>
                </div>
                <p className="line-through text-xs text-gray-700 mr-2">
                  {efarsi(price)}
                </p>
              </div>
            ) : null}
            <div className="w-full mt-auto">
              <div className="flex items-center">
                <p className="text-snp-black font-iransans text-md">
                  {prodPrice}
                </p>
                <p className=" text-gray-700 mr-1 text-sm font-iransansl">
                  تومان
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-1/2 h-full mt-auto py-3 px-6">
            <ShoppingItemButton details={details} />
          </div>
        </div>
      </div>
    </div>
  );
};
