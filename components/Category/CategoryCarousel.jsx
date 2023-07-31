import { getLocalData } from "@/lib/localdata";
import { Carousel } from "../Carousel/Carousel";
import { CategoryCarouselTittle } from "./CategoryCarouselTittle";

const data = await getLocalData();
const products = data.products;

export const CategoryCarousel = ({ lists }) => {
  console.log(lists);
  return (
    <div className="w-full laptop:w-3/4 ">
      {lists.map((item) => {
        return (
          <div className="mt-8 border rounded overflow-hidden">
            <CategoryCarouselTittle title={item} />
            <Carousel
              content={item}
              products={products.filter(product => product.category.sub === item)}
              cartClassName={"border-l hover:shadow-xl"}
            />
          </div>
        );
      })}
    </div>
  );
};
