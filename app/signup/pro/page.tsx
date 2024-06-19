"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import PhoneInputComponent from '../../my-components/PhoneInput';
import './page.css'

const page = () => {
    const [phone, setPhone] = useState('');
  return (
    <div>
      <div className="grid grid-cols-2 gap-0">
        <div className="h-screen">
            {/* <div className="left"> */}
                <img src="/images/signup-img.png" className='object-cover' alt="" />
            {/* </div> */}
        </div>
        <div className="h-screen px-[100px] py-[18px] overflow-y-scroll">
            <div className="right">
                <div className="top flex gap-5 items-center justify-end">
                    EN
                    <Link href='/pro-login' className='underline-none text-[#191C1F] font-normal text-sm'><button className='border border-[#191C1F] rounded-[20px] bg-white w-[80px] h-[30px]'>Log in</button></Link>
                </div>
                <div className="myform">
                    <div className="text-center text-[#191C1F]">
                        <h2 className="text-[38px] font-medium">Registration</h2>
                    </div>

                    <form action="/pro/" className='w-[400px] mx-auto p-5 mt-4'>
                        <div className="inputs my-3">
                            <label htmlFor="">First name</label>
                            <input className='w-full my-1 py-[10px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none' type="text" name="firstname" id="firstname" placeholder='Juliette' />
                        </div>
                        <div className="inputs my-3">
                            <label htmlFor="">Last name</label>
                            <input className='w-full my-1 py-[10px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none' type="text" name="lastname" id="lastname" placeholder='Dupont' />
                        </div>
                        <div className="inputs my-3">
                            <label htmlFor="">E-mail</label>
                            <input className='w-full my-1 py-[10px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none' type="email" name="email" id="email" placeholder='Ex: juliette.dupont@mail.com' />
                        </div>
                        <div className="inputs my-3">
                            <label htmlFor="">Password</label>
                            <input className='w-full my-1 py-[10px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none' type="password" name="password" id="password" placeholder='............' />
                        </div>
                        <div className="inputs my-3">
                            <label htmlFor="">Phone number</label>
                            {/* <div className="flex items-center w-full"> */}
                                <PhoneInputComponent value={phone} onChange={setPhone} />
                            {/* </div> */}
                        </div>
                        <div className="terms my-3">
                            <div className="input">                                
                                <label htmlFor="terms" className='flex my-3 gap-3 text-[#191C1F] font-normal text-sm'>
                                    <input type="checkbox" id="terms" name="terms" />
                                    Receive Kemea communications
                                </label>
                            </div>
                            <div className="input">
                                <label htmlFor="terms" className='flex my-3 gap-3 text-[#191C1F] font-normal text-sm items-start'>
                                    <input type="checkbox" id="terms" name="terms" />
                                    <div style={{marginTop: '-5px'}}>
                                        I accept the  <Link href='/terms' className='text-[#0047FF]'>Terms of Service</Link> and the <Link href='/terms' className='text-[#0047FF]'>Kemea Privacy Policy.</Link>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <button className='w-full h-[45px] text-white font-normal bg-[#0666EB] text-base rounded-full border-none outline-none mt-6' type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
