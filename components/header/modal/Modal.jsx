import React from 'react';
import { useEffect } from "react";
import {ReactPortal} from "./ReactPortal";
import { useRef } from 'react';

export const Modal = ({ children, isOpen, handleClose }) => {

const scroll = useRef();

useEffect (() => {
if (isOpen) {
  scroll.current.parentElement.parentElement.style.overflow = "hidden"
} else {
  scroll.current.parentElement.parentElement.style.overflow = "visible"
}
},[] )

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
    <div onClick={handleClose} ref={scroll} className="fixed inset-0 bg-[#00000059]  flex flex-col items-center justify-center overflow-hidden z-[999] pt-10 pr-5 pb-5 transition-all duration-300 ease-in-out ">
      <button onClick={handleClose} className="close-btn">
        Close
      </button>
      <div onClick={handleClose} className="w-[70%] h-[70%] bg-[#282c34] text-white flex items-center justify-center text-3xl ">{children}</div>
    </div>
    </ReactPortal>
  );
};
  

