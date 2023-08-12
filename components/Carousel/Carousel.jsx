"use client";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";
import { useCallback, useRef } from "react";
import ProductItemCard from "../common/ProductItemCard";

export const Carousel = ({
  products,
  className,
  space,
  cartClassName,
  imageClass,
  link,
}) => {
  const scroll = useRef(null);
  const scrollLeft = useCallback(() => {
    scroll.current.scrollLeft -= 240;
  }, [scroll]);
  const scrollRight = useCallback(() => {
    scroll.current.scrollLeft += 240;
  }, [scroll]);

  return (
    <div
      className={clsx(
        "relative w-full transition-all duration-400 overflow-hidden ",
        className
      )}
    >
      <div
        ref={scroll}
        className=" flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide  h-full"
      >
        {products.map((product) => {
          return (
            <div key={product.id} className={space}>
              <ProductItemCard
                product={product}
                cartClassName={cartClassName}
                imageClass={imageClass}
              />
            </div>
          );
        })}
        {link == undefined ? (
          <Link href={"/campaigns/discount"}>
            <div className="bg-white text-black w-48 h-[356px] rounded ">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-sm text-snp-secondary font-iransans underline">
                  مشاهده بیشتر
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <Link href={`/subcategories/${link}`}>
            <div className="bg-white text-black w-48 h-[356px] rounded ">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-sm text-snp-secondary font-iransans underline">
                  مشاهده بیشتر
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="absolute right-3 top-[43%]">
        <button
          onClick={scrollRight}
          className="p-2 m-2 rounded-full bg-snp-primary text-snp-white"
          style={{
            boxShadow: "rgba(56, 88, 241, 0.65) 0px 0.5rem 4rem 0.4rem",
          }}
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="absolute left-3 top-[43%] ">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 rounded-full bg-snp-primary  text-snp-white"
          style={{
            boxShadow: "rgba(56, 88, 241, 0.65) 0px 0.5rem 4rem 0.4rem",
          }}
        >
          <FiChevronLeft />
        </button>
      </div>
    </div>
  );
};

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
