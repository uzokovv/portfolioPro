import React from 'react'

const Footer = () => {
    return (
        <footer className="mb-10 mt-20">
            <hr className="w-[90%] mx-auto border-t border-gray-600" />
            <div className="max-w-[1200px] mx-auto container text-[20px] mt-5 flex flex-wrap justify-between items-center text-gray-400 px-4">
                <h1 className="text-xl font-semibold text-[#F1E1D9]">Uzoqov O'ktam</h1>
                <ul className="flex flex-wrap gap-4 sm:gap-7 text-center ">
                    {["Men haqimda", "Ko'nikmalar", "Tajriba", "Loyihalar"].map((item, index) => (
                        <li key={index}>
                            <a 
                                className="hover:text-[#00C3E4] transition-colors border-b-2 duration-300 border-transparent hover:border-b-[#00C3E4]"
                                href={`#${index + 1}`}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer