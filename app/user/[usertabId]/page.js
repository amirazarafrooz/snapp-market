import Image from 'next/image'
import snappmarketlogo from '../../../public/assets/images/snappmarket-logo.svg'

export default function UserDetails({params}) {
  return (

    <main className=" flex flex-row gap-5 items-center justify-center p-5 h-screen">
       
      <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       صفحه کاربر بخش  {params.usertabId} <Image src={snappmarketlogo} width={85} height={85}></Image> </p>

       
    
    </main>
  )
}