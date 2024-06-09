import Link from 'next/link'
import React from 'react'
import { IoCallOutline } from 'react-icons/io5'
import '../../globals.css'

const page = () => {
  return (
    <div>
        <div className="bg-[#E9E9E980] text-[#191C1F] py-3">
            <div className="container flex justify-between items-center gap-5">
                <p className="text-lg">
                    Make your selection by selecting or putting in favorite the properties offered.
                </p>
                <button className='h-[40px] w-[100px] bg-[#0666EB] text-sm text-white rounded-full border border-[#0666EB]'>Get it</button>
            </div>
        </div>
        <div className="container py-5">
            <h2 className='text-[25px] text-[#191C1F] font-medium'>To Study</h2>
            <div className="sale my-4">
                <button className='text-white bg-[#191C1F] rounded-tr-[20px] rounded-br-[20px] w-fit px-4 py-3 border-none'>Properties for sale</button>
                <div className="flex items-center justify-between py-5">
                    <p className='text-[#191C1F] text-sm font-normal'>1 - 2 out of 2</p>
                    <select name="" id="" className='rounded-full border border-[#E9ECEF] h-[30px] w-[120px] outline-none bg-white'></select>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                    <div className="card">
                        <div className="upper-img relative">
                            <Link href='' className="img">
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
                            <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪ </h2>
                            <button className='call h-[40px] hover:text-white hover:bg-black flex items-center justify-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent'>
                                <IoCallOutline />
                                Show phone number
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="upper-img relative">
                            <Link href='' className="img">
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
                            <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪ </h2>
                            <button className='call h-[40px] hover:text-white hover:bg-black flex items-center justify-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent'>
                                <IoCallOutline />
                                Show phone number
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="upper-img relative">
                            <Link href='' className="img">
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
                            <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪ </h2>
                            <button className='call h-[40px] hover:text-white hover:bg-black flex items-center justify-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent'>
                                <IoCallOutline />
                                Show phone number
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="upper-img relative">
                            <Link href='' className="img">
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
                            <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪ </h2>
                            <button className='call h-[40px] hover:text-white hover:bg-black flex items-center justify-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border px-2 border-solid border-[#191C1F] rounded-full bg-transparent'>
                                <IoCallOutline />
                                Show phone number
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
