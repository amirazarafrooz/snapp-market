"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ slides }) => {
  const [xPosition,setXPosition]=useState(0);
  const [yPosition,setYPosition]=useState(0);
  const [mouseEnter,setMouseEnter]=useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const images=slides.map((item)=>item)[currentIndex]
console.log(images);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const mouseOver=(e)=>{
    const x=e.clientX-e.target.offsetLeft;
    // console.log(e.clientX-e.target.offsetLeft ,'client_x - offset_x');
    setXPosition(x);
    const y=e.clientY-e.target.offsetTop;
    console.log(e.clientY-e.target.offsetTop ,'client_y - offset_y');
    setYPosition(y);
  }
  
  const mouseEnterHandler=()=>{
  setMouseEnter(true)
  }
  
  const mouseLeaveHandler=()=>{
    setMouseEnter(false)
    }

  return (
    <div className=" h-full  flex justify-center items-center flex-col tablet:w-1/2">
      
      <div className="flex justify-between items-center border-[1px] px-2 py-5">
      <div onClick={goToNext} className="cursor-pointer p-3 shadow-lg	rounded-full">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 32 32"
      style={{ width: 15, height: 15 }}
    >
      <defs>
        <symbol id="AngleRightIcon" viewBox="0 0 32 32">
          <path d="M25.011 15.262L10.069.32c-.214-.214-.46-.321-.738-.321s-.524.107-.738.321L6.99 1.923c-.214.214-.321.459-.321.738s.107.524.321.737l12.601 12.601L6.99 28.6c-.214.214-.321.46-.321.737s.107.524.321.738l1.603 1.603c.214.214.46.321.738.321s.524-.107.738-.321L25.01 16.736c.214-.214.321-.46.321-.738s-.106-.524-.32-.738z"></path>
        </symbol>
      </defs>
      <use
        fill="#1A1C23"
        href="#AngleRightIcon"
        xlinkHref="#AngleRightIcon"
      ></use>
    </svg>
      </div>
      <div onMouseLeave={mouseLeaveHandler} onMouseEnter={mouseEnterHandler} onMouseMove={mouseOver} className="tablet:cursor-crosshair w-80 h-80 tablet:w-64 tablet:h-64 laptop:w-80 laptop:h-80 rounded-lg bg-cover bg-center mx-5" style={{ backgroundImage:`url(${slides[currentIndex]})` }}>
      </div>
      {mouseEnter && <div className="hidden absolute tablet:w-80 tablet:h-[400px] laptop:w-[450px] laptop:top-52 tablet:left-16 tablet:top-48 tablet:flex   bg-white border-[1px] w-[420px] desktop:h-[450px] desktop:top-44  desktop:left-56  p-32 overflow-hidden shadow-md">
        <div className="absolute bg-white-300 w-[320px] h-[320px] rounded-lg  bg-cover bg-center scale-[2] tablet:h-[320px] tablet:top-2 tablet:left-0 top-10 left-0 " style={{transformOrigin:`${xPosition}px ${yPosition}px` , backgroundImage: `url(${slides[currentIndex]})` }}></div></div>}
      <div onClick={goToPrevious} className="cursor-pointer p-3 shadow-lg	rounded-full" >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 32 32"
      style={{ width: 15, height: 15 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#1A1C23"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
    </svg>
      </div>
        </div>
      <div className="flex justify-center my-5 gap-5">
        {slides.map((slide, slideIndex) => (
          <div className="flex justify-center items-center border-[1px] rounded-sm  cursor-pointer ">
        <div className="  mx-1 w-[58px] h-[58px]  bg-cover " onClick={()=>goToSlide(slideIndex)} key={slideIndex}
        style={{ backgroundImage:`url(${slides[slideIndex]})` }}
        ></div>
        </div> ))}
      </div>
    </div>
  );
};

export default ImageSlider;



// style={{ backgroundImage: `url(${slides[currentIndex]})` }}