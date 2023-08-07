import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";

export const HistoryCart = ({ details }) => {
  const { id, finalPrice, finalProfitPrice, status, items } = details;
  return (
    <div className="w-[95%] mx-auto  border rounded py-2 mb-5">
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="flex items-center ">
          <MdOutlinePendingActions className=" text-snp-yellow"/>
          <p className="mr-2 text-snp-black text-sm">{`${status} ...`}</p>
        </div>
        <BsArrowLeft className="text-snp-black" />
      </div>
      <div className="flex items-center px-3 py-3">
        <div className="flex items-center text-sm text-snp-black ml-4">
          <p className="text-gray-500 ml-1">کد سفارش</p>
          <p>{id}</p>
        </div>
        <div className="flex items-center text-sm text-snp-black ml-4">
          <p className="text-gray-500 ml-1">مبلغ</p>
          <p>{finalPrice}</p>
          <p className="text-xs mr-0.5">تومان</p>
        </div>
        {finalProfitPrice != 0 && (
          <div className="flex items-center text-sm text-snp-black">
            <p className="text-gray-500 ml-1">سود</p>
            <p>{finalProfitPrice}</p>
            <p className="text-xs mr-0.5">تومان</p>
          </div>
        )}
      </div>
      <div className="flex items-center my-5 py-5 border-y ">
        {items.map((item) => {
          return (
            <div className="mx-2">
              <Image src={item.images[0]} width={100} height={100}></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
};