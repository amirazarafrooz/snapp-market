"use client";
import { useSearchParams } from "next/navigation";
import { BreadCrumb } from "../common/BreadCrumbs";
import { SubCategoryPageMain } from "../Category/SubCategoryPageMain";
import { useEffect } from "react";




const SearchPage = ({ products }) => {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  let filterSearchProducts=[];


     filterSearchProducts = products.filter((prod) =>
      prod.name.includes(term)
    );


  return (
    <div className="w-full my-8 px-2">
      <div className="mt-8 bg-snp-white border rounded py-1 px-4">
        <BreadCrumb category={term} productsAmount={filterSearchProducts.length}/>
      </div>
      {filterSearchProducts?.length>0?
      <SubCategoryPageMain products={filterSearchProducts} />
    :<div className="w-full h-96 mt-4 shadow-lg rounded-md bg-snp-light justify-center flex items-center font-iransans text-lg">
      متاسفانه موردی یافت نشد :(</div>
    }
    </div>
  );
};

export default SearchPage;
