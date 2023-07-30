import Image from 'next/image'
import snappmarketlogo from "../public/assets/images/snappmarket-logo.svg"
import { DiscountSwiper } from '@/components/DiscountSwiper/DiscountSwiper'
import { CampaignSwiper } from '@/components/CampaignSwiper/CampaignSwiper'
import { BannerCampaign } from '@/components/campaigns/BannerCampaign'
import { Categories } from '@/components/campaigns/Categories'
import { AboutSnappmarket } from '@/components/captions/about'

import { ShoppingCard } from '@/components/ShoppingCard'
import Button from '@/components/button/Button'
import { CategoriesMenu } from '@/components/CategoriesMenu'



export default function Home() {
  return (

    <main className='bg-snp-bg-body w-full  flex justify-center'>
        {/* main layout  */}
      <div className='mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300'>
      


      <CategoriesMenu showToggle={true}/>
  


      <div className='w-full p-2 mt-6'> 
      
      <div className=' bg-snp-secondary h-96 rounded-md'>swipper</div>
       
      </div>
      <BannerCampaign bannercount={'maltich'}/>
      <Categories/>
      <BannerCampaign bannercount={'sunich'}/>
      <div className='w-full p-2'> <div className=' bg-snp-secondary h-96 rounded-md'></div></div>
      <div className='w-full p-2'> <div className=' bg-snp-secondary h-96 rounded-md'>swipper</div></div>
      <BannerCampaign bannercount={'marketingDiscount'}/>
      <div className='w-full p-2'> <div className=' bg-snp-secondary h-96 rounded-md'>swipper</div></div>
      <BannerCampaign bannercount={'buyandcook'}/>
      <AboutSnappmarket/>


 

      </div>
    </main>



)
}
