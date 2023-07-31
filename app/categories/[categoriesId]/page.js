import Image from "next/image";
import snappmarketlogo from "../../../public/assets/images/snappmarket-logo.svg";
import { CategoryPage } from "@/components/Category/CategoryPage";

export default function CategoriesDetail({ params }) {
  return (
    <main className="bg-snp-bg-body w-full  flex justify-center">
      <div className="mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300">
        <CategoryPage categoryName={params.categoriesId}/>
        {/* <p className=" flex flex-row gap-5 items-center justify-center p-5 bg-snp-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white">
        صفحه دسته بندی ها {params.categoriesId}
        <Image src={snappmarketlogo} width={85} height={85}></Image>{" "}
      </p> */}
      </div>
    </main>
  );
}
