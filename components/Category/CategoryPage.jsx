import { getLocalData } from "@/lib/localdata";
import { CategoryListDesk } from "./CategoryListDesk";
import { CategoryListTab } from "./CategoryListTab";
import { CategoryProducts } from "./CategoryProducts";
import { BreadCrumb } from "../common/BreadCrumbs";
import { AboutMainCategory } from "../captions/AboutMainCategory";

const data = await getLocalData();
const category = data.categories;

const CategoryPage = async ({ categoryName }) => {
  const filterCategoryProducts = category.filter(
    (item) => item.main === categoryName
  );
  return (
    <div className="w-full  relative">
      <div className="laptop:flex">
        <CategoryListDesk categoryName={categoryName} />
        <CategoryListTab categoryName={categoryName} />
        {filterCategoryProducts.map((item) => {
          return (
            <CategoryProducts lists={item.subs} breadCategory={item.mainFA} />
          );
        })}
      </div>
      <AboutMainCategory main={categoryName} />
    </div>
  );
};

export default CategoryPage;
