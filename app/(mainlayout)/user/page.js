import { History } from "@/components/History/History";
import React from "react";

export default function User() {
  return (
    <div className="flex flex-col items-center rounded-md border-[1px] font-iransans my-4 w-full p-4 laptop:w-[700px] desktop:w-[850px]  laptop:mr-8  ">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="23"
          height="21.013"
          fill="currentColor"
          viewBox="0 0 23 21.013"
          style={{ width: 40, height: 40 }}
        >
          <defs>
            <symbol id="ShoppingBasketIcon" viewBox="0 0 23 21.013">
              <path d="M11.5.898a.449.449 0 10-.449-.449.449.449 0 00.449.449zm0 0"></path>
              <path d="M21.2 7.048h-2.654L14.46 1.222a1.324 1.324 0 00-1.818-.515 1.423 1.423 0 00-.523 1.9.476.476 0 00.035.055l3.205 4.387H7.641l3.205-4.388a.5.5 0 00.035-.055 1.423 1.423 0 00-.524-1.9 1.325 1.325 0 00-1.817.516L4.453 7.048H1.8A1.832 1.832 0 000 8.91a1.863 1.863 0 001.221 1.764.437.437 0 00.275.1.42.42 0 01.061 0 .455.455 0 01.382.378l1.528 8.712a1.361 1.361 0 001.326 1.146h13.414a1.361 1.361 0 001.326-1.147l1.528-8.712a.455.455 0 01.383-.378.4.4 0 01.06 0 .437.437 0 00.276-.1A1.863 1.863 0 0023 8.91a1.832 1.832 0 00-1.8-1.862zm-8.308-4.917a.474.474 0 01.186-.61.442.442 0 01.611.179.44.44 0 00.029.048l3.717 5.3h-.95zm-3.611-.382a.5.5 0 00.029-.048.442.442 0 01.611-.18.474.474 0 01.186.609L6.514 7.048h-.95zM21.2 9.841h-7.9a.463.463 0 000 .926h6.936a1.455 1.455 0 00-.055.216L18.653 19.7a.454.454 0 01-.442.382H4.793a.454.454 0 01-.442-.382l-1.529-8.713a1.446 1.446 0 00-.055-.215H9.7a.466.466 0 000-.931H1.8a.932.932 0 010-1.862h19.4a.932.932 0 010 1.862zm0 0"></path>
              <path d="M11.5 12.478a1.349 1.349 0 00-1.348 1.348v3.594a1.35 1.35 0 102.7 0v-3.594a1.347 1.347 0 00-1.352-1.348zm.449 4.941a.45.45 0 11-.9 0v-3.594a.45.45 0 01.9 0zm4.043 1.348a1.349 1.349 0 001.348-1.348v-3.594a1.35 1.35 0 10-2.7 0v3.594a1.349 1.349 0 001.352 1.348zm-.449-4.941a.45.45 0 11.9 0v3.594a.45.45 0 11-.9 0zm-8.535-1.348a1.349 1.349 0 00-1.348 1.348v3.594a1.35 1.35 0 102.7 0v-3.594a1.347 1.347 0 00-1.352-1.348zm.449 4.941a.45.45 0 11-.9 0v-3.594a.45.45 0 01.9 0zm0 0"></path>
            </symbol>
          </defs>
          <use
            fill="#2446F5"
            href="#ShoppingBasketIcon"
            xlinkHref="#ShoppingBasketIcon"
          ></use>
        </svg>
        <h3 className="text-3xl mb-4">لیست سفارش‌ها</h3>
      </div>
      <div className="flex justify-center w-full h-full pt-5 mb-5 text-gray-400 text-lg border-t-[1px]">
        <History />
      </div>
    </div>
  );
}
