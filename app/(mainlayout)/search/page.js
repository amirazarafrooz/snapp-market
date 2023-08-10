import { SearchPage } from "@/components/Search/SearchPage";
import { getLocalData } from "@/lib/localdata";

const data = await getLocalData();
const products = data.products;

export default function SearchDetails() {
  return (
    <main className="bg-snp-bg-body w-full  flex justify-center">
      <div className="mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300 ">
        <SearchPage products={products} />
      </div>
    </main>
  );
}
