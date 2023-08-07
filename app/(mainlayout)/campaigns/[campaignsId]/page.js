import Image from 'next/image'
import snappmarketlogo from '../../../../public/assets/images/snappmarket-logo.svg'


export default function CampaignsDetail({params}) {
  return (

    <main className=" flex flex-row gap-5 items-center justify-center p-5 h-screen">
       
      <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       صفحه کمپین  {params.campaignsId}<Image src={snappmarketlogo} width={85} height={85}></Image> </p>

       
    
    </main>
  )
}