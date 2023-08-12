import React from "react";
import { useEffect } from "react";
import { ReactPortal } from "./ReactPortal";
import { useRef } from "react";

export const SearchResultModalDowm = ({ children, searchDownOpen, handleCloseSearchDown }) => {
  const scroll = useRef(null);
  const scroll2 = useRef(null);

  useEffect(() => {
    if (searchDownOpen) {
      console.log('overflow hidden');
      console.log(scroll.current.parentElement.parentElement);
      scroll.current.parentElement.parentElement.style.overflow = "hidden";
    } else if (scroll2.current != null) {
      scroll2.current.parentElement.parentElement.style.overflow = "visible";
    }
  }, [searchDownOpen]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      {!searchDownOpen ? (
        <div ref={scroll2}></div>
      ) : (
        <div
          onClick={handleCloseSearchDown}
          ref={scroll}
          className="fixed top-[102px] left-0 right-0 bottom-0 bg-[#00000033]  flex flex-col items-center justify-center overflow-hidden z-[999] "
        >
          <div
            onClick={handleCloseSearchDown}
            className="relative  flex justify-start top-0  h-full  tablet:top-20 tablet:right-4 laptop:right-36 w-full px-4  mobile:mx-0  mobile:px-2  mobile:w-144 tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  ">            {children}
          </div> 
         </div>
      )}
    </ReactPortal>
  );
};
