"use client";

import { useSelector } from "react-redux";
import Button from "./button/Button";

export const ProductItemCardButton = ({ product }) => {
  const cart = useSelector((store) => store.cart);
  return (
    <>
      {cart.filter((item) => item.id == product.id)[0]?.count > 0 ? (
        <>
          {cart
            .filter((item) => item.id == product.id)
            .map((item) => {
              return (
                <div className="flex items-center">
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

                  <p className="mx-2 text-snp-primaryh font-iransansb text-lg">
                    {item.count}
                  </p>
                  <Button
                    btnStyleparam={"plus_addtoCartR"}
                    product={product}
                  ></Button>
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
