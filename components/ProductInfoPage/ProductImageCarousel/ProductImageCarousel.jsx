"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CustomArrowLeft } from "./CustomArrowLeft";
import { CustomArrowRight } from "./CustomArrowRight";

export const ProductImageCarousel = ({ images }) => {
  console.log(images);
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <Image
            alt="background-slider"
            src={images[i + 1]}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrowRight />,
    prevArrow: <CustomArrowLeft />,
  };
  return (
    <div className="w-full h-full tablet:w-1/2 px-4 tablet:px-12 mb-auto">
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="h-72 tablet:h-80 laptop:h-80 border rounded "
            >
                <div className="h-5/6 mt-1">
                <Image
                  alt="background-slider"
                  src={item}
                  width={0}
                  height={0}
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    margin: '0 auto', 
                  }}
                ></Image>
                </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
