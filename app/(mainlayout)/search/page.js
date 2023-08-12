import { getLocalData } from "@/lib/localdata";
import delay from "@/utils/delay";
import dynamic from "next/dynamic";
import SubProductsLoading from "../subcategories/[subcategoriesId]/SubProductsLoading";

const SearchPage = dynamic(
  async () => await delay(import("@/components/Search/SearchPage")),
  {
    loading: () => <SubProductsLoading />,
  }
);

const data = await getLocalData();
const products = data.products;

export default function SearchDetails() {
  return (
    <main className="bg-snp-bg-body w-full  flex justify-center">
      <div className="mx-auto w-full mobile:w-[466px] tablet:w-[690px] laptop:w-[914px] desktop:w-[1138px] ">
        <SearchPage products={products} />
      </div>
    </main>
  );
}
