export const DiscountSwiper = () => {
  return (
    <section className="w-full flex items-center justify-center bg-blue-700 py-6 px-4 rounded-md">
      <div className="text-black text-right w-[55%] md:w-[35%] lg:w-[28%]">
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
          <div>
            <button className="text-white border border-white px-3 py-2 rounded text-sm mr-1">
              <p className=" font-iransansl">مشاهده همه محصولات</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[45%] md:w-[65%] lg:w-[72%]">
        <Swipper />
      </div>
    </section>
  );
};
