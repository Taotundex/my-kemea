import HeaderPublish from '@/app/components/HeaderPublish'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div>
        <HeaderPublish />
        <div className="pagination bg-[#0047FF] h-[2px] w-2/5 mt-[-2px]"></div>
        <div className="container">
            <div className="underline underline-offset-4 py-[42px] text-[#1D234E] text-[20px] font-normal">
                <b>Step 2 </b>- About the property
            </div>
            <form action="">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-[100px] md:gap-x-[50px] gap-x-[15px] gap-y-[40px]">
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Number of rooms*</label>
                        <select className="border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none text-base px-[15px]">
                            <option disabled selected>0</option>
                            <option value=''>1</option>
                            <option value=''>2</option>
                            <option value=''>3</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 lg:gap-x-[50px] md:gap-x-[30px] gap-x-[10px]">
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Number of balcony*</label>
                            <div className="grid grid-cols-4">
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 border-[#E2E8F0] focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5] rounded-l-[12px]">
                                    None
                                </button>
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5] border-[#0047FF] bg-[#F5F5F5]">
                                    1
                                </button>
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 border-[#E2E8F0] focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5]">
                                    2
                                </button>
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 border-[#E2E8F0] focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5] rounded-r-[12px]">
                                    3
                                </button>
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Ground/covered car park*</label>
                            <div className="grid grid-cols-4">
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 border-[#E2E8F0] focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5] rounded-l-[12px]">
                                    None
                                </button>
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5] border-[#0047FF] bg-[#F5F5F5]">
                                    1
                                </button>
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 border-[#E2E8F0] focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5]">
                                    2
                                </button>
                                <button className="w-full h-[50px] text-[#363636] text-[15px] font-normal flex items-center justify-center border-2 border-[#E2E8F0] focus:border-[#0047FF] focus:bg-[#F5F5F5] hover:border-[#0047FF] hover:bg-[#F5F5F5] rounded-r-[12px]">
                                    3
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Description of the property*</label>
                        <div className="flex justify-between gap-5 items-center text-[#1D234EB2] text-sm py-2 font-normal">
                            Did you know: an ad without a description hardly gets any calls<span  className='text-[#1D234E]'>0/400</span>
                        </div>
                        <textarea name="" id="" placeholder='Here you can describe your property' className='border-2 border-[#E2E8F0] rounded-[12px] w-full h-[225px] resize-none outline-none p-[15px]'></textarea>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>More about the property*</label>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols- gap-[20px]">
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/disabled.svg' alt='image' />
                                Access for disabled
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/elevator.svg' alt='image' />
                                Elevators
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/renovated.svg' alt='image' />
                                Renovated
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/ac.svg' alt='image' />
                                Air conditioner
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/furniture.svg' alt='image' />
                                Furnitures included
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/mamad.svg' alt='image' />
                                Mamad
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/bars.svg' alt='image' />
                                Bars
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/unit.svg' alt='image' />
                                Unit
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/mazgan.svg' alt='image' />
                                Personal Mazgan
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/heater.svg' alt='image' />
                                Water heater
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[10px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/kitchen.svg' alt='image' />
                                Kosher kitchen
                            </button>
                            <button className="text-[#1D234ECC] px-[10px] lg:text-[13px] md:text-[11px] text-xs flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none">
                                <img src='/images/storage.svg' alt='image' />
                                Storage
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-[40px] mb-4">
                    <Link href='step1'>
                        <button className="text-[#1D234E] border border-[#1D234E] bg-white text-lg mt-10 mb-4 font-normal flex items-center gap-2 px-[35px] py-[15px] rounded-[10px]">
                            <IoIosArrowBack />
                            Back
                        </button>
                    </Link>
                    <Link href='step3'>
                        <button className="text-white border border-[#1D234E] bg-[#1D234E] text-lg mt-10 mb-4 font-normal flex items-center gap-2 px-[35px] py-[15px] rounded-[10px]">
                            Next
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
