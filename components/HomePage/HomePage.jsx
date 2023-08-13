import dynamic from "next/dynamic";

const CategoriesMenu = dynamic(
  async () => await import("../header/CategoriesMenu")
);

const DiscountSwiper = dynamic(
  async () => await import("./DiscountSwiper/DiscountSwiper")
);

const BannerCampaign = dynamic(
  async () => await import("../campaigns/BannerCampaign")
);

const Categories = dynamic(async () => await import("../campaigns/Categories"));

const CampaignSwiper = dynamic(
  async () => await import("./CampaignSwiper/CampaignSwiper")
);

const AboutSnappmarket = dynamic(async () => await import("../captions/about"));

const HomePage = () => {
  return (
    <main className="bg-snp-bg-body w-full  flex justify-center">
      <div className="mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300 ">
        <CategoriesMenu showToggle={true} />

        <div className="w-full p-2 mt-6">
          <DiscountSwiper />
        </div>

        <BannerCampaign bannercount={"maltich"} />

        <Categories />

        <BannerCampaign bannercount={"sunich"} />

        <div className="w-full p-2">
          <CampaignSwiper CampaignTitle={"شیر"} campaignId={"s2"} />
        </div>

        <div className="w-full p-2">
          <CampaignSwiper CampaignTitle={"نوشابه"} campaignId={"s3"} />
        </div>

        <BannerCampaign bannercount={"marketingDiscount"} />

        <div className="w-full p-2">
          <CampaignSwiper CampaignTitle={"پنیر"} campaignId={"s4"} />
        </div>

        <BannerCampaign bannercount={"buyandcook"} />

        <AboutSnappmarket />
      </div>
    </main>
  );
};
export default HomePage;
