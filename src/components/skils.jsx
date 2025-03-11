import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si';

const Skils = () => {
  const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "TypeScript",
      icon: SiTypescript,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "Redux",
      icon: SiRedux,
    },
    {
      skill: "NextJS",
      icon: SiNextdotjs,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
  ];
  return (
    <div className='container mx-auto w-[1200px] mt-20'>
      <div className='text-center'>
        <h1 className='text-5xl text-[#00C3E4] animate__animated'>Mening Mahoratim</h1>
        <p className='mt-4 text-[#F1E1D9] '>Men nafaqat ushbu texnologiyalar bilan ishlayman, balki ularni yuqori sifatli natijalarga erishish uchun eng yaxshi amaliyotlar bilan ishlatishda juda yaxshi, men portfel loyihalarimni yaratish uchun ushbu ko'nikmalar bilan ishladim</p>
      </div>

      <div className='flex items-center justify-center relative gap-2'>
        {
          skills.map((item, index) => (
            <div key={index} className="hover:-translate-y-10 transition-all duration-500">
              <div className="flex flex-col items-center gap-2 relative">
                <div className="bg-white text-[#00C3E4] h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-[#FB9718]">
                  {<item.icon/>}
                </div>
                <p className="text-white font-bold">{item.skill}</p>
              </div>
              <div className="w-[100px] h-[200px] bg-[#FB9718] absolute top-[50px] -z-10"></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skils