import { Carousel } from "../Carousel/Carousel";
import { CategoryCarouselTittle } from "./CategoryCarouselTittle";

export const CategoryCarousel = () => {
  return (
    <div className="w-full laptop:w-3/4 border rounded overflow-hidden">
      <CategoryCarouselTittle />
      <Carousel
        content={"s3"}
        products={products}
        cartClassName={"border-l hover:shadow-xl"}
      />
    </div>
  );
};
