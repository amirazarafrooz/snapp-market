import { getLocalData } from "@/lib/localdata";
import { ProductImageCarousel } from "./ProductImageCarousel/ProductImageCarousel";
import { ProductDetails } from "./ProductDetails";
import { CategoryCarousel } from "../Category/CategoryCarousel";
import { BreadCrumb } from "../BreadCrumbs";

const data = await getLocalData();
const products = data.products;

export const ProductInfo = ({ productId }) => {
  return (
    <div className="w-full ">
      {products
        .filter((product) => product.id == productId)
        .map((product) => {
          return (
            <div key={product.id} className="">
              <div className="w-full bg-snp-white border rounded my-8 pb-5 tablet:px-12 tablet:pb-12">
                <BreadCrumb
                  category={product.category.main}
                  subCategory={product.category.sub}
                  subCategoryBrand={product.brand}
                />
                <div className="tablet:flex tablet:items-center tablet:justify-center w-full h-full my-10">
                  <ProductImageCarousel images={product.images} />
                  <ProductDetails product={product} />
                </div>
              </div>
              <CategoryCarousel title={product.category.sub} seeMore={false} />
            </div>
          );
        })}
    </div>
  );
};
