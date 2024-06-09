import React from "react";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { PiListLight } from "react-icons/pi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <div className="px-10 laptop:px-20 text-[15px] font-normal border-[#75808A] py-3 items-center border-b-[0.1px]">
      <div className="font-primary flex flex-row items-center lg:justify-normal">
        <div className="flex items-center space-x-5">
          <label
            for="my-drawer-3"
            aria-label="open sidebar"
            className="tablet:hidden border p-2 px-2 rounded-md cursor-pointer border-indigo-50 mr-5 btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
        </div>

        <Image
          src="/kemea-logo.svg"
          alt="Vercel Logo"
          className="dark:invert mr-2"
          width={20}
          height={20}
          priority
        />

        <a className="font-medium text-[1.575rem]">kemea</a>

        <Menubar className="hidden tablet:flex text-lg flex-row flex-auto space-x-7 ml-10  font-normal border-none">
          <MenubarMenu>
            <MenubarTrigger className="text-[15px] flex select-none items-center rounded-sm px-3 py-1.5 font-normal outline-none focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:underline hover:underline underline-offset-[3.8px] cursor-pointer">
              Buy
            </MenubarTrigger>
            <MenubarContent className="absolute top-[-5px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[302px]">
              <Link href="/">
                <MenubarItem className="font-normal hover:text-primary-content hover:underline">
                  Homes for sales
                </MenubarItem>
              </Link>
              <Link href="/buy/new-projects">
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  New Projects
                </MenubarItem>
              </Link>
              <Link href="">
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  Exceptional properties
                </MenubarItem>
              </Link>
              <Link href="/kemea">
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  My Kemea - assisted search services
                </MenubarItem>
              </Link>
              <Link href="/affordability-calculator">
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  Affordability calculator
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-[15px] flex select-none items-center rounded-sm px-3 py-1.5 font-medium outline-none focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:underline hover:underline underline-offset-[3px] cursor-pointer">
              Rent
            </MenubarTrigger>
            <MenubarContent className="absolute top-[-5px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[302px]">
              <Link href='/rent'>
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  Homes for rent
                </MenubarItem>
              </Link>
              <Link href='/rent/short-term-rent'>
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  Short Term rent
                </MenubarItem>
              </Link>
              <Link href=''>
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  Exceptional properties
                </MenubarItem>
              </Link>
              <Link href='/kemea'>
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  My Kemea - assisted search services
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
          <Link href='/kemea'
            className="text-[15px] hover:underline underline-offset-2"
          >
            My Kemea
          </Link>
          <Link href=''
            className="text-[15px] hover:underline underline-offset-2 hidden tablet:block"
          >
            Promote with us
          </Link>
        </Menubar>
        <div className="flex space-x-4 flex-auto justify-end">
            <Menubar className="text-[15px] flex flex-row space-x-5 items-center p-0 border-none">
                <MenubarMenu>
                  <MenubarTrigger className="p-0 font-normal flex select-none items-center rounded-sm py-1.5 outline-none focus:text-accent-foreground data-[state=open]:bg-accent cursor-pointer">
                    <div className="flex flex-row space-x-2 items-center">
                      <a className="cursor-pointer flex flex-row items-center text-md font-medium">
                        EN
                        <Image
                          src="/ic_arrow-down.svg"
                          alt="Vercel Logo"
                          className="dark:invert mr-2"
                          width={20}
                          height={20}
                          priority
                        />
                      </a>
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className="absolute shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[9.5rem]">
                    <MenubarItem className="font-normal px-2 py-1.5 text-sm outline-none focus:text-primary cursor-pointer">
                      <span className="mr-2 text-lg">🇺🇸</span>
                      English (EN)
                    </MenubarItem>
                    <MenubarItem className="font-normal px-2 py-1.5 text-sm outline-none focus:text-primary cursor-pointer">
                      <span className="mr-2 text-lg">🇮🇱</span>
                      Hebrew (HE)
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex items-center gap-2 border border-[#1D234E] rounded-[20px] p-[5px] pl-[10px]">
                    <PiListLight className="text-base" />
                    <FaUserCircle className="text-2xl" />
                </div>
                <ul tabIndex={0} className="text-[15px] flex flex-col gap-[5px] text-[#1D234E] font-normal dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[150px]">
                    <li>
                        <Link href='pro/notification'>
                            <MdOutlineNotificationsActive />
                            Notifications
                        </Link>
                    </li>
                    <li>
                        <Link href='pro/profile'>
                            <FaRegUser />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href='/logout'>
                            <MdLogout />
                            Log out
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
