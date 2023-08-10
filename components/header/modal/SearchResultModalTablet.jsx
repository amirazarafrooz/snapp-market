import React from "react";
import { useEffect } from "react";
import { ReactPortal } from "./ReactPortal";
import { useRef } from "react";

export const SearchResultModalTablet = ({ children, searchTabletOpen, handleCloseSearchTablet }) => {
  const scroll = useRef(null);
  const scroll2 = useRef(null);

  useEffect(() => {
    if (searchTabletOpen) {
      console.log('overflow hidden');
      console.log(scroll.current.parentElement.parentElement);
      scroll.current.parentElement.parentElement.style.overflow = "hidden";
    } else if (scroll2.current != null) {
      scroll2.current.parentElement.parentElement.style.overflow = "visible";
    }
  }, [searchTabletOpen]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      {!searchTabletOpen ? (
        <div ref={scroll2}></div>
      ) : (
        <div
          onClick={handleCloseSearchTablet}
          ref={scroll}
          className="fixed top-[53px] left-0 right-0 bottom-0 bg-[#00000033]  flex flex-col items-center justify-center overflow-hidden z-[999] "
        >
          <div
            onClick={handleCloseSearchTablet}
            className=" relative flex justify-start items-start top-0  h-full  tablet:top-0 tablet:right-[115px] laptop:right-[500px] desktop:right-[535px] w-full  mx-6 mobile:mx-0 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  ">            {children}
          </div> 
         </div>
      )}
    </ReactPortal>
  );
};
