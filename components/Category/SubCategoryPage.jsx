import Link from "next/link";
import { SubCategoryFilter } from "./SubCategoryFilter";
import { ProductItemCard } from "../common/ProductItemCard";
import { getLocalData } from "@/lib/localdata";
import { BreadCrumb } from "../common/BreadCrumbs";
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
      <div className="flex justify-center w-full mobile:w-[466px] tablet:w-[690px] laptop:w-[914px] desktop:w-[1138px]">
        <SubCategoryFilter />
        <div className="flex flex-col items-center w-full px-2 ">
          <div className="bg-snp-white border rounded py-1 px-4 w-full">
            <BreadCrumb
              productsAmount={filterProducts.length}
              category={filterCategories.parentFA}
              linkCategory={filterCategories.parent}
              subCategory={filterCategories.mainFA}
            />
          </div>
          <div className="w-full  mb-8">
            <SubCategoryPageMain products={filterProducts} />
          </div>
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
