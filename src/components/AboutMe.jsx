import React from 'react'
import aboutMeImg from '../assets/images/about-me.jpg'
const AboutMe = () => {
    return (
        <div id='MenHaqimda' className='container mx-auto w-[1200px] flex items-center justify-between text-[#F1E1D9] mt-20'>
            <div className='animate__animated animate__fadeInLeft mt-30'>
                <h1 className='text-5xl text-[#00C3E4] animate__animated'>Men Haqimda</h1>
                <p className='w-[700px] mt-10'>
                    Men O'ktam, o‘qitish va dasturlashga ishtiyoqi baland bo‘lgan veb-dasturchilik bo‘yicha instruktor. Men React va front-end dasturlashga ixtisoslashganman hamda talabalarimga haqiqiy loyihalar yaratishda va zamonaviy veb-texnologiyalarni o‘zlashtirishda yordam berama
                    Dasturlashdan tashqari, men doimiy o‘rganish va bilim almashishni yaxshi ko‘raman, boshqalarni o‘z maqsadlariga erishishga ilhomlantirishga harakat qilaman.
                </p>
                <button className="border border-[#FB9718] rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-[#FB9718] transition-all duration-500 cursor-pointer md:self-start sm:self-center">
                    Mening loyihalarim
                </button>
            </div>
            <div className="animate__animated animate__fadeInRight h-[500px] w-[300px] relative">
                <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
                    <img
                        src={aboutMeImg}
                        alt="About Me Image"
                        className="h-full w-auto object-cover"
                    />
                </div>
                <div className="h-[500px] w-[250px] bg-[#FB9718] absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
            </div>
        </div>
    )
}

export default AboutMe