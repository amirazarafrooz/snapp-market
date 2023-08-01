import { CategoryCarousel } from "./CategoryCarousel";

export const CategoryProducts = ({ lists }) => {
  return (
    <div className="w-full laptop:w-3/4">
      {lists.map((item) => {
        return <CategoryCarousel item={item} seeMore={true} />;
      })}
    </div>
  );
};
