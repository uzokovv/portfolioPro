import React from 'react'
import aboutMeImg from '../assets/images/about-me.jpg'
const AboutMe = () => {
    return (
        <div id='Menhaqimda' className='container mx-auto w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between text-[#F1E1D9] mt-20 px-4'>
            <div className='animate__animated animate__fadeInLeft md:mt-0 mt-10 text-center md:text-left'>
                <h1 className='text-4xl md:text-5xl text-[#00C3E4] animate__animated'>Men Haqimda</h1>
                <p className='max-w-[700px] mt-6 md:mt-10 mx-auto md:mx-0'>
                    Men O'ktam, o‘qish va dasturlashga ishtiyoqi baland bo‘lgan veb-dasturchilik bo‘yicha instruktor. Men React va front-end dasturlashga ixtisoslashganman hamda talabalarimga haqiqiy loyihalar yaratishda va zamonaviy veb-texnologiyalarni o‘zlashtirishda yordam beraman.
                    Dasturlashdan tashqari, men doimiy o‘rganish va bilim almashishni yaxshi ko‘raman, boshqalarni o‘z maqsadlariga erishishga ilhomlantirishga harakat qilaman.
                </p>
                <button className="border border-[#FB9718] rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-6 md:mt-10 hover:bg-[#FB9718] transition-all duration-500 cursor-pointer mx-auto md:mx-0">
                    Mening loyihalarim
                </button>
            </div>
            <div className="animate__animated animate__fadeInRight h-[400px] md:h-[500px] w-[250px] md:w-[300px] relative mt-10 md:mt-0">
                <div className="h-full w-full rounded-[80px] md:rounded-[100px] absolute overflow-hidden">
                    <img
                        src={aboutMeImg}
                        alt="About Me Image"
                        className="h-full w-auto object-cover"
                    />
                </div>
                <div className="h-[400px] md:h-[500px] w-[200px] md:w-[250px] bg-[#FB9718] absolute bottom-[-20px] md:bottom-[-30px] left-[-20px] md:left-[-30px] rounded-bl-[100px] md:rounded-bl-[120px] rounded-tr-[100px] md:rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
            </div>
        </div>

    )
}

export default AboutMe