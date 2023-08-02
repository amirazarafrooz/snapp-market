export const SubCategoryFilter
 = () => {
    return (
<>
<div className="flex-col h-screen px-2 font-iransans text-sm  hidden laptop:flex ">
<div className="w-56 px-6 py-4 h-28 mt-1 mb-4 bg-snp-white rounded-md border-[1px]">
   <div className="flex items-center justify-between mb-4"> <h3>فیلتر‌های اعمال شده</h3>
    <span className="text-snp-highdiscount text-xs">حذف</span>
    </div>
    <div className="flex w-min items-center justify-between p-1  text-[11px] text-snp-secondary bg-blue-100 border-[1px] border-blue-500 rounded-full" >
        <span className="whitespace-nowrap ml-1">شیر تازه</span>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="closeIcon text-snp-primary mx-1"
      viewBox="0 0 32 32"
      style={{ width: 10, height: 10 }}
    >
      <defs>
        <symbol id="CrossIcon" viewBox="0 0 32 32">
          <path d="M18.828 16L31.414 3.418a2.004 2.004 0 000-2.832 2.004 2.004 0 00-2.832 0L16 13.172 3.418.586a2.004 2.004 0 00-2.832 0 2.004 2.004 0 000 2.832L13.172 16 .586 28.582A2.004 2.004 0 002 32a2.01 2.01 0 001.418-.586L16 18.828l12.582 12.586c.395.39.906.586 1.418.586a2.004 2.004 0 001.414-3.418zm0 0"></path>
        </symbol>
      </defs>
      <use fill="" href="#CrossIcon" xlinkHref="#CrossIcon"></use>
    </svg>
    </div>

</div>

<div className=" flex flex-col w-56 px-6 py-4 mt-1 bg-snp-white rounded-md border-[1px]">
    <div className="flex justify-between mt-2">
        <h3 className="text-sm my-1">دسته‌بندی</h3>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="fill-gray-light"
      viewBox="0 0 32 32"
      style={{ width: 14, height: 14 }}
    >
      <defs>
        <symbol id="AngleUpIcon" viewBox="0 0 32 32">
          <path d="M7.781 14.394L0 22.175v.494c0 .483.034.539 1.1 1.606 1.718 1.718.775 2.302 8.387-5.3 3.526-3.526 6.434-6.4 6.467-6.4s2.785 2.74 6.119 6.074c3.323 3.346 6.254 6.22 6.49 6.4.292.213.573.326.831.326.359 0 .528-.123 1.505-1.1 1.067-1.067 1.1-1.123 1.1-1.594v-.505l-7.781-7.77c-7.68-7.691-7.781-7.781-8.219-7.781s-.539.09-8.219 7.77z"></path>
        </symbol>
      </defs>
      <use fill="#A3A3A3" href="#AngleUpIcon" xlinkHref="#AngleUpIcon"></use>
        </svg>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="32"
        height="32"
        fill="currentColor"
        className="fill-gray-light no-pointer-event hidden"
        viewBox="0 0 32 32"
        style={{ width: 14, height: 14 }}
        >
        <defs>
            <symbol id="AngleDownIcon" viewBox="0 0 32 32">
            <path d="M1.1 7.725C.033 8.792 0 8.848 0 9.319v.505l7.781 7.77c7.68 7.691 7.781 7.781 8.219 7.781s.539-.09 8.219-7.77L32 9.824V9.33c0-.483-.034-.539-1.1-1.606-1.718-1.718-.775-2.302-8.387 5.3-3.526 3.514-6.434 6.4-6.467 6.4s-2.785-2.74-6.119-6.074c-3.324-3.346-6.254-6.22-6.49-6.4-.292-.213-.573-.326-.831-.326-.359 0-.528.123-1.505 1.1z"></path>
            </symbol>
        </defs>
        <use
            fill="#A3A3A3"
            href="#AngleDownIcon"
            xlinkHref="#AngleDownIcon"
        ></use>
        </svg>
    </div>
        <div className="mt-3">
            <ul>
                <li className="flex mt-4"> <input type="checkbox" checked></input> <span className="text-xs accent-snp-gray text-gray-400 font-semibold mr-2">شیر تازه</span></li>
                <li className="flex mt-4"> <input type="checkbox"></input> <span className="text-xs text-gray-400 mr-2 ">شیر مدت دار</span></li>
            </ul>
           
        </div>

</div>


<div className=" flex flex-col w-56 px-6 py-4 mt-2 bg-snp-white rounded-md border-[1px]">
    <div className="flex items-center justify-between mt-2">
        <h3 className="text-sm my-1">برند</h3>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="fill-gray-light hidden"
      viewBox="0 0 32 32"
      style={{ width: 14, height: 14 }}
    >
      <defs>
        <symbol id="AngleUpIcon" viewBox="0 0 32 32">
          <path d="M7.781 14.394L0 22.175v.494c0 .483.034.539 1.1 1.606 1.718 1.718.775 2.302 8.387-5.3 3.526-3.526 6.434-6.4 6.467-6.4s2.785 2.74 6.119 6.074c3.323 3.346 6.254 6.22 6.49 6.4.292.213.573.326.831.326.359 0 .528-.123 1.505-1.1 1.067-1.067 1.1-1.123 1.1-1.594v-.505l-7.781-7.77c-7.68-7.691-7.781-7.781-8.219-7.781s-.539.09-8.219 7.77z"></path>
        </symbol>
      </defs>
      <use fill="#A3A3A3" href="#AngleUpIcon" xlinkHref="#AngleUpIcon"></use>
        </svg>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="32"
        height="32"
        fill="currentColor"
        className="fill-gray-light no-pointer-event"
        viewBox="0 0 32 32"
        style={{ width: 14, height: 14 }}
        >
        <defs>
            <symbol id="AngleDownIcon" viewBox="0 0 32 32">
            <path d="M1.1 7.725C.033 8.792 0 8.848 0 9.319v.505l7.781 7.77c7.68 7.691 7.781 7.781 8.219 7.781s.539-.09 8.219-7.77L32 9.824V9.33c0-.483-.034-.539-1.1-1.606-1.718-1.718-.775-2.302-8.387 5.3-3.526 3.514-6.434 6.4-6.467 6.4s-2.785-2.74-6.119-6.074c-3.324-3.346-6.254-6.22-6.49-6.4-.292-.213-.573-.326-.831-.326-.359 0-.528.123-1.505 1.1z"></path>
            </symbol>
        </defs>
        <use
            fill="#A3A3A3"
            href="#AngleDownIcon"
            xlinkHref="#AngleDownIcon"
        ></use>
        </svg>
    </div>
       

</div>


<div className=" flex flex-col w-56 px-6 py-4 mt-2 bg-snp-white rounded-md border-[1px]">
    <div className="flex items-center justify-between mt-2">
        <h3 className="text-sm my-1">نوع</h3>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="fill-gray-light hidden"
      viewBox="0 0 32 32"
      style={{ width: 14, height: 14 }}
    >
      <defs>
        <symbol id="AngleUpIcon" viewBox="0 0 32 32">
          <path d="M7.781 14.394L0 22.175v.494c0 .483.034.539 1.1 1.606 1.718 1.718.775 2.302 8.387-5.3 3.526-3.526 6.434-6.4 6.467-6.4s2.785 2.74 6.119 6.074c3.323 3.346 6.254 6.22 6.49 6.4.292.213.573.326.831.326.359 0 .528-.123 1.505-1.1 1.067-1.067 1.1-1.123 1.1-1.594v-.505l-7.781-7.77c-7.68-7.691-7.781-7.781-8.219-7.781s-.539.09-8.219 7.77z"></path>
        </symbol>
      </defs>
      <use fill="#A3A3A3" href="#AngleUpIcon" xlinkHref="#AngleUpIcon"></use>
        </svg>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="32"
        height="32"
        fill="currentColor"
        className="fill-gray-light no-pointer-event"
        viewBox="0 0 32 32"
        style={{ width: 14, height: 14 }}
        >
        <defs>
            <symbol id="AngleDownIcon" viewBox="0 0 32 32">
            <path d="M1.1 7.725C.033 8.792 0 8.848 0 9.319v.505l7.781 7.77c7.68 7.691 7.781 7.781 8.219 7.781s.539-.09 8.219-7.77L32 9.824V9.33c0-.483-.034-.539-1.1-1.606-1.718-1.718-.775-2.302-8.387 5.3-3.526 3.514-6.434 6.4-6.467 6.4s-2.785-2.74-6.119-6.074c-3.324-3.346-6.254-6.22-6.49-6.4-.292-.213-.573-.326-.831-.326-.359 0-.528.123-1.505 1.1z"></path>
            </symbol>
        </defs>
        <use
            fill="#A3A3A3"
            href="#AngleDownIcon"
            xlinkHref="#AngleDownIcon"
        ></use>
        </svg>
    </div>
       

</div>

<div className=" flex justify-center flex-col w-56 px-6 py-2 mt-2 bg-snp-white rounded-md border-[1px]">
    <div className="flex items-center justify-between mt-1">
        <h3 className="text-sm my-1">فقط کالاهای موجود</h3>

    </div>
       

</div>


<div className=" flex justify-center flex-col w-56 px-6 py-2 mt-2 bg-snp-white rounded-md border-[1px]">
    <div className="flex items-center justify-between mt-1">
        <h3 className="text-sm my-1">فقط کالاهای تخفیف‌دار</h3>

    {/* toggle switch */}
    </div>
</div>


<div className=" flex justify-center flex-col w-56 px-6 py-2 mt-2 bg-snp-white rounded-md border-[1px]">
    <div className="flex items-center justify-between mt-1">
        <h3 className="text-sm my-1">قیمت</h3>
  
        {/* <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>How to create Price Range Selector in ReactJS?</h3>
      <span id="range-slider" gutterBottom>
        Select Price Range:
      </span>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {value[0]} /- and {value[1]} /-
    </div> */}

    </div>
       

</div>


</div>
</>
    )
}
