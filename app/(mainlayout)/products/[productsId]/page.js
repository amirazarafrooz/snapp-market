import Image from "next/image";
import snappmarketlogo from "../../../../public/assets/images/snappmarket-logo.svg";
import { ProductInfo } from "@/components/ProductInfo/ProductInfo";
import { getLocalData } from "@/lib/localdata";
import { NavbarMobile } from "@/components/header/NavbarMobile";

const data = await getLocalData();
const products = data.products;

export async function getStaticPaths() {
  const paths = products.map((post) => {
    return {
      params: {
        productsId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function ProductsDetails({ params }) {
  return (
    <main className=" bg-snp-bg-body w-full  flex justify-center">
      <div className="mx-auto w-full px-2 mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300">
        <ProductInfo productId={params.productsId} />
        <NavbarMobile products={products} productId={params.productsId} />
      </div>
      {/* <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       صفحه اولین  محصول   <Image src={snappmarketlogo} width={85} height={85}></Image> </p> */}
    </main>
  );
}
