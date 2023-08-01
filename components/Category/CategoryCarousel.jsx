import { getLocalData } from "@/lib/localdata";
import { Carousel } from "../Carousel/Carousel"
import { CategoryCarouselTittle } from "./CategoryCarouselTittle"

const data = await getLocalData();
const products = data.products;

export const CategoryCarousel =({item ,seeMore}) => {
    return (
        <div className="my-8 border rounded overflow-hidden ">
            <CategoryCarouselTittle title={item} seeMore={seeMore} />
            <Carousel
              content={item}
              products={products.filter(product => product.category.sub === item)}
              cartClassName={"border-l hover:shadow-xl "}
              imageClass={"-translate-y-1"}
            />
          </div>
    )
}