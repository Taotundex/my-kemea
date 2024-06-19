"use client";
import HeaderPro from '@/app/my-components/HeaderPro';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCallOutline } from 'react-icons/io5'
import { TiMessages } from "react-icons/ti";

const page = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <HeaderPro />
      <div className="hero w-full lg:h-[550px] md:h-[350px] h-[200px] flex items-center justify-center" style={{background: 'url("/images/profile-hero.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <button className="text-white bg-transparent border border-white rounded-[10px] text-lg w-fit px-6 py-[12px]">Modify the picture</button>
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-4 grid-cols-3 rounded-[20px] lg:py-[30px] md:py-[24px] py-[20px] lg:px-[45px] md:px-[30px] px-[20px] lg:gap-[30px] gap-[20px] items-center bg-white lg:mt-[-50px] md:mt[-30px] mt-[-25px] shadow-md">
          <div className="lg:col-span-2 md:grid-cols-1 col-span-1 relative">
            <img src="/images/remax.png" width='100%' alt="" />
            <div className="flex h-full w-full items-center justify-center absolute top-0 left-0 bg-[#00000033] rounded-[10px]">
                <button className='h-[30px] px-[16px] text-[13px] font-medium bg-white text-[#1D234E] border border-[#1D234E] rounded-[8px]'>Modify</button>
            </div>
          </div>
          <div className="lg:col-span-7 md:grid-cols-3 col-span-2 flex flex-col lg:gap-[10px] gap-0">
            <h2 className='text-[#1D234E] font-medium lg:text-[25px] md:text-[20px] text-[20px]'>RE/MAX Ra’annna</h2>
            <p className='text-[#1D234E] font-normal text-[14px]'>152 Properties <span>· Member since 2023</span></p>
            <p className='text-[#0666EB] font-normal text-[14px] flex gap-2'>
                <img src="/images/loc-sm.svg" alt="" />
                Ahuza St 70, Ra'anana</p>
          </div>
          <div className="lg:col-span-3 md:grid-cols-4 col-span-3 flex flex-col gap-[15px] lg:ml-10 ml-0 lg:text-left text-center w-100">
            <Link href='' className='flex items-center gap-3 text-[#1D234E] text-sm font-normal underline underline-offset-[3px]'>
              <img src="/images/link.svg" alt="" />See their website
            </Link>
            <Link href='' className='flex items-center gap-3 text-[#1D234E] text-sm font-normal underline underline-offset-[3px]'>
              <img src="/images/profile-call.svg" alt="" />Show phone number
            </Link>
            <button className="text-white bg-[#0666EB] text-[18px] font-normal h-[50px] w-full rounded-full border-none">Contact</button>
          </div>
        </div>


        <div className="my-[35px]">
          <h2 className='text-[#191C1F] font-medium lg:text-[25px] md:text-[25px] text-[20px]'>RE/MAX Ra'anana : 87 houses and apartments for sale</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-10 gap-[55px]">
            <div className="lg:col-span-1 md:col-span-1 col-span-1 bg-white border border-[#DDDDDD] font-normal rounded-[15px] text-[#191C1F] p-[25px]">
              <form action="">
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Kind of property</label>
                  <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white'></select>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Price</label>
                  <div className="grid grid-cols-2 gap-3">
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white'></select>
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white'></select>
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Surface</label>
                  <div className="grid grid-cols-2 gap-3">
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white'></select>
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white'></select>
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Housing type</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Apartments, penthouses and duplex
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Houses and villas
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Other names</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Small apartments
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Bedrooms</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />0 bedroom (studios)
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />1
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />2
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />3
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />5 chambres ou plus
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Bathrooms</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />1
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />2
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />3 bathrooms or more
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>State</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />New property
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />In good condition
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />To renovate
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Features</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Air conditioner
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Built-in wardrobes
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Elevator
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />On the street
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Parking
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Garden
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Swimming pool
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Terrace
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Storeroom
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Accessible housing
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Floor</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Last floor
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Intermediate floors
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />Ground floor
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Multimedia</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />With plan
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />With virtual tour
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Type of ad</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="checkbox" name="" id="" />From banks
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Publication date</label>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="radio" name="date" id="" />Indifferent
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="radio" name="date" id="" />In the last 58 hours
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="radio" name="date" id="" />Last week
                  </div>
                  <div className="flex items-center gap-[10px] text-[#191C1FCC] text-sm my-3">
                    <input className='w-[20px] h-[20px]' type="radio" name="date" id="" />The last month
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:col-span-3 md:col-span-2 col-span-1 w-full">
              <div className="flex justify-between items-center w-full border-b border-[#E5E5E9]">
                <div className="heading flex">
                  <div onClick={() => handleButtonClick(1)} className={`buy px-[20px] h-12 gap-[10px] flex items-center justify-center text-[#191C1F] text-[15px] ${activeButton === 1 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F] font-medium' : 'text-[#6F6F6D] font-normal'}`}>
                    Buy
                  </div>
                  <div onClick={() => handleButtonClick(2)} className={`rent px-[20px] h-12 gap-[10px] flex items-center justify-center text-[#191C1F] text-[15px] ${activeButton === 2 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F] font-medium' : 'text-[#6F6F6D] font-normal'}`}>
                    Rent
                  </div>                  
                  <div onClick={() => handleButtonClick(3)} className={`properties px-[20px] h-12 gap-[10px] flex items-center justify-center text-[#191C1F] text-[15px] ${activeButton === 3 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F] font-medium' : 'text-[#6F6F6D] font-normal'}`}>
                    New properties
                  </div>
                </div> 
                <select name="" id="" className='rounded-full border border-[#E9ECEF] h-[30px] w-[120px] outline-none bg-white'></select>
              </div>

              <div className="py-[30px]">
                {activeButton === 1 && (
                    <div className="flex flex-col gap-8">
                        <div className="card">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 border border-[#DDDDDD] rounded-[15px]">
                                <div className="col-span-1">
                                    <img src="/images/detailed.png" width='100%' className='h-[280px] object-cover rounded-tl-[15px] rounded-bl-[15px]' alt="" />
                                </div>
                                <div className="col-span-2 text-[#191C1F] h-[100%] relative">
                                    <div className="py-3 px-[24px] flex flex-col gap-4">
                                        <h5 className='font-normal text-[17px]'>Detached house - Ben Gurion St. Tel-Aviv, Israel</h5>
                                        <h3 className='font-semibold text-xl'>73 000 ₪ / month</h3>
                                        <div className='text-sm font-normal flex gap-3'>
                                            <span>250 m<sup>2</sup></span>
                                            <span>5 bdr.</span>
                                            <span>5 baths</span>
                                        </div>
                                        <p>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2">
                                                <TiMessages />
                                                Contact
                                            </div>
                                        </div>
                                        <div className="flex gap-3 w-fit">
                                            <img src="/images/desc-heart.svg" alt="" />
                                            <img src="/images/share.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 border border-[#DDDDDD] rounded-[15px]">
                                <div className="col-span-1">
                                    <img src="/images/detailed.png" width='100%' className='h-[280px] object-cover rounded-tl-[15px] rounded-bl-[15px]' alt="" />
                                </div>
                                <div className="col-span-2 text-[#191C1F] h-[100%] relative">
                                    <div className="py-3 px-[24px] flex flex-col gap-4">
                                        <h5 className='font-normal text-[17px]'>Detached house - Ben Gurion St. Tel-Aviv, Israel</h5>
                                        <h3 className='font-semibold text-xl'>73 000 ₪ / month</h3>
                                        <div className='text-sm font-normal flex gap-3'>
                                            <span>250 m<sup>2</sup></span>
                                            <span>5 bdr.</span>
                                            <span>5 baths</span>
                                        </div>
                                        <p>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2">
                                                <TiMessages />
                                                Contact
                                            </div>
                                        </div>
                                        <div className="flex gap-3 w-fit">
                                            <img src="/images/desc-heart.svg" alt="" />
                                            <img src="/images/share.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeButton === 2 && (
                    <div className="flex flex-col gap-8">
                        <div className="card">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 border border-[#DDDDDD] rounded-[15px]">
                                <div className="col-span-1">
                                    <img src="/images/detailed2.png" width='100%' className='h-[280px] object-cover rounded-tl-[15px] rounded-bl-[15px]' alt="" />
                                </div>
                                <div className="col-span-2 text-[#191C1F] h-[100%] relative">
                                    <div className="py-3 px-[24px] flex flex-col gap-4">
                                        <h5 className='font-normal text-[17px]'>Detached house - Ben Gurion St. Tel-Aviv, Israel</h5>
                                        <h3 className='font-semibold text-xl'>73 000 ₪ / month</h3>
                                        <div className='text-sm font-normal flex gap-3'>
                                            <span>250 m<sup>2</sup></span>
                                            <span>5 bdr.</span>
                                            <span>5 baths</span>
                                        </div>
                                        <p>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2">
                                                <TiMessages />
                                                Contact
                                            </div>
                                        </div>
                                        <div className="flex gap-3 w-fit">
                                            <img src="/images/desc-heart.svg" alt="" />
                                            <img src="/images/share.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 border border-[#DDDDDD] rounded-[15px]">
                                <div className="col-span-1">
                                    <img src="/images/detailed.png" width='100%' className='h-[280px] object-cover rounded-tl-[15px] rounded-bl-[15px]' alt="" />
                                </div>
                                <div className="col-span-2 text-[#191C1F] h-[100%] relative">
                                    <div className="py-3 px-[24px] flex flex-col gap-4">
                                        <h5 className='font-normal text-[17px]'>Detached house - Ben Gurion St. Tel-Aviv, Israel</h5>
                                        <h3 className='font-semibold text-xl'>73 000 ₪ / month</h3>
                                        <div className='text-sm font-normal flex gap-3'>
                                            <span>250 m<sup>2</sup></span>
                                            <span>5 bdr.</span>
                                            <span>5 baths</span>
                                        </div>
                                        <p>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2">
                                                <TiMessages />
                                                Contact
                                            </div>
                                        </div>
                                        <div className="flex gap-3 w-fit">
                                            <img src="/images/desc-heart.svg" alt="" />
                                            <img src="/images/share.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeButton === 3 && (
                    <div className="flex flex-col gap-8">
                        <div className="card">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 border border-[#DDDDDD] rounded-[15px]">
                                <div className="col-span-1">
                                    <img src="/images/detailed3.png" width='100%' className='h-[280px] object-cover rounded-tl-[15px] rounded-bl-[15px]' alt="" />
                                </div>
                                <div className="col-span-2 text-[#191C1F] h-[100%] relative">
                                    <div className="py-3 px-[24px] flex flex-col gap-4">
                                        <h5 className='font-normal text-[17px]'>Detached house - Ben Gurion St. Tel-Aviv, Israel</h5>
                                        <h3 className='font-semibold text-xl'>73 000 ₪ / month</h3>
                                        <div className='text-sm font-normal flex gap-3'>
                                            <span>250 m<sup>2</sup></span>
                                            <span>5 bdr.</span>
                                            <span>5 baths</span>
                                        </div>
                                        <p>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2">
                                                <TiMessages />
                                                Contact
                                            </div>
                                        </div>
                                        <div className="flex gap-3 w-fit">
                                            <img src="/images/desc-heart.svg" alt="" />
                                            <img src="/images/share.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 border border-[#DDDDDD] rounded-[15px]">
                                <div className="col-span-1">
                                    <img src="/images/detailed.png" width='100%' className='h-[280px] object-cover rounded-tl-[15px] rounded-bl-[15px]' alt="" />
                                </div>
                                <div className="col-span-2 text-[#191C1F] h-[100%] relative">
                                    <div className="py-3 px-[24px] flex flex-col gap-4">
                                        <h5 className='font-normal text-[17px]'>Detached house - Ben Gurion St. Tel-Aviv, Israel</h5>
                                        <h3 className='font-semibold text-xl'>73 000 ₪ / month</h3>
                                        <div className='text-sm font-normal flex gap-3'>
                                            <span>250 m<sup>2</sup></span>
                                            <span>5 bdr.</span>
                                            <span>5 baths</span>
                                        </div>
                                        <p>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2">
                                                <TiMessages />
                                                Contact
                                            </div>
                                        </div>
                                        <div className="flex gap-3 w-fit">
                                            <img src="/images/desc-heart.svg" alt="" />
                                            <img src="/images/share.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
