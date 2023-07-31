import Link from "next/link";

export const CategoryListTab = () => {
  return (
    <div className=" laptop:hidden my-10 p-4 border rounded">
      <div className="border-b pb-4">
        <p className="inline-block font-iransans">دسته بندی‌ها در</p>
        <p className="inline-block mr-2 font-iransans text-lg text-snp-primary">
          لبنیات
        </p>
      </div>
      <div className="relative">
        <div className="pt-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide h-full">
          <Link href={"/"}>
            <div className="rounded-full border border-snp-primary px-4 ml-3 h-[3rem] flex justify-center items-center ">
              <p className=" font-iransansl text-xl text-snp-primary ">نوشابه</p>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="rounded-full border border-snp-primary px-4 ml-3 h-[3rem] flex justify-center items-center w-fit">
              <p className=" font-iransansl text-xl text-snp-primary">
                چای و دمنوش
              </p>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="rounded-full border border-snp-primary px-4 ml-3 h-[3rem] flex justify-center items-center text-justify w-fit">
              <p className=" font-iransansl text-xl text-snp-primary w-full">
                {" "}
                نوشابه و چای و دمنوش
              </p>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="rounded-full border border-snp-primary px-4 ml-3 h-[3rem] flex justify-center items-center text-justify w-fit">
              <p className=" font-iransansl text-xl text-snp-primary w-full">
                {" "}
                نوشابه و چای و دمنوش
              </p>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="rounded-full border border-snp-primary px-4 ml-3 h-[3rem] flex justify-center items-center text-justify w-fit">
              <p className=" font-iransansl text-xl text-snp-primary w-full">
                {" "}
                نوشابه و چای و دمنوش
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
