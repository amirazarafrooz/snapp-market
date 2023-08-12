import { getLocalData } from "@/lib/localdata";
import { DiscountTittle } from "./DiscountTittle";
import { Carousel } from "../Carousel/Carousel";

const data = await getLocalData();
const products = data.products;

const DiscountSwiper = () => {
  const filterDiscountProduct = products.filter((item) => item.discount > 25);
  filterDiscountProduct.length = 9;

  return (
    <section
      className="w-full flex items-center justify-center py-4 px-6 rounded-md"
      style={{
        background:
          "linear-gradient(rgb(27, 49, 173) 0%, rgb(48, 79, 254) 100%)",
      }}
    >
      <DiscountTittle />
      <div className="w-[50%] md:w-[65%] lg:w-[70%]">
        <Carousel
          space={"ml-4"}
          cartClassName={"rounded-md"}
          products={filterDiscountProduct}
        />
      </div>
      {/* <SwiperElement products={products} /> */}
    </section>
  );
};

export default DiscountSwiper;
