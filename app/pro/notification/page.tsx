import HeaderPro from '@/app/components/HeaderPro'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const page = () => {
  return (
    <div>
        <HeaderPro />
        <div className="container py-[68px]">
            <h5 className='text-[#222222] text-[22px] font-medium my-4'>Toutes les notifications</h5>
            <div className="inputs flex bg-[#F9F8F9] w-full h-[35px] rounded-full text-sm text-[#717171] border border-[#B0B0B0]">
                <div className="h-full w-[35px] px-3 flex items-center justify-center text-[30px] text-[#717171]">
                    <CiSearch className='text-[30px]' />
                </div>
                <input type="text" name="" id="" placeholder='Rechercher dans les notifications ' className='bg-transparent px-[10px] size-full outline-none border-none' />
            </div>
            <div className="text-center py-6 w-fit px-[50px] mx-auto">
                <img src="/images/notification.svg" className='mx-auto mb-5' alt="svg" />
                <h5 className="text-base text-[#1D234E] font-medium">Aucune nouvelle notification</h5>
                <p className="text-sm text-[#717171] font-normal my-1">Nous vous souhaitons Bea’tslaha dans vos projets </p>
                <button className="text-white bg-[#1D234E] rounded-[8px] font-medium text-base px-[25px] py-[10px] border-none mt-4">Retourner à la page d’accueil</button>
            </div>
        </div>
    </div>
  )
}

export default page
