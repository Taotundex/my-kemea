"use client"
import FooterBg from '@/app/my-components/FooterBg';
import Header from '@/app/my-components/Header';
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [slider, setSlider] = useState(50);
  return (
    <div>
        <Header />
        <div className="container">
            <div className="top py-4 text-[13px] flex gap-[10px] font-normal">
                <Link href='/' className='underline-none text-[#191C1F]'>kemea</Link>
                <img src="../images/next.svg" alt="" />
                <p className='text-[#0666EB]'>Affordability Calculator</p>
            </div>
            

            <div className="middle-content">
                <div className="head text-center py-5">
                    <h2 className='text-[#191C1F] font-black text-[22px] uppercase py-3'>Affordability calculator</h2>
                    <div className="under w-[70px] h-[2px] bg-[#191C1F] mx-auto"></div>
                </div>

                <div className="p-[40px]">
                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[80px] md:gap-[50px] gap-[35px]">
                        <div className="lg:col-span-5 col-span-1">
                            <form action="">
                                <div className="form my-2">
                                    <div className="flex justify-between items-center text-[#333333] font-medium text-17px">
                                        <h5 className="">Net Income</h5>
                                        <h5 className="text-[#333333] font-medium text-17px">₪69,000</h5>
                                    </div>
                                    <div className="py-2">
                                        <label htmlFor="" className='text-[#4B4F72] text-[17px] font-normal'>Annual household income <sup className='text-xl font-bold'>.</sup></label>
                                        <div className="flex items-center gap-2 border border-[#CCCCCC] rounded-[8px]  w-full py-[10px] px-[15px]">
                                            <input className='border-none outline-none bg-white text-[#191C1F] font-medium text-[17px] w-full' type="text" name="income" id="income" placeholder='$75,000' />
                                            <p className='text-[#E2E2E2] w-fit px-3'>/year</p>
                                        </div>
                                        <small className='text-[#999999] text-xs font-normal'>Before taxes. Include any co-buyer's income.</small>
                                    </div>
                                    <div className="py-2">
                                        <label htmlFor="" className='text-[#4B4F72] text-[17px] font-normal'>Monthly debts <sup className='text-xl font-bold'>.</sup></label>
                                        <div className="flex items-center gap-2 border border-[#CCCCCC] rounded-[8px]  w-full py-[10px] px-[15px]">
                                            <input className='border-none outline-none bg-white text-[#191C1F] font-medium text-[17px] w-full' type="text" name="debts" id="debts" placeholder='$500' />
                                            <p className='text-[#E2E2E2] w-fit px-3'>/month</p>
                                        </div>
                                        <small className='text-[#999999] text-xs font-normal'>Obligations like loan and debt payments or alimony,<br />but not costs like groceries or utilities.</small>
                                    </div>
                                </div>
                                <div className="form my-2">
                                    <div className="text-[#333333] font-medium text-17px">
                                        <h5 className="">Down Payment</h5>
                                    </div>
                                    <div className="py-2">
                                        <label htmlFor="" className='text-[#4B4F72] text-[17px] font-normal'>Cash <sup className='text-xl font-bold'>.</sup></label>
                                        <div className="border border-[#CCCCCC] rounded-[8px]  w-full py-[10px] px-[15px]">
                                            <input className='border-none outline-none bg-white text-[#191C1F] font-medium text-[17px] w-full' type="text" name="cash" id="cash" placeholder='$50,000' />
                                        </div>
                                        <small className='text-[#999999] text-xs font-normal'>Cash you can pay when you close.</small>
                                    </div>
                                </div>
                                <div className="form my-2">
                                    <div className="text-[#333333] font-medium text-17px">
                                        <h5 className="">Location</h5>
                                    </div>
                                    <div className="py-2">
                                        <label htmlFor="" className='text-[#4B4F72] text-[17px] font-normal'>Where are you buying?</label>
                                        <div className="border border-[#CCCCCC] rounded-[8px]  w-full py-[10px] px-[15px]">
                                            <input className='border-none outline-none bg-white text-[#191C1F] font-medium text-[17px] w-full' type="text" name="location" id="location" placeholder='City, neighbourhood, or zip' />
                                        </div>
                                        <small className='text-[#999999] text-xs font-normal'>To calculate local taxes and costs.</small>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="lg:col-span-7 col-span-1 shadow-lg rounded-[8px] px-7 py-12">
                            <div className="heading text-[#333333] font-semibold text-6xl mb-10">
                                ₪ <span className='text-[#CCCCCC]'>---,---</span>
                            </div>
                            <div className="contents">
                                <div className="flex items-center justify-between py-4">
                                    <p className='text-[#191C1F] text-[19px] font-medium'>Monthly payment</p>
                                    <div className="flex gap-2">
                                        <div className="text-[#333333] font-black text-[19px]">
                                            ₪ <span className='text-[#CCCCCC]'>-,---</span>
                                        </div>
                                        <img src="../images/more.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <p className='text-[#191C1F] text-[19px] font-medium'>Down payment</p>
                                    <div className="flex gap-2">
                                        <div className="text-[#333333] font-black text-[19px]">
                                            <span className='text-[#CCCCCC]'>--.-</span>
                                        </div>
                                        %
                                    </div>
                                </div>
                                <div className="my-4">
                                    <p className='text-[#191C1F] text-[19px] font-medium'>Debt-to-income ratio:</p>
                                    <h5 className="text-[26px] font-medium text-[#333333] mt-2">{slider}% | <span className='text-[#767676]'>Comfortable</span></h5>
                                    <p className="p-6">
                                        <input className='slider w-full h-[8px]' onChange={(e) => setSlider(e.target.value)} type="range" name="ratio" id="ratio" />
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between gap-5 pt-4">
                                <p>Add a location to see homes that fit your budget</p>
                                <img src="../images/loc.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>



                <h3 className="text-center text-[#333333] font-bold text-[28px] my-[70px]">
                    How we calculate how much house you can afford ?
                </h3>
                <div className="listing text-[#191C1F] font-normal text-[14px]">
                    <p><b>1. RÉFÉRENCEMENT ET DERÉFÉRENCEMENT DES ANNONCEURS :</b></p>
                    <div className="my-5">
                        <p>(i) Référencement des Annonceurs :</p>
                        <p>La diffusion d’annonces sur le Site est réservée aux Annonceurs définis ci-dessous :</p>
                        <p>(i) Annonceurs professionnels ayant souscrit à titre payant un contrat de diffusion d’annonces de vente de biens immobiliers avec la société DCF et entrant dans l’une des catégories suivantes :</p>
                        <ul className='list-disc'>
                            <li>les professionnels de l’immobilier détenant une carte de transaction ou de gestion conformément à la loi Hoguet n° 70-9 du 2 janvier 1970,</li>
                            <li>les notaires,</li>
                            <li>les avocats exerçant à titre accessoire l’activité de mandataire en transactions immobilières,</li>
                            <li>les huissiers,</li>
                            <li>les promoteurs immobiliers,</li>
                            <li>les constructeurs.</li>
                        </ul>
                    </div>
                    <div className="my-5">
                        <p>(ii) Référencement des Annonces :</p>
                        <p>Pour être référencée sur le Site et donc diffusée, une Annonce doit impérativement respecter les règles décrites ci-dessous.</p>
                        <p className="py-4 px-8 underline">
                            Contenu de l’Annonce
                        </p>
                        <p>Le bien doit être diffusé dans sa catégorie et être conforme aux produits de diffusion souscrits par l’Annonceur. Sur le Site, l’Annonce ne peut porter que sur :</p>
                        <div className="px-8">
                            <p>- la vente et la location de biens anciens, ayant déjà fait l’objet d’un transfert de propriété;</p>
                            <p>- la vente de lots associés à des programmes immobiliers neufs, n’ayant pas encore fait l’objet d’un transfert de propriété.</p>
                        </div>
                        <Link href='' className='flex items-center lg:justify-between md:justify-between justify-center lg:w-full md:w-full w-[90%] text-[#0000EE] font-medium underline py-4'>https://support.myselogerpro.com/hc/fr/articles/360006057939-Charte-SeLoger</Link>

                        <p className="py-4 px-8 underline">
                            Contenu interdit au sein d’une Annonce
                        </p>
                        <p>Toute Annonce contenant des éléments qui sembleraient contraires aux dispositions légales ou réglementaires, aux bonnes mœurs, aux règles de diffusion de notre Site ou susceptible de heurter les utilisateurs sera immédiatement refusée par la société DCF, donc non référencée sur le Site.</p>
                        <p>Est notamment strictement interdit :</p>
                        <ul className='list-disc px-8'>
                            <li>Tout contenu rédigé en langue étrangère comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu portant sur un bien immobilier ou programme de construction fictif ;</li>
                            <li>Tout contenu frauduleux, ou visant à tromper l’Utilisateur ;</li>
                            <li>Tout contenu à caractère politique, religieux ou haineux ;</li>
                            <li>Tout contenu à caractère promotionnel et/ou publicitaire ;</li>
                            <li>Toute image ou photographie sans lien avec l’offre proposée, non autorisée, contrefaisante, ou encore à caractère pornographique.</li>
                        </ul>

                        <div className="my-20">
                            <div className="lg:w-1/2 md:w-3/4 w-full mx-auto">
                                <table className='border'>
                                    <thead>
                                        <tr className='border border-[#E2E2E2]'>
                                            <th className='border border-[#E2E2E2] p-2'>Percentage</th>
                                            <th className='border border-[#E2E2E2] p-2'>Down Payment</th>
                                            <th className='border border-[#E2E2E2] p-2'>Home Price</th>
                                            <th className='border border-[#E2E2E2] p-2'>Monthly Mortgage Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border border-[#E2E2E2]'>
                                            <td className='border border-[#E2E2E2] p-2'>20%</td>
                                            <td className='border border-[#E2E2E2] p-2'>$60,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$300,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$1,179.39</td>
                                        </tr>
                                        <tr className='border border-[#E2E2E2]'>
                                            <td className='border border-[#E2E2E2] p-2'>15%</td>
                                            <td className='border border-[#E2E2E2] p-2'>$45,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$300,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$1,253.10</td>
                                        </tr>
                                        <tr className='border border-[#E2E2E2]'>
                                            <td className='border border-[#E2E2E2] p-2'>10%</td>
                                            <td className='border border-[#E2E2E2] p-2'>$45,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$300,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$1,253.10</td>
                                        </tr>
                                        <tr className='border border-[#E2E2E2]'>
                                            <td className='border border-[#E2E2E2] p-2'>5%</td>
                                            <td className='border border-[#E2E2E2] p-2'>$45,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$300,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$1,253.10</td>
                                        </tr>
                                        <tr className='border border-[#E2E2E2]'>
                                            <td className='border border-[#E2E2E2] p-2'>0%</td>
                                            <td className='border border-[#E2E2E2] p-2'>$45,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$300,000</td>
                                            <td className='border border-[#E2E2E2] p-2'>$1,253.10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="my-5">
                            <p>(ii) Référencement des Annonces :</p>
                            <p>Pour être référencée sur le Site et donc diffusée, une Annonce doit impérativement respecter les règles décrites ci-dessous.</p>
                            <p className="py-4 px-8 underline">
                                Contenu de l’Annonce
                            </p>
                            <p>Le bien doit être diffusé dans sa catégorie et être conforme aux produits de diffusion souscrits par l’Annonceur. Sur le Site, l’Annonce ne peut porter que sur :</p>
                            <div className="px-8">
                                <p>- la vente et la location de biens anciens, ayant déjà fait l’objet d’un transfert de propriété;</p>
                                <p>- la vente de lots associés à des programmes immobiliers neufs, n’ayant pas encore fait l’objet d’un transfert de propriété.</p>
                            </div>
                            <Link href='' className='flex items-center lg:justify-between md:justify-between justify-center lg:w-full md:w-full w-[90%] text-[#0000EE] font-medium underline py-4'>https://support.myselogerpro.com/hc/fr/articles/360006057939-Charte-SeLoger</Link>

                            <p className="py-4 px-8 underline">
                                Contenu interdit au sein d’une Annonce
                            </p>
                            <p>Toute Annonce contenant des éléments qui sembleraient contraires aux dispositions légales ou réglementaires, aux bonnes mœurs, aux règles de diffusion de notre Site ou susceptible de heurter les utilisateurs sera immédiatement refusée par la société DCF, donc non référencée sur le Site.</p>
                            <p>Est notamment strictement interdit :</p>
                            <ul className='list-disc px-8'>
                                <li>Tout contenu rédigé en langue étrangère comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                                <li>Tout contenu comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                                <li>Tout contenu portant sur un bien immobilier ou programme de construction fictif ;</li>
                                <li>Tout contenu frauduleux, ou visant à tromper l’Utilisateur ;</li>
                                <li>Tout contenu à caractère politique, religieux ou haineux ;</li>
                                <li>Tout contenu à caractère promotionnel et/ou publicitaire ;</li>
                                <li>Toute image ou photographie sans lien avec l’offre proposée, non autorisée, contrefaisante, ou encore à caractère pornographique.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterBg />
    </div>
  )
}

export default page
