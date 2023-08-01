import { getLocalData } from "@/lib/localdata";
import { ProductImageCarousel } from "./ProductImageCarousel/ProductImageCarousel";
import { ProductDetails } from "./ProductDetails";

const data = await getLocalData();
const products = data.products;

export const ProductInfo = ({ productId }) => {
  return (
    <div className="w-full bg-snp-white border rounded my-8 pb-5 tablet:py-12">
      {products
        .filter((product) => product.id == productId)
        .map((item) => {
          return (
            <div key={item.id} className="">
              {/* <BreadCrumb/>  */}
              <div className="tablet:flex tablet:items-center tablet:justify-center w-full h-full">
                {/* <div className="w-full tablet:w-1/2 bg-black">1</div> */}
                <ProductImageCarousel images={item.images} />
                <ProductDetails
                  name={item.name}
                  category={item.category.sub}
                  brand={item.brand}
                  seller={item.seller}
                //   tags={item.tags}
                  price={item.price}
                  discount={item.discount}
                />
              </div>
              {/* <SameProducts /> */}
            </div>
          );
        })}
    </div>
  );
};
