import { useSelector } from "react-redux";
import Button from "../button/Button";

export const NavbarMobileProductButton = ({ product }) => {
  const cart = useSelector((store) => store.cart);
  return (
    <div>
      {cart.filter((item) => item.id == product.id)[0]?.count > 0 ? (
        <>
          {cart
            .filter((item) => item.id == product.id)
            .map((item) => {
              return (
                <div className="w-full flex items-center justify-between gap-2">
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

                  <p className="text-snp-primaryh font-iransansb text-lg ">
                    {item.count}
                  </p>
                  <Button
                    btnStyleparam={"plus_addtoCart"}
                    product={product}
                  ></Button>
                </div>
              );
            })}
        </>
      ) : (
        <Button btnStyleparam={"navbar"} product={product}>
          افزودن به سبد
        </Button>
      )}
    </div>
  );
};
