import Image from 'next/image'
import snappmarketlogo from "../public/assets/images/snappmarket-logo.svg"
import { DiscountSwiper } from '@/components/DiscountSwiper/DiscountSwiper'
import { CampaignSwiper } from '@/components/CampaignSwiper/CampaignSwiper'
import { BannerCampaign } from '@/components/campaigns/BannerCampaign'
import { Categories } from '@/components/campaigns/Categories'


export default function Home() {
  return (

    <main className='w-full  flex justify-center'>
        {/* main layout  */}
      <div className='bg-gray-100 mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300'>
      
    
      <div className='w-full p-2 mt-6'> <div className=' bg-snp-secondary h-96 rounded-md'>swipper</div></div>
      <BannerCampaign bannercount={'maltich'}/>
      <BannerCampaign bannercount={'sunich'}/>
      <div className='w-full p-2'> <div className=' bg-snp-secondary h-96 rounded-md'>swipper</div></div>
      <div className='w-full p-2'> <div className=' bg-snp-secondary h-96 rounded-md'>swipper</div></div>
      <BannerCampaign bannercount={'marketingDiscount'}/>
      <div className='w-full p-2'> <div className=' bg-snp-secondary h-96 rounded-md'>swipper</div></div>
      <BannerCampaign bannercount={'buyandcook'}/>
      <Categories/>




 {/* <div className='h-96 bg-yellow-300'>aaaa </div>
<div className='h-96 bg-yellow-300'> bbb</div>
<div className='h-96 bg-yellow-300'>ccc</div>
<div className='h-96 bg-yellow-300'>dddd </div>
<div className='h-96 bg-yellow-300'> eee </div>
<div className='h-96 bg-yellow-300'> ffff</div>
<div className='h-96 bg-yellow-300'> gggg</div>  */}

      </div>
    </main>



)
}



{/* <section className="w-full flex items-center justify-center bg-blue-700 py-6 px-4 rounded-md mt-10">
  <DiscountSwiper />
</section>
<section className="mt-10">
  <CampaignSwiper title={"با تخفیف بخر!"} />
</section>
<section className="mt-10">
  <CampaignSwiper title={"شیر"} />
</section>  */}
