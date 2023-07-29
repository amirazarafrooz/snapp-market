import React from "react";
import Image from "next/image";
import Link from "next/link";

{
  /*// bannercount is measured by counting fetched array from campaign*/
}
export const BannerCampaign = ({ bannercount }) => {
  return (
    <>
    <div className=" w-full p-2 mt-2 mb-10 flex overflow-hidden">
     
     
      {bannercount === 'maltich' && (<div>
      
        <div className="flex gap-2">
          <Link href="/" className="w-1/2">
          <Image className="rounded-md tablet:hidden" width={1218} height={125} src={"https:api.snapp.market/uploads/images/mobile-sliders/64c4f7c7e716e.png" } />
          </Link>
        <Link href="/" className="w-1/2">
          <Image className=" rounded-md tablet:hidden" width={1218} height={125} src={ "https:api.snapp.market/uploads/images/mobile-sliders/64c41fa7980fb.jpg" } />
          </Link>
          </div>
          <div className="hidden tablet:block"> 
            <Link href="/">
            <Image className="reunded-md" width={1205} height={123} src={"https://api.snapp.market/uploads/images/mobile-sliders/64c4c7f3ea040.jpg"} />

            </Link> 
          </div>



          </div>
      )}

      
{bannercount === 'sunich' && (
<div >
      
      <div className=" flex tablet:gap-2 ">
        <Link href="/" >
        <Image  className="rounded-md hidden tablet:block" width={1218} height={125} src={"https://api.snapp.market/uploads/images/mobile-sliders/64bae75d3c435.jpg" } />
        </Link>      
        </div>
        </div>
    )}

{bannercount === 'buyandcook' && (
<div>
      
      <div className="flex gap-2 ">
        <Link href="/" >
        <Image  className="rounded-md mobile:hidden tablet:block" width={1218} height={125} src={"https://api.snapp.market/uploads/images/mobile-sliders/63cc228837b9d.jpg" } />
        </Link>      
        </div>
        </div>
    )}

{bannercount === 'marketingDiscount' && (
    <div>
        <div className="mb-4 text-center mobile:text-right"><h1 className="font-iransansb">تخفیف های ویژه</h1> </div>
        <div className="flex flex-row gap-2  flex-wrap justify-center items-center tablet:gap-4 tablet:flex-nowrap ">
          <Link className=" mobile:w-[48%] tablet:w-1/3 " href="/"><Image className="rounded-md " width={382} height={198} src={"https://api.snapp.market/uploads/images/mobile-sliders/64c404a22ca54.jpg"}/></Link>
          <Link className=" mobile:w-[48%] tablet:w-1/3" href="/"><Image className="rounded-md " width={382} height={198} src={"https://api.snapp.market/uploads/images/mobile-sliders/64c404c40294d.jpg"}/></Link>
          <Link className=" mobile:w-[48%]  tablet:w-1/3" href="/"><Image className="rounded-md " width={382} height={198} src={"https://api.snapp.market/uploads/images/mobile-sliders/64c404e2c6e1a.jpg"}/></Link>
        </div>
      </div>
      )}
       </div>
    </>
  );
};







// https://api.snapp.market/uploads/images/mobile-sliders/64c4c7f3ea040.jpg banner khosgel nimesafhe
// "https://api.snapp.market/uploads/images/mobile-sliders/64c4c7f3ea040.jpg" banner khosgel bozorg


// https://api.snapp.market/uploads/images/mobile-sliders/64c501d46efba.png    banner zesht bozorg


// https://api.snapp.market/uploads/images/mobile-sliders/64c4c7f3ea040.jpg

// https://api.snapp.market/uploads/images/mobile-sliders/64c4c80d89599.jpg

//https://api.snapp.market/uploads/images/mobile-sliders/64c404a22ca54.jpg
//https://api.snapp.market/uploads/images/mobile-sliders/64c404c40294d.jpg
//https://api.snapp.market/uploads/images/mobile-sliders/64c404e2c6e1a.jpg
