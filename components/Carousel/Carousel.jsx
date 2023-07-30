"use client";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { ProductItemCard } from "../ProductItemCard";
import Link from "next/link";
import clsx from "clsx";

export const Carousel = ({ products, className }) => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 236;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 236;
  };

  return (
    <div className={clsx("relative w-full h-full", className)}>
      <div
        id="content"
        className="carousel flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide h-full"
      >
        {products.map(({ images, name, quantity, discount, price, id }) => {
          return (
            <div key={id} className="ml-3">
              <ProductItemCard
                name={name}
                quantity={quantity}
                discount={discount}
                price={price}
                images={images}
              />
            </div>
          );
        })}
        <Link href={"/"}>
          <div className="bg-white text-black w-48 h-[360px] rounded ">
            <div className="w-full h-full flex items-center justify-center">
              <p className=" font-iransans underline">لینک های بیشتر</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="absolute right-0 top-1/2">
        <button
          onClick={scrollRight}
          className="p-2 m-2 rounded-full bg-blue-600 shadow-snp-primary text-snp-white"
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="absolute left-0 top-1/2 ">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 rounded-full bg-blue-600 shadow-snp-primary text-snp-white"
        >
          <FiChevronLeft />
        </button>
      </div>
    </div>
  );
};
