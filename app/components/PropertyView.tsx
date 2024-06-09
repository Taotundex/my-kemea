import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Elastic.module.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PropertyView = () => {
  return (
    <div className="card">
      <div className="upper-img relative">
        <Link href="description" className="img">
          {/* <Carousel breakPoints={breakPoints}>
            {[].map((item) => (
              <div >
                <div>
                  <h3>""</h3>
                </div>
              </div>
            ))}
          </Carousel> */}
          <img
            src="/images/property-img.png"
            width="80%"
            className="rounded-xl size-full"
            alt=""
          />
        </Link>
        <div className="reaction cursor-pointer w-full px-5 absolute top-4 left-0 flex justify-end z-100">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 18.9998C17.25 15.4523 22.5 11.4998 22.5 6.24979C22.502 5.55979 22.3675 4.87621 22.1044 4.23836C21.8413 3.60051 21.4546 3.02096 20.9667 2.53306C20.4788 2.04516 19.8993 1.65852 19.2614 1.39539C18.6236 1.13225 17.94 0.997808 17.25 0.999788C15.9 0.999788 14.565 1.50979 13.5375 2.53729L12 4.07479L10.4625 2.53729C9.976 2.04793 9.39754 1.65958 8.76041 1.39459C8.12328 1.12959 7.44005 0.993164 6.75 0.993164C6.05996 0.993164 5.37673 1.12959 4.7396 1.39459C4.10247 1.65958 3.52401 2.04793 3.0375 2.53729C2.54934 3.02434 2.16222 3.60304 1.89837 4.24014C1.63452 4.87725 1.49914 5.56021 1.5 6.24979C1.5 11.4998 6.75 15.4523 12 18.9998Z"
              fill="black"
              fill-opacity="0.5"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="details py-3">
        <h4 className="text-base font-medium text-[#222222]">
          Cottage - Eliezer Yaffe St.
        </h4>
        <h5 className="font-normal text-base text-[#191C1F] ">
          Ra’anana, Israël
        </h5>
        <p className="text-[#75808A] font-normal text-sm ">
          150 m² - 3 rooms - 1 parking{" "}
        </p>
        <h2 className="text-lg font-bold text-[#191C1F]">22 700 000 ₪</h2>
        <button className="bt flex gap-2 items-center btn-sm mt-3 max-h-11 min-h-11 font-normal text-base rounded-full border-black border bg-white hover:bg-black hover:text-white hover:image-white">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="style=linear">
              <g id="call">
                <path
                  id="vector"
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </g>
            </g>
          </svg>
          Show phone number
        </button>
      </div>
    </div>
  );
};

export default PropertyView;
