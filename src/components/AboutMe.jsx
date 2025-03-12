import React from 'react'
import aboutMeImg from '../assets/images/about-me.jpg'
const AboutMe = () => {
    return (
        <div id='1' className='container mx-auto w-[1200px] flex items-center justify-between text-[#F1E1D9] mt-20'>
            <div className='animate__animated animate__fadeInLeft mt-30'>
                <h1 className='text-5xl text-[#00C3E4] animate__animated'>Men Haqimda</h1>
                <p className='w-[700px] mt-10'>
                    Men Uktam emasman, ta'lim va kodlash uchun bir ehtiros bilan veb tuzuvchi instruktor. Men React va front-end rivojlanishiga ixtisoslashganman,
                    talabalarga haqiqiy loyihalarni qurishda va zamonaviy veb-texnologiyalarni o'zlashtirishda yordam beraman. Men ham bir YouTube kanali ishlatish,
                    CodeNest, men texnologiyalar muvaffaqiyatli martaba tomon o'z safarda izlanuvchan chiquvchilar hidoyat qilish qo'llanmalar va kurslar yaratish
                    qaerda. Kodlashdan tashqari, men boshqalarga o'z maqsadlariga erishish uchun Ilhom berish uchun doimiy o'rganish va bilim almashishdan zavqlanaman.
                </p>
                <button className="border border-[#FB9718] rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-[#FB9718] transition-all duration-500 cursor-pointer md:self-start sm:self-center">
                    My Projects
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