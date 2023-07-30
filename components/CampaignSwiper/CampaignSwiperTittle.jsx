export const CampaignSwiperTittle = ({ title }) => {
  // {campaign.filter((item) => item.title === "شیر")}
  return (
    <>
      <div className="flex w-full h-full pt-1 pb-3 pr-1 text-right sm:w-[20%] md:w-[10%] sm:text-center   ">
        <p className="text-lg font-iransans text-snp-white w-full sm:text-xl sm:font-iransansb">{title}</p>
      </div>
    </>
  );
};
