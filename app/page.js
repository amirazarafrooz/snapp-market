import Image from 'next/image'
import snappmarketlogo from "../public/assets/images/snappmarket-logo.svg"
import { CampaignSwiper } from '@/components/CampaignSwiper/CampaignSwiper'
import { BannerCampaign } from '@/components/campaigns/BannerCampaign'
import { Categories } from '@/components/campaigns/Categories'
import { AboutSnappmarket } from '@/components/captions/about'

import Button from '@/components/button/Button'
import { CategoriesMenu } from '@/components/CategoriesMenu'
import { Carousel } from '@/components/Carousel/Carousel'
import { DiscountSwiper } from '@/components/DiscountSwiper/DiscountSwiper'



export default function Home() {
  return (

    <main className='bg-snp-bg-body w-full  flex justify-center'>
        {/* main layout  */}
      <div className='mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300'>
      <CategoriesMenu showToggle={true}/>
      

      <div className='w-full p-2 mt-6'> <DiscountSwiper/></div>
      <BannerCampaign bannercount={'maltich'}/>
      <Categories/>
      <BannerCampaign bannercount={'sunich'}/>
      <div className='w-full p-2'><CampaignSwiper CampaignTitle={'شیر'} /></div>
      <div className='w-full p-2'> <CampaignSwiper CampaignTitle={'نوشابه'} /></div>
      <BannerCampaign bannercount={'marketingDiscount'}/>
      <div className='w-full p-2'> <CampaignSwiper CampaignTitle={'ماست'} /></div>
      <BannerCampaign bannercount={'buyandcook'}/>
      <AboutSnappmarket/>


 
 

      </div>
    </main>



)
}
