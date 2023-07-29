export const ProductItemCard = ({ image, name, quantity, discount, price }) => {
  return (
    <div className="bg-snp-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
      <a href="#">
        <img
          className="w-full"
          src="https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608e672b98ed8.jpg"
          alt=""
        />
        <p className="text-snp-black mt-2 text-sm min-h-[3.5rem] font-iransansl ">
          اسپری خوشبو کننده زنانه Remember Me سری We بیول
        </p>
        <p className="text-xs text-gray-600 font-iransansl">۴ عدد</p>
      </a>
      <div className="flex w-full">
        <div className="mt-4 w-1/2">
          <div className="flex items-center w-full">
            <span className=" bg-snp-highdiscount text-snp-white text-md px-1 py-0.5 rounded-md font-iransansb">
              ٪۲۰
            </span>
            <p className=" line-through text-xs text-snp-gray mr-2">۱۰۰۰۰</p>
          </div>
          <div className="flex items-center w-full">
            <p className="text-snp-black font-iransans">۷۳٬۰۰۰</p>
            <p className=" text-gray-600 mr-1 text-xs font-iransansl">تومان</p>
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
