"use client";
import { useSearchParams } from "next/navigation";
import { BreadCrumb } from "../common/BreadCrumbs";
import { SubCategoryPageMain } from "../Category/SubCategoryPageMain";

const SearchPage = ({ products }) => {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const filterSearchProducts = products.filter((prod) =>
    prod.category.sub.includes(term)
  );

  return (
    <div className="w-full my-8 px-2">
      <div className="mt-8 bg-snp-white border rounded py-1 px-4">
        <BreadCrumb category={term} />
      </div>
      <SubCategoryPageMain products={filterSearchProducts} />
    </div>
  );
};

export default SearchPage;
