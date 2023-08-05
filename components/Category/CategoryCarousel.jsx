import { getLocalData } from "@/lib/localdata";
import { Carousel } from "../Carousel/Carousel";
import { CategoryCarouselTittle } from "./CategoryCarouselTittle";

const data = await getLocalData();
const products = data.products;
const category = data.categories;

export const CategoryCarousel = ({ title, seeMore }) => {
  const filterCategory = category.filter((cat) => cat.mainFA == title)[0].main;
  return (
    <div className="my-8 border rounded overflow-hidden ">
      <CategoryCarouselTittle
        title={title}
        seeMore={seeMore}
        link={filterCategory}
      />
      <Carousel
        link={filterCategory}
        content={title}
        products={products.filter((product) => product.category.sub === title)}
        cartClassName={"border-l hover:shadow-xl hover:-translate-y-1"}
        imageClass={"-translate-y-1"}
      />
    </div>
  );
};
