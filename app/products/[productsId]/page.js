import Image from 'next/image'
import snappmarketlogo from '../../../public/assets/images/snappmarket-logo.svg'

import { getLocalData } from '@/lib/localdata'


  const data = await getLocalData();
  const yechizi = data.products

  export async function getStaticPaths(){
    const paths= yechizi.map((post)=>{
      return {
        params: {
          productsId:`${post.id}`,
        },
      }
    })

    return {
      paths,
      fallback:false,
    }
  }


export default function ProductsDetails({params}) {
  return (

    <main className=" flex flex-row gap-5 items-center justify-center p-5 h-screen">
       
      <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       صفحه اولین  محصول   <Image src={snappmarketlogo} width={85} height={85}></Image> </p>

       <div> {params.productsId}</div>

    {yechizi.filter((item)=>
       (item.id==params.productsId)).map((item)=> (<div className='bg-orange-600'>{item.name}</div>))}
    
    </main>
  )
}