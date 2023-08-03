import { getLocalData } from "@/lib/localdata";
import Link from "next/link";

const data = await getLocalData();
const category = data.categories;

export const CategoryListTab = ({ categoryName }) => {
  return (
    <div className=" laptop:hidden my-10 p-4 border rounded mt-8">
      <div className="border-b pb-4">
        <p className="inline-block font-iransans">دسته بندی‌ها در</p>
        <p className="inline-block mr-2 font-iransans text-lg text-snp-primary">
          {category
            .filter((item) => item.main === categoryName)
            .map((item) => {
              return <>{item.mainFA}</>
            })}
        </p>
      </div>
      <div className="relative">
        <div className="pt-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide h-full">
          {category
            .filter((item) => item.parent === categoryName)
            .map((item) => {
              return (
                <Link href={`/categories/${item.main}`}>
                  <div className="rounded-full border border-snp-primary px-4 ml-3 h-[3rem] flex justify-center items-center  whitespace-nowrap">
                    <p className=" font-iransansl text-xl text-snp-primary ">
                      {item.mainFA}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
