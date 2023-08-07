import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export const CategoryCarouselTittle = ({ title, seeMore ,link}) => {
  return (
    <>
      {seeMore && title ? (
        <header className="flex justify-between items-center text-black bg-white px-5 py-0.5 border-b h-12">
          <p className="text-md font-iransans relative after:border after:border-blue-700 after:rounded-t-md after:absolute after:-bottom-3 after:left-0 after:w-full after:z-10">
            {title}
          </p>
          <Link href={`/subcategories/${link}`}>
            <div className="flex items-center">
              <p className=" text-sm text-snp-primary font-iransansl">
                مشاهده بیشتر
              </p>
              <FaAngleLeft className="text-sm text-snp-primary mr-1" />
            </div>
          </Link>
        </header>
      ) : (
        <header className="flex justify-between items-center text-black bg-white px-5 py-0.5 border-b h-12">
          <p className="text-md font-iransans relative after:border after:border-blue-700 after:rounded-t-md after:absolute after:-bottom-3 after:left-0 after:w-full after:z-10">
            محصولات مشابه
          </p>
        </header>
      )}
    </>
  );
};
