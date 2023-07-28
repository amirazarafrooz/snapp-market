import Image from 'next/image'
import snappmarketlogo from "../public/assets/images/snappmarket-logo.svg"
import { DiscountSwiper } from '@/components/DiscountSwiper/DiscountSwiper'
import { CampaignSwiper } from '@/components/CampaignSwiper/CampaignSwiper'

export default function Home() {
  return (

    <main className='w-full h-screen flex justify-center'>

      <div className='bg-gray-100 mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300 '>

<div className='h-96 bg-yellow-300'> </div>
<div className='h-96 bg-yellow-300'> </div>
<div className='h-96 bg-yellow-300'> </div>
<div className='h-96 bg-yellow-300'> </div>
<div className='h-96 bg-yellow-300'> </div>
<div className='h-96 bg-yellow-300'> </div>
<div className='h-96 bg-yellow-300'> </div>

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
</section> */}
