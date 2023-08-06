import { ProductItemCard } from "../ProductItemCard";

export const SubCategoryPageProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div
            className="flex w-full mobile:w-1/2 tablet:w-1/3 desktop:w-1/4"
            key={product.id}
          >
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
