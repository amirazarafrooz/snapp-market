import { efarsi } from "@/utils/efarsi";
import Button from "./button/Button";

export const ShoppingItemButton = ({ details }) => {
  const { count, inStock } = details;
  return (
    <>
      {count == 1 ? (
        <Button btnStyleparam={"bin_addtoCartR"} product={details}></Button>
      ) : (
        <Button btnStyleparam={"minus_addtoCartR"} product={details}></Button>
      )}

      <p className="mx-auto text-snp-primaryh font-iransansb text-lg">
        {efarsi(count)}
      </p>
      {count < inStock ? (
        <Button btnStyleparam={"plus_addtoCartR"} product={details}></Button>
      ) : (
        <Button
          plusDisable={true}
          btnStyleparam={"plus_addtoCartR"}
          product={details}
        ></Button>
      )}
    </>
  );
};
