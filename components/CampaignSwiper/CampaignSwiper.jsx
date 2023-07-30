import { getLocalData } from "@/lib/localdata";
import { CampaignSwiperTittle } from "./CampaignSwiperTittle";
import { ProductSwiper } from "./ProductSwiper";
import campaignBackground from "../../public/assets/images/campaignBackground.png";
import { Carousel } from "../Carousel/Carousel";

const data = await getLocalData();
const products = data.products;
const campaign = data.campaign;

export const CampaignSwiper = () => {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center sm:flex-row p-2 rounded-md"
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundImage: `url(${campaignBackground.src})`,
        }}
      >
        <CampaignSwiperTittle/>
        <div className=" sm:w-[80%]  md:w-[90%]">
          <Carousel space={"ml-4"} cartClassName={"rounded-md"} products={products} />
        </div>
        {/* <ProductSwiper products={products} /> */}
      </div>
    </>
  );
};
