import HeaderPublish from '@/app/my-components/HeaderPublish';
import Link from 'next/link';
import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { PiBuildingOfficeLight } from 'react-icons/pi';
import { IoIosArrowBack } from "react-icons/io";

const page = () => {
  return (
    <div>
        <HeaderPublish />
        <div className="container">
            <div className="text-center py-[85px] lg:w-[680px] md:w-full w-full mx-auto">
                <h1 className='text-[#1D234E] text-[55px] font-medium'>It’s easy to publish an ad on Kemea</h1>
                <p className="py-[40px] text-[#1D234E] text-[25px] font-normal w-[85%] mx-auto">Fill a form with some quick questions, we will check it and then publish it !</p>
                <div className="grid lg:grid-cols-2 sm:grid-cols-2 lg:gap-[45px] md:gap-[35px] gap-[20px]">
                    <Link href='publish/sell/step1' className="border border-[#DDDDDD] lg:w-fit md:w-fit sm:w-full flex flex-col items-center justify-center gap-[20px] bg-white text-[#222222] px-[40px] py-[10px] hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] rounded-[10px]">
                        <div className="icon text-[35px]">
                            <AiOutlineHome />
                        </div>
                        <p className="text-lg font-medium">I want to sell a property </p>
                    </Link>
                    <Link href='publish/rent/step1' className="border border-[#DDDDDD] lg:w-fit md:w-fit sm:w-full flex flex-col items-center justify-center gap-[20px] bg-white text-[#222222] px-[40px] py-[10px] hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] rounded-[10px]">
                        <div className="icon text-[35px]">
                        <PiBuildingOfficeLight />
                        </div>
                        <p className="text-lg font-medium">I want to rent a property </p>
                    </Link>
                </div>
            </div>
            <Link href='publish' className='text-[#1D234E] text-lg mt-10 mb-4 font-normal flex items-center gap-2 underline underline-offset-2'>
                <IoIosArrowBack />
                Back
            </Link>
        </div>
    </div>
  )
}

export default page
