import Image from "next/image";
import Button from "./button/Button";

export const ShoppingItem = ({ details , handleDecrement , handleAdd }) => {
  const { images, name, discount, price, count } = details;
  const Price = (price * (100 - discount)) / 100;
  const prodPrice = Price.toFixed(3);
  return (
    <div className="w-full h-full flex py-3 border-b border-b-gray-50 hover:border-b-gray-200">
      <div className=" w-28 h-full">
        <Image alt="shopicon-image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          src={images[0]}
        ></Image>
      </div>
      <div className="w-full h-full">
        <p className="text-sm tracking-tight">{name}</p>
        <div className="flex justify-between items-center mt-5">
          <div>
            {discount ? (
              <div className="flex items-center w-full mb-1">
                <div className=" bg-snp-highdiscount text-snp-white px-1 rounded-md font-iransans text-sm">
                  <div className="flex items-center">
                    <p>{discount}</p>
                    <p>٪</p>
                  </div>
                </div>
                <p className="line-through text-xs text-gray-700 mr-2">
                  {price}
                </p>
              </div>
            ) : null}
            <div className="w-full mt-auto">
              <div className="flex items-center">
                <p className="text-snp-black font-iransans text-md">{prodPrice}</p>
                <p className=" text-gray-700 mr-1 text-sm font-iransansl">
                  تومان
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  h-full mt-auto py-3 px-6">
            {count == 1 ? (
              <Button btnStyleparam={"bin_addtoCartR"} onClick={handleDecrement}></Button>
            ) : (
              <Button btnStyleparam={"minus_addtoCartR"} onClick={handleDecrement}></Button>
            )}

            <p className="mx-3 text-snp-primaryh font-iransansb text-lg">
              {count}
            </p>
            <Button btnStyleparam={"plus_addtoCartR"} onClick={handleAdd}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
