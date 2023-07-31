import React from "react";

export const UserProfile = ({ headerId }) => {
  return (
    <>
      {headerId === "HeaderSc" ? (
        <div className="flex items-center laptop:mx-4 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            fill="currentColor"
            className="ml-[10px]"
            viewBox="0 0 32 32"
            style={{ width: 18, height: 18 }}
          >
            <defs>
              <symbol id="UserIcon" viewBox="0 0 32 32">
                <path d="M27.313 20.688a15.92 15.92 0 00-6.083-3.817 9.244 9.244 0 003.602-10.367 9.247 9.247 0 00-8.836-6.508 9.246 9.246 0 00-8.832 6.508 9.244 9.244 0 003.602 10.367A16.03 16.03 0 00-.004 32h2.5c0-7.457 6.047-13.5 13.5-13.5 7.457 0 13.5 6.043 13.5 13.5h2.5a15.88 15.88 0 00-4.683-11.313zM15.995 16a6.752 6.752 0 01-6.75-6.75 6.752 6.752 0 016.75-6.75 6.75 6.75 0 110 13.5zm0 0"></path>
              </symbol>
            </defs>
            <use fill="#FFF" href="#UserIcon" xlinkHref="#UserIcon"></use>
          </svg>
          <span className="hidden tablet:text-snp-light   tablet:truncate tablet:block tablet:ml-2 font-iransansl tablet:text-xs laptop:w-20 laptop:text-base">
            پایونیر تیم گروه دوم
          </span>
        </div>
      ) : (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            fill="currentColor"
            className="ml-[10px]"
            viewBox="0 0 32 32"
            style={{ width: 18, height: 18 }}
          >
            <defs>
              <symbol id="UserIcon" viewBox="0 0 32 32">
                <path d="M27.313 20.688a15.92 15.92 0 00-6.083-3.817 9.244 9.244 0 003.602-10.367 9.247 9.247 0 00-8.836-6.508 9.246 9.246 0 00-8.832 6.508 9.244 9.244 0 003.602 10.367A16.03 16.03 0 00-.004 32h2.5c0-7.457 6.047-13.5 13.5-13.5 7.457 0 13.5 6.043 13.5 13.5h2.5a15.88 15.88 0 00-4.683-11.313zM15.995 16a6.752 6.752 0 01-6.75-6.75 6.752 6.752 0 016.75-6.75 6.75 6.75 0 110 13.5zm0 0"></path>
              </symbol>
            </defs>
            <use fill="#FFF" href="#UserIcon" xlinkHref="#UserIcon"></use>
          </svg>
          <span className="hidden tablet:text-snp-light tablet:w-24 tablet:truncate tablet:block tablet:ml-2 font-iransansl ">
            پایونیر تیم گروه دوم
          </span>
         
        </div>
      )}
    </>
  );
};
