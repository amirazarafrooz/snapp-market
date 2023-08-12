import Image from "next/image";
import snappLogo from "../../../../public/assets/images/snappmarket-logo.svg";
export default function Loading() {
  return (
    <div className=" w-full  my-8">
      <div className="w-full animate-pulse">
        <div className="w-full border rounded h-3/4">
          <div className="w-full h-12 flex items-center justify-start px-3">
            <div className="bg-snp-gray h-5 w-1/2 rounded"></div>
          </div>
          <div className="w-full h-3/4 p-10 tablet:flex items-center gap-2">
            <div className="w-full tablet:w-1/2 h-96 flex justify-center items-center border rounded">
              <Image
                src={snappLogo}
                width={0}
                height={0}
                style={{ width: "50%", height: "50%" }}
              ></Image>
            </div>
            <div className="w-full tablet:w-1/2 h-full rounded p-4">
              <div className="h-5 w-4/6 bg-snp-gray rounded mb-5"></div>
              <div className="h-4 w-3/6 bg-snp-gray rounded my-6"></div>
              <div className="h-4 w-2/6 bg-snp-gray rounded my-6"></div>
              <div className="h-7 w-5/6 bg-snp-gray rounded mt-10"></div>
              <div className="w-1/2 px-5 mt-8 mr-auto">
                <div className="h-6 w-1/2 bg-snp-gray rounded my-4 mr-auto"></div>
                <div className="h-6 w-1/2 bg-snp-gray rounded my-4 mr-auto"></div>
                <div className="w-full  mt-8 mr-auto">
                  <div className="w-full h-10 rounded-full bg-snp-gray"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[356px] overflow-x-auto rounded border grid grid-rows-1 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 my-8">
          <div className="hidden laptop:flex flex-col justify-center items-center bg-gray-100 px-2 border">
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
          <div className="hidden tablet:flex flex-col justify-center items-center bg-gray-100 px-2 border ">
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
  );
}
