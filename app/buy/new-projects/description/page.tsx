"use client";
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'; 
import Header from '@/app/components/Header';

const MapComponent = dynamic(() => import('@/app/components/MapComponent'), { ssr: false }); // Load MapComponent dynamically with no SSR

const page = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="head py-4">
          <h2 className='text-[#191C1F] font-medium lg:text-3xl md:text-2xl text-[24px] py-2'>Cottage - Eliezer Yaffe St.</h2>
          <div className="flex justify-between lg:gap-0 gap-5 underline underline-offset-4 decoration-[#191C1F]">
            <div className='lg:text-[17px] text-sm text-[#191C1F] font-normal'>· Eliezer Yaffe St., Ra’anana District, Israel </div>
            <div className="flex items-center lg:gap-6 gap-3 text-[#1D234E] font-normal lg:text-base text-sm">
              <p className='flex items-center gap-[2px]'>
                <img src="/images/desc-heart.svg" width='18px' height='18px' alt="" />
                Save
              </p>
              <p className='flex items-center gap-[2px]'>
                <img src="/images/share.svg" width='12px' height='12px' alt="" />
                Share
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-auto">
          <div className="grid grid-cols-2 lg:gap-[14px] md:gap-[10px] gap-[8px]">
            <div className="first">
              <div className="img">
                <img src="/images/Group1.png" width='100%' alt="image" className='rounded-[15px]' />
              </div>
            </div>
            <div className="second">
              <div className="grid grid-cols-2 lg:gap-[14px] md:gap-[10px] gap-[8px]">
                <div className="grid grid-cols-1 lg:gap-[14px] md:gap-[10px] gap-[8px]">
                  <div className="second1 img">
                    <img src="/images/Group1.png" width='100%' alt="image" className='rounded-[15px]' />
                  </div>
                  <div className="second2 img">
                    <img src="/images/Group1.png" width='100%' alt="image" className='rounded-[15px]' />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:gap-[14px] md:gap-[10px] gap-[8px]">
                  <div className="second1 img">
                    <img src="/images/Group1.png" width='100%' alt="image" className='rounded-[15px]' />
                  </div>
                  <div className="second2 img">
                    <img src="/images/Group1.png" width='100%' alt="image" className='rounded-[15px]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 rounded-[20px] flex items-center justify-center lg:text-sm text-[6px] lg:w-[170px] w-[75px] lg:h-[38px] h-[25px] bg-white text-[#191C1F] underline underline-offset-4 decoration-[#191C1F]">
            See all 30 pictures
          </div>
        </div>

        <div className="my-9">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-16 md:gap-10 sm:gap-5">
                <div className="left lg:col-span-2 grid-cols-1">
                    <div className="heading flex lg:gap-10 md:gap-8 sm:gap-6 border rounded-t-[20px] border-[#E5E5E9]">
                        <div onClick={() => handleButtonClick(1)} className='description w-48 h-16 flex items-center justify-center text-[#191C1F] text-lg font-medium border-b-[3px] border-[#191C1F]'>
                            Description
                        </div>
                    </div>


                    <div className="description-details">
                        <h2 className='text-[#191C1F] font-bold text-[40px] pt-9 pb-3'>From 1 900 000 ₪ </h2>
                        <p>Eliezer Yaffe Street, Ra’anana District, Israel</p>
                        <div className="btns flex flex-wrap gap-[10px] my-6">
                        <button className='btn bg-white border border-[#191C1F] w-fit px-5 h-[45px] rounded-[20px] text-[15px] font-normal flex items-center justify-center gap-3 text-[#191C1F]'>
                            <img src="/images/home.svg" width='18px' height='15px' alt="" />
                            <p>Delivered in January 2025</p>
                        </button>
                        <button className='btn bg-white border border-[#191C1F] w-fit px-5 h-[45px] rounded-[20px] text-[15px] font-normal flex items-center justify-center gap-3 text-[#191C1F]'>
                            <img src="/images/rooms.svg" width='19px' height='17px' alt="" />
                            <p>From 2 to 6 rooms</p>
                        </button>
                        <button className='btn bg-white border border-[#191C1F] w-fit px-5 h-[45px] rounded-[20px] text-[15px] font-normal flex items-center justify-center gap-3 text-[#191C1F]'>
                            <img src="/images/car.svg" width='15px' height='18px' alt="" />
                            <p>Parkings spots</p>
                        </button>
                        </div>


                        <div className="texts border-y border-[#DDDDDD] py-6">
                        <h3 className='text-[#191C1F] font-medium text-[25px] pb-4'>Description</h3>
                        <p className='text-[#191C1F] text-[15px] font-normal my-2 leading-7'>Apartment currently in T2 configuration to be renovated in T3 furnished, located on the 5th and last floor of a building in Marseille of 8 units in good condition.</p>
                        <p className='text-[#191C1F] text-[15px] font-normal my-2 leading-7'>The apartment is composed of an entrance, a living room, a kitchen, a bedroom, a shower room, a toilet and  a balcony.</p>
                        <p className='text-[#191C1F] text-[15px] font-normal my-2 leading-7'>Ideally located in the St Victor district next to the Old Port, the Abbey, the Fort St Nicolas and close to all amenities.</p>
                        <p className='text-[#191C1F] text-[15px] font-normal my-2 leading-7'>The monthly rent of this apartment is 1 100 € including charges.</p>
                        <p className='text-[#191C1F] text-[15px] font-normal my-2 leading-7'>Possibility LCD; 140 € in average the night on Airbnb.</p>
                        </div>


                        <div className="texts border-b border-[#DDDDDD] py-6">
                            <h3 className='text-[#0F1D40] font-medium text-[25px] pb-4'>About this property</h3>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" defaultChecked /> 
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content"> 
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" /> 
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content"> 
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" /> 
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content"> 
                                    <p>hello</p>
                                </div>
                            </div>
                        </div>
                        

                        <div className="texts border-b border-[#DDDDDD] py-6">
                            <h3 className='text-[#0F1D40] font-medium text-[25px] pb-4'>About Guy and Doron Nadlan </h3>
                            <div className="single">
                                <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>
                                    Gia&Doron Levy is an entrepreneurial and contracting company that coordinates the process of planning, setting up and building the projects under one roof. Since its founding in 1995, the company has built thousands of housing units in innovative and prestigious projects in selected neighborhoods in cities such as Tel Aviv, Ra'anana - Neve Zemar neighborhood, Kfar Saba Hiroka, Ramat Hasharon, Modin and more. 
                                </p>
                                <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>
                                    The company operates and relies on a deep understanding of the world of residential real estate, while implementing advanced construction technologies, in accordance with strict international standards.
                                </p>
                                <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>
                                    Gia&Doron Levy is known as a reliable and professional company, which invests the best resources for planning, design, material selection and dialogue with customers. The personal accompaniment, the professional service, the intelligent answer and the absolute transparency are the main values of the company, which make it the leading company in the real estate industry.
                                </p>
                            </div>
                        </div>
                        
                        
                        {/* <div className="texts border-b border-[#DDDDDD] py-6">
                        <h3 className='text-[#0F1D40] font-medium text-[25px] pb-4'>What this house offers</h3>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-[50px] md:gap-10 gap-[20px]">
                            <div className="single">
                            <button className="btn lg:my-5 md:my-4 my-3 flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[20px] text-[#191C1FCC] lg:text-sm text-xs font-normal px-6 bg-transparent w-full h-[46px]">
                                <img src="/images/elevator.svg" alt="" />Elevators
                            </button>
                            <button className="btn lg:my-5 md:my-4 my-3 flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[20px] text-[#191C1FCC] lg:text-sm text-xs font-normal px-6 bg-transparent w-full h-[46px]">
                                <img src="/images/furniture.svg" alt="" />Furnitures included
                            </button>
                            <button className="btn lg:my-5 md:my-4 my-3 flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[20px] text-[#191C1FCC] lg:text-sm text-xs font-normal px-6 bg-transparent w-full h-[46px]">
                                <img src="/images/heater.svg" alt="" />Water heater
                            </button>
                            </div>
                            <div className="single">
                            <button className="btn lg:my-5 md:my-4 my-3 flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[20px] text-[#191C1FCC] lg:text-sm text-xs font-normal px-6 bg-transparent w-full h-[46px]">
                                <img src="/images/renovated.svg" alt="" />Renovated
                            </button>
                            <button className="btn lg:my-5 md:my-4 my-3 flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[20px] text-[#191C1FCC] lg:text-sm text-xs font-normal px-6 bg-transparent w-full h-[46px]">
                                <img src="/images/kitchen.svg" alt="" />Kosher kitchen
                            </button>
                            <button className="btn lg:my-5 md:my-4 my-3 flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[20px] text-[#191C1FCC] lg:text-sm text-xs font-normal px-6 bg-transparent w-full h-[46px]">
                                <img src="/images/mazgan.svg" alt="" />Personal Mazgan
                            </button>
                            </div>
                            <div className="single">
                            <button className="btn lg:my-5 md:my-4 my-3 flex items-center gap-[15px] border-2 border-[#E2E8F0] rounded-[20px] text-[#191C1FCC] lg:text-sm text-xs font-normal px-6 bg-transparent w-full h-[46px]">
                                <img src="/images/storage.svg" alt="" />Storage
                            </button>
                            </div>
                        </div>
                        </div> */}
                    </div>
                </div>

                <div className="right flex flex-col gap-[10px]">
                    <div className="tour shadow p-[25px] flex flex-col gap-[12px] rounded-[20px]">
                        <button className='text-white bg-[#0666EB] rounded-full border-none flex items-center justify-center flex-col w-full h-[66px]'>
                            <p className='font-medium text-[19px]'>Request a tour</p>
                            <small className='text-xs font-normal'>As early as today 11:00 am</small>
                        </button>
                        <button className='bg-white text-[#191C1F] rounded-full border border-[#191C1F] flex items-center justify-center gap-[10px] w-full py-[10px]'>
                        <img src="/images/call2.svg" alt="" /> Show phone number
                        </button>
                    </div>
                    <div className="tour shadow p-[25px] flex flex-col gap-[12px] rounded-[20px]">
                        <div className="flex items-center gap-[15px] text-[#191C1F] text-xl font-normal">
                        <img src="/images/levy.png" width='160px' height='80px' className='object-cover' alt="" />
                        </div>
                        <form action="" className="my-3">
                        <textarea className='p-3 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[140px] resize-none' name="message" id="message" placeholder='Good morning, I would like more information about this property. Please contact me for this. Cordially'></textarea>
                        <input className='px-3 my-2 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[40px]' type="text" name="name" id="name" placeholder='Name *' />
                        <input className='px-3 my-2 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[40px]' type="email" name="email" id="email" placeholder='E-mail *' />
                        <input className='px-3 my-2 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[40px]' type="text" name="number" id="number" placeholder='Phone number' />
                        <button className='px-3 my-2 outline-none border-none text-white font-normal rounded-full tetx-white bg-[#191C1F] w-full h-[48px]' type="submit">Send</button>
                        <Link href='/levy' className='text-[#191C1F] text-[15px] font-normal underline underline-offset-2'>To the office website</Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map py-[25px]">
                <h3 className='text-[#191C1F] mb-4 text-[25px] font-medium'>Where is this property located</h3>
                <div className="mymap h-[475px] w-full border">
                <MapComponent />
                </div>
                <div className="my-6">
                <p className='text-base font-normal text-[#191C1F]'>Any real estate investment involves risk.</p>
                <p className='text-base font-normal text-[#191C1F]'>Our calculations and forecasts are not indicative of future performance.</p>
                </div>
                <small className="py-2 text-#464646 text-sm font-normal">
                published the 25.06.2022
                </small>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
