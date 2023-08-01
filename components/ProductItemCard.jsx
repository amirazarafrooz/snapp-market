import clsx from "clsx";
import Image from "next/image";
import Button from "./button/Button";
import Link from "next/link";

export const ProductItemCard = ({
  id,
  images,
  name,
  quantity,
  discount,
  price,
  cartClassName,
  imageClass
}) => {
  const Price = (price * (100 - discount)) / 100;
  const prodPrice = Price.toFixed(3);

  return (
    <div
      className={clsx(
        "bg-snp-white overflow-hidden px-3.5 py-2 w-56 h-[356px]  group",
        cartClassName
      )}
    >
      <Link href={`/products/${id}`} className=" transition-all duration-300">
        <Image
        className={`group-hover:${imageClass}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={images[0]}
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
                  <p>{discount}</p>
                  <p>٪</p>
                </div>
              </div>
              <p className=" line-through text-xs text-snp-gray mr-2">
                {price}
              </p>
            </div>
          ) : null}
          <div className="w-full mt-auto">
            <div className="flex items-center">
              <p className="text-snp-black font-iransans text-md">
                {prodPrice}
              </p>
              <p className=" text-gray-600 mr-2 text-xs font-iransansl">
                تومان
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-auto">
          <Button btnStyleparam={"addtoCartR"}>افزودن به سبد</Button>
          {/* <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
            افزودن به سبد
          </button> */}
        </div>
      </div>
    </div>
  );
};
