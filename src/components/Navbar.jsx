import { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-10 container w-full max-w-[1200px] text-[#F1E1D9] bg-[#1E1917] p-4 md:p-6 rounded-[60px] border border-[#FB9718] flex justify-between items-center shadow-lg'>
            {/* Logo */}
            <div>
                <h1 className="text-2xl font-bold">O'ktam</h1>
            </div>

            {/* Menu for Desktop */}
            <ul className='hidden md:flex gap-7 text-lg'>
                {["Men haqimda", "Ko'nikmalar", "Tajriba", "Loyihalar", "Aloqa"].map((item, index) => (
                    <li key={index}>
                        <a className="hover:text-[#00C3E4] transition-colors border-b-2 duration-300 border-transparent hover:border-b-[#00C3E4]"
                            href={`#${item.replace(" ", "")}`}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* "Meni Yollang" Button */}
            <div className="hidden lg:block">
                <button type="button" className="px-4 py-2 rounded-full text-lg font-bold border border-[#FB9718] flex items-center gap-2 bg-gradient-to-r from-[#009FB3] to-[#F59317] transition-all duration-300 hover:scale-105 hover:border-[#F59317] shadow-lg">
                    <a href="https://www.canva.com/design/DAGPOvurd-4/pQmuPnbWUdQzgOxipsi9NA/view?utm_content=DAGPOvurd-4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha577673be2">
                        Meni yollang
                    </a>
                    <LuArrowDownRight />
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#1E1917] p-6 shadow-lg xl  lg:hidden">
                    <ul className="flex flex-col gap-4 text-center">
                        {["Men haqimda", "Ko'nikmalar", "Tajriba", "Loyihalar", "Aloqa"].map((item, index) => (
                            <li key={index}>
                                <a className="text-lg hover:text-[#00C3E4] transition-colors border-b-2 duration-300 border-transparent hover:border-b-[#00C3E4]"
                                    href={`#${item.replace(" ", "")}`}
                                    onClick={() => setMenuOpen(false)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
