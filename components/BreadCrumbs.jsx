import { efarsi } from "@/utils/efarsi";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";

export const BreadCrumb = ({
  category,
  linkCategory,
  subCategory,
  linkSubCategory,
  subCategoryBrand,
  productsAmount,
}) => {
  return (
    <div className="flex items-center w-full font-iransansl text-xs mobile:text-sm py-3 px-1">
      <Link href={"/"} className="flex items-center">
        <AiOutlineHome className="text-lg pb-0.5" />
        <p className="mr-1">اسنپ مارکت</p>
      </Link>
      <span className="mx-1.5">
        <AiOutlineLeft className="text-gray-500" />
      </span>
      {!subCategory && !subCategoryBrand ? (
        <div>
          <p className="font-iransansb">{category}</p>
        </div>
      ) : null}
      {category && subCategory && !subCategoryBrand ? (
        <div className="flex items-center">
          <Link href={`/categories/${linkCategory}`}>
            <p>{category}</p>
          </Link>
          <span className="mx-1.5">
            <AiOutlineLeft className="text-gray-500" />
          </span>
          <p className=" font-iransansb">{subCategory}</p>
        </div>
      ) : null}
      {category && subCategory && subCategoryBrand ? (
        <div className="flex items-center">
          <Link href={`/categories/${linkCategory}`}>
            <p>{category}</p>
          </Link>
          <span className="mx-1.5">
            <AiOutlineLeft className="text-gray-500" />
          </span>
          <Link href={`/subcategories/${linkSubCategory}`}>
            <p>{subCategory}</p>
          </Link>
          <span className="mx-1.5">
            <AiOutlineLeft className="text-gray-500" />
          </span>
          <div className="flex items-center gap-1 font-iransansb">
            <p>{subCategory}</p>
            <p>{subCategoryBrand}</p>
          </div>
        </div>
      ) : null}
      {productsAmount > 0 && (
        <>
          <span className="mr-auto">{efarsi(productsAmount)}</span>
          <span>کالا</span>
        </>
      )}
    </div>
  );
};
