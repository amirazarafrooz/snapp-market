import dynamic from "next/dynamic";
import delay from "@/utils/delay";

// import { ProductItemCard } from "../ProductItemCard";
const ProductItemCard = dynamic(
  async () => await delay(import("../ProductItemCard"))
);

export const SubCategoryPageProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div className="flex mobile:w-fit " key={product.id}>
            <ProductItemCard
              product={product}
              cartClassName={"border-l hover:shadow-lg hover:-translate-y-1"}
              imageClass={"-translate-y-1"}
            />
          </div>
        );
      })}
    </>
  );
};
