"use client";
import React, { useMemo } from "react";
import { useState, useCallback } from "react";
import CategoriesMenu from "./CategoriesMenu";
import { useSelector } from "react-redux";
import { CategoriesMenuModal } from "./modal/CategoriesMenuModal";
import { NavbarMobileProduct } from "./NavbarMobileProduct";
import { ShoppingCartModal } from "./modal/ShoppingCartModal";
import { ShoppingCard } from "./ShoppingCart";
import Link from "next/link";
import { efarsi } from "@/utils/efarsi";

export const NavbarMobile = ({ categoryItems, productId, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlemodal = (event) => {
    event.stopPropagation();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const cart = useSelector((store) => store.cart);
  const cartCount = useMemo(
    () => cart.reduce((init, cur) => (init += cur.count), 0),
    [cart]
  );

  const [shopOpen, setShopOpen] = useState(false);
  const handlemodalShop = (event) => {
    event.stopPropagation();
  };
  const handleCloseShop = () => {
    setShopOpen(false);
  };

  return (
    <div className="flex justify-center">
      {/* navbar menu-mobile */}
      {productId ? (
        <div className="flex justify-center w-full bg-snp-white border-t-[1px] fixed bottom-0  tablet:hidden laptop:hidden desktop:hidden z-[200]">
          <div className="flex justify-around w-full h-22 px-6 pt-4 pb-5">
            <div className="w-full  flex flex-col justify-center items-center font-iransansl cursor-pointer">
              <NavbarMobileProduct productId={productId} products={products} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full bg-snp-white fixed bottom-0  tablet:hidden laptop:hidden desktop:hidden z-[200]">
          <div className="flex justify-around w-144 h-22 px-2 pt-4 pb-5">
            <Link href={"/"}>
              {" "}
              <div className="w-14  flex flex-col justify-center items-center font-iransansl cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  color="gray"
                  viewBox="0 0 20 19"
                >
                  <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M16.502 17.004a.5.5 0 00.5-.5V7.398c0-.058.005-.114.014-.17l-6.44-4.208c-.576-.38-.576-.38-1.148 0l-6.44 4.21c.009.055.014.111.014.17v9.105a.5.5 0 00.5.5h3.5v-6a1 1 0 011-1h4a1 1 0 011 1v6h3.5zm2.5-.5a2.5 2.5 0 01-2.5 2.5h-4.5a1 1 0 01-1-1v-6h-2v6a1 1 0 01-1 1h-4.5a2.5 2.5 0 01-2.5-2.5V8.398c-.978 0-1.375-1.258-.574-1.82l7.853-5.196C10 .139 10 .139 11.723 1.382l7.853 5.197c.801.56.405 1.82-.573 1.82v8.105z"
                  ></path>
                </svg>
                <span>خانه</span>
              </div>
            </Link>
            <CategoriesMenuModal handleClose={handleClose} isOpen={isOpen}>
              <CategoriesMenu
                handleClose={handleClose}
                categoryItems={categoryItems}
                handlemodal={handlemodal}
              />
            </CategoriesMenuModal>
            <div
              className="w-18 flex flex-col justify-center items-center font-iransansl cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 32 32"
                style={{ width: 20, height: 20 }}
              >
                <defs>
                  <symbol id="GridOutlineIcon" viewBox="0 0 32 32">
                    <path d="M3.875 2.098c-.684.187-1.355.77-1.676 1.449l-.168.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184h8.75l.36-.168c.417-.196.976-.7 1.202-1.086.344-.59.348-.652.332-5.133l-.02-4.113-.198-.422a2.866 2.866 0 00-1.317-1.317l-.422-.199-4.156-.011c-3.512-.012-4.21 0-4.5.078m15.426.02a2.797 2.797 0 00-1.602 1.429l-.168.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184 4.281.015c4.77.02 4.57.036 5.242-.41.399-.261.828-.816.988-1.277.106-.305.114-.621.114-4.578v-4.25l-.2-.422a2.866 2.866 0 00-1.316-1.317l-.422-.199-4.187-.011c-3.907-.016-4.211-.008-4.543.097M12.16 4.34l.152.156v3.77c0 3.683-.004 3.777-.126 3.906-.19.207-.285.21-4.14.191l-3.606-.02-.144-.14-.14-.144-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153m15.5 0l.152.156v3.777c0 3.625-.003 3.782-.12 3.922l-.118.149H19.94l-.144-.14-.14-.145-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153M3.8 17.617a2.797 2.797 0 00-1.6 1.43l-.169.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184h8.75l.36-.168c.417-.196.976-.7 1.202-1.086.344-.59.348-.652.332-5.133l-.02-4.113-.198-.422a2.866 2.866 0 00-1.317-1.317l-.422-.199-4.187-.011c-3.906-.016-4.211-.008-4.543.097m15.5 0a2.797 2.797 0 00-1.602 1.43l-.168.36v8.75l.184.374c.234.48.773 1.02 1.254 1.254l.375.184 4.281.015c4.77.02 4.57.036 5.242-.41.399-.262.828-.816.988-1.277.106-.305.114-.621.114-4.578v-4.25l-.2-.422a2.866 2.866 0 00-1.316-1.317l-.422-.199-4.187-.011c-3.907-.016-4.211-.008-4.543.097m-7.14 2.223l.152.156v3.77c0 3.683-.004 3.777-.126 3.906-.19.207-.285.21-4.14.191l-3.606-.02-.144-.14-.14-.144-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153m15.5 0l.152.156v3.777c0 3.625-.003 3.782-.12 3.922l-.118.149h-7.633l-.144-.14-.14-.145-.02-3.606c-.02-3.812-.012-3.953.18-4.144.117-.118.242-.122 3.906-.122h3.78l.157.153"></path>
                  </symbol>
                </defs>
                <use href="#GridOutlineIcon" xlinkHref="#GridOutlineIcon"></use>
              </svg>

              <span>دسته بندی ها</span>
            </div>

            <ShoppingCartModal
              handleCloseShop={handleCloseShop}
              shopOpen={shopOpen}
            >
              <ShoppingCard
                handleCloseShop={handleCloseShop}
                handlemodalShop={handlemodalShop}
              />
            </ShoppingCartModal>

            <div
              onClick={() => setShopOpen(true)}
              className="w-16 flex flex-col justify-center items-center font-iransansl cursor-pointer relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#202332"
                    d="M10 23a2 2 0 11-.001-3.999A2 2 0 0110 23zm7 0a2 2 0 11-.001-3.999A2 2 0 0117 23zM4.208 4H2a1 1 0 010-2h3a1 1 0 01.973.771L6.733 6H21a1 1 0 01.977 1.212l-1.596 7.373A2.994 2.994 0 0117.4 17H9.7c-1.454.028-2.718-.99-2.993-2.381L4.208 4zm2.995 4l1.458 6.195c.094.475.516.814 1.019.805h7.74c.483.01.905-.33 1.003-.822L19.76 8H7.203z"
                  ></path>
                </g>
              </svg>
              <span>سبد خرید</span>
              <span className=" absolute -top-2 left-3 w-5 h-5 bg-snp-primaryh text-snp-white rounded-full text-center text-sm ">
                {efarsi(cartCount)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
