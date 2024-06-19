"use client";
import Link from "next/link";
import React, { useState } from "react";
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
import PhoneInputComponent from "@/app/my-components/PhoneInput";

const page = () => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="grid grid-cols-2 gap-0">
        <div className="h-screen">
          <div className="col-span-5 h-screen flex items-center lg:pl-16 md:px-12 px-3 bg-black">
            <div className="left">
              <h2 className="text-[#FFFFFF] font-medium text-[38px]">
                By entering in your Kemea account...
              </h2>
              <p className="text-[30px] py-2 my-[30px] text-[#FFFFFF] flex items-center gap-5">
                1
                <span className="font-light text-[16px]">
                  Our hunters take care of everything for you.
                </span>
              </p>
              <p className="text-[30px] py-2 my-[30px] text-[#FFFFFF] flex items-center gap-5">
                2
                <span className="font-light text-[16px]">
                  The consultation is free and without obligation.
                </span>
              </p>
              <p className="text-[30px] py-2 my-[30px] text-[#FFFFFF] flex items-center gap-5">
                3
                <span className="font-light text-[16px]">
                  We accompany you until the signing of the deed
                </span>
              </p>
              <p className="text-[30px] py-2 my-[30px] text-[#FFFFFF] flex items-center gap-5">
                4
                <span className="font-light text-[16px]">
                  We give you access to the Off Market.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen px-[100px] py-[18px] overflow-y-scroll">
          <div className="right">
            <div className="top flex gap-5 items-center justify-end">
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

              <Link
                href="/login/user"
                className="underline-none text-[#191C1F] font-normal text-sm"
              >
                <button className="border border-[#191C1F] rounded-[20px] bg-white px-5 h-[40px]">
                  Login
                </button>
              </Link>
            </div>
            <div className="myform mt-10">
              <div className="text-center text-[#191C1F]">
                <h2 className="text-[30px] font-medium">Registration</h2>
              </div>

              <form action="/user" className="w-[400px] mx-auto mt-4">
                <div className="my-2">
                  <label className="font-normal text-sm">First name</label>
                  <input
                    className="w-full text-[16px] my-1 py-[12px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none"
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Juliette"
                  />
                </div>
                <div className="my-2">
                  <label className="font-normal text-sm">Last name</label>
                  <input
                    className="w-full text-[16px] my-1 py-[12px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none"
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Dupont"
                  />
                </div>
                <div className="my-2">
                  <label className="font-normal text-sm">E-mail</label>
                  <input
                    className="w-full text-[16px] my-1 py-[12px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ex: juliette.dupont@mail.com"
                  />
                </div>
                <div className="my-2">
                  <label className="font-normal text-sm">Password</label>
                  <input
                    className="w-full text-[16px] my-1 py-[12px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••••••"
                  />
                </div>
                <div className="my-2">
                  <label className="font-normal text-sm">Phone number</label>
                  <PhoneInputComponent value={phone} onChange={setPhone} />
                </div>
                <div className="terms mt-5">
                  <div className="mb-7">
                    <label
                      htmlFor="terms"
                      className="flex my-3 gap-3 text-[#191C1F] font-normal text-sm"
                    >
                      <input
                        type="checkbox"
                        checked="checked"
                        class="checkbox"
                      />
                      Receive Kemea communications
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="terms"
                      className="flex my-3 gap-3 text-[#191C1F] font-normal text-sm items-start"
                    >
                      <input
                        type="checkbox"
                        checked="checked"
                        class="checkbox"
                      />
                      <div>
                        I accept the
                        <Link href="/terms" className="text-[#0047FF]">
                          Terms of Service
                        </Link>
                        and the
                        <Link href="/terms" className="text-[#0047FF]">
                          Kemea Privacy Policy.
                        </Link>
                      </div>
                    </label>
                  </div>
                </div>
                <button
                  className="w-full h-[46px] text-white font-normal bg-[#0666EB] text-base rounded-full border-none outline-none mt-6"
                  type="submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
