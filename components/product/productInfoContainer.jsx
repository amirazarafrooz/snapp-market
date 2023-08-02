import Breadcrumbs from "./Breadcrumbs";

const ProductInfoContainer = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center w-full h-screen font-iransans">
        <div className=" bg-white container w-11/12 h-[6%] py-3 pr-4 border border-solid border-gray-300 border-opacity-80 rounded mt-8 lg:h-[60px] md:pt-4">
      <Breadcrumbs/>
      </div>
      <div className=" bg-white w-11/12 h-full border border-solid border-gray-300 border-opacity-80 rounded p-5 mt-8 md:flex">
        <div className=" w-full h-[50%] flex justify-center items-center md:w-1/2 md:h-1/2 lg:h-1.2">
          <img
            className=" h-full w-full border border-solid border-gray-200  "
            src="https://soroush.app/images/thumbs/003/0030990_-1-_550.jpeg"
            alt="شیر روزانه"
          />
        </div>
        <div className="  h-1/2 w-full px-4 pt-12 md:w-1/2 md:h-full md:pt-0 lg:px-14 lg:mt-5">
          <div className="md:pb-6 md:px-4" >
          <div className=" flex flex-wrap gap-6">
      <div className=" w-full">
        <h1 className=" text-xl font-bold "> 
        {"شیر کم چرب مدت دار روزانه ۱ لیتری"}
         </h1>
      </div>
      <div className=" w-full text-sm">
        <span className=" font-semibold">برند : </span>
        <span className=" text-blue-500 text-opacity-80 font-semibold cursor-pointer">
        {"روزانه"}
        </span>
      </div>
      <div className=" w-full text-sm">
        <span className=" font-semibold">دسته بندی ها : </span>
        <span className=" text-blue-500 text-opacity-80 font-semibold cursor-pointer">
        {"لبنیات"}
        </span>
      </div>
      <div className=" w-full text-sm">
        <span className=" font-semibold">فروشنده :</span>
        <span className=" text-blue-500 text-opacity-80 font-semibold ">
        {" هایپر استار"}
        </span>
      </div>
    </div>
            <div className=" pt-4 pr-2 flex gap-4 text-gray-500 text-[12px] lg:mt-2">
              <span className="cursor-pointer bg-gray-100 p-1 rounded">
                {" "}
                ساده{" "}
              </span>{" "}
              <span className="cursor-pointer  bg-gray-100 p-1 rounded">
                کم چرب
              </span>
            </div>
          </div>
          <div className="   pt-5 border-t border-dashed border-gray-500 hidden md:flex">
            <div className=" text-sm w-1/2 font-medium">
              قیمت مصرف کننده :
            </div>
            <div className="w-1/2 flex flex-wrap justify-end ">
              <div>
                <span className=" pl-2 line-through text-gray-500 font-bold">۳۸,۰۰۰ تومان</span>
                <span className=" bg-red-600 text-white py-[0.7] px-2 rounded-xl text-[15px] font-bold">۲۵%</span>
              </div>
              <span className="flex justify-end w-full pl-2 text-gray-500 font-bold text-[24px] ">۲۸,۰۰۰ تومان</span>
              <button className=" bg-blue-500 w-full h-[40%] text-white rounded-xl font-medium mt-3">افزودن به سبد </button>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className=" pt-5 border-t border-solid bg-white border-gray-20 fixed bottom-0 left-0 w-full md:hidden ">
            <div className=" flex px-5 ">
              <div className=" pb-4">
                <div className=" flex gap-1">
                <span className=" bg-red-600 text-white px-1.5 rounded-[5px] text-[16px] font-normal -mt-1">۲۵%</span>
                <span className=" pl-2 line-through text-gray-400 text-[12px] font-normal">۳۸,۰۰۰ تومان</span>
                </div>
                <div className=" flex" >
                <span className=" w-full text-gray-700 font-normal text-[18px] ">۲۸,۰۰۰</span>
                <span className=" w-full  text-gray-400  text-[12px] ml-3 mt-1.5"> تومان</span>
                </div>
              </div>
              <div className=" fixed left-7 -mt-2">
              <button className=" bg-blue-500 w-full h-[40px] text-white rounded-[20px] font-medium  text-[14px] mt-3 m-3">افزودن به سبد </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default ProductInfoContainer