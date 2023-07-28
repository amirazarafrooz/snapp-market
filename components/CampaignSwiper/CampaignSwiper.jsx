import { CampaignSwiperTittle } from "./CampaignSwiperTittle";
import { ProductSwiper } from "./ProductSwiper";

export const CampaignSwiper = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center sm:flex-row bg-blue-700 p-2 rounded-md">
        <CampaignSwiperTittle title={"با تخفیف بخر!"}/>
        <ProductSwiper />
      </div>
    </>
  );
};
