export default function Loading() {
  return (
    <div className=" w-full flex my-8 py-8">
      <div className="pl-3 w-2/6 hidden laptop:flex ">
        <div className="w-full h-fit border rounded py-4 px-3 sticky top-[130px] animate-pulse">
          <div className="h-10 w-1/4 bg-snp-gray rounded mb-5"></div>
          <div className="h-6 w-5/6 bg-snp-gray rounded my-4"></div>
          <div className="h-6 w-5/6 bg-snp-gray rounded my-4"></div>
          <div className="h-6 w-5/6 bg-snp-gray rounded my-4"></div>
          <div className="h-6 w-5/6 bg-snp-gray rounded my-4"></div>
        </div>
      </div>
      <div className="w-full laptop:w-4/6 border rounded flex flex-col justify-center items-center px-5">
        <div className="w-16 h-16 rounded-full bg-snp-gray"></div>
        <div className="w-2/5 h-10 bg-snp-gray rounded my-3"></div>
        <div className="w-full h-7 bg-snp-gray rounded my-3"></div>
        <div className="w-full h-7 bg-snp-gray rounded my-3"></div>
      </div>
    </div>
  );
}
