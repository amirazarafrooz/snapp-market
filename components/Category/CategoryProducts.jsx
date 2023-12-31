import { getLocalData } from "@/lib/localdata";
import { BreadCrumb } from "../common/BreadCrumbs";
import { CategoryCarousel } from "./CategoryCarousel";

const data = await getLocalData();
const products = data.products;

export const CategoryProducts = ({ lists, breadCategory }) => {
  const availableFilterCategoryCarousel = lists.filter((item) =>
    products.filter((product) => product.category.sub == item)[0] ? item : null
  );
  return (
    <div className="w-full laptop:w-3/4">
      <div className="mt-8 bg-snp-white border rounded py-1 px-4">
        <BreadCrumb category={breadCategory} />
      </div>
      {availableFilterCategoryCarousel.map((item) => {
        return <CategoryCarousel title={item} seeMore={true} />;
      })}
    </div>
  );
};
