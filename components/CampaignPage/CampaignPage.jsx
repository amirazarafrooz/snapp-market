import { BreadCrumb } from "@/components/common/BreadCrumbs";
import { SubCategoryPageMain } from "@/components/Category/SubCategoryPageMain";

const CampaignPage = ({ campaignsId, product }) => {
  const filterProducts = product.filter(
    (item) => item.campaignType == campaignsId
  );
  const brandfilter =
    campaignsId == "sunich" ? "سن ایچ" : campaignsId == "Hype" ? "لایف" : false;
  const filterProductsBrands = product.filter(
    (item) => item.brand == brandfilter
  );
  const subCategory =
    campaignsId == "date"
      ? "خرما"
      : campaignsId == "freezed"
      ? "فرآورده های منجمد یخچالی"
      : campaignsId == "Laundry"
      ? "شستشوی لباس"
      : false;
  const filterProductsSubcategory = product.filter(
    (item) => item.category.sub == subCategory
  );

  let breadcrumbCategory;
  switch (campaignsId) {
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
      breadcrumbCategory = "";
      break;
  }
  return (
    <div className="w-full px-2">
      <div className="mt-8 bg-snp-white border rounded py-1 px-4">
        <BreadCrumb category={breadcrumbCategory} />
      </div>
      {campaignsId == "discount" && (
        <SubCategoryPageMain products={filterProducts} />
      )}
      {brandfilter && <SubCategoryPageMain products={filterProductsBrands} />}
      {subCategory && (
        <SubCategoryPageMain products={filterProductsSubcategory} />
      )}
    </div>
  );
};

export default CampaignPage;
