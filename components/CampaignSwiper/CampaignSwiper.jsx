import { getLocalData } from "@/lib/localdata";
import { CampaignSwiperTittle } from "./CampaignSwiperTittle";
import campaignBackground from "../../public/assets/images/campaignBackground.png";
import { Carousel } from "../Carousel/Carousel";

const data = await getLocalData();
const products = data.products;
const campaigns = data.campaigns;

export const CampaignSwiper = ({ CampaignTitle }) => {
  const campaignProducts = products.filter(
    (item) => item.category.sub === CampaignTitle
  );
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center p-2 rounded-md sm:flex-row"
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundImage: `url(${campaignBackground.src})`,
        }}
      >
        <CampaignSwiperTittle title={CampaignTitle}/>
        {/* {campaigns
          .filter((item) => item.title === CampaignTitle)
          .map((item) => (
            <CampaignSwiperTittle item={item.title} />
          ))} */}
        <div className="w-full mx-auto px-1.5 sm:px-0 sm:w-[80%]  md:w-[90%]">
          <Carousel
            space={"ml-4"}
            cartClassName={"rounded-md"}
            products={campaignProducts}
          />
        </div>
      </div>
    </>
  );
};
