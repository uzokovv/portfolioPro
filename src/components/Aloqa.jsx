import React from 'react'
import email from '../assets/images/email.png'
import { HiOutlineMail } from 'react-icons/hi'
import { IoCallOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'

const Aloqa = () => {
    return (
        <div className='w-[1200px] container mx-auto mt-30'>
            <h1 className='text-5xl text-[#00C3E4] animate__animated text-center mb-4'>Men Bilan Bog'laning</h1>
            <div className='bg-[#53423E] flex justify-between rounded-[20px] p-8 '>
                <div>
                    <h1 className='text-[#FB9718] text-3xl mt-2'>Aloqada Qiling</h1>
                    <p className='text-[#F1E1D9] mt-2'>Agar siz hamkorlik qilmoqchi bo'lsangiz, bir necha marta bosish bilan bog'laning!</p>
                    <input className='w-full mt-2 bg-[#645550] rounded-[5px] text-[#F1E1D9] p-2' placeholder='Ismingiz' type="text" />
                    <input className='w-full bg-[#645550] mt-2 rounded-[5px] text-[#F1E1D9] p-2' placeholder='Elektron pochtangiz' type="text" />
                    <textarea className='w-full bg-[#645550] mt-2 rounded-[5px] text-[#F1E1D9] p-2' rows={10} placeholder='xabar' name="" id=""></textarea>
                    <button className='w-full bg-[#00C3E4] px-4 py-2 rounded-[10px] cursor-pointer mt-2'>Yuborish</button>
                </div>
                <div className='text-[#F1E1D9] p-5'>
                    <img className='max-w-[300px]' src={email} alt="email image" />

                    <div className='flex gap-3 text-[18px] mt-4'>
                        <HiOutlineMail className='text-3xl'  />
                        <p>uktamuzoqov2@gmail.com</p>
                    </div>
                    <div className='flex gap-3 text-[18px] mt-4'>
                        <IoCallOutline className='text-3xl' />
                        <p>+998-88-678-28-06</p>
                    </div>
                    <div className='flex gap-3 text-[18px] mt-4'>
                        <CiLocationOn className='text-3xl'  />
                        <p>Toshkent</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aloqa