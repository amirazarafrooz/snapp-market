import Link from "next/link";


export default function ProfileLayout({ children }) {
  return (
    <section className="flex justify-center items-center flex-col my-4 laptop:flex-row laptop:p-8 laptop:items-start laptop:justify-center">

      <div className="w-144 tablet:w-192 laptop:w-64 desktop:w-80 flex justify-center border-[1px] rounded-sm px-4 my-4 bg-snp-white">
            <div className="w-full flex flex-col font-iransans text-sm h-40 tablet:h-52 laptop:h-64 ">
                <h3 className=" font-iransans text-base pt-2 pb-3 pr-4">پروفایل</h3>
                <div className="flex justify-evenly h-full border-t-[1px] laptop:flex-col ">
                <div className="flex justify-center items-center">
                    <Link href={"/user/profile"} className="flex flex-col justify-center p-3 mt-1 items-center text-gray-500 text-[13px]  w-full font-iransans tablet:p-8 laptop:p-1 laptop:flex-row  laptop:justify-between">
                       <div className="flex flex-col justify-center items-center whitespace-nowrap laptop:flex laptop:flex-row ">
                         <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32"
                        height="32"
                        fill="currentColor"
                        color="none"
                        viewBox="0 0 32 32"
                        style={{ width: 32, height: 32 }}
                        className="ml-2 group-hover:text-snp-primary tablet:scale-125 laptop:scale-25 laptop:scale-50"
                        >
                        <defs>
                            <symbol id="UserIcon" viewBox="0 0 32 32">
                            <path d="M27.313 20.688a15.92 15.92 0 00-6.083-3.817 9.244 9.244 0 003.602-10.367 9.247 9.247 0 00-8.836-6.508 9.246 9.246 0 00-8.832 6.508 9.244 9.244 0 003.602 10.367A16.03 16.03 0 00-.004 32h2.5c0-7.457 6.047-13.5 13.5-13.5 7.457 0 13.5 6.043 13.5 13.5h2.5a15.88 15.88 0 00-4.683-11.313zM15.995 16a6.752 6.752 0 01-6.75-6.75 6.752 6.752 0 016.75-6.75 6.75 6.75 0 110 13.5zm0 0"></path>
                            </symbol>
                        </defs>
                        <use fill="#757575" href="#UserIcon" xlinkHref="#UserIcon"></use>
                        </svg>
                        <span className="mt-2">حساب کاربری</span>
                        </div>
                          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="arrow-left hidden laptop:block"
      color="gray"
      viewBox="0 0 32 32"
      style={{ width: 12, height: 12 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
                        </svg>
                    </Link>
                    </div>
                    <div className="flex justify-center items-center">
                    <Link href={'/user/credeit'} className=" flex flex-col justify-center p-3 mt-1 items-center text-gray-500 text-[13px]  w-full font-iransans tablet:p-8 laptop:p-1 laptop:flex-row laptop:justify-between">
                    <div className="flex flex-col justify-center items-center whitespace-nowrap laptop:flex laptop:flex-row ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="20"
                        fill="currentColor"
                        color="none"
                        viewBox="0 0 16 14.4"
                        style={{ width: 32, height: 32 }}
                        className="ml-2 group-hover:text-snp-primary tablet:scale-125 laptop:scale-25 laptop:scale-50"
                        >
                        <defs>
                        <symbol id="CoinsIcon" viewBox="0 0 16 14.4">
                            <path d="M16 4.8c-.026-.456-.569-.813-1.654-1.085a.6.6 0 00.057-.25V1.6C14.3.046 7.931 0 7.2 0S.1.046 0 1.6v1.866c0 .507.655.9 1.628 1.2A.585.585 0 001.6 4.8v1.863c-1.048.27-1.571.621-1.6 1.07V9.6c0 .353.319.652.839.9a.587.587 0 00-.035.166v1.866c0 .887 2 1.438 4.218 1.695a.245.245 0 00.049.01h.014c.428.048.862.086 1.293.113a.22.22 0 00.026.005h.014c.546.033 1.083.05 1.586.05s1.04-.017 1.586-.05h.014c.005 0 .017 0 .026-.005.43-.027.865-.064 1.293-.113h.014a.245.245 0 00.049-.01c2.219-.257 4.216-.808 4.218-1.7v-1.86c-.019-.327-.3-.6-.848-.828a.6.6 0 00.052-.24V7.856c.957-.294 1.6-.688 1.6-1.19V4.8zm-2.159 4.886l-.091.08a2.386 2.386 0 01-.68.368V8.862a3.969 3.969 0 00.8-.367v1.1a.17.17 0 01-.032.091zm-5.967 1.239h-.406V9.6h.262q.4-.008.8-.026V10.9l-.172.008a24.1 24.1 0 01-.484.017zm-1.165 0l-.365-.009h-.045q-.218-.007-.433-.018V9.569q.4.019.8.026h.262v1.333h-.15zm-4.817-.608l-.026-.007V9.025c.249.067.517.129.8.184v1.3q-.367-.078-.676-.163zm5.621 2.208h.22v1.333q-.553-.005-1.067-.031V12.5q.4.019.8.026zm1.016 0q.4-.008.8-.026v1.331q-.514.025-1.067.031v-1.329h.22zm2.138-.121v1.324q-.384.04-.8.07v-1.33c.27-.014.533-.035.8-.06zm.533-.058q.412-.05.8-.113v1.309q-.377.066-.8.122zm1.333-.208c.283-.056.551-.117.8-.184v1.288c-.238.069-.505.135-.8.2zm-9.067 0v1.3a10.48 10.48 0 01-.8-.2v-1.28c.25.067.517.129.801.184zm.533.1q.387.063.8.113v1.319q-.423-.056-.8-.122zm1.333.17c.262.025.53.047.8.065V13.8q-.416-.029-.8-.07zm-.662-1.595l-.079-.013h-.058V9.474c.262.025.53.047.8.065v1.329a25.972 25.972 0 01-.661-.055zM4 9.417v1.319q-.423-.056-.8-.122V9.3q.387.067.8.117zm5.244 1.439l-.178.013v-1.33c.27-.018.538-.039.8-.065V10.8a23.01 23.01 0 01-.506.048zm1.156-.12V9.417q.412-.05.8-.113v1.309q-.377.067-.8.122zm1.333-1.527c.283-.056.551-.117.8-.184v1.288c-.238.069-.505.135-.8.2zM8.087 7.991c-.2-.005-.4-.013-.589-.022h-.031V6.636q.4.019.8.026h.262V8h-.387zM1.867 4.18V2.891c.249.067.517.129.8.184v1.3l-.1-.021a8.626 8.626 0 01-.413-.1 4.444 4.444 0 01-.287-.074zm4.847-.718h.22V4.8c-.359 0-.716-.013-1.067-.03V3.436q.4.019.8.026zm1.016 0q.4-.008.8-.026v1.33l-.13.008h-.013a23.71 23.71 0 01-.546.018h-.374V3.465h.22zm6.077.134H13.8l-.1.075a2.594 2.594 0 01-.633.329V2.728a3.968 3.968 0 00.8-.367v1.1a.209.209 0 01-.061.139zM10.4 4.6V3.283q.412-.05.8-.113v1.308c-.253.045-.519.086-.8.122zm1.333-.225v-1.3c.283-.056.551-.117.8-.184v1.286c-.239.069-.508.136-.8.198zM9.867 3.341v1.322q-.386.041-.8.071V3.406c.27-.018.533-.04.8-.065zM4.533 4.664V3.341c.262.025.53.047.8.065v1.327a24.34 24.34 0 01-.8-.069zM4 3.283V4.6l-.16-.02-.1-.015q-.231-.033-.453-.071L3.2 4.48V3.171q.387.062.8.112zM6.867 7.93l-.108-.008q-.256-.02-.5-.044l-.1-.011h-.021V6.541c.262.025.53.047.8.065v1.329zm-1.762-.2C5 7.714 4.9 7.7 4.8 7.679V6.371q.387.063.8.113V7.8a22.702 22.702 0 01-.476-.068zm-.838-1.455v1.3q-.442-.095-.8-.2V6.091c.249.067.516.129.8.184zm-1.334-.347V7.2a1.664 1.664 0 01-.778-.474l-.018-.03a.168.168 0 010-.025v-1.1a3.968 3.968 0 00.796.357zm6.4.733q.4-.008.8-.026v1.33c-.35.017-.707.027-1.067.031V6.665h.22zm3.446 1.023c-.117.02-.235.04-.357.059l-.212.031L12 7.8V6.483q.412-.05.8-.113v1.31zm-1.806.228l-.3.021V6.606c.27-.018.538-.039.8-.065v1.323c-.155.016-.31.033-.469.046zm3.047-.5c-.133.037-.273.072-.417.106l-.2.046-.063.013v-1.3c.283-.056.551-.117.8-.184V7.38zm1.447-2.595c-.025.181-.435.422-1.167.648a17.9 17.9 0 01-4.291.641l-.289.011-.241.007c-.221 0-.445.008-.676.008s-.455 0-.676-.009l-.241-.007-.289-.011a17.9 17.9 0 01-4.297-.64C2.577 5.241 2.167 5 2.137 4.822a.063.063 0 010-.016l.057.013a18.007 18.007 0 002.063.351h.007c.426.049.868.087 1.322.114h.015q.49.029.993.041c.205.005.406.008.6.008h.428a20.42 20.42 0 004.983-.617l.169-.05.1-.031c.1-.031.189-.063.278-.1l.046-.018c.075-.029.148-.058.217-.088l.06-.026c.074-.033.145-.067.211-.1l.084-.048.094-.056c.03-.019.037-.021.053-.031 1.202.256 1.516.539 1.547.649zM7.2.533c4.4 0 6.621.692 6.663 1.09-.032.18-.442.418-1.166.642a17.9 17.9 0 01-4.291.641l-.289.011-.241.007c-.221.005-.445.009-.676.009s-.455 0-.676-.009l-.241-.007-.289-.011A17.9 17.9 0 011.7 2.265C.979 2.041.57 1.8.537 1.623.579 1.226 2.8.533 7.2.533zM.533 3.466v-1.1a3.968 3.968 0 00.8.367v1.272c-.518-.194-.799-.389-.8-.539zm1.292 3.69l.014.012a4.536 4.536 0 002.062.874l.066.015.21.045a20.566 20.566 0 003.02.383q.542.032 1.107.042c.167 0 .331.006.492.006.184 0 .373 0 .565-.007.349-.007.693-.022 1.031-.041h.01a20.625 20.625 0 003.078-.394 4.831 4.831 0 01-.789.308 18.4 18.4 0 01-4.608.653l-.18.006h-.2c-.168 0-.337.005-.51.005-.231 0-.455 0-.676-.009l-.241-.007-.289-.011A17.9 17.9 0 011.7 8.4C.97 8.172.56 7.931.536 7.75c.03-.1.299-.35 1.289-.594zM.533 9.6V8.5a3.968 3.968 0 00.8.367v1.272l-.152-.059C.759 9.9.534 9.733.533 9.6zm.8 2.933v-1.1a3.968 3.968 0 00.8.367v1.277c-.518-.2-.799-.395-.8-.545zm12.533.539V11.8a3.968 3.968 0 00.8-.367v1.1c0 .149-.281.344-.799.539zm.8-2.385c-.029.181-.439.42-1.167.645a17.9 17.9 0 01-4.291.641l-.289.011-.241.007C8.455 12 8.231 12 8 12s-.455 0-.676-.009l-.239-.007-.291-.011a17.9 17.9 0 01-4.294-.641c-.705-.218-1.113-.449-1.164-.628.079.028.162.055.246.081l.026.008q.108.033.221.064l.086.024.13.034a19.454 19.454 0 003.549.5c.413.025.835.04 1.262.045h.787a26.75 26.75 0 001.149-.043H8.8c.457-.027.9-.067 1.325-.115h.017c.474-.055.923-.122 1.339-.2l.254-.049.056-.011a7.165 7.165 0 001.937-.63l.074-.042.085-.054.079-.049c.534.185.68.353.697.42zm0-3.482V5.929a3.968 3.968 0 00.8-.367v1.1c0 .153-.281.348-.799.543z"></path>
                        </symbol>
                        </defs>
                        <use fill="#757575" href="#CoinsIcon" xlinkHref="#CoinsIcon"></use>
                        </svg> 
                        <span className="mt-2">افزایش اعتباری</span>
                        </div>
                        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="arrow-left hidden laptop:block"
      color="gray"
      viewBox="0 0 32 32"
      style={{ width: 12, height: 12 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
                         </svg>
                    </Link>
                    </div>
                    <div className="flex justify-center items-center ">
                    <Link href={'/user/orders'} className=" flex flex-col bg-snp-light rounded-md justify-center p-3 mt-1 items-center text-snp-secondary text-[13px]  w-full font-iransans tablet:p-8 laptop:p-1 laptop:flex-row laptop:justify-between">
                    <div className="flex flex-col justify-center items-center whitespace-nowrap laptop:flex laptop:flex-row ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="23"
                        height="21.013"
                        fill="currentColor"
                        color="none"
                        viewBox="0 0 23 21.013"
                        style={{ width: 32, height: 32 }}
                        className="ml-2 group-hover:text-snp-primary tablet:scale-125 laptop:scale-25 laptop:scale-50"
                        >
                        <defs>
                            <symbol id="ShoppingBasketIcon" viewBox="0 0 23 21.013">
                            <path d="M11.5.898a.449.449 0 10-.449-.449.449.449 0 00.449.449zm0 0"></path>
                            <path d="M21.2 7.048h-2.654L14.46 1.222a1.324 1.324 0 00-1.818-.515 1.423 1.423 0 00-.523 1.9.476.476 0 00.035.055l3.205 4.387H7.641l3.205-4.388a.5.5 0 00.035-.055 1.423 1.423 0 00-.524-1.9 1.325 1.325 0 00-1.817.516L4.453 7.048H1.8A1.832 1.832 0 000 8.91a1.863 1.863 0 001.221 1.764.437.437 0 00.275.1.42.42 0 01.061 0 .455.455 0 01.382.378l1.528 8.712a1.361 1.361 0 001.326 1.146h13.414a1.361 1.361 0 001.326-1.147l1.528-8.712a.455.455 0 01.383-.378.4.4 0 01.06 0 .437.437 0 00.276-.1A1.863 1.863 0 0023 8.91a1.832 1.832 0 00-1.8-1.862zm-8.308-4.917a.474.474 0 01.186-.61.442.442 0 01.611.179.44.44 0 00.029.048l3.717 5.3h-.95zm-3.611-.382a.5.5 0 00.029-.048.442.442 0 01.611-.18.474.474 0 01.186.609L6.514 7.048h-.95zM21.2 9.841h-7.9a.463.463 0 000 .926h6.936a1.455 1.455 0 00-.055.216L18.653 19.7a.454.454 0 01-.442.382H4.793a.454.454 0 01-.442-.382l-1.529-8.713a1.446 1.446 0 00-.055-.215H9.7a.466.466 0 000-.931H1.8a.932.932 0 010-1.862h19.4a.932.932 0 010 1.862zm0 0"></path>
                            <path d="M11.5 12.478a1.349 1.349 0 00-1.348 1.348v3.594a1.35 1.35 0 102.7 0v-3.594a1.347 1.347 0 00-1.352-1.348zm.449 4.941a.45.45 0 11-.9 0v-3.594a.45.45 0 01.9 0zm4.043 1.348a1.349 1.349 0 001.348-1.348v-3.594a1.35 1.35 0 10-2.7 0v3.594a1.349 1.349 0 001.352 1.348zm-.449-4.941a.45.45 0 11.9 0v3.594a.45.45 0 11-.9 0zm-8.535-1.348a1.349 1.349 0 00-1.348 1.348v3.594a1.35 1.35 0 102.7 0v-3.594a1.347 1.347 0 00-1.352-1.348zm.449 4.941a.45.45 0 11-.9 0v-3.594a.45.45 0 01.9 0zm0 0"></path>
                            </symbol>
                        </defs>
                        <use
                            fill=""
                            href="#ShoppingBasketIcon"
                            xlinkHref="#ShoppingBasketIcon"
                        ></use>
                        </svg> 
                        <span className="mt-2">لیست‌ سفارش‌ها</span>
                        </div>
                        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="arrow-left hidden laptop:block"
      color="gray"
      viewBox="0 0 32 32"
      style={{ width: 12, height: 12 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
                        </svg>
                    </Link>
                    </div>
                    <div className="flex justify-center items-center">
                    <Link href={'/'} className="flex flex-col justify-center p-3 mt-1 items-center text-gray-500 text-[13px]  w-full font-iransans tablet:p-8 laptop:p-1 laptop:flex-row laptop:justify-between">
                    <div className="flex flex-col justify-center items-center whitespace-nowrap laptop:flex laptop:flex-row ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="32"
                        height="24"
                        fill="currentColor"
                        color="none"
                        viewBox="0 0 32 24"
                        style={{ width: 32, height: 32 }}
                        className="ml-2 group-hover:text-snp-primary tablet:scale-125 laptop:scale-50"
                        >
                        <defs>
                        <symbol id="LogoutIcon" viewBox="0 0 32 24">
                            <path d="M0 4.055v16.199A4.062 4.062 0 004.055 24.3h13.09a4.062 4.062 0 004.054-4.047v-2.625a.8.8 0 10-1.597 0v2.625a2.463 2.463 0 01-2.465 2.445H4.055a2.456 2.456 0 01-2.453-2.445V4.05A2.454 2.454 0 014.055 1.6h13.09a2.458 2.458 0 012.457 2.454V6.68c0 .441.355.797.796.797a.796.796 0 00.801-.797V4.055A4.062 4.062 0 0017.152 0H4.055A4.056 4.056 0 000 4.055zm0 0"></path>
                            <path d="M25.152 18.191a.808.808 0 001.137 0l5.477-5.476a.797.797 0 000-1.13L26.289 6.11a.8.8 0 00-1.129 1.129l4.113 4.114h-15a.799.799 0 100 1.597h15l-4.113 4.114a.806.806 0 00-.242.562c0 .21.086.414.234.566zm0 0"></path>
                        </symbol>
                        </defs>
                        <use fill="#757575" href="#LogoutIcon" xlinkHref="#LogoutIcon"></use>
                        </svg> 
                        <span className="mt-2">خروج</span>
                        </div>
                        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="arrow-left hidden laptop:block"
      color="gray"
      viewBox="0 0 32 32"
      style={{ width: 12, height: 12 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
                      </svg>
                    </Link>
                    </div>
                </div>
            </div>
      </div>

      <div>{children}</div>
    </section>
  );
}
