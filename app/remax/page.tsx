"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCallOutline } from 'react-icons/io5'
import { TiMessages } from "react-icons/ti";
import Header from '../my-components/Header';
import FooterBg from '../my-components/FooterBg';

const page = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <Header />
      <div className="hero w-full lg:h-[550px] md:h-[350px] h-[200px]" style={{background: 'url("/images/remax-hero.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-4 grid-cols-3 rounded-[20px] lg:py-[30px] md:py-[24px] py-[20px] lg:px-[45px] md:px-[30px] px-[20px] lg:gap-[30px] gap-[20px] items-center bg-white lg:mt-[-50px] md:mt[-30px] mt-[-25px] shadow-md">
          <div className="lg:col-span-2 md:grid-cols-1 col-span-1">
            <img src="/images/remax.png" alt="" />
          </div>
          <div className="lg:col-span-3 md:grid-cols-3 col-span-2 flex flex-col lg:gap-[10px] gap-0">
            <h2 className='text-[#1D234E] font-medium lg:text-[25px] md:text-[20px] text-[20px]'>RE/MAX Ra’annna</h2>
            <p className='text-[#1D234E] font-normal text-[14px]'>152 Properties <span>· Member since 2023</span></p>
            <p className='text-[#0666EB] font-normal text-[14px] flex gap-2'>
                <img src="/images/loc-sm.svg" alt="" />
                Ahuza St 70, Ra'anana</p>
          </div>
          <div className="lg:col-span-4 md:grid-cols-4 col-span-3 bg-[#F4F4F4] text-[#191C1F] rounded-[20px] p-[18px] w-fit font-normal text-sm flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-0 items-center">
                <span className='col-span-2'>Sunday - Monday</span>
                <span className='col-span-1'>- 9:30 - 19:00</span>
            </div>
            <div className="grid grid-cols-3 gap-0 items-center">
                <span className='col-span-2'>Tuesday - Wednesday</span>
                <span className='col-span-1'>- 9:30 - 19:00</span>
            </div>
            <div className="grid grid-cols-3 gap-0 items-center">
                <span className='col-span-2'>Thursday - Friday</span>
                <span className='col-span-1'>- 9:30 - 19:00</span>
            </div>
          </div>
          <div className="lg:col-span-3 md:grid-cols-4 col-span-3 flex flex-col gap-[15px] lg:ml-10 ml-0 lg:text-left text-center w-full">
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
                  <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white px-3'>
                    <option value="">Apartment</option>
                    <option value="">Apartment</option>
                    <option value="">Apartment</option>
                  </select>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Price</label>
                  <div className="grid grid-cols-2 gap-3">
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white px-3'>
                      <option disabled selected>Min</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white px-3'>
                      <option disabled selected>Max</option>
                      <option value="">10</option>
                      <option value="">20</option>
                      <option value="">30</option>
                    </select>
                  </div>
                </div>
                <div className="inputs my-3">
                  <label htmlFor="" className='text-[16px]'>Surface</label>
                  <div className="grid grid-cols-2 gap-3">
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white px-3'>
                      <option disabled selected>Min</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                    <select name="" id="" className='w-full h-[45px] border border-[#E2E8F0] rounded-[10px] outline-none bg-white px-3'>
                      <option disabled selected>Max</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
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
                  <div onClick={() => handleButtonClick(4)} className={`agents px-[20px] h-12 gap-[10px] flex items-center justify-center text-[#191C1F] text-[15px] ${activeButton === 4 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F] font-medium' : 'text-[#6F6F6D] font-normal'}`}>
                    Our Agents
                  </div>
                </div> 
                <select className="w-[120px] bg-white border border-[#E9ECEF] text-[#191C1F] outline-none rounded-full px-3 h-[30px]">
                  <option disabled selected>Default</option>
                  <option value='Date' className="leading-relaxed">Date</option>
                  <option value='Ascending Price' className="leading-relaxed">Ascending Price</option>
                  <option value='Descending Price' className="leading-relaxed">Descending Price</option>
                </select>
              </div>

              <div className="py-[30px]">
                {activeButton === 1 && (
                    <div className="flex flex-col gap-8">
                        <div className="card">
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 border border-[#DDDDDD] rounded-[15px]">
                                <div className="col-span-1">
                                    <img src="/images/detailed.png" width='100%' className='h-full object-cover rounded-tl-[15px] rounded-bl-[15px]' alt="" />
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
                                        <p className='lg:h-full md:h-full h-[150px]'>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2 items-center">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2 items-center">
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
                                        <p className='lg:h-full md:h-full h-[150px]'>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2 items-center">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2 items-center">
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
                                        <p className='lg:h-full md:h-full h-[150px]'>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2 items-center">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2 items-center">
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
                                        <p className='lg:h-full md:h-full h-[150px]'>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2 items-center">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2 items-center">
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
                                        <p className='lg:h-full md:h-full h-[150px]'>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2 items-center">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2 items-center">
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
                                        <p className='lg:h-full md:h-full h-[150px]'>Beautiful and spacious townhouse in a building of 2 houses, to reform, with many possibilities, located in one of the main and widest streets</p>
                                    </div>
                                    <div className="py-3 px-[24px] flex justify-between items-center w-full border-t border-[#E5E6E1] rounded-br-[15px] bg-white absolute bottom-0 left-0">
                                        <div className="flex gap-3">
                                            <div className="flex gap-2 items-center">
                                                <IoCallOutline />
                                                See the phone number
                                            </div>
                                            <div className="flex gap-2 items-center">
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
                {activeButton === 4 && (
                  <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-6 md:gap-4 gap-2">
                    <div className="cards flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-sm md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="cards flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-sm md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="cards flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-sm md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="cards flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-sm md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="cards flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-sm md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="cards flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-sm md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBg />
    </div>
  )
}

export default page
