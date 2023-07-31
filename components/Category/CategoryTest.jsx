import { getLocalData } from "@/lib/localdata";
import { CategoryListDesk } from "./CategoryListDesk";
import { CategoryListTab } from "./CategoryListTab";
import { CategoryCarousel } from "./CategoryCarousel";

const data = await getLocalData();
const products = data.products;
const category = data.categories;

export const CategoryTest = ({}) => {
  return (
    <div className="w-full laptop:flex">
      <CategoryListDesk />
      <CategoryListTab />
      <CategoryCarousel />
    </div>
  );
};
