import React from "react";
import { getLocalData } from "../../lib/localdata";
import Link from "next/link";
import Image from "next/image";
import diarySquare from "../../public/assets/images/diarySquare.png";
import drinksSquare from "../../public/assets/images/drinksSquare.png";
import friutSquare from "../../public/assets/images/friutSquare.png";
import condimentSquare from "../../public/assets/images/condimentSquare.png";
import snacksSquare from "../../public/assets/images/snacksSquare.png";
import babySquare from "../../public/assets/images/babySquare.png";
import breakfastSquare from "../../public/assets/images/breakfastSquare.png";
import cosmeticSquare from "../../public/assets/images/cosmeticSquare.png";
import washerSquare from "../../public/assets/images/washerSquare.png";
import digitalSquare from "../../public/assets/images/digitalSquare.png";
import homeSquare from "../../public/assets/images/homeSquare.png";
import canSquare from "../../public/assets/images/canSquare.png";
import proteinSquare from "../../public/assets/images/proteinSquare.png";
import braedSquare from "../../public/assets/images/braedSquare.png";
import nutsSquare from "../../public/assets/images/nutsSquare.png";

const data = await getLocalData();
const categories = data.categories;
const images=[drinksSquare,diarySquare,friutSquare,condimentSquare,snacksSquare,babySquare
,breakfastSquare,cosmeticSquare,washerSquare,digitalSquare,nutsSquare,braedSquare,homeSquare,canSquare,proteinSquare]

export const Categories = () => {
  const selectImage=(image)=>{
    for (let index = 0; index < images.length; index++) {
      if(images[index].src.toLowerCase().includes(image.toLowerCase())){
       return images[index];
      }
    }
  }




  return (
    <div className="flex flex-col justify-center mt-4 w-full ">
      <h3 className="flex  w-full justify-start px-4 laptop:px-5 desktop:px-3 font-iransans text-base">
        دسته بندی ها
      </h3>
      <div className="flex flex-wrap mt-3 gap-2 justify-center items-center tablet:gap-4 ">
        {categories
        .filter((item)=>item.subs.length>0)
        .map((item) => (
          <div className="flex items-center rounded-lg h-20 w-[30%] bg-snp-light tablet:w-[23%] laptop:w-56 laptop:h-28 ">
            <Link
              className="flex items-center mobile:gap-2 justify-start w-full "
              href={`/categories/${item.main}`}
            >
              
              <Image alt="categories-icon"
                className="mobile:ml-2 laptop:w-24 laptop:h-24"
                width={53}
                height={53}
                src={selectImage(item.image)}
              ></Image>
              <span className="text-snp-lightblack font-iransans text-xs tablet:text-sm laptop:text-base mobile:px-2">
                {item.mainFA}
              </span>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};
export default Categories;
