import { ProductsDetailsButton } from "./ProductDetailsButton";

export const ProductDetails = ({ product }) => {
  const { name, category, brand, seller, tags, price, discount } = product;
  const Price = (price * (100 - discount)) / 100;
  const totalPrice = Price.toFixed(3);
  return (
    <div className="w-full tablet:w-1/2 px-4 mt-10 tablet:mt-0 tablet:px-12">
      <p className=" font-iransansb text-xl tracking-wide">{name}</p>
      <div className="flex items-center py-3 mt-2">
        <p className="font-iransans ml-2 text-sm">برند :</p>
        <p className=" font-iransansb text-sm text-snp-primary">{brand}</p>
      </div>
      <div className="flex items-center py-3">
        <p className="font-iransans ml-2 text-sm">دسته بندی‌‌‌‌ها :</p>
        <p className=" font-iransansb text-sm text-snp-primary">
          {category.sub}
        </p>
      </div>
      <div className="flex items-center py-3">
        <p className="font-iransans ml-2 text-sm">فروشنده :</p>
        <p className=" font-iransansb text-sm text-snp-primary">{seller}</p>
      </div>
      {/* <div className="p-2">
        {tags.map((item) => {
          return (
            <span className="font-iransans bg-gray-50 text-gray-500 text-xs p-2 rounded-full ml-2">
              {item}
            </span>
          );
        })}
      </div> */}
      <div className="hidden tablet:block">
        <div className="my-3 tablet:border-t tablet:border-black tablet:border-dashed tablet:h-[1px]"></div>
        <p className="font-iransans ml-2 text-sm mb-2">قیمت مصرف کننده :</p>
        <div className="h-11">
          {discount ? (
            <div className="flex items-center justify-end w-full mb-1 h-1/2">
              <div className=" line-through  text-gray-500 ml-2 font-iransans text-xl">
                {price} تومان
              </div>
              <div className=" bg-snp-highdiscount text-snp-white px-1 rounded-full font-iransans ">
                <div className="flex items-center h-fit">
                  <p>٪</p>
                  <p>{discount}</p>
                </div>
              </div>
            </div>
          ) : null}
          <div className="flex justify-end items-center gap-2 font-iransans text-2xl text-gray-500 h-1/2 my-auto">
            <p className="tracking-wide">{totalPrice}</p>
            <p>تومان</p>
          </div>
        </div>
        <div className="w-1/2 mr-auto mt-4">
          <ProductsDetailsButton product={product} />
        </div>
      </div>
    </div>
  );
};
