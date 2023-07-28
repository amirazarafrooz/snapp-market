"use client";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

export const Swipper = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      grabCursor: true,
      navigation: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      injectStyles: [
        ` 
          .swiper-button-next,
          .swiper-button-prev {
            color:white;
            background-color: rgb(35, 71, 251);
            border-radius: 50%;
            box-shadow: rgba(56, 88, 241, 0.65) 0px 0.5rem 4rem 0.4rem;
            width: 2.25rem;
            height: 2.25rem;
          }
          .swiper-button-prev svg {
            height:16px;
          }
          .swiper-button-next svg {
            height:16px;
          }
          .swiper-button-disabled {
            opacity: 0 !important;
          }
          `,
      ],
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperElRef} autoHeight={true} init="false">
      <swiper-slide>
        <div className="bg-white text-black w-48 h-[360px] rounded ">
          <div className="w-full h-full flex items-center justify-center">
            <a href="#">
              <p className=" font-iransans">لینک های بیشتر</p>
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};
