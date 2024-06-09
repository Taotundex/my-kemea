"use client";
import Link from 'next/link';
import React from 'react';
import './page.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import dynamic from 'next/dynamic';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2').then((mod) => mod.default), { ssr: false });

const page = ( { value, onChange }) => {
  return (
    <div>
        <div className="progress w-full h-[2.5px] bg-[#0666EB]"></div>
        <div className="container">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-[100px] gap-[50px] py-[60px] items-center">
                <div className="lg:col-span-3 md:col-span-1 col-span-1">
                    <form action="/promote/sell-out" className='text-[#1D234E] font-normal lg:text-lg md:text-base text-sm'>
                        <div className="grid grid-cols-2 lg:gap-[45px] md:gap-[30px] gap-[15px]">
                            <div className="input">
                                <label htmlFor="">What is your name?*</label>
                                <input type="text" name="" id="" className='placeholder:text-[#1D234ECC] w-full h-[50px] border-2 border-[#E2E8F0] rounded-[20px] px-[15px] my-2 outline-none' placeholder='John' />
                            </div>
                            <div className="input">
                                <label htmlFor="">And your last name?*</label>
                                <input type="text" name="" id="" className='placeholder:text-[#1D234ECC] w-full h-[50px] border-2 border-[#E2E8F0] rounded-[20px] px-[15px] my-2 outline-none' placeholder='Doe' />
                            </div>
                            <div className="input col-span-2">
                                <label htmlFor="">What is your e-mail?*</label>
                                <div className="flex items-center">
                                    <input type="email" name="" id="" className='placeholder:text-[#1D234ECC] w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[20px] rounded-bl-[20px] px-[15px] my-2 outline-none' placeholder='johndoe@gmail.com' />
                                    <p className='w-[65px] h-[50px] border-2 border-[#E2E8F0] border-l-0 bg-white flex items-center justify-center rounded-tr-[20px] rounded-br-[20px]'>₪</p>
                                </div>
                            </div>
                            <div className="input col-span-2">
                                <label htmlFor="">What is your phone number?*</label>
                                <div className="flex items-center">
                                    <PhoneInput country={'us'} value={value} onChange={onChange} containerClass="flex items-center w-full h-[50px] my-1 px-[15px] border-2 border-[#E2E8F0] rounded-[20px] bg-white outline-none text-lg" inputClass="w-full my-1 px-[15px] border border-transparent rounded-[20px] bg-white outline-none" buttonClass="rounded-l-md"/>                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-[50px]">
                            <Link href='/promote/sell-out/step1'>
                                <button type='reset' className='lg:mx-0 md:mx-0 mx-auto flex items-center justify-center gap-3 text-[18px] bg-white text-[#191C1F] w-[150px] h-[50px] rounded-full border border-[#191C1F]'><IoIosArrowBack /> Back</button>
                            </Link>
                            {/* <Link href=''> */}
                                <button type='submit' className='lg:mx-0 md:mx-0 mx-auto flex items-center justify-center gap-3 text-[18px] text-white bg-[#0666EB] w-[200px] h-[50px] rounded-full border border-[#0666EB]'>Send <IoIosArrowForward /></button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
                <div className="lg:col-span-2 md:col-span-1 col-span-1">
                    <img src="/images/sell-out.png" width='100%' className='rounded-[15px] lg:h-[556px] md:h-[500px] h-[350px] object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
