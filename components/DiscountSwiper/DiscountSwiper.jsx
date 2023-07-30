import { getLocalData } from "@/lib/localdata";
import { DiscountTittle } from "./DiscountTittle";
import { SwiperElement } from "./SwiperElement";

const data = await getLocalData();
const products = data.products;

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
      <SwiperElement products={products} />
    </section>
  );
};
