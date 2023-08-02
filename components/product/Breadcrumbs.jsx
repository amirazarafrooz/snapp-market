"use client";
import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <nav>
      <ul className=" flex gap-1 text-[14px] ">
        <li>
          <Link className=" flex gap-1" href="/products">
            <spam className=" text-[17px]">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="home-icon"
      viewBox="0 0 32 32"
      style={{ width: 20, height: 20 }}
    >
      <defs>
        <symbol id="HomeIcon" viewBox="0 0 32 32">
          <path d="M27.014 30.354H4.998a1.023 1.023 0 01-1.024-1.024V17.92a1.02 1.02 0 01.351-.767l.001-.001 10.592-9.216a1.026 1.026 0 011.317-.023l-.002-.002 11.424 9.216c.234.189.383.476.384.797v11.41a1.024 1.024 0 01-1.024 1.019h-.003zM6.022 28.306H25.99V18.41l-10.374-8.37-9.592 8.346zm14.135 1.08a1.023 1.023 0 01-1.024-1.024v-8.384h-6.461v8.384a1.023 1.023 0 11-2.048 0v-9.408c0-.566.458-1.024 1.024-1.024h8.509c.566 0 1.024.458 1.024 1.024v9.408c0 .566-.458 1.024-1.024 1.024zm8.131-15.562a1.02 1.02 0 01-.653-.236l.002.001-12.02-9.938-11.219 9.916a1.023 1.023 0 01-1.703-.768c0-.305.133-.579.345-.767l.001-.001L14.913 1.535a1.02 1.02 0 011.332-.02l-.002-.001L28.947 12.01a1.023 1.023 0 01-.652 1.814h-.006z"></path>
        </symbol>
      </defs>
      <use fill="#1A1C23" href="#HomeIcon" xlinkHref="#HomeIcon"></use>
    </svg>
            </spam>
            <p>اسنپ مارکت</p>
          </Link>
        </li>
        <li>
          <Link className=" flex gap-0.5" href="/products/dairy">
            <spam className=" pt-2 px-1.5 text-xs text-gray-500">
               <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="icon"
      viewBox="0 0 32 32"
      style={{ width: 15, height: 15 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
    </svg>
            </spam>
            <p>لبنیات</p>
          </Link>
        </li>
        <li>
          <Link className=" flex gap-0.5" href="/products/dairy">
            <spam className=" pt-2 px-1.5 text-xs text-gray-500">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="icon"
      viewBox="0 0 32 32"
      style={{ width: 15, height: 15 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
    </svg>
            </spam>
            <p>شیر</p>
          </Link>
        </li>
        <li className=" flex gap-0.5">
          <spam className=" pt-2 px-1.5 text-xs text-gray-500">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="currentColor"
      className="icon"
      viewBox="0 0 32 32"
      style={{ width: 15, height: 15 }}
    >
      <defs>
        <symbol id="AngleLeftIcon" viewBox="0 0 32 32">
          <path d="M14.406 7.781C6.715 15.461 6.625 15.562 6.625 16s.09.539 7.77 8.219L22.176 32h.494c.483 0 .539-.034 1.606-1.1 1.718-1.718 2.302-.775-5.3-8.387-3.514-3.526-6.4-6.434-6.4-6.467s2.74-2.785 6.074-6.119c3.346-3.324 6.22-6.254 6.4-6.49.213-.292.326-.573.326-.831 0-.359-.123-.528-1.1-1.505-1.067-1.067-1.123-1.1-1.594-1.1h-.505l-7.77 7.781z"></path>
        </symbol>
      </defs>
      <use
        fill="#757575"
        href="#AngleLeftIcon"
        xlinkHref="#AngleLeftIcon"
      ></use>
    </svg>
          </spam>
          <span>شیر روزانه</span>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
