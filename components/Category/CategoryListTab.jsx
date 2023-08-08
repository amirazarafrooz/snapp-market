import { getLocalData } from "@/lib/localdata";
import Link from "next/link";

const data = await getLocalData();
const subCategory = data.subcategories;

export const CategoryListTab = ({ categoryName }) => {
  const filterCategoryTitle = subCategory.filter(
    (sub) => sub.parent === categoryName
  )[0].parentFA;
  const filterSubCategory = subCategory.filter(
    (cat) => cat.parent === categoryName
  );
  return (
    <div className=" laptop:hidden my-10 p-4 border rounded mt-8">
      <div className="border-b pb-4">
        <p className="inline-block font-iransans">دسته بندی‌ها در</p>
        <p className="inline-block mr-2 font-iransans text-lg text-snp-primary">
          {filterCategoryTitle}
        </p>
      </div>
      <div className="relative">
        <div className="pt-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide h-full">
          {filterSubCategory.map((sub) => {
            return (
              <Link href={`/subcategories/${sub.main}`}>
                <div className="rounded-full border border-snp-primary px-4 ml-3 h-[3rem] flex justify-center items-center  whitespace-nowrap">
                  <p className=" font-iransansl text-xl text-snp-primary ">
                    {sub.mainFA}
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
