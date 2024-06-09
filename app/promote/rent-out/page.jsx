import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const page = () => {
  return (
    <div>
        <div className="progress w-1/3 h-[2.5px] bg-[#0666EB]"></div>
        <div className="container">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-[100px] gap-[50px] py-[60px] items-center">
                <div className="lg:col-span-3 md:col-span-1 col-span-1 lg:text-left md:text-left text-center">
                    <h2 className='text-[#1D234E] font-semibold lg:text-[57px] md:text-[50px] text-[35px]'>Are you owners and want to rent your home ?</h2>
                    <p className='lg:text-[25px] md:text-[20px] text-[16px] text-[#1D234E] font-normal lg:my-10 md:my-7 my-5'>Answer a form with some quick questions and we will get back to you in a brief delay</p>
                    <Link href='/promote/rent-out/step1'>
                        <button className='lg:mx-0 md:mx-0 mx-auto flex items-center justify-center gap-3 text-[22px] bg-[#0666EB] text-white w-[250px] h-[60px] rounded-full border-none'>Get Started <IoIosArrowForward /></button>
                    </Link>
                    <small className="mt-[15px] flex items-center lg:justify-start md:justify-start justify-center gap-[6px] text-[#1D234E] text-xs font-normal">
                        <img src="/images/timer.svg" alt="" />
                        takes less than a minute
                    </small>
                </div>
                <div className="lg:col-span-2 md:col-span-1 col-span-1">
                    <img src="/images/rent-out.png" width='100%' className='rounded-[15px] lg:h-[556px] md:h-[500px] h-[350px] object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
