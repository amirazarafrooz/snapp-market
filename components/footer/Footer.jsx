import React from "react";
import appBazzar from "../../public/assets/images/bazzar-app.png";
import enamad from '../../public/assets/images/eNamad.png'
import samandehi from '../../public/assets/images/samandehi.png'
import kasbokar from '../../public/assets/images/KasbokarMajazi.png'
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center font-iransans mt-6 mb-20">
      {/* upper section */}
      <div className="flex flex-col  justify-center tablet:w-192 laptop:w-248 gap-x-4 desktop:w-300 laptop:justify-between ">
        {/* privilege cards */}
        <div className="flex flex-col justify-center items-center leading-7  px-2 py-6 tablet:flex-nowrap tablet:justify-center mobile:flex-col mobile:w-144 tablet:flex-row  tablet:w-192  laptop:w-248   desktop:w-300  ">
            <div className="flex  w-full mobile:w-full tablet:w-1/2  desktop:justify-evenly ">
          <div className="flex  flex-col justify-center items-center h-40  mobile:flex-row tablet:flex-col tablet:justify-center tablet:items-center tablet:w-44 tablet:px2 laptop:w-56 ">
       <div className="w-16 h-16 flex justify-center items-center border-gray-100 border-solid border-2 rounded-md mobile:w-20 mobile:h-16 mobile:ml-3 tablet:w-16 tablet:h-20 laptop:w-16 laptop:h-16">  
       <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="41.417"
      height="37.039"
      fill="currentColor"
      viewBox="0 0 41.417 37.039"
      style={{ width: 30, height: 30 }}
    >
      <defs>
        <symbol id="SaleIcon" viewBox="0 0 41.417 37.039">
          <path
            fill="#2446f5"
            d="M38.666 6.429h-1.619v-2.9A3.529 3.529 0 0033.525.007L21.235 0a2.6 2.6 0 00-1.852.767L1.032 19.116a3.525 3.525 0 000 4.985L12.94 36.008a3.529 3.529 0 004.985 0l11.552-11.552a.809.809 0 00-1.144-1.144L16.781 34.864a1.909 1.909 0 01-2.7 0L2.176 22.957a1.907 1.907 0 010-2.7L20.525 1.911a1 1 0 01.708-.294l12.29.007a1.909 1.909 0 011.906 1.908v6.778h-3.646a1.129 1.129 0 01-.8-.335 2.986 2.986 0 10-1.766.183 2.755 2.755 0 002.569 1.77h3.643v3.878a.993.993 0 01-.294.708l-2.221 2.221a.809.809 0 001.144 1.144l2.221-2.221a2.6 2.6 0 00.767-1.851v-3.879h1.623a2.75 2.75 0 000-5.5zm-9.828-.155a1.359 1.359 0 012.14.276 2.761 2.761 0 00-1.841 1.878 1.36 1.36 0 01-.3-2.154zm9.828 4.038h-1.621V8.047h1.62a1.132 1.132 0 110 2.265zm0 0"
          ></path>
          <path
            fill="#2446f5"
            d="M13.057 20.41a.808.808 0 001 .562l8.3-2.311a.809.809 0 10-.434-1.558l-8.3 2.311a.809.809 0 00-.566.996zm3.655 1.066a2.385 2.385 0 103.373 0 2.369 2.369 0 00-3.373 0zm2.229 2.229a.767.767 0 110-1.085.768.768 0 010 1.081zm1.542-7.041a2.388 2.388 0 10-1.687.7 2.388 2.388 0 001.687-.7zm-2.229-2.229a.767.767 0 110 1.085.762.762 0 01.003-1.088zm0 0"
          ></path>
          <path
            fill="#01af44"
            d="M8.045 18.735a.809.809 0 00-1.144 0l-2.3 2.3a.809.809 0 000 1.144L14.86 32.435a.809.809 0 001.144 0l15.337-15.334a.809.809 0 000-1.144L21.083 5.699a.809.809 0 00-1.144 0l-8.462 8.462a.809.809 0 001.144 1.144l7.89-7.89 9.114 9.114-14.193 14.193-9.114-9.114 1.727-1.727a.809.809 0 000-1.146zm0 0"
          ></path>
          <path
            fill="#2446f5"
            d="M31.193 20.787a.809.809 0 10.572.237.815.815 0 00-.572-.237zm0 0"
          ></path>
          <path
            fill="#00cc4f"
            d="M10.333 17.591a.808.808 0 10-.572.237.81.81 0 00.572-.237zm0 0"
          ></path>
        </symbol>
      </defs>
      <use fill="#757575" href="#SaleIcon" xlinkHref="#SaleIcon"></use>
        </svg>


            </div>
            <div className="flex flex-col justify-center items-center text-center mobile:text-right mobile:items-start tablet:items-center tablet:text-center ">
              <span className="mt-2 mobile:text-sm tablet:text-base">تخفیف بیشتر محصولات</span>
              <span className="mt-2 text-sm mobile:text-xs tablet:leading-8 text-gray-500">کالاها با قیمت کمتر از درج شده ارسال می‌شود</span>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center h-40  mobile:flex-row tablet:flex-col tablet:justify-center tablet:items-center tablet:w-44 tablet:px2 laptop:w-56 " >
          <div className="w-16 h-16 flex justify-center items-center border-gray-100 border-solid border-2 rounded-md mobile:w-20 mobile:h-16 mobile:ml-3 tablet:w-16 tablet:h-20 laptop:w-16 laptop:h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="44.139"
              height="32.046"
              fill="currentColor"
              viewBox="0 0 44.139 32.046"
              style={{ width: 30, height: 30 }}
            >
              <defs>
                <symbol id="TruckIcon" viewBox="0 0 44.139 32.046">
                  <path
                    fill="#2446f5"
                    d="M35.791 10.245h-2.76l.832-9.548V.646a.642.642 0 00-.387-.588h-.006l-.044-.016-.016-.006-.037-.01-.026-.006-.033-.005H20.08a.642.642 0 100 1.284h12.442l-1.278 14.659-.322 3.7H8.607l.373-3.853h4.249a.642.642 0 100-1.284H9.1l.788-8.134h6.762a.642.642 0 100-1.284h-6.633l.371-3.824h7.123a.642.642 0 100-1.284H9.8a.642.642 0 00-.627.507v.006c0 .016-.005.032-.008.049s0 .01 0 .015L8.726 5.1H.942a.642.642 0 100 1.284H8.6l-.788 8.134H5.523a.642.642 0 100 1.284H7.69l-.429 4.429-.661 6.858v.127c0 .006 0 .033.008.049s0 .01 0 .014l.009.036c.003.012 0 .017.007.025v.007a.642.642 0 00.153.251l.021.02a.636.636 0 00.149.1l.034.016h.011l.049.018.058.015h.008c.019 0 .037.007.057.008H10.1a4.888 4.888 0 009.692 0h10.3a4.888 4.888 0 009.692 0h2.935l.05-.008h.021l.038-.01.025-.008.031-.012.026-.011.028-.014.026-.014.026-.016.024-.016.026-.019.021-.017.026-.023.018-.017.026-.028.014-.016.027-.036.009-.012.029-.048a.56.56 0 00.027-.055l.006-.016.015-.04c.005-.013 0-.018.007-.027s.006-.021.008-.032 0-.02.005-.029 0-.017 0-.026c.027-.218.53-4.253.755-6.861v-.008c.065-.752.106-1.385.106-1.773a8.358 8.358 0 00-8.348-8.338zm-2.872 1.288h2.627l-.336 3.85h-2.627zM14.942 30.761a3.605 3.605 0 113.605-3.605 3.609 3.609 0 01-3.605 3.605zm19.992 0a3.605 3.605 0 113.605-3.605 3.609 3.609 0 01-3.605 3.605zm7.138-4.248H39.78a4.888 4.888 0 00-9.692 0h-10.3a4.888 4.888 0 00-9.692 0H7.943l.539-5.566h23.029a.631.631 0 00.064 0h.012l.05-.008.021-.005.038-.01.025-.009.032-.012.026-.012.028-.014.026-.015.026-.016.024-.017.025-.019.022-.018.024-.022.019-.019.023-.025.017-.02.021-.027.015-.021.018-.03.013-.023.015-.031.011-.025c0-.01.008-.02.011-.031s.007-.018.009-.028l.008-.03.007-.031c.002-.011 0-.02 0-.031v-.032l.322-3.695h3.327c1.968 0 2.855 1.019 3.794 2.1a5.27 5.27 0 003.116 2.121 261.467 261.467 0 01-.628 5.622zm.734-6.908a4.2 4.2 0 01-2.253-1.683 6.031 6.031 0 00-4.057-2.5l.332-3.814a7.074 7.074 0 016.026 6.987c.001.238-.017.589-.048 1.01z"
                  ></path>
                  <path
                    fill="#07bc20"
                    d="M14.943 24.801a2.355 2.355 0 102.355 2.355 2.357 2.357 0 00-2.355-2.355zm0 3.425a1.07 1.07 0 111.07-1.07 1.071 1.071 0 01-1.07 1.07zm19.991-3.425a2.355 2.355 0 102.355 2.355 2.357 2.357 0 00-2.355-2.355zm0 3.425a1.07 1.07 0 111.07-1.07 1.072 1.072 0 01-1.07 1.07z"
                  ></path>
                  <path
                    fill="#2446f5"
                    d="M6.38 10.246H3.24a.642.642 0 100 1.284h3.139a.642.642 0 100-1.284z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#07bc20"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                    d="M16.8 5.65H.8m6 5.1h-4m11 4.45h-9"
                  ></path>
                </symbol>
              </defs>
              <use
                fill="#757575"
                href="#TruckIcon"
                xlinkHref="#TruckIcon"
              ></use>
            </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center mobile:text-right mobile:items-start tablet:items-center tablet:text-center">
              <span className="mt-2 mobile:text-sm tablet:text-base">ارسال به موقع سفارش‌ها</span>
              <span className="mt-2 mobile:text-xs text-sm  tablet:leading-8 text-gray-500">سفارشات شما در زمان مقرر ارسال می‌شود</span>
            </div>
          </div>
          </div>
          <div className="flex tablet:w-1/2  desktop:justify-evenly gap-4 ">
          <div className="flex  flex-col justify-center items-center h-40  mobile:flex-row tablet:flex-col tablet:justify-center tablet:items-center tablet:w-44 tablet:px2 laptop:w-56 " >
          <div className="w-16 h-16 flex justify-center items-center border-gray-100 border-solid border-2 rounded-md mobile:w-20 mobile:h-16 mobile:ml-3 tablet:w-16 tablet:h-20 laptop:w-16 laptop:h-16">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="41.468"
      height="36.55"
      fill="currentColor"
      viewBox="0 0 41.468 36.55"
      style={{ width: 30, height: 30 }}
    >
      <defs>
        <symbol id="FruitBasketIcon" viewBox="0 0 41.468 36.55">
          <path
            fill="#2446f5"
            d="M3.664 11.955a.609.609 0 00.123-.013l1.735-.357a.608.608 0 10-.245-1.191l-1.735.357a.608.608 0 00.122 1.2zm3.974 2.185a.612.612 0 00.123-.013l1.735-.357a.608.608 0 10-.245-1.191l-1.735.357a.608.608 0 00.122 1.2zm0 0"
          ></path>
          <path
            fill="#2446f5"
            d="M40.683 15.53v-1.2a2.95 2.95 0 00-.724-1.936l-1.926-2.216a1.734 1.734 0 01-.426-1.138V6.428a1.08 1.08 0 001.029-1.077V1.079A1.08 1.08 0 0037.557 0h-6.9a1.081 1.081 0 00-1.079 1.079v4.272a1.08 1.08 0 00.947 1.07v2.622a1.735 1.735 0 01-.426 1.138L28.26 12.3l-.019-.031-.794-1.2a1.092 1.092 0 00.623-.984V7.818a1.092 1.092 0 00-1.091-1.091h-8.312a.608.608 0 100 1.216h8.187v2.011h-13.5V7.943h2.5a.608.608 0 000-1.216h-2.623a1.092 1.092 0 00-1.091 1.091v2.262a1.091 1.091 0 00.623.984l-.794 1.2c-.013.019-.023.039-.035.058a20.5 20.5 0 00-.486-2.269 4.812 4.812 0 00-4.129-3.526 7.472 7.472 0 00-.919-.042l.905-1.667a.608.608 0 00-1.069-.581l-.654 1.2L5.124 3.2a.608.608 0 00-1.191.245l.461 2.24-1.077-.845a.608.608 0 10-.752.955l1.49 1.173a7.4 7.4 0 00-.825.4 4.812 4.812 0 00-2.4 4.872 21.138 21.138 0 00.726 3.26h-.543A1.015 1.015 0 000 16.517v3.146a1.015 1.015 0 001.013 1.013h1.455l.465 2.68a.609.609 0 101.2-.208L3.7 20.676h34.065l-2.124 12.235a2.918 2.918 0 01-2.881 2.423H8.707a2.917 2.917 0 01-2.88-2.423l-1.213-6.984a.609.609 0 10-1.2.208l1.213 6.984a4.132 4.132 0 004.08 3.431h24.054a4.132 4.132 0 004.078-3.431L39 20.676h1.455a1.015 1.015 0 001.013-1.013v-3.146a1.015 1.015 0 00-.785-.987zm-9.89-14.314h6.627v4h-6.627zm-2.129 13.117a1.734 1.734 0 01.426-1.138l1.926-2.216a2.951 2.951 0 00.724-1.936V6.43h4.651v2.613a2.952 2.952 0 00.724 1.936l1.926 2.216a1.735 1.735 0 01.426 1.138V15.5h-10.8zm-15.9-.659a1.335 1.335 0 01.222-.738l1.166-1.765H26.06l1.166 1.765a1.334 1.334 0 01.222.738V15.5h-1.62v-1.4a1.015 1.015 0 00-1.013-1.013h-9.421a1.015 1.015 0 00-1.013 1.013v1.4h-1.62zm11.851.625v1.2H15.6V14.3zM3.829 8.427a6.372 6.372 0 011.617-.637A6.065 6.065 0 016.52 7.7a6.171 6.171 0 01.667.035 3.6 3.6 0 013.089 2.643 20.957 20.957 0 01.712 5.125H2.834a20.279 20.279 0 01-.8-3.428 3.6 3.6 0 011.795-3.648zm36.422 11.032H1.216v-2.74h10.758a.611.611 0 00.179.027h15.755a.619.619 0 00.148.019h12.019a.614.614 0 00.177-.026zm0 0"
          ></path>
          <path
            fill="#01af44"
            d="M10.653 32.713a.689.689 0 00.124-.011.612.612 0 00.522-.711l-1.687-8.188a.655.655 0 00-.768-.483.612.612 0 00-.522.711l1.688 8.187a.645.645 0 00.643.495zm6.701.003h.057a.63.63 0 00.614-.656l-.756-8.188a.654.654 0 00-.726-.555.63.63 0 00-.614.656l.755 8.188a.65.65 0 00.67.555zm13.682-.003a.646.646 0 00.644-.494l1.687-8.188a.612.612 0 00-.522-.711.655.655 0 00-.768.483l-1.687 8.188a.612.612 0 00.522.711.689.689 0 00.124.011zm-6.722 0a.65.65 0 00.669-.557l.755-8.188a.629.629 0 00-.614-.656.655.655 0 00-.726.556l-.756 8.188a.63.63 0 00.614.656zm0 0"
          ></path>
          <path fill="#fff" d="M12 6.265h17v5H12z"></path>
          <path
            fill="none"
            stroke="#01af44"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.9 7.905h-3.3v2.85h15.172v-2.85H18.28"
          ></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#FruitBasketIcon"
        xlinkHref="#FruitBasketIcon"
      ></use>
    </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center mobile:text-right mobile:items-start tablet:items-center tablet:text-center">
              <span className="mt-2 mobile:text-sm tablet:text-base">ارسال بهترین کالاها</span>
              <span className="mt-2 text-sm mobile:text-xs tablet:leading-8 text-gray-500 laptop:whitespace-nowrap ">محصولات ارسالی از بین بهترین‌ها گلچین می‌شود</span>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center h-40  mobile:flex-row tablet:flex-col tablet:justify-center tablet:items-center tablet:w-44 tablet:px2 laptop:w-56 ">
          <div className="w-16 h-16 flex justify-center items-center border-gray-100 border-solid border-2 rounded-md mobile:w-20 mobile:h-16 mobile:ml-3 tablet:w-16 tablet:h-20 laptop:w-16 laptop:h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="39.69"
              height="44.184"
              fill="currentColor"
              viewBox="0 0 39.69 44.184"
              style={{ width: 30, height: 30 }}
            >
              <defs>
                <symbol id="BoxingIcon" viewBox="0 0 39.69 44.184">
                  <path
                    fill="#01af44"
                    d="M3.744 24.71a.749.749 0 00-.749.749v3a.75.75 0 101.5 0v-3a.749.749 0 00-.751-.749zm2.995 1.498a.749.749 0 00-.749.749v3a.75.75 0 001.5 0v-3a.749.749 0 00-.751-.749zm27.314 4.021a.749.749 0 00-.839 1.24 4.493 4.493 0 11-2.512-.766.75.75 0 000-1.5 5.991 5.991 0 103.35 1.024z"
                  ></path>
                  <path
                    fill="#2446f5"
                    d="M39.336 32.709a8.982 8.982 0 00-4.889-5.675v-16.55a.749.749 0 00-.368-.645L17.605.1a.749.749 0 00-.762 0L.368 9.839c-.016.009-.027.022-.042.033l-.044.034a.738.738 0 00-.165.183c0 .005-.009.008-.012.013v.005a.749.749 0 00-.085.245.662.662 0 01-.009.066.655.655 0 00-.01.065v19.47a.749.749 0 00.368.645l16.475 9.735a.616.616 0 00.061.025.591.591 0 00.063.027.668.668 0 00.515 0 .6.6 0 00.064-.027c.019-.009.04-.014.06-.025l4.471-2.643a8.982 8.982 0 0017.26-4.982zM17.223 1.619l3.894 2.3-5.773 3.413a.75.75 0 10.762 1.29l6.484-3.829 3.894 2.3-15 8.863-3.894-2.3 6.273-3.707a.75.75 0 10-.762-1.29l-6.985 4.126-3.895-2.3zm-6.49 15.636v5l-3.869-2.286v-5zm11.279 15.626a9.124 9.124 0 00-.246 3.253l-3.794 2.243v-2.432a.75.75 0 00-1.5 0v2.432l-14.976-8.85V11.8l3.869 2.286V20.4a.749.749 0 00.368.646l5.363 3.166a.749.749 0 001.13-.645v-5.428l4.244 2.508v12.3a.75.75 0 101.5 0v-12.3l13.572-8.02a.75.75 0 10-.762-1.29L17.223 19.35l-4.268-2.523 15-8.866 4.992 2.95v15.6a8.95 8.95 0 00-10.935 6.37zm8.69 9.8a7.488 7.488 0 117.489-7.481 7.488 7.488 0 01-7.488 7.484z"
                  ></path>
                  <path
                    fill="#01af44"
                    d="M33.461 33.169a.749.749 0 00-1.041 0l-2.84 2.84-.594-.594a.749.749 0 00-1.059 1.059l1.123 1.123a.749.749 0 001.059 0l3.37-3.37a.749.749 0 00-.018-1.058z"
                  ></path>
                </symbol>
              </defs>
              <use
                fill="#757575"
                href="#BoxingIcon"
                xlinkHref="#BoxingIcon"
              ></use>
            </svg>
            </div>
            <div className="flex flex-col justify-center items-center text-center mobile:text-right mobile:items-start tablet:items-center tablet:text-center">
              <span className="mt-2 mobile:text-sm tablet:text-base">بسته بندی مناسب</span>
              <span className="mt-2 text-sm mobile:text-xs  tablet:leading-8 text-gray-500">سفارشات با بسته‌بندی مناسب ارسال می‌شود</span>
            </div>
          </div>
          </div>
        </div>
        {/* download app */}
        <div className="flex flex-col items-center tablet:items-start">
          <span className="block">دانلود اپلیکیشن</span>
          <span className="text-sm text-gray-500 mt-5">
            اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز
            مشاهده کنید
          </span >
          <Image className="p-1 mt-5" height={35} src={appBazzar}></Image>
        </div>
      </div>





      {/* lower section */}
      <div className="px-3 py-6 tablet:flex laptop:w-248 desktop:w-300 laptop:flex laptop:justify-between">
        <div className="flex  laptop:flex laptop:justify-between  laptop:w-192 desktop:w-248 ">
        {/* about us */}
        <div className="hidden px-2 mobile:block mobile:flex-auto">
            <span className="laptop:text-base">درباره‌ما</span>
            <p className="text-sm leading-9 mobile:text-xs mobile:leading-7 mobile:flex-auto mobile:w-44 text-gray-500 laptop:text-sm laptop:leading-7">اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.</p>
            <span className="text-sm leading-9 text-gray-500"><a>هایپر استار</a> | <a>مایلی</a></span>
        </div>
        {/* accesses */}
        <div className="flex-auto px-2">
            <span className="laptop:text-base">دسترسی‌ها</span>
            <ul className="text-sm leading-9 mobile:text-xs mobile:leading-7 mobile:flex-auto w-32   text-gray-500 laptop:text-sm laptop:leading-7">
                <li>درباره‌ما</li>
                <li>وبلاگ</li>
                <li>قوانین</li>
                <li>استخدام</li>
                <li>گزارش مشکل</li>
                <li>تبلیغات در اسنپ مارکت</li>
                <li>معرفی فروشگاه‌های اسنپ مارکت </li>

            </ul>
        </div>
        {/* contact us */}
        <div className="flex-auto px-2">
            <span className="laptop:text-base">تماس با ما</span>
        <ul className="text-sm leading-9 text-gray-500 mobile:text-xs mobile:leading-7 mobile:flex-auto w-44 laptop:text-sm laptop:leading-7">
                <li>تلفن : ۰۲۱۹۶۶۲۱۴۲۵</li>
                <li><p>آدرس: خیابان ولیعصر بالاتر از اسفندیار خیابان سعیدی نبش کوچه مهردادپلاک۱ طبقه ۳</p></li>
                <li>ایمیل : info@snapp.market</li>
                <li>کد پستی: ۱۹۶۷۸۶۵۶۳۱</li>
            </ul>
            <div className="flex justify-between items-center h-9 p-1 w-56 text-sm leading-9 text-gray-500">
                <span>info@snapp.market</span>
                <a href="#">
                    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="25"
      fill="currentColor"
      className="fill-gray-normal"
      viewBox="0 0 32 25"
      style={{ width: 20, height: 20 }}
    >
      <defs>
        <symbol id="TwitterIcon" viewBox="0 0 32 25">
          <path d="M32 3.418c-2.012.09-1.969.082-2.195.098L30.996.19s-3.723 1.336-4.664 1.579c-2.465-2.079-6.023-2.36-8.797-.692-2.18 1.25-3.344 3.68-2.926 6.117-4.136-.539-7.906-2.61-10.52-5.785L3.2.375l-.66 1.184a7.01 7.01 0 00-.777 4.812c.133.652.367 1.285.687 1.875l-.758-.289-.09 1.238a6.454 6.454 0 001.145 3.918c.262.387.563.746.895 1.075l-.391-.06.477 1.419a6.947 6.947 0 003.625 4.098c-1.692.699-3.055 1.148-5.297 1.867L0 22.172l1.895 1.015a20.32 20.32 0 005.8 2.063c5.614.86 11.93.16 16.18-3.578 3.586-3.152 4.758-7.633 4.516-12.297a2.867 2.867 0 01.554-1.895A558.231 558.231 0 0032 3.418zm-4.55 2.957a4.675 4.675 0 00-.93 3.086c.246 4.707-1.063 8.351-3.895 10.844-3.309 2.906-8.645 4.05-14.637 3.133a14.804 14.804 0 01-3.136-.91 50.655 50.655 0 005.68-2.278l3.277-1.516-3.618-.222A5.16 5.16 0 016.13 16.25a6.86 6.86 0 001.379-.223l3.445-.937-3.476-.832a5.198 5.198 0 01-3.165-2.149 5.08 5.08 0 01-.683-1.476 9 9 0 001.406.219l3.219.312-2.547-1.941c-1.77-1.266-2.574-3.45-2.035-5.524C7.129 7.172 11.859 9.16 16.82 9.223c-.027-.524-.09-1.04-.191-1.551-.692-1.906.105-4.02 1.89-5.035a5.703 5.703 0 016.606.535c.41.379.988.527 1.535.402.43-.105.852-.23 1.27-.375l-.809 2.25h1.04zm0 0"></path>
        </symbol>
      </defs>
      <use fill="#757575" href="#TwitterIcon" xlinkHref="#TwitterIcon"></use>
                 </svg></a>
                 <a href="#">
                 <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="fill-gray-normal"
      viewBox="0 0 32 32"
      style={{ width: 20, height: 20 }}
    >
      <defs>
        <symbol id="InstagramIcon" viewBox="0 0 32 32">
          <path d="M23.578.238H8.902C4.122.246.246 4.121.242 8.902v14.676a8.667 8.667 0 008.66 8.66h14.676c4.781-.004 8.656-3.879 8.664-8.66V8.902A8.679 8.679 0 0023.578.238zm6.785 23.34a6.792 6.792 0 01-6.785 6.785H8.902a6.792 6.792 0 01-6.785-6.785V8.902a6.798 6.798 0 016.785-6.789h14.676a6.798 6.798 0 016.785 6.79zm0 0"></path>
          <path d="M16.238 7.668a8.567 8.567 0 108.567 8.566 8.572 8.572 0 00-8.567-8.566zm0 15.297a6.73 6.73 0 01-6.726-6.73 6.728 6.728 0 1113.457 0 6.737 6.737 0 01-6.73 6.734zm8.785-18.477a2.649 2.649 0 00-2.652 2.649 2.652 2.652 0 002.652 2.652 2.65 2.65 0 000-5.3zm0 3.375a.729.729 0 11.727-.726.723.723 0 01-.727.734zm0 0"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#InstagramIcon"
        xlinkHref="#InstagramIcon"
      ></use>
                  </svg></a>
            </div>
        </div>
        </div>
        {/* certifications badge */}
        <div className="flex justify-around  tablet:w-48 laptop:w-96 tablet:items-start tablet:pt-7 gap-4 ">
            <div className="px-1 py-4 rounded-md shadow-md mobile:w-28 mobile:px-2 mobile:py-6  tablet:h-14 tablet:w-14 tablet:px-1 tablet:py-1 laptop:w-32 laptop:h-36">
            <Image src={samandehi}></Image>
            </div>
            <div className="px-1 py-4 rounded-md shadow-md mobile:w-28 mobile:px-2 mobile:py-6 tablet:h-14 tablet:w-14 tablet:px-1 tablet:py-1 laptop:w-32 laptop:h-36">
            <Image   src={enamad}></Image>
            </div>
            <div className="px-1 py-4 rounded-md shadow-md mobile:w-28 mobile:px-2 mobile:py-6 tablet:h-14 tablet:w-14 tablet:px-1 tablet:py-1 laptop:w-32 laptop:h-36 ">
            <Image   src={kasbokar}></Image>
            </div>
        </div>
      </div>
    </div>
  );
};


// className="px-1 py-4 rounded-md shadow-md mobile:w-28 mobile:px-2 mobile:py-6  tablet:h-14 tablet:w-14 tablet:px-1 tablet:py-1"

// className="px-1 py-4 rounded-md shadow-md mobile:w-28 mobile:px-2 mobile:py-6 tablet:h-14 tablet:w-14 tablet:px-1 tablet:py-1   "

// className="px-1 py-4 rounded-md shadow-md mobile:w-28 mobile:px-2 mobile:py-6 tablet:h-14 tablet:w-14 tablet:px-1 tablet:py-1  "