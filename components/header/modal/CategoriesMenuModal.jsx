import React from "react";
import { useEffect } from "react";
import { ReactPortal } from "./ReactPortal";
import { useRef } from "react";

export const CategoriesMenuModal = ({ children, isOpen, handleClose }) => {
  const scroll = useRef(null);
  const scroll2 = useRef(null);

  useEffect(() => {
    if (isOpen) {
      scroll.current.parentElement.parentElement.style.overflow = "hidden";
    } else if (scroll2.current != null) {
      scroll2.current.parentElement.parentElement.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      {!isOpen ? (
        <div ref={scroll2}></div>
      ) : (
        <div
          onClick={handleClose}
          ref={scroll}
          className="fixed inset-0 bg-[#00000059]  flex flex-col items-center justify-center overflow-hidden z-[999] pt-10 pr-5 pb-5"
        >
          <div
            onClick={handleClose}
            className="relative flex justify-end top-44  w-144 tablet:w-192 laptop:w-248 desktop:w-300 h-full z-[202]  "
          >
            {children}
          </div>
        </div>
      )}
    </ReactPortal>
  );
};
