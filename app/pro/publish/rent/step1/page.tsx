import HeaderPublish from '@/app/components/HeaderPublish'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div>
        <HeaderPublish />
        <div className="pagination bg-[#0047FF] h-[2px] w-1/5 mt-[-2px]"></div>
        <div className="container">
            <div className="underline underline-offset-4 py-[42px] text-[#1D234E] text-[20px] font-normal">
                <b>Step 1 </b>- Property’s address
            </div>
            <form action="">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-[100px] md:gap-x-[50px] gap-x-[15px] gap-y-[40px]">
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>What type of property ?*</label>
                        <select className="border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none text-base px-[15px]">
                            <option disabled selected>Home Type</option>
                            <option value=''>Apartment</option>
                            <option value=''>Apartment</option>
                            <option value=''>Apartment</option>
                        </select>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>State of the property*</label>
                        <select className="border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none text-base px-[15px]">
                            <option disabled selected>Home State</option>
                            <option value=''>Renovated</option>
                            <option value=''>Renovated</option>
                            <option value=''>Renovated</option>
                        </select>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>What city?*</label>
                        <input type="text" name="" id="" placeholder='Tel Aviv' className='border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none px-[15px]' />
                    </div>
                    <div className="grid grid-cols-2 lg:gap-x-[50px] md:gap-x-[30px] gap-x-[10px]">
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>What Street*</label>
                            <input type="text" name="" id="" placeholder='Bar Ilan' className='border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none px-[15px]' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>What Number*</label>
                            <input type="number" name="" id="" placeholder='55' className='border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none px-[15px]' />
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>How many floors*</label>
                        <div className="grid grid-cols-11 items-center lg:gap-x-[30px] md:gap-x-[20px] gap-x-[10px]">
                            <input type="number" name="" id="" placeholder='1' className='col-span-5 border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none px-[15px]' />
                            <p className="col-span-1 text-center">on</p>
                            <input type="number" name="" id="" placeholder='12' className='col-span-5 border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none px-[15px]' />
                        </div>
                        <label htmlFor="" className='flex items-center gap-2 mt-4 text-[17px] font-normal text-[#1D234ECC]'>
                            <input type="checkbox" name="" id="" className='h-[18px] w-[18px]' checked />Ground floor
                        </label>
                    </div>
                    <div className="inputs">
                        <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>Area*</label>
                        <select className="border-2 border-[#E2E8F0] rounded-[12px] w-full h-[50px] outline-none text-base px-[15px]">
                            <option disabled selected>South Est</option>
                            <option value=''>South Est</option>
                            <option value=''>South Est</option>
                            <option value=''>South Est</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-[40px] mb-4">
                    <Link href='publish/rent'>
                        <button className="text-[#1D234E] border border-[#1D234E] bg-white text-lg mt-10 mb-4 font-normal flex items-center gap-2 px-[35px] py-[15px] rounded-[10px]">
                            <IoIosArrowBack />
                            Back
                        </button>
                    </Link>
                    <Link href='step2'>
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
