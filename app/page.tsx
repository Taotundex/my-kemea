import * as React from "react"
import Header from "./my-components/Header";
import Footer from "./my-components/Footer";
import PropertyView from "./my-components/PropertyView"
import { IoFilterOutline, IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaRegBell } from "react-icons/fa";

export default function Home() {
  return (
    <main className="transition-all font-primary text-text-color">
      <Header />
      <div className="container font-font-spring">
        <div className="flex flex-col gap-[10px] py-[30px]">
          <h2 className="text-[35px] text-[#191C1F] font-medium font-font-spring">Find the right property, right away</h2>
          <p className="text-[#191C1F] font-normal text-[20px]">Kemea supports your property research in Israel at every stage</p>
        </div>
        <div className="products py-5">
          {/* <div className="flex justify-between gap-[10px]"> */}
            <div className="flex flex-wrap gap-[10px] text-[13px]">
              <div className="inputs text-[#191C1F] font-normal flex items-center w-[240px] h-[45px] border border-[#191C1F] rounded-full">
                <div className="icon w-[35px] h-[45px] flex items-center justify-center text-lg">
                  <IoSearchOutline />
                </div>
                <input type="text" name="" id="" className="w-[80%] h-[30px] border-none outline-none px-2 placeholder:text-[#191C1F]" placeholder="In what city ?" />
              </div>
              <div className="flex items-center">
                <Link href='' className="h-[45px] w-[60px] flex items-center justify-center  bg-[#191C1F] border border-[#191C1F] text-white rounded-s-full">Buy</Link>
                <Link href='/rent' className="h-[45px] w-[60px] flex items-center justify-center  bg-white border border-[#191C1F] text-[#191C1F] rounded-e-full">Rent</Link>
              </div>
              <select className="w-[155px] h-[45px] bg-white border border-[#191C1F] text-[#191C1F] outline-none rounded-full px-3">
                <option disabled selected>Home type</option>
                <option value='apartment' className="leading-relaxed">Apartment</option>
                <option value='apartment' className="leading-relaxed">Apartment</option>
                <option value='apartment' className="leading-relaxed">Apartment</option>
              </select>
              <select className="w-[135px] h-[45px] bg-white border border-[#191C1F] text-[#191C1F] outline-none rounded-full px-3">
                <option disabled selected>Price Range</option>
                <option value='apartment' className="leading-relaxed">Apartment</option>
                <option value='apartment' className="leading-relaxed">Apartment</option>
                <option value='apartment' className="leading-relaxed">Apartment</option>
              </select>
              <div className="text-[#191C1F] font-normal flex items-center justify-between px-5 w-[120px] h-[45px] border border-[#191C1F] rounded-full">
                <div className="icon w-fit h-[45px] flex items-center text-lg">
                  <IoFilterOutline />
                </div>
                All filters
              </div>
              <div className="text-white bg-[#0666EB] font-normal flex items-center justify-between px-4 w-[105px] h-[45px] border border-[#0666EB] rounded-full">
                <div className="icon w-fit h-[45px] flex items-center text-lg">
                  <IoSearchOutline />
                </div>
                Search
              </div>
            {/* </div> */}
            <div className="flex flex-wrap items-center lg:ml-auto md:ml-0 ml-0 gap-2 h-[45px]">
              <div className="text-white bg-[#191C1F] font-normal flex items-center justify-between px-5 w-[145px] h-[45px] border border-[#191C1F] rounded-full">
                <div className="icon w-fit h-[45px] flex items-center text-lg">
                  <FaRegBell />
                </div>
                Add an alert
              </div>
              <div className="flex items-center text-lg">
                <Link href='' className="border-r border-[#191C1F] px-2">List</Link>
                <Link href='' className="px-2">Map</Link>
              </div>
            </div>
          </div>
          <div className="py-5 text-[#191C1F] text-sm flex justify-between items-center">
            1 - 8 out of 2000
            <select className="w-[120px] bg-white border border-[#E9ECEF] text-[#191C1F] outline-none rounded-full px-3 h-[30px]">
              <option disabled selected>Default</option>
              <option value='Date' className="leading-relaxed">Date</option>
              <option value='Ascending Price' className="leading-relaxed">Ascending Price</option>
              <option value='Descending Price' className="leading-relaxed">Descending Price</option>
            </select>
          </div>
          <div className="grid lg:gap-6 md:gap-4 gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 content">
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
            <PropertyView />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
