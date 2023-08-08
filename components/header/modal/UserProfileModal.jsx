import React from 'react';
import { useEffect } from "react";
import { ReactPortal } from "./ReactPortal";
import { useRef } from "react";

export const UserProfileModal = ({ children, userOpen, handleCloseUser }) => {
    const scroll = useRef(null);
    const scroll2 = useRef(null);
  
    useEffect(() => {
      if (userOpen) {
        scroll.current.parentElement.parentElement.style.overflow = "hidden";
      } else if (scroll2.current != null) {
        scroll2.current.parentElement.parentElement.style.overflow = "visible";
      }
    }, [userOpen]);
  
    return (
      <ReactPortal wrapperId="react-portal-modal-container">
        {!userOpen ? (
          <div ref={scroll2}></div>
        ) : (
          <div
            onClick={handleCloseUser}
            ref={scroll}
            className="fixed flex justify-center top-0 left-0 right-0 bottom-0 bg-[#0000006e]  z-[201] h-screen " >
            <div
              onClick={handleCloseUser}
              className="relative flex justify-end top-14 w-144 tablet:w-192 laptop:w-248 desktop:w-300 h-full z-[202]  ">
              {children}
            </div>
          </div>
        )}
      </ReactPortal>
    );
  };
  

