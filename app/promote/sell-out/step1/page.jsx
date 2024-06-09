import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <div>
        <div className="progress w-2/3 h-[2.5px] bg-[#0666EB]"></div>
        <div className="container">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-[100px] gap-[50px] py-[60px] items-center">
                <div className="lg:col-span-3 md:col-span-1 col-span-1">
                    <form action="/promote/sell-out/step2" className='text-[#1D234E] font-normal lg:text-lg md:text-base text-sm'>
                        <div className="grid grid-cols-2 lg:gap-[45px] md:gap-[30px] gap-[15px]">
                            <div className="input">
                                <label htmlFor="">Where is it located ?*</label>
                                <input type="text" name="" id="" className='placeholder:text-[#1D234ECC] w-full h-[50px] border-2 border-[#E2E8F0] rounded-[20px] px-[15px] my-2 outline-none' placeholder='Tel aviv' />
                            </div>
                            <div className="input">
                                <label htmlFor="">What type of property is it?*</label>
                                <input type="text" name="" id="" className='placeholder:text-[#1D234ECC] w-full h-[50px] border-2 border-[#E2E8F0] rounded-[20px] px-[15px] my-2 outline-none' placeholder='Tel aviv' />
                            </div>
                            <div className="input">
                                <label htmlFor="">Surface*</label>
                                <div className="flex items-center">
                                    <input type="text" name="" id="" className='placeholder:text-[#1D234ECC] w-full h-[50px] border-2 border-[#E2E8F0] rounded-tl-[20px] rounded-bl-[20px] px-[15px] my-2 outline-none' placeholder='Tel aviv' />
                                    <p className='w-[65px] h-[50px] bg-[#E2E8F0] flex items-center justify-center rounded-tr-[20px] rounded-br-[20px]'>m<sup>2</sup></p>
                                </div>
                            </div>
                            <div className="input">
                                <label htmlFor="">How many rooms?*</label>
                                <select name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] rounded-[20px] px-[15px] my-2 outline-none bg-white'></select>
                            </div>
                            <div className="input col-span-2">
                                <label htmlFor="">What is the desired sell?*</label>
                                <div className="flex items-center">
                                    <input type="text" name="" id="" className='placeholder:text-[#1D234ECC] w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[20px] rounded-bl-[20px] px-[15px] my-2 outline-none' placeholder='0' />
                                    <p className='w-[65px] h-[50px] border-2 border-[#E2E8F0] border-l-0 bg-white flex items-center justify-center rounded-tr-[20px] rounded-br-[20px]'>₪</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-[50px]">
                            <Link href='/promote/sell-out'>
                                <button type='reset' className='lg:mx-0 md:mx-0 mx-auto flex items-center justify-center gap-3 text-[18px] bg-white text-[#191C1F] w-[150px] h-[50px] rounded-full border border-[#191C1F]'><IoIosArrowBack /> Back</button>
                            </Link>
                            {/* <Link href=''> */}
                                <button type='submit' className='lg:mx-0 md:mx-0 mx-auto flex items-center justify-center gap-3 text-[18px] text-white bg-[#191C1F] w-[200px] h-[50px] rounded-full border border-[#191C1F]'>Next <IoIosArrowForward /></button>
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
