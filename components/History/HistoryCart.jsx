import { efarsi } from "@/utils/efarsi";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";

export const HistoryCart = ({ details }) => {
  const { id, finalPrice, finalProfitPrice, status, items } = details;
  return (
    <div className="w-full border rounded py-2 mb-5">
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="flex items-center ">
          <MdOutlinePendingActions className=" text-snp-yellow" />
          <p className="mr-2 text-snp-black text-sm">{`${status} ...`}</p>
        </div>
        <BsArrowLeft className="text-snp-black" />
      </div>
      <div className="flex items-center px-3 py-3">
        <div className="flex items-center text-sm text-snp-black ml-4">
          <p className="text-gray-500 ml-1">کد سفارش</p>
          <p>{efarsi(id)}</p>
        </div>
        <div className="flex items-center text-sm text-snp-black ml-4">
          <p className="text-gray-500 ml-1">مبلغ</p>
          <p>{efarsi(finalPrice)}</p>
          <p className="text-xs mr-0.5">تومان</p>
        </div>
        {finalProfitPrice > 0 && (
          <div className="flex items-center text-sm text-snp-black">
            <p className="text-gray-500 ml-1">سود</p>
            <p>{efarsi(finalProfitPrice)}</p>
            <p className="text-xs mr-0.5">تومان</p>
          </div>
        )}
      </div>
      <div className="w-full h-[104px] flex items-center my-5 py-5 border-y justify-start overflow-x-auto scroll-smooth  scrollbar-hide ">
        {items.map((item) => {
          return (
            <div className=" w-24 h-full mx-2 relative">
              <Image
                className=""
                alt="buying item"
                src={item.images[0]}
                width={80}
                height={0}
              ></Image>
              <span className="w-4 h-4 absolute top-0 right-0 bg-snp-secondary text-snp-white text-sm flex justify-center items-center rounded-full pt-0.5">
                {efarsi(item.count)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
