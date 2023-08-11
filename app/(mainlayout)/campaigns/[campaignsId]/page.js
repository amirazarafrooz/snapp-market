import Image from "next/image";
import { getLocalData } from "../../../../lib/localdata";
import { BreadCrumb } from "@/components/BreadCrumbs";
import { SubCategoryPageMain } from "@/components/Category/SubCategoryPageMain";

const data = await getLocalData();
const product = data.products;

export default function CampaignsDetail({ params }) {
  const filterProducts = product.filter(
    (item) => item.campaignType == params.campaignsId
  );
  const brandfilter =
    params.campaignsId == "sunich"
      ? "سن ایچ"
      : params.campaignsId == "Hype"
      ? "لایف"
      : false;
  const filterProductsBrands = product.filter(
    (item) => item.brand == brandfilter
  );
  const subCategory =
    params.campaignsId == "date"
      ? "خرما"
      : params.campaignsId == "freezed"
      ? "فرآورده های منجمد یخچالی"
      : params.campaignsId == "Laundry"
      ? "شستشوی لباس"
      : false;
  const filterProductsSubcategory = product.filter(
    (item) => item.category.sub == subCategory
  );

  let breadcrumbCategory;
  switch (params.campaignsId) {
    case "discount":
      breadcrumbCategory = "تخفیف ویژه";
      break;
    case "sunich":
      breadcrumbCategory = "سن ایچ";
      break;
    case "Hype":
      breadcrumbCategory = "لایف";
      break;
    case "date":
      breadcrumbCategory = "خرما";
      break;
    case "freezed":
      breadcrumbCategory = "فرآورده های منجمد یخچالی";
      break;
    case "Laundry":
      breadcrumbCategory = "شستشوی لباس";
      break;
    default:
      breadcrumbCategory=''
      break;
  }

  return (
    <main className="bg-snp-bg-body w-full  flex justify-center">
      <div className="mx-auto w-full mobile:w-144 tablet:w-192  laptop:w-248 desktop:w-300">
        <div className="mt-8 bg-snp-white border rounded py-1 px-4">
          <BreadCrumb
            category={breadcrumbCategory}
          />
        </div>
        {params.campaignsId == "discount" && (
          <SubCategoryPageMain products={filterProducts} />
        )}
        {brandfilter && <SubCategoryPageMain products={filterProductsBrands} />}
        {subCategory && (
          <SubCategoryPageMain products={filterProductsSubcategory} />
        )}
      </div>
    </main>
  );
}
