import Image from 'next/image'
import snappmarketlogo from "../public/assets/images/snappmarket-logo.svg"
import ProductInfoContainer from '@/components/product/productInfoContainer'
import AboutSnappmarket from '@/components/product/AboutSnappmarket'
import AboutMainCategory from '@/components/product/AboutMainCategory'
import AboutSubCategory from '@/components/product/AboutSubCategory'

export default function Home() {
  return (
<>
    <main className=" flex flex-row gap-5 items-center justify-center p-5 h-96 bg-slate-500">
       
      <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       اسنپ مارکت<Image src={snappmarketlogo} width={85} height={85}></Image> </p>

    </main>

<main className=" flex flex-row gap-5 items-center justify-center p-5 h-96 bg-slate-500">
       
<p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
 اسنپ مارکت<Image src={snappmarketlogo} width={85} height={85}></Image> </p>

</main>

<main className=" flex flex-row gap-5 items-center justify-center p-5 h-96 bg-slate-500">
       
<p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
 اسنپ مارکت<Image src={snappmarketlogo} width={85} height={85}></Image> </p>

</main>

<div> <AboutSubCategory/> </div>

<main className=" flex flex-row gap-5 items-center justify-center p-5 h-96 bg-slate-500">
       
<p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
 اسنپ مارکت<Image src={snappmarketlogo} width={85} height={85}></Image> </p>

</main>

<main className=" flex flex-row gap-5 items-center justify-center p-5 h-96 bg-slate-500">
       
<p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
 اسنپ مارکت<Image src={snappmarketlogo} width={85} height={85}></Image> </p>

</main>

</>
  )
}
