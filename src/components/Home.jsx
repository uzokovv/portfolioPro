import React from 'react'
// import meImg from '../assets/images/me.jpg'

const Home = () => {
    return (
        <div>
            <div className='mt-60 flex justify-between items-center max-w-[1200px] text-[#F1E1D9] mx-auto container'>
                <div>
                    <h1 className='text-5xl text-[#FB9718] animate__animated animate__fadeInDown'>Uzoqov O'ktam</h1>
                    <h1 className='text-5xl mt-2 animate__animated animate__fadeInLeft'>Front-End Web Dasturchi</h1>
                </div>
                <div>
                    {/* <img className='rounded-[50%] w-48 h-48' src={meImg} alt="" /> */}
                </div>
            </div>
            <div className='lg:text-4xl lg:p-8  flex items-center justify-around gap-5 bg-[#54433F] text-[#F1E1D9] border-[#F1E1D9] mt-60 w-full md:text-2xl p-4 sm:flex-row flex-col'>
                <h1>TEZ O'RGANUVCHI</h1>
                <h1>JAMOA BILAN ISHLASH</h1>
                <h1>TAFSILOTLAR USTASI</h1>
            </div>
        </div>
    )
}

export default Home