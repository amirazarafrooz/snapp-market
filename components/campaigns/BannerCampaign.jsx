import React from "react";
import Image from "next/image";
import Link from "next/link";
import multichbanner from "../../public/assets/images/Multich-banner.jpg"
import multichsquare from "../../public/assets/images/Multich-square.jpg"
import sunichsquare from "../../public/assets/images/sanich-square.jpg"
import sunichbanner from "../../public/assets/images/sunich-banner.jpg"
import buybanner from "../../public/assets/images/readyfood-square.jpg"
import washer from "../../public/assets/images/saftlan-square.jpg"
import freezed from "../../public/assets/images/BA-square.jpg"
import date from "../../public/assets/images/date-square.jpg"


{
  /*// bannercount is measured by counting fetched array from campaign*/
}
const BannerCampaign = ({ bannercount }) => {
  return (
    <>
      <div className=" w-full p-2 mt-2  flex overflow-hidden">
        {bannercount === "maltich" && (
          <div>
            <div className="flex gap-2">
              <Link href="/" className="w-1/2">
                <Image
                  alt="campaign-image"
                  className="rounded-md tablet:hidden"
                  width={1218}
                  height={125}
                  src={multichsquare}
                />
              </Link>
              <Link href="/" className="w-1/2">
                <Image
                  alt="campaign-image"
                  className=" rounded-md tablet:hidden"
                  width={1218}
                  height={125}
                  src={
                    sunichsquare
                  }
                />
              </Link>
            </div>
            <div className="hidden tablet:block">
              <Link href="/">
                <Image
                  alt="campaign-image"
                  className="rounded-md"
                  width={1205}
                  height={123}
                  src={
                    multichbanner
                  }
                />
              </Link>
            </div>
          </div>
        )}

        {bannercount === "sunich" && (
          <div>
            <div className=" flex tablet:gap-2 ">
              <Link href="/">
                <Image
                  alt="campaign-image"
                  className="rounded-md hidden tablet:block"
                  width={1218}
                  height={125}
                  src={
                    sunichbanner
                  }
                />
              </Link>
            </div>
          </div>
        )}

        {bannercount === "buyandcook" && (
          <div>
            <div className="flex gap-2 ">
              <Link href="/">
                <Image
                  alt="campaign-image"
                  className="rounded-md mobile:hidden tablet:block"
                  width={1218}
                  height={125}
                  src={
                    buybanner
                  }
                />
              </Link>
            </div>
          </div>
        )}

        {bannercount === "marketingDiscount" && (
          <div>
            <div className="mb-4 text-center mobile:text-right">
              <h1 className="font-iransansb">تخفیف های مارکتی</h1>{" "}
            </div>
            <div className="flex flex-row gap-2  flex-wrap justify-center items-center tablet:gap-4 tablet:flex-nowrap ">
              <Link className=" mobile:w-[48%] tablet:w-1/3 " href="/">
                <Image
                  alt="campaign-image"
                  className="rounded-md "
                  width={382}
                  height={198}
                  src={
                    washer                  }
                />
              </Link>
              <Link className=" mobile:w-[48%] tablet:w-1/3" href="/">
                <Image
                  alt="campaign-image"
                  className="rounded-md "
                  width={382}
                  height={198}
                  src={
                    freezed
                  }
                />
              </Link>
              <Link className=" mobile:w-[48%]  tablet:w-1/3" href="/">
                <Image
                  alt="campaign-image"
                  className="rounded-md "
                  width={382}
                  height={198}
                  src={
                    date
                  }
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BannerCampaign;

// https://api.snapp.market/uploads/images/mobile-sliders/64c4c7f3ea040.jpg banner khosgel nimesafhe
// "https://api.snapp.market/uploads/images/mobile-sliders/64c4c7f3ea040.jpg" banner khosgel bozorg

// https://api.snapp.market/uploads/images/mobile-sliders/64c501d46efba.png    banner zesht bozorg

// https://api.snapp.market/uploads/images/mobile-sliders/64c4c7f3ea040.jpg

// https://api.snapp.market/uploads/images/mobile-sliders/64c4c80d89599.jpg

//https://api.snapp.market/uploads/images/mobile-sliders/64c404a22ca54.jpg
//https://api.snapp.market/uploads/images/mobile-sliders/64c404c40294d.jpg
//https://api.snapp.market/uploads/images/mobile-sliders/64c404e2c6e1a.jpg
