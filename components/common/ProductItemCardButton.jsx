"use client";

import { useSelector } from "react-redux";
import Button from "./button/Button";
import { efarsi } from "@/utils/efarsi";

export const ProductItemCardButton = ({ product }) => {
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
                <div
                  key={item.id}
                  className="w-full flex justify-between items-center "
                >
                  {item.count == 1 ? (
                    <Button
                      btnStyleparam={"bin_addtoCartR"}
                      product={product}
                    ></Button>
                  ) : (
                    <Button
                      btnStyleparam={"minus_addtoCartR"}
                      product={product}
                    ></Button>
                  )}

                  <p className="text-snp-primaryh font-iransansb text-lg">
                    {efarsi(item.count)}
                  </p>
                  {item.count < item.inStock ? (
                    <Button
                      btnStyleparam={"plus_addtoCartR"}
                      product={product}
                    ></Button>
                  ) : (
                    <Button
                      plusDisable={true}
                      btnStyleparam={"plus_addtoCartR"}
                      product={product}
                    ></Button>
                  )}
                </div>
              );
            })}
        </>
      ) : (
        <Button btnStyleparam={"addtoCartR"} product={product}>
          افزودن به سبد
        </Button>
      )}
    </>
  );
};
