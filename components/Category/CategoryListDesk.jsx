import { getLocalData } from "@/lib/localdata";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

const data = await getLocalData();
const category = data.categories;

export const CategoryListDesk = () => {
  return (
    <div className="hidden laptop:block laptop:w-1/4">
      <div className="w-[95%] border rounded py-4 px-3">
        <p className=" font-iransans text-md mb-5">دسته بندی‌ها :</p>
        <Link href={"/"}>
          <div className="flex justify-between items-center p-2 my-2.5 rounded hover:bg-slate-100 group transition-all duration-100">
            <p className=" font-iransansl text-sm text-gray-600 group-hover:bg-sky-50">
              نوشابه
            </p>
            <FaAngleLeft className=" text-gray-600 hidden group-hover:block" />
          </div>
        </Link>
      </div>
    </div>
  );
};