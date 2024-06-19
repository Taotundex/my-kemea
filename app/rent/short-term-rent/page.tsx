import React from 'react'
import Link from 'next/link'
import Header from '../../my-components/Header'
import { IoCallOutline } from 'react-icons/io5'

const page = () => {
  return (
    <div className='home'>
      {/* <div className="container"> */}
        {/* <main className="font-primary text-text-color"> */}
            <Header />
            <div className="products py-5">
              <div className="container">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-[35px] font-normal font-font-spring" >Short Term Properties</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="upper-img relative">
                      <Link href='short-term-rent/description' className="img">
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
                      <h2 className='text-lg font-bold text-[#191C1F]'>22 700 000 ₪</h2>
                      <button className='call hover:text-white hover:bg-black flex items-center mt-2 gap-2 text-[#1D234E] font-normal text-xs lg:text-base md:text-sm sm:text-xs btn border-1 border-solid border-[#191C1F] rounded-full bg-transparent'>
                        <IoCallOutline />
                        Show phone number
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 flex flex-row"> 
            
            </div>
        {/* </main> */}
      {/* </div> */}
    </div>
  )
}

export default page
