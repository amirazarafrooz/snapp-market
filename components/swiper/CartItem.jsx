export const cartItem = ({ image, name, quantity, discount, price }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
      <a href="#">
        <img
          className="w-full"
          src="https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20230513-338327-1.jpg"
          alt=""
        />
        <p className="text-black mt-2 text-sm min-h-[3.5rem] font-iransans">
          اسپری خوشبو کننده زنانه Remember Me سری We بیول
        </p>
        <p className="text-xs text-gray-500 font-iransansl">۴ عدد</p>
      </a>
      <div className="flex w-full">
        <div className="mt-4 w-1/2">
          <div className="flex items-center w-full">
            <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md font-iransans">
              ٪۲۰
            </span>
            <p className=" line-through text-xs text-gray-400 mr-2 font-iransansl">
              ۱۰۰۰۰
            </p>
          </div>
          <div className="flex items-center w-full">
            <p className="text-black font-iransans">۷۳٬۰۰۰</p>
            <p className="text-gray-500 mr-1 text-sm font-iransans">تومان</p>
          </div>
        </div>
        <div className="w-1/2 mx-auto h-full mt-auto">
          <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
};
