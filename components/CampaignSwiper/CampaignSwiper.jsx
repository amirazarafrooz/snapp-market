import { getLocalData } from "@/lib/localdata";
import { CampaignSwiperTittle } from "./CampaignSwiperTittle";
import { ProductSwiper } from "./ProductSwiper";
import campaignBackground from "../../public/assets/images/campaignBackground.png";
import { Carousel } from "../Carousel/Carousel";

const data = await getLocalData();
const products = data.products;
const campaigns = data.campaigns;

export const CampaignSwiper = ({ CampaignTitle, campaignId }) => {

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
        {campaigns
          .filter((item) => item.title === CampaignTitle)
          .map((item) => (
            <CampaignSwiperTittle item={item.title} />
          ))}
        <div className=" sm:w-[80%]  md:w-[90%]">
          <Carousel
            space={"ml-4"}
            cartClassName={"rounded-md"}
            products={products.filter(
              (item) => item.category.sub === CampaignTitle
            )}

            content={campaignId}
          />
        </div>
        {/* <ProductSwiper products={products} /> */}
      </div>
    </>
  );
};
