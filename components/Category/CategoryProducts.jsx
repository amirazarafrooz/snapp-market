import { BreadCrumb } from "../BreadCrumbs";
import { CategoryCarousel } from "./CategoryCarousel";

export const CategoryProducts = ({ lists, breadCategory }) => {
  return (
    <div className="w-full laptop:w-3/4">
      <div className="mt-8 bg-snp-white border rounded py-1 px-4">
        <BreadCrumb category={breadCategory} />
      </div>
      {lists.map((item) => {
        return <CategoryCarousel item={item} seeMore={true} />;
      })}
    </div>
  );
};
