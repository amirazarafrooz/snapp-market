import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ProductItemCardButton } from "./ProductItemCardButton";
import { useMemo } from "react";
import { itemCalculatePrice } from "@/utils/itemCalculatePrice";
import { efarsi } from "@/utils/efarsi";

const ProductItemCard = ({ product, cartClassName, imageClass }) => {
  const { id, images, name, quantity, discount, price } = product;
  const prodPrice = useMemo(() => itemCalculatePrice(price, discount));
  const lazyImg = "data:image/png;base64,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"
  return (
    <div
      className={clsx(
        "bg-snp-white overflow-hidden px-3.5 py-2 w-56 h-[356px]  group transition-all duration-400 ",
        cartClassName
      )}
    >
      <Link href={`/products/${id}`} className=" transition-all duration-300">
        <Image
          alt="product-image"
          className={`group-hover:${imageClass}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={images[0]}
          loading="lazy"
          placeholder="blur"
          blurDataURL={lazyImg}
        ></Image>
        <p className="text-snp-black mt-2 text-sm min-h-[3.5rem] font-iransansl ">
          {name}
        </p>
        <p className="text-xs text-gray-400 font-iransansl">{quantity}</p>
      </Link>
      <div className="flex w-full h-[53px] mt-2">
        <div className="w-1/2 mt-auto">
          {discount ? (
            <div className="flex items-center w-full mb-1">
              <div className=" bg-snp-highdiscount text-snp-white px-1 rounded-md font-iransans ">
                <div className="flex items-center">
                  <p>{efarsi(discount)}</p>
                  <p>٪</p>
                </div>
              </div>
              <p className=" line-through text-xs font-iransans text-snp-gray mr-2">
                {efarsi(price)}
              </p>
            </div>
          ) : null}
          <div className="w-full mt-auto">
            <div className="flex items-center">
              <p className="text-snp-black font-iransans text-md">
                {prodPrice}
              </p>
              <p className=" text-gray-600 mr-0.5 text-xs font-iransansl">
                تومان
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-auto">
          <ProductItemCardButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
