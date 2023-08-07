import React, { useCallback, useState } from "react";
import Image from "next/image";
import headerbanner from "../../public/assets/images/header-banner.png";
import logo from "../../public/assets/images/snappmarket-logo.svg";
import marketlogo from "../../public/assets/images/market-logo.jpg";
import clock from "../../public/assets/images/clock-icon.svg";
import delivery from "../../public/assets/images/delivery-icon.svg";
import { SearchBar } from "./SearchBar";
import { UserProfile } from "./UserProfile";
import Button from "../button/Button";
import { CategoriesMenu } from './CategoriesMenu';
import Link from "next/link";
import { ShoppingCard } from "./ShoppingCard";


export const HeaderEx =  ({categoryItems ,searchItem, subCategory}) => {
  
  const [showUserProfile, setShowUserProfile] = useState(false);
  const userProfileHandler = useCallback(() => {
    setShowUserProfile(!showUserProfile);
  }, [showUserProfile]);

  const [showcategory, setShowCategory] = useState(false);
  const categoryleHandler = useCallback(() => {
    setShowCategory(!showcategory);
  }, [showcategory]);

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
              <Link href={'/'}><Image alt="snappmarket-logo" className="h-full w-12 tablet:w-14" src={logo}></Image></Link>

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
              <UserProfile headerId={"HeaderEx"} clickHandler={userProfileHandler} showUserProfile={showUserProfile}  />
              <div className="hidden tablet:block">
                {/* <Button btnStyleparam={"cart"} >سبد خرید</Button> */}
                <ShoppingCard cartHandler={cartHandler} showCart={showCart}/>
              </div>
            </div>
          </div>
        </div>

        {/* middle row container */}
        <div className="flex justify-center  ">
          <div className="flex  flex-col items-start  p-2 w-144 h-32 border-b border-snp-lightgray border-opacity-25 tablet:w-192 tablet:flex-row tablet:justify-between tablet:border-none tablet:h-24 laptop:w-248 desktop:w-300">
            {/* market detail */}
            <div className="flex items-center justify-center mt-4 ">
              <Image alt="market-logo"
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
                <Image alt="clock-icon"
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
                  <Image alt="delivery-icon"
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
            <div className="hidden tablet:block">
              {/* <Button btnStyleparam={"categories"}>دسته‌بندی‌ها</Button> */}
              <CategoriesMenu showToggle={showcategory} categoryItems={categoryItems} clickHandler={categoryleHandler}/>

            </div>
            {/* Search box */}
            <SearchBar device={"mobile"} searchItem={searchItem} categoryItems={categoryItems} subCategory={subCategory}/>
          </div>
        </div>
      </div>

      {/* navbar menu */}

      {/* <div className="flex justify-center w-full bg-white fixed bottom-0 sm:hidden">
        <div className="flex justify-around w-144 h-22 px-2 pt-4 pb-5">
          <div className="w-14  flex flex-col justify-center items-center font-iransansl">
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
          <div className="w-18 flex flex-col justify-center items-center font-iransansl">
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

          <div className="w-16 flex flex-col justify-center items-center font-iransansl">
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
          </div>
        </div>
      </div> */}
    </div>
  );
};
