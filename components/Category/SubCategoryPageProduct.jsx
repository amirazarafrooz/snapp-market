import  ProductItemCard  from "../ProductItemCard";

export const SubCategoryPageProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div
            className="flex mobile:w-fit "
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
