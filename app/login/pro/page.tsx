import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-0">
        <div className="h-screen">
            {/* <div className="left"> */}
                <img src="../images/login-img.png" className='object-cover' alt="" />
            {/* </div> */}
        </div>
        <div className="h-screen px-[100px] py-[18px] overflow-y-scroll">
            <div className="right">
                <div className="top flex gap-5 items-center justify-end">
                    EN
                    <Link href='/pro-signup' className='underline-none text-[#191C1F] font-normal text-sm'><button className='border border-[#191C1F] rounded-[20px] bg-white w-[80px] h-[30px]'>Sign up</button></Link>
                </div>
                <div className="myform">
                    <div className="text-center text-[#191C1F]">
                        <h2 className="text-[38px] font-medium">Login<br />& Registration</h2>
                        <p className="text-[14px] font-normal mt-5">Log in or create your account to find <br />Kemea opportunities</p>
                    </div>

                    <form action="/pro/" className='w-[350px] mx-auto p-5 mt-5'>
                        <div className="input my-3">
                            <label htmlFor="">E-mail</label>
                            <input className='w-full my-1 py-[10px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none' type="email" name="email" id="email" placeholder='Ex: juliette.dupont@mail.com' />
                        </div>
                        <div className="input my-3">
                            <label htmlFor="">Password</label>
                            <input className='w-full my-1 py-[10px] px-[15px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none' type="password" name="password" id="password" placeholder='............' />
                        </div>
                        <div className="flex justify-end mb-6">
                            <Link href='' className='text-[#0047FF] text-xs font-normal'>Forgot your password ?</Link>
                        </div>
                        <button className='w-full h-[45px] text-white font-normal bg-[#0666EB] text-base rounded-full border-none outline-none' type="submit">Log in</button>
                        <p className="text-center my-6 font-normal text-[#6A6A6F] text-base">
                            or
                        </p>
                        <div className="flex flex-col gap-[20px]">
                            <button className='flex items-center justify-center gap-[10px] w-full p-[10px] text-[#191C1F] font-normal bg-white text-base rounded-full border border-[#191C1F] outline-none'>
                                <img src="../images/google.svg" alt="" />Continue with Google
                            </button>
                            <button className='flex items-center justify-center gap-[10px] w-full p-[10px] text-[#191C1F] font-normal bg-white text-base rounded-full border border-[#191C1F] outline-none'>
                                <img src="../images/apple.svg" alt="" />Continue with Apple
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
