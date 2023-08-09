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
      <div className="flex flex-col">
        <div className="flex items-center">
          {discount != 0 && (
            <div className=" flex w-fit text-white bg-snp-highdiscount text-base rounded-md px-1  font-iransans ml-2">
              ٪{discount}
            </div>
          )}
          <div className=" flex font-iransans line-through text-xs text-gray-400">
            {price}
          </div>
        </div>
        <div className="flex items-end">
          <div className="font-semibold">{prodPrice}</div>
          <span className="mr-2 text-xs text-gray-500">تومان</span>
        </div>
      </div>
      <NavbarMobileProductButton product={filterProduct} />
      {/* <Button btnStyleparam={"navbar"}>افزودن به سبد</Button> */}
    </div>
  );
};
