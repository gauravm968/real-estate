import React, { useEffect } from 'react'
import logoName from '../../assets/Icons/logoName.svg'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function LogoBox() {
  useEffect(() => {
    aos.init({duration: 2000})
  }, []);

  return (
    <div data-aos='fade-up' className='w-[90%] bg-white rounded-[30px] flex justify-evenly items-center py-[4.7rem] max-md:py-[3.5rem] shadow-sm shadow-gray-200 z-1 relative bottom-[5.5rem] select-none'>
        <img src={logoName} alt='' className='max-md:w-[5rem] max-md:h-[5rem] max-xs:w-[4rem] max-xs:h-[4rem]'></img>
        <img src={logoName} alt='' className='max-md:w-[5rem] max-md:h-[5rem] max-xs:w-[4rem] max-xs:h-[4rem]'></img>
        <img src={logoName} alt='' className='max-md:w-[5rem] max-md:h-[5rem] max-xs:w-[4rem] max-xs:h-[4rem]'></img>
        <img src={logoName} alt='' className='max-md:w-[5rem] max-md:h-[5rem] max-xs:w-[4rem] max-xs:h-[4rem]'></img>
    </div>
  )
}
