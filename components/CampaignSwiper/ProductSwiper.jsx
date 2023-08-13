"use client";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { ProductItemCard } from "../ProductItemCard";
import Link from "next/link";

register();

export const ProductSwiper = ({ products }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      grabCursor: true,
      navigation: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        460: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 10,
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
    <div className="w-[70%] mx-auto xs:w-full sm:w-[75%] md:w-[95%]">
      <swiper-container ref={swiperElRef} init="false">
        {products
          .filter((product) => product.category.sub === "شیر")
          .map(({ images, name, quantity, discount, price, id }) => {
            return (
              <swiper-slide key={id}>
                <ProductItemCard
                  name={name}
                  quantity={quantity}
                  discount={discount}
                  price={price}
                  images={images}
                />
              </swiper-slide>
            );
          })}

        <swiper-slide>
          <Link href={"/"}>
            <div className="bg-white text-black w-48 h-[352px] rounded ">
              <div className="w-full h-full flex items-center justify-center">
                <p className=" font-iransans underline">لینک های بیشتر</p>
              </div>
            </div>
          </Link>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};