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
  const filterCategory = subCategory.filter(
    (cat) =>
      cat.mainFA ==
      products.filter((prod) => prod.id == productId)[0].category.sub
  )[0];
  const filterProduct = products.filter(
    (product) => product.id == productId
  )[0];
  const { category, brand, images } = filterProduct;
  return (
    <div className="w-full ">
      <div className="w-full bg-snp-white border rounded my-8 pb-5 tablet:px-12 tablet:pb-12">
        <BreadCrumb
          category={category.main}
          linkCategory={filterCategory.parent}
          subCategory={category.sub}
          linkSubCategory={filterCategory.main}
          subCategoryBrand={brand}
        />
        <div className="tablet:flex tablet:items-center tablet:justify-center w-full h-full my-10">
          <ProductImageCarousel images={images} />
          <ProductDetails product={filterProduct} />
        </div>
      </div>
      <CategoryCarousel title={category.sub} seeMore={false} />
    </div>
  );
};
