import { getLocalData } from "@/lib/localdata";
import { ProductImageCarousel } from "./ProductImageCarousel/ProductImageCarousel";
import { ProductDetails } from "./ProductDetails";
import { CategoryCarousel } from "../Category/CategoryCarousel";
import { BreadCrumb } from "../BreadCrumbs";

const data = await getLocalData();
const products = data.products;
const category = data.categories;
const subCategory = data.subcategories;

export const ProductInfo = ({ productId }) => {
  const filterCategory = subCategory.filter(cat =>cat.mainFA ==  products.filter(prod => prod.id == productId)[0].category.sub )[0]
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
                  linkCategory={filterCategory.parent}
                  subCategory={product.category.sub}
                  linkSubCategory={filterCategory.main}
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
