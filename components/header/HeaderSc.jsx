import React from "react";
import Image from "next/image";
import headerbanner from "../../public/assets/images/header-banner.png";
import logo from "../../public/assets/images/snappmarket-logo.svg";
import marketlogo from "../../public/assets/images/market-logo.jpg";
import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import { SearchResult } from "./SearchResult";
import { UserProfile } from "./UserProfile";
import Button from "../button/Button";
import { useState, useCallback } from "react";
import { ShoppingCard } from "./ShoppingCart";
import { ShoppingCartModal } from "./modal/ShoppingCartModal";
import { UserProfileModal } from "./modal/UserProfileModal";
import { SearchResultModalDowm } from "./modal/SearchResultModalDown";
import { SearchBar } from "./SearchBar";
import { SearchResultModalTablet } from "./modal/SearchResultModalTablet";

export const HeaderSc = ({ categoryItems, searchItem, subCategory }) => {
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

  const [showUserProfile, setShowUserProfile] = useState(false);

  const userProfileHandler = useCallback(() => {
    setShowUserProfile(!showUserProfile);
  }, [showUserProfile]);

  const [showCart, setShowCart] = useState(false);
  const cartHandler = useCallback(() => {
    setShowCart(!showCart);
  }, [showCart]);

  const [searchDownOpen, setSearchDownOpen] = useState(false);
  const handlemodalSearchDown = (event) => {
    event.stopPropagation();
  };
  const handleCloseSearchDown = () => {
    setSearchDownOpen(false);
  };

  const [searchterm, setSearchterm] = useState("");
  const handleChange = useCallback((e) => {
    setSearchterm(e.target.value);
    setSearchDownOpen(!searchDownOpen);
  }, []);

  const [searchTabletOpen, setSearchTabletOpen] = useState(false);
  const handlemodalSearchTablet = (event) => {
    event.stopPropagation();
  };
  const handleCloseSearchTablet = () => {
    setSearchTabletOpen(false);
  };

  const [searchtermTablet, setSearchtermTablet] = useState("");
  const handleChangeTablet = useCallback((e) => {
    setSearchtermTablet(e.target.value);
    setSearchTabletOpen(!searchTabletOpen);
  }, []);

  return (
    <div>
      {/* main container */}
      <div
        className="w-full h-28 overflow-hidden p-2 tablet:h-16 "
        style={{
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundImage: `url(${headerbanner.src})`,
        }}
      >
        {/*  upper row container  */}
        <div className="flex justify-center tablet:items-center tablet:flex tablet:h-full  ">
          <div className="w-144 h-12 flex border-b border-snp-lightgray border-opacity-25 justify-between px-2 pt-[2px] pb-[10px]  tablet:p-2 tablet:border-none tablet:justify-between tablet:w-192 laptop:w-248 desktop:w-300">
            {/* right container */}
            <div className="flex  tablet:justify-start tablet:w-full desktop:justify-between ">
              {/* logo */}
              <Link href={"/"}>
                <Image
                  alt="snappmarket-logo"
                  className="h-full w-12 tablet:w-14  "
                  src={logo}
                ></Image>
              </Link>

              {/* location container */}
              <div className="desktop:flex items-center p-2 hidden tablet:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6 ml-2 desktop:w-4 desktop:h-4"
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

                <span className=" desktop:text-snp-light desktop:truncate desktop:block desktop:font-iransansl desktop:text-xs  desktop:w-32">
                  انقلاب، انقلاب اسلامی، ابوریحان، مير هادى، نانوایی سنگکی پلاک
                  22 واحد 22
                </span>
              </div>

              {/* market detail */}
              <div className="flex items-center justify-center mr-2 tablet:w-48 ">
                <Image
                  alt="market-logo"
                  className="w-6 h-6 rounded-full ml-2 p-1 tablet:w-10 tablet:h-10 laptop:w-11 laptop:h-11 "
                  src={marketlogo}
                ></Image>
                <span className="font-iransans text-xs text-snp-light tablet:whitespace-nowrap">
                  <span className="hidden font-iransans text-snp-light tablet:inline-block">
                    خرید از
                  </span>{" "}
                  هایپر استار صبا
                </span>
              </div>
            </div>

            {/* left container */}
            <div className="tablet:flex flex items-center tablet:justify-around tablet:items-center tablet:w-full  ">
              {/* Search box */}
              <SearchResultModalTablet searchTabletOpen={searchTabletOpen} handleCloseSearchTablet={handleCloseSearchTablet}>
            <SearchResult
               device={"tablet+"}
               searchItem={searchItem}
               searchterm={searchtermTablet}
               categoryItems={categoryItems}
               subCategory={subCategory}
               handlemodalSearch={handlemodalSearchTablet}
            />
          </SearchResultModalTablet>
          <div
              className="hidden  tablet:w-64 tablet:flex  tablet:items-center  tablet:p-2 laptop:w-52 desktop:w-96"
              // onClick={() => setSearchOpen(true)}
            >
              <SearchBar handleChange={handleChangeTablet}/>
            </div>

              {/* user info */}
              <UserProfileModal
                handleCloseUser={handleCloseUser}
                userOpen={userOpen}
              >
                <UserProfile handlemodalUser={handlemodalUser} />
              </UserProfileModal>
              <div
                className=""
                onClick={() => setUserOpen(true)}
              >
                <Button btnStyleparam={"HeaderSc"} />
              </div>

              {/* button cart  */}
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

        {/* Lower row container */}
        <div className=" flex justify-center items-center h-14 tablet:w-full tablet:hidden laptop:hidden desktop:hidden ">
          <div className="flex  items-center   w-144 tablet:justify-start  tablet:w-192 laptop:w-248 desktop:w-300">
            {/* Search box */}

            <SearchResultModalDowm searchDownOpen={searchDownOpen} handleCloseSearchDown={handleCloseSearchDown}>
            <SearchResult
              device={"mobile"}
              subDevice={"mobiledown"}
              searchterm={searchterm}
              searchItem={searchItem}
              categoryItems={categoryItems}
              subCategory={subCategory}
              handlemodalSearch={handlemodalSearchDown}
            />
          </SearchResultModalDowm>
          <div
              className=" flex flex-col items-start justify-start  px-2 w-full laptop:hidden "
              // onClick={() => setSearchOpen(true)}
            >
              <SearchBar handleChange={handleChange}/>
            </div>


          </div>
        </div>
      </div>

      {/* navbar menu-scrolled */}
      <HeaderNav categoryItems={categoryItems} />
    </div>
  );
};
