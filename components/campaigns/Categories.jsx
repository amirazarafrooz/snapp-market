import React from "react";
import { getLocalData } from "../../lib/localdata";
import Link from "next/link";
import Image from "next/image";

const data = await getLocalData();
const categories = data.categories;

export const Categories = () => {
  return (
    <div className="flex flex-col justify-center mt-4 w-full ">
      <h3 className="flex  w-full justify-start px-4 laptop:px-5 desktop:px-3 font-iransans text-base">
        دسته بندی ها
      </h3>
      <div className="flex flex-wrap mt-3 gap-2 justify-center items-center tablet:gap-4 ">
        {categories.map((item) => (
          <div className="flex items-center rounded-lg h-20 w-[30%] bg-snp-light tablet:w-[23%] laptop:w-56 laptop:h-28 ">
            <Link
              className="flex items-center gap-2 justify-start w-full "
              href={`/categories/${item.main}`}
            >
              <Image alt="categories-icon"
                className="ml-2 laptop:w-24 laptop:h-24"
                width={53}
                height={53}
                src={item.image}
              ></Image>
              <span className="text-snp-lightblack font-iransans text-xs tablet:text-sm laptop:text-base px-2">
                {item.mainFA}{" "}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
