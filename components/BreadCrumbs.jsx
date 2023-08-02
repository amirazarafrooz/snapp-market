import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";

export const BreadCrumb = ({ category, subCategory, subCategoryBrand }) => {
  return (
    <div className="flex items-center w-full font-iransansl text-sm py-4 ">
      <Link href={"/"} className="flex items-center">
        <AiOutlineHome className="text-lg" />
        <p className="mr-1">اسنپ مارکت</p>
      </Link>
      <span className="mx-1.5">
        <AiOutlineLeft className="text-gray-500" />
      </span>
      {category && subCategory && subCategoryBrand ? (
        <div className="flex items-center">
          <p>{category}</p>
          <span className="mx-1.5">
            <AiOutlineLeft className="text-gray-500" />
          </span>
          <p>{subCategory}</p>
          <span className="mx-1.5">
            <AiOutlineLeft className="text-gray-500" />
          </span>
          <div className="flex items-center gap-1">
            <p>{subCategory}</p>
            <p>{subCategoryBrand}</p>
          </div>
        </div>
      ) : null}
      {!subCategory && !subCategoryBrand ? (
        <div>
          <p className="font-iransansb">{category}</p>
        </div>
      ) : null}
    </div>
  );
};
