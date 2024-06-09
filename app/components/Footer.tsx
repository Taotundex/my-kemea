import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Footer = () => {
  return (
    <div className="w-screen bg-white fixed bottom-0 border-t-[0.1px] py-2 border-[#75808A]">
      <div className="container flex flex-col laptop:flex-row justify-between items-center">
        <div className="text-[15px] font-normal flex flex-wrap space-x-1 justify-center laptop:justify-start laptop:space-x-3">
          <a>© 2023 Kemea</a>
          <a className="cursor-pointer text-center">
            <span className="mr-1 laptop:mr-3">·</span>
            Confidentialité
          </a>
          <a className="cursor-pointer text-center">
            <span className="mr-1 laptop:mr-3">·</span> Conditions générales
          </a>
          <a className="cursor-pointer">
            <span className="mr-1 laptop:mr-3">·</span>Fonctionnement du site
          </a>
          <a className="cursor-pointer pr-1">
            <span className="mr-1 laptop:mr-3">·</span>Infos sur l'entreprise
          </a>
        </div>

        <Menubar className="text-[15px] flex flex-row space-x-5 items-center p-0 border-none">
          <MenubarMenu>
            <MenubarTrigger className="p-0 font-normal flex select-none items-center rounded-sm py-1.5 outline-none focus:text-accent-foreground data-[state=open]:bg-accent cursor-pointer">
              <div className="flex flex-row space-x-2 items-center">
                <svg
                  className="mr-1 w-[1.2rem] h-[1.2rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a className="cursor-pointer flex flex-row items-center">
                  Français (FR)
                </a>
              </div>
            </MenubarTrigger>
            <MenubarContent className="absolute top-[-160px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[9.5rem]">
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

          <MenubarMenu>
            <MenubarTrigger className="font-normal flex select-none items-center rounded-sm py-1.5 outline-none focus:text-accent-foreground data-[state=open]:bg-accent cursor-pointer">
              <a className="cursor-pointer">
                <span className="mr-1">₪</span>NIS
              </a>
            </MenubarTrigger>
            <MenubarContent className="absolute top-[-158px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-2 p-3 font-light border-none rounded-xl min-w-[6.5rem]">
              <MenubarItem className="font-normal tems-center rounded-sm px-2 py-1.5 text-sm outline-none cursor-pointer">
                <span className="mr-2 text-lg font-bold">€</span>
                Euro
              </MenubarItem>
              <MenubarItem className="items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none cursor-pointer">
                <span className="mr-2 text-lg font-bold">$</span>
                Dollar
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Footer;
