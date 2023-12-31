"use client";

import { useSelector } from "react-redux";
import Button from "../common/button/Button";
import { efarsi } from "@/utils/efarsi";

export const ProductsDetailsButton = ({ product }) => {
  const cart = useSelector((store) => store.cart);

  const filterCartForButton =
    cart.filter((item) => item.id == product.id)[0]?.count > 0;
  return (
    <>
      {filterCartForButton ? (
        <>
          {cart
            .filter((item) => item.id == product.id)
            .map((item) => {
              return (
                <div className="w-full flex items-center justify-between">
                  {item.count == 1 ? (
                    <Button
                      btnStyleparam={"bin_addtoCart"}
                      product={product}
                    ></Button>
                  ) : (
                    <Button
                      btnStyleparam={"minus_addtoCart"}
                      product={product}
                    ></Button>
                  )}

                  <p className="text-snp-primaryh font-iransansb text-lg">
                    {efarsi(item.count)}
                  </p>
                  {item.count < item.inStock ? (
                    <Button
                      btnStyleparam={"plus_addtoCart"}
                      product={product}
                    ></Button>
                  ) : (
                    <Button
                      plusDisable={true}
                      btnStyleparam={"plus_addtoCart"}
                      product={product}
                    ></Button>
                  )}
                </div>
              );
            })}
        </>
      ) : (
        <Button btnStyleparam={"addtoCart"} product={product}>
          افزودن به سبد
        </Button>
      )}
    </>
  );
};
