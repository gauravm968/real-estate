import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Booking from '../components/home/bookingSection/Booking'
import CardsSection from '../components/home/cardSection/CardsSection'
import LogoBox from '../components/home/LogoBox'
import Newsletter from '../components/home/Newsletter'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    aos.init({duration: 2000})
  }, []);
  
  return (
    <div className='w-full h-min flex flex-col items-center bg-[var(--smoothWhite)]'>

    <div className="background-img w-full h-screen flex justify-center">
      <div data-aos='fade-right' className='w-[80%] h-min flex flex-col items-start z-0 text-[var(--smoothWhite)] leading-auto mt-[10rem] select-none max-sm:mt-[8rem] max-xs:items-center max-xs:text-center'>
        <h1 className='text-[4.5rem] font-bold max-sm:text-[2.5rem] max-md:text-[3.3rem] max-lg:text-[4.2rem]'>Home That Makes</h1>
        <h1 className='text-[4.5rem] font-bold max-sm:text-[2.5rem] max-md:text-[3.3rem] max-lg:text-[4.2rem]'>You Living Life!</h1>
        <p className='text-[1.1rem] w-[48%] font-medium max-lg:w-[60%] max-sm:w-[70%] max-sm:text-[0.9rem]'>Are you looking for amazing Real estate? Don't worry! we got it for you</p>
        <Link to='/blogs'><button  className='bg-[var(--mainBlue)] text-[1.1rem] font-semibold rounded-full py-[.63rem] px-[1.9rem] mt-[1.5rem] hover:text-[var(--mainBlue)] hover:bg-white hover:shadow-md hover:shadow-[var(--mainBlue)] transition duration-400' id='un'>Learn More</button></Link>
      </div>
    </div>

    <LogoBox />
    <CardsSection />
    <Booking />
    <Newsletter />
    </div>
  )
}
