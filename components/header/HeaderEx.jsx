import React, { useCallback, useState } from "react";
import Image from "next/image";
import headerbanner from "../../public/assets/images/header-banner.png";
import logo from "../../public/assets/images/snappmarket-logo.svg";
import marketlogo from "../../public/assets/images/market-logo.jpg";
import clock from "../../public/assets/images/clock-icon.svg";
import delivery from "../../public/assets/images/delivery-icon.svg";
import { SearchResult } from "./SearchResult";
import { UserProfile } from "./UserProfile";
import Button from "../button/Button";
import { CategoriesMenu } from "./CategoriesMenu";
import Link from "next/link";
import { ShoppingCard } from "./ShoppingCart";
import { CategoriesMenuModal } from "./modal/CategoriesMenuModal";
import { ShoppingCartModal } from "./modal/ShoppingCartModal";
import { UserProfileModal } from "./modal/UserProfileModal";
import { SearchResultModal } from "./modal/SearchResultModal";
import { SearchBar } from "./SearchBar";

export const HeaderEx = ({ categoryItems, searchItem, subCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlemodal = (event) => {
    event.stopPropagation();
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const [shopOpen, setShopOpen] = useState(false);
  const handlemodalShop = (event) => {
    event.stopPropagation();
  };
  const handleCloseShop = () => {
    setShopOpen(false);
  };

  const [userOpen, setUserOpen] = useState(false);
  const handlemodalUser = (event) => {
    event.stopPropagation();
  };
  const handleCloseUser = () => {
    setUserOpen(false);
  };


  const [searchOpen, setSearchOpen] = useState(false);
  const handlemodalSearch = (event) => {
    event.stopPropagation();
  };
  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  const [searchterm, setSearchterm] = useState("");
  const handleChange = useCallback((e) => {
    setSearchterm(e.target.value);
    setSearchOpen(!searchOpen);
  }, []);


  const [showUserProfile, setShowUserProfile] = useState(false);
  const userProfileHandler = useCallback(() => {
    setShowUserProfile(!showUserProfile);
  }, [showUserProfile]);

  const [showCart, setShowCart] = useState(false);
  const cartHandler = useCallback(() => {
    setShowCart(!showCart);
  }, [showCart]);

  return (
    <div>
      {/* main container */}
      {/* overflow-hidden */}

      <div
        className="w-full h-64 p-2 tablet:h-56"
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundImage: `url(${headerbanner.src})`,
        }}
      >
        {/*  upper row container  */}
        <div className="flex justify-center ">
          <div className="w-144 h-12 flex  border-b border-snp-lightgray border-opacity-25 justify-between px-2 pt-[2px] pb-[10px] tablet:w-192 laptop:w-248 desktop:w-300">
            {/* right column */}
            <div className="flex">
              {/* logo */}
              <Link href={"/"}>
                <Image
                  alt="snappmarket-logo"
                  className="h-full w-12 tablet:w-14"
                  src={logo}
                ></Image>
              </Link>

              {/* location container */}
              <div className="flex w-[70%] items-center p-2 tablet:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span className=" text-snp-light w-36 truncate block font-iransansl text-xs tablet:w-60  ">
                  ارسال به تهران، فلسطین - انقلاب، انقلاب اسلامی، ابوریحان، مير
                  هادى، نانوایی سنگکی پلاک 22 واحد 22
                </span>
              </div>
            </div>
            {/* userProfile and cartBtn container */}
            <div className="flex items-center">
              {/* user info  */}
              <UserProfileModal
                handleCloseUser={handleCloseUser}
                userOpen={userOpen}
              >
                <UserProfile handlemodalUser={handlemodalUser} />
              </UserProfileModal>
              <div
                className=" hidden tablet:block"
                onClick={() => setUserOpen(true)}
              >
                <Button btnStyleparam={"HeaderEx"} />
              </div>

              <div className="hidden tablet:block">
                <ShoppingCartModal
                  handleCloseShop={handleCloseShop}
                  shopOpen={shopOpen}
                >
                  <ShoppingCard
                    handleCloseShop={handleCloseShop}
                    cartHandler={cartHandler}
                    showCart={showCart}
                    handlemodalShop={handlemodalShop}
                  />
                </ShoppingCartModal>
                <div
                  className=" hidden tablet:block"
                  onClick={() => setShopOpen(true)}
                >
                  <Button btnStyleparam={"cart"}>سبد خرید</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* middle row container */}
        <div className="flex justify-center  ">
          <div className="flex  flex-col items-start  p-2 w-144 h-32 border-b border-snp-lightgray border-opacity-25 tablet:w-192 tablet:flex-row tablet:justify-between tablet:border-none tablet:h-24 laptop:w-248 desktop:w-300">
            {/* market detail */}
            <div className="flex items-center justify-center mt-4 ">
              <Image
                alt="market-logo"
                className="w-8 h-8 rounded-full ml-2 p-1 tablet:w-14 tablet:h-14 laptop:w-16 laptop:h-16 "
                src={marketlogo}
              ></Image>
              <span className="font-iransansb text-sm text-snp-light">
                <span className="font-iransans text-snp-light">خرید از</span>{" "}
                هایپر استار صبا
              </span>
            </div>
            {/* market caption */}
            <div className="flex justify-between  w-72 mt-4 tablet:flex-col tablet:w-40 tablet:mt-12 laptop:w-64">
              <div className="tablet:flex tablet:mb-4">
                <Image
                  alt="clock-icon"
                  width={17}
                  height={17}
                  src={clock}
                  className="hidden tablet:block tablet:ml-2"
                ></Image>
                <span className="inline-block w-28 font-iransans text-snp-light text-xs ">
                  ظرفیت تکمیل!
                </span>
              </div>
              <div className="flex flex-col">
                <div className="tablet:flex tablet:items-start ">
                  <Image
                    alt="delivery-icon"
                    width={17}
                    height={17}
                    src={delivery}
                    className="hidden tablet:block tablet:ml-2 tablet:mt-1"
                  ></Image>
                  {/* <div className="tablet:flex tablet:flex-col"> */}
                  <span className="font-iransans text-snp-light text-xs tablet:w-36 tablet:leading-6 laptop:w-full">
                    ارسال رایگان برای سفارش بالای ۲۲۰.۰۰۰ تومان
                  </span>
                  {/* <span className="font-iransans text-snp-light text-xs tablet:mt-1">
             
              </span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower row container */}
        <div className=" flex justify-center tablet:w-full ">
          <div className="flex  items-start  p-2 w-144 tablet:justify-start  tablet:w-192 laptop:w-248 desktop:w-300">
            {/* Category btn */}
            <div className="hidden tablet:block"></div>

            <CategoriesMenuModal handleClose={handleClose} isOpen={isOpen}>
              <CategoriesMenu
                categoryItems={categoryItems}
                handlemodal={handlemodal}
                handleClose={handleClose}
              />
            </CategoriesMenuModal>
            <div
              className=" hidden tablet:block"
              onClick={() => setIsOpen(true)}
            >
              <Button btnStyleparam={"categories"}>دسته‌بندی‌ها</Button>
            </div>

            {/* Search box */}
            <SearchResultModal searchOpen={searchOpen} handleCloseSearch={handleCloseSearch}>
            <SearchResult
              device={"mobile"}
              searchterm={searchterm}
              searchItem={searchItem}
              categoryItems={categoryItems}
              subCategory={subCategory}
            />
          </SearchResultModal>
          <div
              className="w-full tablet:block px-2"
              // onClick={() => setSearchOpen(true)}
            >
              <SearchBar handleChange={handleChange}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
