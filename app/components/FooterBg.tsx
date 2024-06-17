import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaCircleArrowRight } from 'react-icons/fa6'

const FooterBg = () => {
  return (
    <div className='pb-[100px] pt-[250px]' style={{ background: 'url(/images/footer-bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-[50px] ">
                <div className="lg:col-span-2 col-span-2">
                    <label htmlFor="" className='text-[#1D234E] text-[20px] font-normal'>Subscribe to our newsletter</label>
                    <div className="inputs flex items-center lg:w-[380px] md:w-full w-full h-[50px] border border-[#1D234E] rounded-full pl-[15px] pr-[5px] py-2 mt-3 text-[#1D234E]">
                        <input type="text" className='size-full border-transparent bg-transparent outline-none' name="" id="" />
                        <div className="w-50px text-[35px] flex items-start justify-center">
                            <FaCircleArrowRight />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 text-[22px] mt-[50px]">
                        <FaLinkedinIn />
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                </div>
                <div className="col-span-1 text-[#1D234E]">
                    <h5 className='text-[20px] font-normal mb-[15px]'>Services</h5>
                    <ul>
                        <li className='font-light text-lg py-[5px]'><Link href='/'>Buy</Link></li>
                        <li className='font-light text-lg py-[5px]'><Link href='/rent'>Rent</Link></li>
                        <li className='font-light text-lg py-[5px]'><Link href='/promote/sell-out'>Sell</Link></li>
                        <li className='font-light text-lg py-[5px]'><Link href='/kemea'>My kemea</Link></li>
                        <li className='font-light text-lg py-[5px]'><Link href='/pro'>Kemea Pro</Link></li>
                    </ul>
                </div>
                <div className="col-span-1 text-[#1D234E]">
                    <h5 className='text-[20px] font-normal mb-[15px]'>Legals</h5>
                    <ul>
                        <li className='font-light text-lg py-[5px]'><Link href='/terms'>Terms of Service</Link></li>
                        <li className='font-light text-lg py-[5px]'><Link href='/privacy'>Privacy Policy</Link></li>
                        <li className='font-light text-lg py-[5px]'><Link href='/cookies'>Cookies Policy</Link></li>
                        <li className='font-light text-lg py-[5px]'><Link href='/notice'>Legal Notice</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterBg
