import Link from "next/link";
import { SubCategoryFilter } from "./SubCategoryFilter";
import { ProductItemCard } from "../ProductItemCard";
import { getLocalData } from "@/lib/localdata";
import { BreadCrumb } from "../BreadCrumbs";
import { SubCategoryPageProduct } from "./SubCategoryPageProduct";
import { SubCategoryPageMain } from "./SubCategoryPageMain";
import { AboutSubCategory } from "../captions/AboutSubCategory";
import { Tags } from "../captions/Tags";

const data = await getLocalData();
const products = data.products;
const subCategory = data.subcategories;

const SubCategoryPage = ({ mainFilterParam }) => {
  const filterProducts = products.filter(
    (item) =>
      item.category.sub ==
      `${subCategory.filter((item) => item.main == mainFilterParam)[0].mainFA}`
  );
  const filterCategories = subCategory.filter(
    (cat) => cat.main == mainFilterParam
  )[0];
  return (
    <div className="w-full flex justify-center my-8">
      <div className="flex justify-center w-144 tablet:w-192 laptop:w-248 desktop:w-300 ">
        <SubCategoryFilter />
        <div className="flex flex-col mobile:w-144 tablet:w-192 laptop:w-248 desktop:w-300 px-2 ">
          <div className="bg-snp-white border rounded py-1 px-4">
            <BreadCrumb
              productsAmount={filterProducts.length}
              category={filterCategories.parentFA}
              linkCategory={filterCategories.parent}
              subCategory={filterCategories.mainFA}
            />
          </div>
          <SubCategoryPageMain products={filterProducts} />
          <AboutSubCategory subId={mainFilterParam} />
          <Tags
            subId={mainFilterParam}
            subcategory={subCategory}
            product={products}
          />
        </div>
      </div>
    </div>
  );
};
export default SubCategoryPage;
