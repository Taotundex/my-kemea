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

const HeaderPublish = () => {
  return (
    <div className="w-full bg-white border-b-2 border-[#0047FF40]">
        <div className="navbar bg-base-100 container">
            <div className="navbar-start ">
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
            <div className="navbar-end flex gap-5">
                <button className="text-[14px] text-[#1D234E] font-medium border border-[#DDDDDD] bg-white px-[18px] py-[10px] rounded-full">Save & Exit</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderPublish
