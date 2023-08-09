import React from "react";
import { useEffect } from "react";
import { ReactPortal } from "./ReactPortal";
import { useRef } from "react";

export const SearchResultModal = ({ children, searchOpen, handleCloseSearch }) => {
  const scroll = useRef(null);
  const scroll2 = useRef(null);

  useEffect(() => {
    if (searchOpen) {
      scroll.current.parentElement.parentElement.style.overflow = "hidden";
    } else if (scroll2.current != null) {
      scroll2.current.parentElement.parentElement.style.overflow = "visible";
    }
  }, [searchOpen]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      {!searchOpen ? (
        <div ref={scroll2}></div>
      ) : (
        <div
          onClick={handleCloseSearch}
          ref={scroll}
          className="fixed inset-0 bg-[#00000059]  flex flex-col items-center justify-center overflow-hidden z-[999] pt-10 pr-5 pb-5"
        >
          {/* <div
            onClick={handleCloseSearch}
            className="relative flex justify-start top-20  h-fit  tablet:top-44 tablet:right-4 laptop:right-36 w-full  mx-6 mobile:mx-0 mobile:w-[480px] tablet:w-144 laptop:w-248 desktop:w-300   z-[202]  "> */}
            {children}
          {/* </div> */}
        </div>
      )}
    </ReactPortal>
  );
};
