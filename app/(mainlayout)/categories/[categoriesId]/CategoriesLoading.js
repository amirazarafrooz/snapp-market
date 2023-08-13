import Image from "next/image";
import snappLogo from "../../../../public/assets/images/snappmarket-logo.svg";

export default function CategoriesLoading() {
  return (
    <div className="w-full my-8">
      <div className=" w-full flex animate-pulse ">
        <div className="pl-3 w-1/4 hidden laptop:flex ">
          <div className="w-full h-fit border rounded py-4 px-3 sticky top-[130px] ">
            <div className="h-8 w-1/4 bg-snp-gray rounded mb-5"></div>
            <div className="h-4 w-3/4 bg-snp-gray rounded my-4"></div>
            <div className="h-4 w-3/4 bg-snp-gray rounded my-4"></div>
            <div className="h-4 w-3/4 bg-snp-gray rounded my-4"></div>
            <div className="h-4 w-3/4 bg-snp-gray rounded my-4"></div>
            <div className="h-4 w-3/4 bg-snp-gray rounded my-4"></div>
          </div>
        </div>
        <div className="w-full laptop:w-3/4 h-full">
          <div className="w-full  laptop:hidden my-10 p-6 border rounded mt-8">
            <div className="w-1/2 h-6 bg-snp-gray rounded my-4"></div>
            <div className="flex gap-3">
              <div className="w-20 h-8 bg-snp-gray rounded-lg"></div>
              <div className="w-20 h-8 bg-snp-gray rounded-lg"></div>
              <div className="w-20 h-8 bg-snp-gray rounded-lg"></div>
              <div className="w-20 h-8 bg-snp-gray rounded-lg"></div>
            </div>
          </div>
          <div className="w-full rounded border h-12 flex items-center justify-start px-3">
            <div className="bg-snp-gray h-4 w-10 mx-2 rounded"></div>
            <div className="bg-snp-gray h-4 w-10 mx-2 rounded"></div>
            <div className="bg-snp-gray h-4 w-10 mx-2 rounded"></div>
          </div>
          <div className="w-full h-[356px] rounded border grid grid-rows-1 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 my-8">
            <div className="hidden laptop:flex laptop:flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden tablet:flex tablet:flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[356px] rounded border grid grid-rows-1 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 my-8">
            <div className="hidden laptop:flex laptop:flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden tablet:flex tablet:flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 px-2 border">
              <div className="w-full h-1/2 flex justify-center items-center">
                <Image
                  src={snappLogo}
                  width={0}
                  height={0}
                  style={{ width: "50%", height: "50%" }}
                ></Image>
              </div>
              <div className="w-full h-1/2">
                <div className="w-3/4 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-1/2 h-4 bg-snp-gray rounded my-4"></div>
                <div className="w-full mt-auto flex items-center ">
                  <div className="w-1/2 mt-8">
                    <div className="w-5/6 h-4 bg-snp-gray mb-3 rounded"></div>
                    <div className="w-5/6 h-3 bg-snp-gray rounded"></div>
                    <div></div>
                  </div>
                  <div className="w-1/2 px-3 mt-8">
                    <div className="w-full h-6 rounded-full bg-snp-gray"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
