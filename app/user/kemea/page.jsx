import React from 'react'
// import Header from '../components/Header'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <main className="font-primary text-text-color">
            {/* <Header /> */}
            <div className="kemea">
                <div className="container">
                    <div className="hero-section flex items-center w-full lg:h-[600px] md:h-[450px] h-[300px] justify-center mt-12 bg-no-repeat bg-center " style={{backgroundImage: "url(images/kemea-hero.png)", borderRadius: '10px'}}>
                        <div className="text-center lg:w-3/4 md:w-11/12 w-[95%]">
                            <h2 className="font-medium lg:text-[50px] md:text-[38px] text-[28px] text-white">Discover My Kemea Experience</h2>
                            <p className="lg:text-xl md:text-base text-xs font-normal text-white lg:py-9 md:py-6 py-4">Discover our exclusive selection of real estate projects by registering for free, or opt for a personalized real estate hunting service to find your property. Registration on the Kemea platform is non-binding.</p>
                            <div className="btns flex lg:gap-12 md:gap-8 gap-4 w-full justify-center">
                                <Link href='/login'><button className='btn lg:h-14 md:h-12 h-10 lg:w-40 md:w-32 w-[100px] rounded-full lg:text-[19px] md:text-base text-sm text-white bg-transparent border-white border'>Login</button></Link>
                                <Link href='/signup'><button className="btn lg:h-14 md:h-12 h-10 lg:w-40 md:w-32 w-[100px] rounded-full lg:text-[19px] md:text-base text-sm text-[#191C1F] bg-white border-white border-1">Signup</button></Link>
                            </div>
                        </div>
                    </div>


                    <div className="achat lg:my-16 md:my-12 my-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-1 md:gap-8 gap-4">
                            <div className="content p-6 bg-[#F7F7F7] rounded-[20px]">
                                <h6 className='text-[#191C1F] font-medium text-lg'>Accélérez votre achat.</h6>
                                <p>Les taux augmentent, votre budget baisse.</p>
                            </div>
                            <div className="content p-6 bg-[#F7F7F7] rounded-[20px]">
                                <h6 className='text-[#191C1F] font-medium text-lg'>Accélérez votre achat.</h6>
                                <p>Les taux augmentent, votre budget baisse.</p>
                            </div>
                            <div className="content p-6 bg-[#F7F7F7] rounded-[20px]">
                                <h6 className='text-[#191C1F] font-medium text-lg'>Accélérez votre achat.</h6>
                                <p>Les taux augmentent, votre budget baisse.</p>
                            </div>
                            <div className="content p-6 bg-[#F7F7F7] rounded-[20px]">
                                <h6 className='text-[#191C1F] font-medium text-lg'>Accélérez votre achat.</h6>
                                <p>Les taux augmentent, votre budget baisse.</p>
                            </div>
                        </div>
                    </div>



                    <div className="more lg:py-20 md:py-16 py-14">
                        <div className="grid gri-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center lg:gap-[64px] md:gap-[40px] sm:gap-[35px] gap-[64px]">
                            <div className="text">
                                <h2 className='text-[#191C1F] lg:text-[40px] md:text-4xl text-3xl font-medium mb-6'>More than just a personalized property service</h2>
                                <p className='text-[#191C1F] lg:text-lg md:text-base text-sm font-normal'>My Kemea supports Advices and researchs, Efficient visits, negociation assistance ... </p>
                                <p className='text-[#191C1F] lg:text-lg md:text-base text-sm font-normal'>Describe your project using the form provided.</p>
                                <p className='text-[#191C1F] lg:text-lg md:text-base text-sm font-normal'>After analyzing the feasibility of your project, a property hunter will be dedicated to your search.</p>
                                <p className='text-[#191C1F] lg:text-lg md:text-base text-sm font-normal'>Thanks to our technology dedicated to sourcing and our privileged networks, your property hunter sends you in real time the properties that correspond to your search.</p>
                                <p className='text-[#191C1F] lg:text-lg md:text-base text-sm font-normal'>You no longer miss anything in your personal space.</p>
                                <button className="btn bg-[#191C1F] text-white rounded-full h-14 w-44 mt-10">Start now</button>
                            </div>
                            <div className="img">
                                <img src="/images/stronger.png" width='100%' className='rounded-[20px] h-[600px] object-cover' alt="" />
                            </div>
                        </div>
                    </div>



                    <div className="download-app text-center lg:py-[50px] md:py-9 py-6">
                        <h2 className='text-[#191C1F] lg:text-[40px] md:text-4xl text-3xl font-medium'>Download our app</h2>
                        <p className='text-[#191C1F] lg:text-lg md:text-base text-sm font-normal'>Research, real estate lists,  and more futures in one place.</p>
                        <div className="py-5">
                            <img src="/images/download.png" width='100%' className='size-full' alt="" />
                        </div>
                        <div className="btns flex justify-center gap-6">
                            <button className="btn text-[#191C1F] lg:text-[19px] md:text-lg text-sm lg:px-[42px] md:px-10 px-8 lg:py-4 md:py-3 py-2 border border-[#191C1F] rounded-full">iPhone</button>
                            <button className="btn text-[#191C1F] lg:text-[19px] md:text-lg text-sm lg:px-[42px] md:px-10 px-8 lg:py-4 md:py-3 py-2 border border-[#191C1F] rounded-full">Android</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

  )
}

export default page
