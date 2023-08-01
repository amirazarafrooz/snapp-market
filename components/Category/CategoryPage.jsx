import { getLocalData } from "@/lib/localdata";
import { CategoryListDesk } from "./CategoryListDesk";
import { CategoryListTab } from "./CategoryListTab";
import { CategoryProducts } from "./CategoryProducts";
import { BreadCrumb } from "../BreadCrumbs";

const data = await getLocalData();
const category = data.categories;

export const CategoryPage = async ({ categoryName }) => {
  return (
    <div className="w-full laptop:flex relative">
      {category
        .filter((item) => item.main === categoryName)
        .map((item) => (
          <CategoryListDesk list={item.subs} />
        ))}
      {category
        .filter((item) => item.main === categoryName)
        .map((item) => (
          <CategoryListTab list={item.subs} title={item.mainFA} />
        ))}
      {category
        .filter((item) => item.main === categoryName)
        .map((item) => {
          return <CategoryProducts lists={item.subs} breadCategory={item.mainFA}/>;
        })}
    </div>
  );
};
