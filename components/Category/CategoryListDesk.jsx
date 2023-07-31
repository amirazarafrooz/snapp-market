import { getLocalData } from "@/lib/localdata";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";


export const CategoryListDesk = ({ list }) => {
  return (
    <div className="w-[95%] px-3 hidden laptop:flex laptop:w-1/4 my-8 ">
      <div className="w-full h-fit border rounded py-4 px-3 sticky top-[130px]">
        <p className=" font-iransans text-md mb-5">دسته بندی‌ها :</p>
        {list.map((item) => {
          return (
            <Link href={`/category/${item}`}>
              <div className="flex justify-between items-center p-2 my-2.5 rounded hover:bg-slate-100 group transition-all duration-100">
                <p className=" font-iransansl text-sm text-gray-600 ">{item}</p>
                <FaAngleLeft className=" text-gray-600 hidden group-hover:block" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
