import { useMemo } from "react";
import { itemCalculatePrice } from "@/utils/itemCalculatePrice";
import Button from "../button/Button";
import { NavbarMobileProductButton } from "./NavbarMobileProductButton";

export const NavbarMobileProduct = ({ productId, products }) => {
  const filterProduct = products.filter((prod) => prod.id == productId)[0];

  const { price, discount } = filterProduct;

  const prodPrice = useMemo(() => itemCalculatePrice(price, discount));

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col items-center">
        {discount ? (
          <div className="flex items-center w-full mr-auto mb-1 h-1/2">
            <div className=" bg-snp-highdiscount text-snp-white px-1 rounded-full font-iransans ">
              <div className="flex items-center h-fit">
                <p>٪</p>
                <p>{discount}</p>
              </div>
            </div>
            <div className="line-through text-gray-500 font-iransans mr-2">
              {price}
            </div>
          </div>
        ) : null}
        <div className="flex items-center gap-1 font-iransans text-gray-500 h-1/2 my-auto ">
          <p className="text-snp-black">{prodPrice}</p>
          <p>تومان</p>
        </div>
      </div>
      <NavbarMobileProductButton product={filterProduct} />
    </div>
  );
};
