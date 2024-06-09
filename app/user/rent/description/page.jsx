"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'; 
import CircularProgress from '../../../components/CircularProgress';
import ToggleButton from '../../../components/ToggleButton';

const MapComponent = dynamic(() => import('../../../components/MapComponent'), { ssr: false }); // Load MapComponent dynamically with no SSR

const page = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };


  const [price, setPrice] = useState(585000);
  const [downPayment, setDownPayment] = useState(175500);
  const [notaryFees, setNotaryFees] = useState(42021);
  const [loanDuration, setLoanDuration] = useState(20);
  const [loanRate, setLoanRate] = useState(4.04);

  // const estimatedMonthlyPayment = 2756; 
  return (
    <div>
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
                <div onClick={() => handleButtonClick(1)} className={`description w-48 h-16 flex items-center justify-center text-[#191C1F] text-lg font-medium ${activeButton === 1 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F]' : ''}`}>
                  Description
                </div>
                <div onClick={() => handleButtonClick(2)} className={`description w-48 h-16 flex items-center justify-center text-[#191C1F] text-lg font-normal ${activeButton === 2 ? 'border-b-[3px] border-[#191C1F] text-[#191C1F]' : ''}`}>
                  Finance
                </div>
              </div>


              {activeButton === 1 && (
                <div className="description-details">
                  <h2 className='text-[#191C1F] font-bold text-[40px] pt-9 pb-3'>22 700 000 ₪ </h2>
                  <p>Eliezer Yaffe Street, Ra’anana District, Israel</p>
                  <div className="btns flex gap-[10px] my-6">
                    <button className='btn bg-white border border-[#191C1F] w-[128px] h-[45px] rounded-[20px] text-[15px] font-normal flex items-center justify-center gap-3 text-[#191C1F]'>
                      <img src="/images/home.svg" width='18px' height='15px' alt="" />
                      <p>530 m<sup>2</sup></p>
                    </button>
                    <button className='btn bg-white border border-[#191C1F] w-[128px] h-[45px] rounded-[20px] text-[15px] font-normal flex items-center justify-center gap-3 text-[#191C1F]'>
                      <img src="/images/rooms.svg" width='19px' height='17px' alt="" />
                      <p>7 Rooms</p>
                    </button>
                    <button className='btn bg-white border border-[#191C1F] w-[128px] h-[45px] rounded-[20px] text-[15px] font-normal flex items-center justify-center gap-3 text-[#191C1F]'>
                      <img src="/images/baths.svg" width='15px' height='18px' alt="" />
                      <p>4 Baths</p>
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
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 gap-4">
                      <div className="single">
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Type of property <b className='ml-1'>Cottage</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Property condition <b className='ml-1'>Renovated</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>City <b className='ml-1'>Ra’anana</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Address <b className='ml-1'>23 Eliezer Yaffe Street</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Area <b className='ml-1'>South</b></p>
                      </div>
                      <div className="single">
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Number of floors <b className='ml-1'>5</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Number of rooms <b className='ml-1'>5</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Number of balcony <b className='ml-1'>1</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Ground/covered car park <b className='ml-1'>2</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Surface build <b className='ml-1'>330 m<sup>2</sup></b></p>
                      </div>
                      <div className="single">
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Total surface <b className='ml-1'>530 m<sup>2</sup></b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Entry date <b className='ml-1'>01/12/23</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Entry condition <b className='ml-1'>Flexible</b></p>
                        <p className='text-[15px] py-[10px] font-normal text-[#191C1F]'>Price <b className='ml-1'>22 700 000 ₪</b></p>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="texts border-b border-[#DDDDDD] py-6">
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
                  </div>
                </div>
              )}
              {activeButton === 2 && (
                <div className="finance-details my-[45px]">
                  <div className="finance-section p-5 rounded-[15px] shadow">
                    <h2 className="text-[#191C1F] text-[27px] font-medium mb-4">Combien me coûtera ce bien chaque mois ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                      <div>
                        <label className="text-[15px] font-normal text-[#191C1F]">Prix du bien</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 w-full px-[15px] py-[12px] font-normal text-base text-[#2B2B2B] rounded-xl border-[#E2E8F0] border-2 shadow-sm outline-none" />
                      </div>
                      <div>
                        <label className="text-[15px] font-normal text-[#191C1F]">Frais de notaire (8% ancien)</label>
                        <input type="number" value={notaryFees} onChange={(e) => setNotaryFees(e.target.value)} className="mt-1 w-full px-[15px] py-[12px] rounded-xl border-[#E2E8F0] bg-[#E2E8F0] border-2 shadow-sm outline-none" />
                      </div>
                      <div>
                        <label className="text-[15px] font-normal text-[#191C1F]">Apport (30% recommandé)</label>
                        <input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} className="mt-1 w-full px-[15px] py-[12px] rounded-xl border-[#E2E8F0] border-2 shadow-sm outline-none" />
                      </div>
                      <div>
                        <label className="text-[15px] font-normal text-[#191C1F]">Durée du prêt - Taux du crédit {loanDuration}%</label>
                        <input type="range" value={loanDuration} onChange={(e) => setLoanDuration(e.target.value)} className="mt-1 w-full h-[9px] rounded-xl border-[#E2E8F0] border-2 shadow-sm outline-none" />
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <div className="flex items-center justify-center lg:gap-[85px] md:gap-[60px] gap-[40px] h-[225px] bg-transparent">
                        <CircularProgress />
                        <div className="other flex flex-col lg:gap-[18px] gap-[12px]">
                          <div className="list1 flex items-center gap-2 text-[#2B2B2B] font-normal lg:text-base text-xs">
                            <div className="circle bg-[#0666EB] lg:h-[17px] h-[12px] lg:w-[17px] w-[12px] rounded-full"></div>
                            Montant emprunté 
                            <img src="/images/more.svg" alt="" />
                          </div>
                          <div className="list1 flex items-center gap-2 text-[#2B2B2B] font-normal lg:text-base text-xs">
                            <div className="circle bg-[#0666EB66] lg:h-[17px] h-[12px] lg:w-[17px] w-[12px] rounded-full"></div>
                            Coût des intérêts 
                            <img src="/images/more.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-500">
                      <p className='underline'>(1) Simulation non contractuelle</p>
                      <p className='underline'>(2) Sous réserve d'acceptation de votre dossier de prêt immobilier par votre Caisse régionale de Crédit Agricole, prêteur.
                      </p>
                    </div>
                  </div>



                  <div className='p-5 rounded-[15px] shadow my-[45px]'>
                    <h2 className="text-[27px] font-medium text-[#191C1F] mb-4">Financement</h2>
                    <div className="flex items-center text-[17px] text-[#191C1F] font-normal gap-[10px]">
                      <ToggleButton /> Achat 100% cash
                    </div>
                    <div className="pay py-3">
                      <div className='flex justify-between items-center text-[17px] text-[#323234]'>
                        <label htmlFor=''>Apport</label>
                        <div>{downPayment} €</div>
                      </div>
                      <input type="range" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} className="mt-1 w-full h-[3px]" />
                    </div>

                    <div className="pay py-3">
                      <div className='flex justify-between items-center text-[17px] text-[#323234]'>
                        <label htmlFor=''>Durée d'emprunt</label>
                        <div>{loanDuration} ans</div>
                      </div>
                      <input type="range" value={loanDuration} onChange={(e) => setLoanDuration(e.target.value)} className="mt-1 w-full h-[3px]" />
                    </div>

                    <div className="pay py-3">
                      <div className='flex justify-between items-center text-[17px] text-[#323234]'>
                        <label htmlFor=''>Taux d'emprunt TAEG</label>
                        <div>{loanRate} %</div>
                      </div>
                      <input type="range" value={loanRate} onChange={(e) => setLoanRate(e.target.value)} className="mt-1 w-full h-[3px]" />
                    </div>
                  </div>


                  <div className="">
                    <h2 className="text-[27px] font-medium text-[#191C1F] mb-4">Projection de l'enrichissement</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                      <div className="bg-[#F4F4F4] p-3 rounded-[20px]">
                        <div className="text-lg flex justify-between font-medium text-[#191C1F]">408 317 € <img src="/images/more.svg" width='13px' height='13px' alt="" /></div>
                        <div className="text-[13px] font-normal text-[#6A6A6F]">Trésorerie disponible l'année de revente</div>
                      </div>
                      <div className="bg-[#F4F4F4] p-3 rounded-[20px]">
                        <div className="text-lg flex justify-between font-medium text-[#191C1F]">707 844 € <img src="/images/more.svg" width='13px' height='13px' alt="" /></div>
                        <div className="text-[13px] font-normal text-[#6A6A6F]">Enrichissement net à 10 ans</div>
                      </div>
                      <div className="bg-[#F4F4F4] p-3 rounded-[20px]">
                        <div className="text-lg flex justify-between font-medium text-[#191C1F]">x 7.2 <img src="/images/more.svg" width='13px' height='13px' alt="" /></div>
                        <div className="text-[13px] font-normal text-[#6A6A6F]">Coefficient d'enrichissement</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                  <img src="/images/Remax-sm.png" alt="" />
                  RE/MAX Agency
                </div>
                <form action="" className="my-3">
                  <textarea className='p-3 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[140px] resize-none' name="message" id="message" placeholder='Good morning, I would like more information about this property. Please contact me for this. Cordially'></textarea>
                  <input className='px-3 my-2 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[40px]' type="text" name="name" id="name" placeholder='Name *' />
                  <input className='px-3 my-2 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[40px]' type="email" name="email" id="email" placeholder='E-mail *' />
                  <input className='px-3 my-2 outline-none border rounded-[10px] bg-transparent text-[#191C1F] w-full h-[40px]' type="text" name="number" id="number" placeholder='Phone number' />
                  <button className='px-3 my-2 outline-none border-none text-white font-normal rounded-full tetx-white bg-[#191C1F] w-full h-[48px]' type="submit">Send</button>
                  <Link href='/remax' className='text-[#191C1F] text-[15px] font-normal underline underline-offset-2'>To the office website</Link>
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
