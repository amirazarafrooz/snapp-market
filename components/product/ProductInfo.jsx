const ProductInfo = ({ name, brand, category, seller, price }) => {
  return (
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
  );
};

export default ProductInfo;
