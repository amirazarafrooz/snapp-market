import { getLocalData } from "@/lib/localdata";
import { DiscountTittle } from "./DiscountTittle";
import { SwiperElement } from "./SwiperElement";
import { Carousel } from "../Carousel/Carousel";

const data = await getLocalData();
const products = data.products;

//we need to filter data here and pass it to Carousel
// {products.filter((product) => product.discount > 15);}

export const DiscountSwiper = () => {
  
  return (
    <section
      className="w-full flex items-center justify-center py-4 px-6 rounded-md"
      style={{
        background:
          "linear-gradient(rgb(27, 49, 173) 0%, rgb(48, 79, 254) 100%)",
      }}
    >
      <DiscountTittle />
      <div className="w-[45%] md:w-[65%] lg:w-[70%]">
        <Carousel space={"ml-4"}
            cartClassName={"rounded-md"} products={products} content={'s1'} />
      </div>
      {/* <SwiperElement products={products} /> */}
    </section>
  );
};
