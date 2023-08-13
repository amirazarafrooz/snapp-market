import Button from "../../common/button/Button";
import Link from "next/link";

export const DiscountTittle = () => {
  return (
    <div className="text-black text-right w-[50%] md:w-[35%] lg:w-[30%]">
      <div className="px-2">
        <span className="bg-red-600 text-white py-1 px-2.5 rounded font-iransans">
          تخفیف تا ۵۰٪
        </span>
        <div className="text-2xl text-white my-3">
          <p className=" font-iransans">حراج اول ماه</p>
        </div>
        <div className="text-xl text-orange-300 my-3">
          <p className=" font-iransansb">برای کل ماهت، به صرفه خرید کن!</p>
        </div>
        <div className="w-full">
          <Button btnStyleparam={"allProduct"}>
            <Link href={"/campaigns/discount"}>مشاهده همه محصولات</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
