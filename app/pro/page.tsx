import React from 'react'
import HeaderPro from '../components/HeaderPro'
import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { PiHouseFill } from 'react-icons/pi';
import { MdOutlineHourglassFull } from 'react-icons/md';
import { HiPencil } from "react-icons/hi2";
import Link from 'next/link';


const page = () => {
  return (
    <div>
      <HeaderPro />
      <div className="bg-[#F9F8F9] mt-[68px]">
        <div className="container py-[27px]">
            <h4 className="text-[#1D234E] text-[25px] font-medium">We are happy to have you back David Doe </h4>
        </div>
      </div>
      <div className="container bg-white p-[30px]">
        <div className="flex justify-between items-center">
            <h5 className='text-[#1D234E]'>2 ads</h5>
            <Link href='pro/publish'>
                <button className="flex items-center justify-center gap-[10px] py-[10px] px-[20px] text-sm text-white bg-[#0047FF] rounded-[10px]">
                    <LuPlus />
                    Créer une annonce
                </button>
            </Link>
        </div>
        <div className="py-[15px]">
            <div className="flex flex-wrap gap-[20px]">
                <div className="inputs flex bg-[#F9F8F9] border-[#B0B0B0] w-[300px] h-[35px] rounded-full text-sm text-[#717171]">
                    <div className="h-full w-[35px] px-3 flex items-center justify-center text-[20px] text-[#717171]">
                        <CiSearch />
                    </div>
                    <input type="text" name="" id="" placeholder='Rechercher ' className='bg-transparent px-[10px] size-full outline-none border-none' />
                </div>
                <div className="flex flex-wrap gap-[10px]">
                    <button className="text-sm text-[#1D234E] w-fit px-[18px] h-[35px] rounded-full bg-transparent border border-[#1D234E] outline-none">Vente</button>
                    <button className="text-sm text-[#1D234E] w-fit px-[18px] h-[35px] rounded-full bg-transparent border border-[#1D234E] outline-none">Achat</button>
                    <button className="text-sm text-[#1D234E] w-fit px-[18px] h-[35px] rounded-full bg-transparent border border-[#1D234E] outline-none">Annonces à actualiser</button>
                </div>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox-xs" />
                    </label>
                    </th>
                    <th>Annonce</th>
                    <th>Statut</th>
                    <th>À faire</th>
                    <th>Boost</th>
                    <th>COUP DE COEUR</th>
                    <th>Type</th>
                    <th>Emplacement</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox-xs" />
                        </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar w-[56px] h-[40px] flex items-center justify-center text-white text-[25px] rounded-[5px] bg-[#B0B0B0]">
                                    <PiHouseFill className='text-white text-[25px]' />
                                </div>
                                <div>
                                    <div className="font-bold">Cottage - Ra’anana</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='flex gap-3 items-center'>
                                <MdOutlineHourglassFull />En cours
                            </div>
                        </td>
                        <td>
                            <button className="text-[#1D234E] text-sm font-normal border border-[#1D234E] bg-transparent rounded-[10px] px-[15px] py-[8px]">Terminer</button>
                        </td>
                        <td>
                            <label htmlFor="" className="flex gap-3 items-center">
                                <input type="radio" className="checkbox-xs rounded-[50%]" /> No
                            </label>
                        </td>
                        <td>
                            <label htmlFor="" className="flex gap-3 items-center">
                                <input type="radio" className="checkbox-xs rounded-[50%]" checked /> Yes
                            </label>
                        </td>
                        <td>Achat</td>
                        <td></td>
                        <td>
                            <Link href='' className="flex items-center gap-3 underline underline-offset-[3px]">
                                Modify <HiPencil />
                            </Link>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox-xs" />
                        </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <img src="/images/homepro.png" width='100%' className='w-[56px] h-[40px] object-cover rounded-[5px]' alt="image" />
                                </div>
                                <div>
                                    <div className="font-bold">Appartment - Tel Aviv</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='flex gap-3 items-center'>
                                <MdOutlineHourglassFull />En cours
                            </div>
                        </td>
                        <td>
                            <button className="text-[#1D234E] text-sm font-normal border border-[#1D234E] bg-transparent rounded-[10px] px-[15px] py-[8px]">Terminer</button>
                        </td>
                        <td>
                            <label htmlFor="" className="flex gap-3 items-center">
                                <input type="radio" className="checkbox-xs rounded-[50%]" checked /> 1/1
                            </label>
                        </td>
                        <td>
                            <label htmlFor="" className="flex gap-3 items-center">
                                <input type="radio" className="checkbox-xs rounded-[50%]" /> No
                            </label>
                        </td>
                        <td>Location</td>
                        <td></td>
                        <td>
                            <Link href='' className="flex items-center gap-3 underline underline-offset-[3px]">
                                Modify <HiPencil />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
      </div>
    </div>
  )
}

export default page
