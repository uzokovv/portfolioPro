import React from 'react'

const Footer = () => {
    return (
        <div className='mb-10 mt-20'>
            <hr className='text-[#F1E1D9] w-[90%] mx-auto' />
            <div className='max-w-[1200px] mx-auto container text-[25px] mt-5 flex justify-between text-[#978580]'>
                <h1 className=''>Uzoqov O'ktam</h1>
                <ul className='flex gap-7'>
                    <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="#1">Men haqimda</a></li>
                    <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="#2">Ko'nikmalar</a></li>
                    <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="">Tajriba</a></li>
                    <li><a className="hover:text-[#00C3E4] transition-colors border-b-1 duration-500 border-transparent hover:border-b-[#00C3E4]" href="">Loyihalar</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer