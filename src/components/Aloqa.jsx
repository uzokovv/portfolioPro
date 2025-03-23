import React from 'react'
import email from '../assets/images/email.png'
import { HiOutlineMail } from 'react-icons/hi'
import { IoCallOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'

const Aloqa = () => {
    return (
        <div className='container mx-auto w-full max-w-[1200px] mt-20 px-4' id='Aloqa'>
            <h1 className='text-4xl md:text-5xl text-[#00C3E4] animate__animated text-center mb-6'>Men Bilan Bog'laning</h1>
            <div className='bg-[#53423E] flex flex-col md:flex-row justify-between rounded-[20px] p-6 md:p-8 gap-6'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-[#FB9718] text-2xl md:text-3xl mt-2'>Aloqaga Chiqing</h1>
                    <p className='text-[#F1E1D9] mt-2'>
                        Agar siz hamkorlik qilmoqchi bo'lsangiz, bir necha marta bosish bilan bog'laning!
                    </p>
                    <input className='w-full mt-2 bg-[#645550] rounded-md text-[#F1E1D9] p-2' placeholder='Ismingiz' type="text" />
                    <input className='w-full bg-[#645550] mt-2 rounded-md text-[#F1E1D9] p-2' placeholder='Elektron pochtangiz' type="text" />
                    <textarea className='w-full bg-[#645550] mt-2 rounded-md text-[#F1E1D9] p-2' rows={6} placeholder='Xabar'></textarea>
                    <button className='w-full bg-[#00C3E4] px-4 py-2 rounded-md cursor-pointer mt-3 hover:bg-[#009ab5] transition duration-300'>
                        Yuborish
                    </button>
                </div>
                <div className='w-full md:w-1/2 text-[#F1E1D9] flex flex-col items-center md:items-start text-center md:text-left'>
                    <img className='max-w-[200px] md:max-w-[300px]' src={email} alt="Email Image" />
                    <div className='flex gap-3 text-[18px] mt-4 items-center'>
                        <HiOutlineMail className='text-3xl' />
                        <p>uktamuzoqov2@gmail.com</p>
                    </div>
                    <div className='flex gap-3 text-[18px] mt-4 items-center'>
                        <IoCallOutline className='text-3xl' />
                        <p>+998-88-678-28-06</p>
                    </div>
                    <div className='flex gap-3 text-[18px] mt-4 items-center'>
                        <CiLocationOn className='text-3xl' />
                        <p>Toshkent</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aloqa