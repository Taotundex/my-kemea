"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCallOutline } from 'react-icons/io5'
import './page.css'
import Header from '../components/Header';

const page = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <Header />
      <div className="hero w-full lg:h-[550px] md:h-[350px] h-[200px]" style={{background: 'url("/images/levy-hero.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-3 rounded-[20px] lg:py-[30px] md:py-[24px] py-[20px] lg:px-[45px] md:px-[30px] px-[20px] lg:gap-[30px] gap-[20px] items-center bg-white lg:mt-[-50px] md:mt[-30px] mt-[-25px] shadow-md">
          <div className="lg:col-span-2 md:grid-cols-1 col-span-1">
            <img src="/images/levy.png" alt="" />
          </div>
          <div className="lg:col-span-7 md:grid-cols-3 col-span-2 flex flex-col lg:gap-[10px] gap-0">
            <h2 className='text-[#1D234E] font-medium lg:text-[25px] md:text-[20px] text-[20px]'>Guy and Doron Nadlan</h2>
            <p className='text-[#1D234E] font-normal text-[14px]'>3 Projects <span>· Member since 2023</span></p>
          </div>
          <div className="lg:col-span-3 md:grid-cols-2 col-span-3 flex flex-col gap-[15px] lg:ml-10 ml-0 lg:text-left text-center w-100">
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
          <h2 className='text-[#191C1F] font-medium lg:text-[25px] md:text-[25px] text-[20px]'>Guy and Doron Nadlan</h2>
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
                  <div onClick={() => handleButtonClick(1)} className={`buy px-[20px] h-12 gap-[10px] flex items-center justify-center text-[#191C1F] text-[15px] font-medium ${activeButton === 1 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F]' : ''}`}>
                    Buy
                  </div>
                  <div onClick={() => handleButtonClick(2)} className={`promoters px-[20px] h-12 gap-[10px] flex items-center justify-center text-[#191C1F] text-[15px] font-normal ${activeButton === 2 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F]' : ''}`}>
                    Our Promoters
                  </div>
                </div> 
                <select name="" id="" className='rounded-full border border-[#E9ECEF] h-[30px] w-[120px] outline-none bg-white'></select>
              </div>

              <div className="py-[30px]">
                {activeButton === 1 && (
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-6 md:gap-4 gap-2">
                    <div className="card">
                      <div className="upper-img relative">
                        <Link href='/buy/new-projects/description' className="img">
                          <img src="/images/Group1.png" width='100%' className='rounded-xl size-full' alt="" />
                        </Link>
                        <div className="reaction w-full px-5 absolute top-4 left-0 flex justify-end z-100">
                          <img src="/images/heart.svg" width='21px' height='18px' alt="" />
                        </div>
                      </div>
                      <div className="details py-3">
                        <h4 className='text-base font-medium text-[#222222]'>Cottage - Eliezer Yaffe St.</h4>
                        <h5 className='font-normal text-base text-[#191C1F] '>Ra’anana, Israël</h5>
                        <p className='text-[#75808A] font-normal text-sm '>150 m² - 3 rooms - 1 parking  </p>
                        <h2 className='text-lg font-bold text-[#191C1F]'>From 2 700 000 ₪ </h2>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] lg:w-[225px] md:w-full w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="upper-img relative">
                        <Link href='/buy/new-projects/description' className="img">
                          <img src="/images/Group1.png" width='100%' className='rounded-xl size-full' alt="" />
                        </Link>
                        <div className="reaction w-full px-5 absolute top-4 left-0 flex justify-end z-100">
                          <img src="/images/heart.svg" width='21px' height='18px' alt="" />
                        </div>
                      </div>
                      <div className="details py-3">
                        <h4 className='text-base font-medium text-[#222222]'>Cottage - Eliezer Yaffe St.</h4>
                        <h5 className='font-normal text-base text-[#191C1F] '>Ra’anana, Israël</h5>
                        <p className='text-[#75808A] font-normal text-sm '>150 m² - 3 rooms - 1 parking  </p>
                        <h2 className='text-lg font-bold text-[#191C1F]'>From 2 700 000 ₪ </h2>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] lg:w-[225px] md:w-full w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="upper-img relative">
                        <Link href='/buy/new-projects/description' className="img">
                          <img src="/images/Group1.png" width='100%' className='rounded-xl size-full' alt="" />
                        </Link>
                        <div className="reaction w-full px-5 absolute top-4 left-0 flex justify-end z-100">
                          <img src="/images/heart.svg" width='21px' height='18px' alt="" />
                        </div>
                      </div>
                      <div className="details py-3">
                        <h4 className='text-base font-medium text-[#222222]'>Cottage - Eliezer Yaffe St.</h4>
                        <h5 className='font-normal text-base text-[#191C1F] '>Ra’anana, Israël</h5>
                        <p className='text-[#75808A] font-normal text-sm '>150 m² - 3 rooms - 1 parking  </p>
                        <h2 className='text-lg font-bold text-[#191C1F]'>From 2 700 000 ₪ </h2>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[38px] lg:w-[225px] md:w-full w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeButton === 2 && (
                  <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-6 md:gap-4 gap-2">
                    <div className="mycard flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-[13px] md:text-[13px] sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[30px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="mycard flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-[13px] md:text-[13px] sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[30px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="mycard flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-[13px] md:text-[13px] sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[30px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="mycard flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-[13px] md:text-[13px] sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[30px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="mycard flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-[13px] md:text-[13px] sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[30px] w-full'>
                          <IoCallOutline />
                          Show phone number
                        </button>
                      </div>
                    </div>
                    <div className="mycard flex items-center gap-[10px] bg-white border border-[#DDDDDD] px-[15px] py-3 rounded-[20px]">
                      <img src="/images/photo.png" width='75px' height='75px' className='rounded-full p-1 border-2 border-[#0666EB]' alt="" />
                      <div className="flex flex-col">
                        <h3 className='text-[#0A1629] font-semibold text-base'>Laure Levy</h3>
                        <button className='call hover:text-white hover:bg-black flex items-center justify-center mt-1 gap-2 text-[#1D234E] font-normal text-xs lg:text-[13px] md:text-[13px] sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent h-[30px] w-full'>
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
    </div>
  )
}

export default page
