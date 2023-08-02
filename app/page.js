import Image from 'next/image'
import snappmarketlogo from "../public/assets/images/snappmarket-logo.svg"
import { CampaignSwiper } from '@/components/CampaignSwiper/CampaignSwiper'
import { BannerCampaign } from '@/components/campaigns/BannerCampaign'
import { Categories } from '@/components/campaigns/Categories'
import { AboutSnappmarket } from '@/components/captions/about'

import { ShoppingCard } from '@/components/ShoppingCard'
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
      <div className='w-full p-2'><CampaignSwiper CampaignTitle={'شیر'} campaignId={"s2"}/></div>
      <div className='w-full p-2'> <CampaignSwiper CampaignTitle={'نوشابه'} campaignId={"s3"}/></div>
      <BannerCampaign bannercount={'marketingDiscount'}/>
      <div className='w-full p-2'> <CampaignSwiper CampaignTitle={'با تخفیف بخر!'} campaignId={"s4"}/></div>
      <BannerCampaign bannercount={'buyandcook'}/>
      <AboutSnappmarket/>


 
 

      </div>
    </main>



)
}
