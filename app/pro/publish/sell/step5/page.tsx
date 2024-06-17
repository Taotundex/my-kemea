'use client';
import HeaderPublish from '@/app/components/HeaderPublish'
// import PhoneInputComponent from '@/app/components/PhoneInput'
import Link from 'next/link'
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import dynamic from 'next/dynamic';
import 'react-phone-input-2/lib/style.css';
import { FaCirclePlus } from 'react-icons/fa6';


const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });
const page = ({ value, onChange }) => {
    // const [phone, setPhone] = useState("");
  return (
    <div>
        <HeaderPublish />
        <div className="pagination bg-[#0047FF] h-[2px] w-full mt-[-2px]"></div>
        <div className="container">
            <div className="underline underline-offset-4 py-[42px] text-[#1D234E] text-[20px] font-normal">
                <b>Step  </b>- Contact Information
            </div>
            <form action="">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-[100px] md:gap-x-[50px] gap-x-[15px] gap-y-[40px]">
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Your name?*</label>
                        <input type="text" name="" id="" placeholder='David' className='border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none px-[15px]' />
                        <div className="mt-6 flex items-center gap-3 text-base text-[#1D234E]">
                            <div className="icon text-[18px]">
                                <FaCirclePlus />
                            </div>
                            Add another contact
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Your name?*</label>
                        <PhoneInput
                            country={'us'}
                            value={value}
                            onChange={onChange}
                            containerClass="border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] py-[12px] outline-none px-[15px]"
                            inputClass="w-full my-1 px-[15px] border border-none rounded-[20px] bg-white outline-none"
                            buttonClass="rounded-l-md"
                        />
                    </div>
                    <div className="inputs flex items-start gap-3 text-[#1D234ECC] text-base">
                        <input type="checkbox" className='mt-1' checked name="" id="" />
                        I confirm the receipt of advertising mail related to the ad I published on the Kemea website
                    </div>
                    <div className="inputs flex items-start gap-3 text-[#1D234ECC] text-base">
                        <input type="checkbox" className='mt-1' checked name="" id="" />
                        I have read and agreed the <Link href=''>Terms & Conditions</Link>
                    </div>
                    <div className="col-span-2 inputs flex items-start gap-3 text-[#1D234ECC] text-base">
                        <input type="checkbox" className='mt-1' name="" id="" />
                        I would love to receive updates, publications, suggestions or tips regarding the Kemea bulletin board
                    </div>
                </div>
                <div className="flex items-center justify-between mt-[40px] mb-4">
                    <Link href='step4'>
                        <button className="text-[#1D234E] border border-[#1D234E] bg-white text-lg mt-10 mb-4 font-normal flex items-center gap-2 px-[35px] py-[15px] rounded-[10px]">
                            <IoIosArrowBack />
                            Back
                        </button>
                    </Link>
                    <Link href='/pro/publish'>
                        <button className="text-white border border-[#0047FF] bg-[#0047FF] text-lg mt-10 mb-4 font-normal flex items-center gap-2 px-[35px] py-[15px] rounded-[10px]">
                            Send
                            <IoIosArrowForward />
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page
