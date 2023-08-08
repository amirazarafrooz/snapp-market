import React from 'react';
import { useEffect } from "react";
import { ReactPortal } from "./ReactPortal";
import { useRef } from "react";

export const ShoppingCartModal = ({ children, shopOpen, handleCloseShop }) => {
    const scroll = useRef(null);
    const scroll2 = useRef(null);
  
    useEffect(() => {
      if (shopOpen) {
        scroll.current.parentElement.parentElement.style.overflow = "hidden";
      } else if (scroll2.current != null) {
        scroll2.current.parentElement.parentElement.style.overflow = "visible";
      }
    }, [shopOpen]);
  
    return (
      <ReactPortal wrapperId="react-portal-modal-container">
        {!shopOpen ? (
          <div ref={scroll2}></div>
        ) : (
          <div
            onClick={handleCloseShop}
            ref={scroll}
            className="fixed flex justify-end top-0 left-0 right-0 bottom-0 bg-[#0000006e]  z-[201] h-screen ">
            <div
              onClick={handleCloseShop}
              className=" relative left-0 top-0 bg-snp-white h-full max-h-full w-full max-w-md  flex flex-col z-[202]">
              {children}
            </div>
          </div>
        )}
      </ReactPortal>
    );
  };
  


