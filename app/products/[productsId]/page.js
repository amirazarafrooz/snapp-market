import Image from 'next/image'
import snappmarketlogo from '../../../public/assets/images/snappmarket-logo.svg'

export default function ProductsDetails({params}) {
  return (

    <main className=" flex flex-row gap-5 items-center justify-center p-5 h-screen">
       
      <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       صفحه هر  محصول  {params.productsId} <Image src={snappmarketlogo} width={85} height={85}></Image> </p>

       
    
    </main>
  )
}