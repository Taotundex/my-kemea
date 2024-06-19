import Image from "next/image";
import Link from "next/link";
import { PiListLight } from "react-icons/pi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";

const HeaderPro = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white">
        <div className="navbar bg-base-100 container">
            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost gap-1 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    {/* <Image
                        src="/kemea-logo.svg"
                        alt="Vercel Logo"
                        className="dark:invert mr-2"
                        width={20}
                        height={20}
                        priority
                    />
                    <a className="font-medium text-[20px] text-[#1D234E]">Kemea Pro</a> */}
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href='/pro' className="text-[#1D234E] text-[15px] font-normal py-3">Home</Link></li>
                    <li><Link href='plans' className="text-[#1D234E] text-[15px] font-normal py-3">My Plans</Link></li>
                    <li><Link href='profile' className="text-[#1D234E] text-[15px] font-normal py-3">Profile Page</Link></li>
                </ul>
                </div>
                    <div className="flex gap-1 text-xl">
                        <Image
                            src="/kemea-logo.svg"
                            alt="Vercel Logo"
                            className="dark:invert mr-2"
                            width={20}
                            height={20}
                            priority
                        />
                        <div className="font-medium text-[20px] text-[#1D234E]">Kemea Pro</div>
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/pro' className="text-[#1D234E] text-[15px] font-normal">Home</Link></li>
                    <li><Link href='plans' className="text-[#1D234E] text-[15px] font-normal">My Plans</Link></li>
                    <li><Link href='profile' className="text-[#1D234E] text-[15px] font-normal">Profile Page</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
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
    </div>
  )
}

export default HeaderPro
