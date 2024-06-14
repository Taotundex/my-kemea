import HeaderPublish from '@/app/components/HeaderPublish'
import Link from 'next/link'
import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div>
        <HeaderPublish />
        <div className="pagination bg-[#0047FF] h-[2px] w-4/5 mt-[-2px]"></div>
        <div className="container">
            <div className="underline underline-offset-4 py-[42px] text-[#1D234E] text-[20px] font-normal">
                <b>Step 4 </b>- Photos and videos
            </div>
            <form action="">
                <div className="inputs">
                    <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[40px]'>You have nothing to worry about, in the gallery the image will appear in its original size*   0/10</label>
                    <div className="relative">
                        <input type="file" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' placeholder='000' />
                        <div className="upper text-[#1D234E]">
                            <div className="icon text-lg">
                                <FaCirclePlus />
                            </div>
                            <small className="text-[13px] font-normal">
                                Drag here images and videos
                            </small>
                        </div>
                    </div>
                </div>
                <div className="inputs">
                    <label htmlFor="" className='text-[#1D234E] font-normal text-lg my-[20px]'>If you have a link for the Matterport 3D view, you can attach it to showcase the 3D view in the property gallery</label>
                    <input type="text" name="" id="" className='w-full h-[50px] border-2 border-[#E2E8F0] border-r-0 rounded-tl-[12px] rounded-bl-[12px] px-[15px] outline-none' value='https://' />
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
