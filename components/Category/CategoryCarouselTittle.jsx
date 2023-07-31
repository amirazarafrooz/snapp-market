import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export const CategoryCarouselTittle = () => {
  return (
    <>
      <header className="flex justify-between items-center text-black bg-white px-5 py-0.5 border-b h-12">
        <p className="text-md font-iransans relative after:border after:border-blue-700 after:rounded-b-md after:absolute after:-bottom-3 after:left-0 after:w-full after:z-10">
          شیر
        </p>
        <Link href={"/"}>
          <div className="flex items-center">
            <p className=" text-sm text-snp-primary font-iransansl">
              مشاهده بیشتر
            </p>
            <FaAngleLeft className="text-sm text-snp-primary mr-1"/>
          </div>
        </Link>
      </header>
    </>
  );
};
