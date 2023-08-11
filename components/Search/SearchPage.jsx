"use client";
import { useSearchParams } from "next/navigation";
import { BreadCrumb } from "../BreadCrumbs";
import { SearchPageMain } from "./SearchPageMain";

export const SearchPage = ({ products }) => {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const filterSearchProducts = products.filter((prod) =>
    prod.category.sub.includes(term)
  );
  console.log(filterSearchProducts);
  return (
    <div className="w-full flex flex-col justify-center my-8">
      <div className="w-full bg-snp-white border rounded py-1 px-4">
        <BreadCrumb
        // productsAmount={filterProducts.length}
        // category={filterCategories.parentFA}
        // linkCategory={filterCategories.parent}
        // subCategory={filterCategories.mainFA}
        />
      </div>
      <div className=" w-[898px] mx-auto">
        <SearchPageMain products={filterSearchProducts} />
      </div>
    </div>
  );
};
