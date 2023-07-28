"use client";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

export const SwiperElement = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      grabCursor: true,
      navigation: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      injectStyles: [
        ` 
          .swiper-button-next,
          .swiper-button-prev {
            color:white;
            background-color: rgb(35, 71, 251);
            border-radius: 50%;
            box-shadow: rgba(56, 88, 241, 0.65) 0px 0.5rem 4rem 0.4rem;
            width: 2.25rem;
            height: 2.25rem;
          }
          .swiper-button-prev svg {
            height:16px;
          }
          .swiper-button-next svg {
            height:16px;
          }
          .swiper-button-disabled {
            opacity: 0 !important;
          }
          `,
      ],
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="w-[45%] md:w-[65%] lg:w-[72%]">
      <swiper-container ref={swiperElRef} autoHeight={true} init="false">
        {/* <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <div className="w-full h-full">
              <a href="#">
                <img
                  className="w-full"
                  src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                  alt=""
                />
                <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                  اسپری خوشبو کننده زنانه Remember Me سری We بیول
                </p>
                <p className="text-xs text-gray-500">۴ عدد</p>
              </a>
              <div className="flex w-full">
                <div className="mt-4 w-1/2">
                  <div className="flex items-center w-full">
                    <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                      ٪۲۰
                    </span>
                    <p className="line-through text-xs text-gray-400 mr-2">
                      ۱۰۰۰۰
                    </p>
                  </div>
                  <div className="flex items-center w-full">
                    <p className="text-black">۷۳٬۰۰۰</p>
                    <p className="text-gray-500 mr-1 text-sm">تومان</p>
                  </div>
                </div>
                <div className="w-1/2 mx-auto h-full mt-auto">
                  <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                    افزودن به سبد
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="bg-white rounded-md overflow-hidden px-4 py-3 w-56 h-full">
            <a href="#">
              <img
                className="w-full"
                src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230327-282592-20000.png"
                alt=""
              />
              <p className="text-black mt-2 text-sm min-h-[3.5rem]">
                اسپری خوشبو کننده زنانه Remember Me سری We بیول
              </p>
              <p className="text-xs text-gray-500">۴ عدد</p>
            </a>
            <div className="flex w-full">
              <div className="mt-4 w-1/2">
                <div className="flex items-center w-full">
                  <span className=" bg-red-600 text-white text-sm px-1 py-0.5 rounded-md">
                    ٪۲۰
                  </span>
                  <p className="line-through text-xs text-gray-400 mr-2">
                    ۱۰۰۰۰
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="text-black">۷۳٬۰۰۰</p>
                  <p className="text-gray-500 mr-1 text-sm">تومان</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-full mt-auto">
                <button className="w-full text-xs font-bolder tracking-wide text-blue-600 border border-blue-400 hover:bg-blue-600 hover:text-white hover:border-none rounded-full p-2">
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </swiper-slide> */}

        <swiper-slide>
          <div className="bg-white text-black w-48 h-[360px] rounded ">
            <div className="w-full h-full flex items-center justify-center">
              <a href="#">لینک های بیشتر</a>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
