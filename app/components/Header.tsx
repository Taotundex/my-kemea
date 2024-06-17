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

const Header = () => {
  return (
    // <div className="w-full bg-white border-b-[0.2px] border-[#75808A]">
    //   <div className="navbar bg-base-100 container">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //         </div>
    //         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[300px]">
    //           <li>
    //             <a>Buy</a>
    //             <ul className="p-2">
    //               <li><Link href='/'>Home for sales</Link></li>
    //               <li><Link href='/buy/new-project'>New Projects</Link></li>
    //               <li><Link href='/buy/exceptional-properties'>Exceptional properties</Link></li>
    //               <li><Link href='/kemea'>My kemea - assisted search services</Link></li>
    //               <li><Link href='/affordability-calculator'>Affordability calculator</Link></li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a>Rent</a>
    //             <ul className="p-2">
    //               <li><Link href='/'>Home for rent</Link></li>
    //               <li><Link href='/buy/new-project'>Short Term rent</Link></li>
    //               <li><Link href='/buy/exceptional-properties'>Exceptional properties</Link></li>
    //               <li><Link href='/kemea'>My kemea - assisted search services</Link></li>
    //             </ul>
    //           </li>
    //           <li><Link href='/kemea'>My kemea</Link></li>
    //           <li>
    //             <a>Promote with us</a>
    //             <div className="grid grid-cols-2">
    //               <ul className="p-2">
    //                 <h5>Landlords</h5>
    //                 <li><Link href='/promote/sell-out'>Sell out</Link></li>
    //                 <li><Link href='/promote/rent-out'>Rent out</Link></li>
    //               </ul>
    //               <ul className="p-2">
    //                 <h5>Real Estate/Professionals</h5>
    //                 <li><Link href='/signup/pro'>Create a free account</Link></li>
    //               </ul>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex gap-1 text-xl">
    //         <Image
    //             src="/kemea-logo.svg"
    //             alt="Vercel Logo"
    //             className="dark:invert mr-2"
    //             width={20}
    //             height={20}
    //             priority
    //         />
    //         <div className="font-medium text-[20px] text-[#1D234E]">Kemea</div>
    //       </div>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //         <li>
    //           <details>
    //             <summary>Buy</summary>
    //             <ul className="p-2 w-[322px]">
    //               <li><Link href='/'>Home for sales</Link></li>
    //               <li><Link href='/buy/new-project'>New Projects</Link></li>
    //               <li><Link href='/buy/exceptional-properties'>Exceptional properties</Link></li>
    //               <li><Link href='/kemea'>My kemea - assisted search services</Link></li>
    //               <li><Link href='/affordability-calculator'>Affordability calculator</Link></li>
    //             </ul>
    //           </details>
    //         </li>
    //         <li>
    //           <details>
    //             <summary>Rent</summary>
    //             <ul className="p-2 w-[322px]">
    //               <li><Link href='/'>Home for rent</Link></li>
    //               <li><Link href='/buy/new-project'>Short Term rent</Link></li>
    //               <li><Link href='/buy/exceptional-properties'>Exceptional properties</Link></li>
    //               <li><Link href='/kemea'>My kemea - assisted search services</Link></li>
    //             </ul>
    //           </details>
    //         </li>
    //         <li><Link href='/kemea'>My kemea</Link></li>
    //         <li>
    //           <details>
    //             <summary>Promote with us</summary>
    //               <ul className="p-2 grid grid-cols-2 w-[300px]">
    //                 <li>
    //                   <b>Landlords</b>
    //                   <p><Link href='/promote/sell-out'>Sell out</Link></p>
    //                   <p><Link href='/promote/rent-out'>Rent out</Link></p>
    //                 </li>
    //                 <li>
    //                   <b>Real Estate/Professionals</b>
    //                   <p><Link href='/signup/pro'>Create a free account</Link></p>
    //                 </li>
    //               </ul>
    //             </details>
    //           <a></a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="navbar-end">
    //       <a className="btn">Button</a>
    //     </div>
    //   </div>
    // </div>



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
              <Link href="/buy/exceptional-properties">
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  Exceptional properties
                </MenubarItem>
              </Link>
              <Link href="/kemea">
                <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
                  My Kemea - assisted search services
                </MenubarItem>
              </Link>
              <Link href="/buy/affordability-calculator">
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
              <Link href='/rent/exceptional-properties'>
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
          <Link href='/login/user'>
            <button className="btn rounded-full h-0 min-h-[42px] px-7 font-normal bg-white shadow-none border-none">
              Log in
            </button>
          </Link>

          <Link href='/signup/user'>
            <button className="btn hover:bg-primary text-white rounded-full h-0 min-h-[42px] px-7 font-normal bg-primary">
              Sign up
            </button>
          </Link>
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
