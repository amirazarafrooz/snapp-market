import { getLocalData } from "@/lib/localdata";
import { CategoryListDesk } from "./CategoryListDesk";
import { CategoryListTab } from "./CategoryListTab";
import { CategoryProducts } from "./CategoryProducts";
import { BreadCrumb } from "../BreadCrumbs";

const data = await getLocalData();
const category = data.categories;

export const CategoryPage = async ({ categoryName }) => {
  const filterCategoryProducts = category.filter(
    (item) => item.main === categoryName
  );
  return (
    <div className="w-full laptop:flex relative">
      <CategoryListDesk categoryName={categoryName} />
      <CategoryListTab categoryName={categoryName} />
      {filterCategoryProducts.map((item) => {
        return (
          <CategoryProducts lists={item.subs} breadCategory={item.mainFA} />
        );
      })}
    </div>
  );
};
