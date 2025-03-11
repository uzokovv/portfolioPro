import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const Navbar = () => {
    return (
        <nav className='container mx-auto w-[1200px] text-[#F1E1D9] flex justify-between items-center text-2xl bg-[#1E1917] p-9 rounded-[50px] border-1 borderColor mt-2'>
            <div>
                <h1>O'ktam</h1>
            </div>
            <ul className='flex gap-7'>
                <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="">Men haqimda</a></li>
                <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="">Ko'nikmalar</a></li>
                <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="">Tajriba</a></li>
                <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="">Loyihalar</a></li>
                <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="">Aloqa</a></li>
            </ul>
            <div>
                <button type="button" className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-[#FB9718] border flex items-center gap-1 bg-gradient-to-r from-[#009FB3] to-[#F59317] transition-all duration-500 hover:scale-110 hover:border-[#F59317] cursor-pointer hover:shadow-cyanShadow">
                    meni yollang
                    <LuArrowDownRight />
                </button>
            </div>
        </nav>
    )
}

export default Navbar