import React from 'react';
import { useEffect } from "react";
import {ReactPortal} from "./ReactPortal";


export const CategoriesMenuModal = ({ children, isOpen, handleClose }) => {

    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
    <div onClick={handleClose} className= "fixed inset-0 bg-[#00000059]  flex flex-col items-center justify-center overflow-hidden z-[999] pt-10 pr-5 pb-5 transition-all duration-300 ease-in-out ">
      <button onClick={handleClose} className="close-btn">
        Close
      </button>
            <div onClick={handleClose} className="bg-orange-500 relative flex justify-end top-[152px]  w-144 tablet:w-192 laptop:w-248 desktop:w-300 h-full z-[202]  ">{children}</div>
    </div>
    </ReactPortal>
  );
};
  

