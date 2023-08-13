import ProductItemCard from "../common/ProductItemCard";

export const SubCategoryPageProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div className="flex mobile:w-fit" key={product.id}>
            <ProductItemCard
              product={product}
              cartClassName={
                " odd:border-x even:border-none border-b hover:shadow-lg hover:-translate-y-1"
              }
              imageClass={"-translate-y-1"}
            />
          </div>
        );
      })}
    </>
  );
};
