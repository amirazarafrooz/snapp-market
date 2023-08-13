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
  let productArrayCount;
  switch (campaignsId) {
    case "discount":
      breadcrumbCategory = "تخفیف ویژه";
   productArrayCount=filterProducts.length;
      break;
    case "sunich":
      breadcrumbCategory = "سن ایچ";
      productArrayCount=filterProductsBrands.length;
      break;
    case "Hype":
      breadcrumbCategory = "لایف";
      productArrayCount=filterProductsBrands.length;
      break;
    case "date":
      breadcrumbCategory = "خرما";
      productArrayCount=filterProductsSubcategory.length;
      break;
    case "freezed":
      breadcrumbCategory = "فرآورده های منجمد یخچالی";
      productArrayCount=filterProductsSubcategory.length;
      break;
    case "Laundry":
      breadcrumbCategory = "شستشوی لباس";
      productArrayCount=filterProductsSubcategory.length;
      break;
    default:
      breadcrumbCategory = "";
      productArrayCount=0;
      break;
  }
  return (
    <div className="w-full px-2">
      <div className="mt-8 bg-snp-white border rounded py-1 px-4">
        <BreadCrumb category={breadcrumbCategory} productsAmount={productArrayCount} />
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
