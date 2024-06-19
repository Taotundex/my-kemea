import HeaderPro from '@/app/my-components/HeaderPro'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeaderPro />
      <div className="head bg-[#0047FF] mt-[68px]">
        <div className="container">
            <div className="py-[100px] text-white text-center flex flex-col gap-6">
                <h2 className='text-[54px] font-medium'>Affordable plans that grow with your business</h2>
                <p className='font-medium text-base'>All plans come with a 14-day free trial.</p>
            </div>
        </div>
      </div>
      <div className="bg-[#eeeeee] h-[55px]"></div>
      <div className="myplans">
        <div className="container">
            <div className="grid grid-cols-3 gap-6 items-end mt-[-75px]">
                <div className="shadow bg-white p-9 border border-[#E9EEF1] rounded-[10px]">
                    <div className="text-center">
                        <h5 className='text-[#353E44] text-2xl font-semibold'>Starter</h5>
                        <h1 className='text-[#353E44] font-extrabold text-[47px] my-[24px]'>FREE</h1>
                        <p className='text-[#4F5C65] font-medium text-base'>Lifetime</p>
                        <small className='text-[#4F5C65] text-xs font-medium'>0% transaction fee</small>
                        <p className="text-[#353E44] font-medium text-sm my-[40px]">Up to $7,500/mo from affiliates</p>
                    </div>
                    <ul className='flex flex-col gap-5 px-6'>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited affiliates
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited visitors
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Up to 2 team members
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            All integrations
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            REST API access
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            PayPal Mass Payouts
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Wise Bulk Payouts
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Chat & email support
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Multiple currencies
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Self-referral fraud detection
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Last touch attribution
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Multiple campaigns
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Branded affiliate portal
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Custom domain
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Unlimited team members
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Double-sided incentives
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Private invite-only campaigns
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Custom rewards
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Custom scripts
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Custom agreement
                        </li>
                    </ul>
                    <button className="text-[#0047FF] text-xl font-semibold mt-[50px] border-2 border-[#0047FF] bg-white rounded-[5px] w-full h-[70px] outline-none">
                        Start with Starter
                    </button>
                    <center className="text-[#4F5C65] text-sm font-normal mt-4">14-day free trial</center>
                </div>

                
                <div className="shadow-md bg-white p-9 border border-[#E9EEF1] rounded-[10px]">
                    <div className="text-center">
                        <button className="bg-[#0047FF] px-[10px] rounded-[5px] font-medium text-sm h-[30px] text-white border-none mb-6">Most Popular</button>
                        <h5 className='text-[#353E44] text-2xl font-semibold'>Growth</h5>
                        <div className='text-[#353E44] my-[24px] text-base flex items-center gap-1 justify-center font-medium'>
                            $
                            <h1 className='text-[#353E44] font-bold text-[50px]'>00</h1>
                        </div>
                        <p className='text-[#4F5C65] font-medium text-base'>Per Month</p>
                        <small className='text-[#4F5C65] text-xs font-medium'>0% transaction fee</small>
                        <p className="text-[#353E44] font-medium text-sm my-[40px]">Up to $15,000/mo from affiliates</p>
                    </div>
                    <ul className='flex flex-col gap-5 px-6'>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited affiliates
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited visitors
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Up to 2 team members
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            All integrations
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            REST API access
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            PayPal Mass Payouts
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Wise Bulk Payouts
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Chat & email support
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Multiple currencies
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Self-referral fraud detection
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Last touch attribution
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Multiple campaigns
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Branded affiliate portal
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Custom domain
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited team members
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Double-sided incentives
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Private invite-only campaigns
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Custom rewards
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Custom scripts
                        </li>
                        <li className="text-[#353E44] opacity-30 text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-l.svg" alt="" />
                            Custom agreement
                        </li>
                    </ul>
                    <button className="text-white text-xl font-semibold mt-[50px] border-2 border-[#0047FF] bg-[#0047FF] rounded-[5px] w-full h-[70px] outline-none">
                        Start with Growth
                    </button>
                    <center className="text-[#4F5C65] text-sm font-normal mt-4">14-day free trial</center>
                </div>


                <div className="shadow bg-white p-9 border border-[#E9EEF1] rounded-[10px]">
                    <div className="text-center">
                        <h5 className='text-[#353E44] text-2xl font-semibold'>Enterprise</h5>
                        <div className='text-[#353E44] my-[24px] text-base flex items-center gap-1 justify-center font-medium'>
                            $
                            <h1 className='text-[#353E44] font-bold text-[50px]'>000</h1>
                        </div>
                        <p className='text-[#4F5C65] font-medium text-base'>Per Month</p>
                        <small className='text-[#4F5C65] text-xs font-medium'>0% transaction fee</small>
                        <p className="text-[#353E44] font-medium text-sm my-[40px]">Over $15,000/mo from affiliates</p>
                    </div>
                    <ul className='flex flex-col gap-5 px-6'>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited affiliates
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited visitors
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Up to 2 team members
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            All integrations
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            REST API access
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            PayPal Mass Payouts
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Wise Bulk Payouts
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Chat & email support
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Multiple currencies
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Self-referral fraud detection
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Last touch attribution
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Multiple campaigns
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Branded affiliate portal
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Custom domain
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Unlimited team members
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Double-sided incentives
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Private invite-only campaigns
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Custom rewards
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Custom scripts
                        </li>
                        <li className="text-[#353E44] opacity-[75%] text-sm font-medium flex gap-3 items-center">
                            <img src="/images/check-b.svg" alt="" />
                            Custom agreement
                        </li>
                    </ul>
                    <button className="text-[#0047FF] text-xl font-semibold mt-[50px] border-2 border-[#0047FF] bg-white rounded-[5px] w-full h-[70px] outline-none">
                        Start with Enterprise
                    </button>
                    <center className="text-[#4F5C65] text-sm font-normal mt-4">14-day free trial</center>
                </div>
            </div>
            <div className="text-center flex flex-col gap-[40px] my-12">
                <small className="text-[#4F5C65] text-base font-bold">Get <b>2 months free</b> when you choose to sign up for annual billing!</small>
                <button className="h-[50px] lg:w-[540px] md:w-[540px] w-full mt-5 rounded-full border-none bg-[#E9EEF1] text-base font-medium mx-auto">Do you require a custom plan? <b className='text-[#0047FF]'>Get in touch</b></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
