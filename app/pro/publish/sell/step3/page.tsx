import HeaderPublish from '@/app/my-components/HeaderPublish'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div>
        <HeaderPublish />
        <div className="pagination bg-[#0047FF] h-[2px] w-3/5 mt-[-2px]"></div>
        <div className="container">
            <div className="underline underline-offset-4 py-[42px] text-[#1D234E] text-[20px] font-normal">
                <b>Step 3 </b>- Payments, dates and more
            </div>
            <form action="">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-[100px] md:gap-x-[50px] gap-x-[15px] gap-y-[40px]">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-[50px] md:gap-x-[30px] gap-x-[15px] gap-y-[40px]">
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Surface build*</label>
                            <div className="flex items-center">
                                <input type="text" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' placeholder='000' />
                                <p className='w-[65px] h-[50px] bg-[#E2E8F0] flex items-center justify-center rounded-tr-[12px] rounded-br-[12px]'>m<sup>2</sup></p>
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Garden surface</label>
                            <div className="flex items-center">
                                <input type="text" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' placeholder='000' />
                                <p className='w-[65px] h-[50px] bg-[#E2E8F0] flex items-center justify-center rounded-tr-[12px] rounded-br-[12px]'>m<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Total surface</label>
                        <div className="flex items-center">
                            <input type="text" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' placeholder='000' />
                            <p className='w-[65px] h-[50px] bg-[#E2E8F0] flex items-center justify-center rounded-tr-[12px] rounded-br-[12px]'>m<sup>2</sup></p>
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Number of payments*</label>
                        <select className="border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none text-base px-[15px]">
                            <option disabled selected>0</option>
                            <option value=''>1</option>
                            <option value=''>2</option>
                            <option value=''>3</option>
                        </select>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Price*</label>
                        <div className="flex items-center">
                            <input type="text" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' placeholder='000' />
                            <p className='w-[65px] h-[50px] bg-[#E2E8F0] flex items-center justify-center rounded-tr-[12px] rounded-br-[12px]'>m<sup>2</sup></p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-[50px] md:gap-x-[30px] gap-x-[15px] gap-y-[40px]">
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Arnona for 2 months</label>
                            <div className="flex items-center">
                                <input type="text" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' placeholder='000' />
                                <p className='w-[65px] h-[50px] bg-[#E2E8F0] flex items-center justify-center rounded-tr-[12px] rounded-br-[12px]'>NIS</p>
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>House Vaad</label>
                            <div className="flex items-center">
                                <input type="text" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' placeholder='000' />
                                <p className='w-[65px] h-[50px] bg-[#E2E8F0] flex items-center justify-center rounded-tr-[12px] rounded-br-[12px]'>NIS</p>
                            </div>
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Entry date*</label>
                        <input type="date" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] rounded-[12px] px-[15px] outline-none' placeholder='000' />
                        <div className="mt-4 flex items-center gap-5">
                            <label htmlFor="" className='flex items-center gap-2 text-[17px] font-normal text-[#1D234ECC]'>
                                <input type="checkbox" name="" id="" className='h-[18px] w-[18px]' checked />Immediately
                            </label>
                            <label htmlFor="" className='flex items-center gap-2 text-[17px] font-normal text-[#1D234ECC]'>
                                <input type="checkbox" name="" id="" className='h-[18px] w-[18px]' checked />Flexible
                            </label>
                            <label htmlFor="" className='flex items-center gap-2 text-[17px] font-normal text-[#1D234ECC]'>
                                <input type="checkbox" name="" id="" className='h-[18px] w-[18px]' checked />Long term
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-[40px] mb-4">
                    <Link href='step2'>
                        <button className="text-[#1D234E] border border-[#1D234E] bg-white text-lg mt-10 mb-4 font-normal flex items-center gap-2 px-[35px] py-[15px] rounded-[10px]">
                            <IoIosArrowBack />
                            Back
                        </button>
                    </Link>
                    <Link href='step4'>
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
