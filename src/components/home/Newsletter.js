import React, { useEffect } from 'react'
import mail from '../../assets/Icons/mail.png'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function Newsletter() {
  useEffect(() => {
    aos.init({duration: 2000})
  }, []);
  return (
    <div className='w-[90%]'>

        <section className="flex justify-center my-5" data-aos='fade-up'>
       <div className='flex flex-col justify-center items-center bg-[#6663e9] w-[75.63rem] h-min rounded-[4.38rem] px-[13rem] gap-3 py-[3rem] max-lg:w-[60rem] max-lg:px-[10rem] max-md:px-[6rem] max-md:w-[55rem] max-sm:w-[45rem] max-sm:px-[2rem] max-xs:w-[35rem]'>
        <h1 className='text-white text-[3.5rem] max-md:text-[1.7rem] font-bold text-center max-lg:text-[3rem] max-sm:text-[1.3rem] max-xs:text-[1.1rem]'>Subscribe to Our Newsletter For Weekly Article Update.</h1>
        <p className='text-white text-[1.1rem] max-md:text-[0.8rem] px-[4rem] text-center max-sm:text-[0.7rem] max-sm:px-[2rem] max-xs:px-[1rem]'>We have real estate-related blog so we can share our thoughts and routinity in our blog that updated weekly. We will not spam you, we promise.</p>
        
        <div className="flex xl:justify-between items-center mt-[1rem] w-[80%] flex-wrap max-xl:justify-center max-xl:gap-3 max-xs:items-center">
          <div className='flex items-center max-xs:items-center'>
            <img src={mail} alt="Mail" className='relative left-[3.1rem] z-10'></img>
            <input type="email" placeholder="Enter E-mail address" className='relative bg-[#5654d1] text-white outline-none border-none text-[1rem] py-[1.25rem] pl-[4.38rem] pr-[2rem] w-[25rem] rounded-[1.9rem] max-xs:text-[.7rem] max-xs:py-[1rem] max-xs:w-[13rem] max-xs:mr-[3rem]'></input>
          </div>
          <button className='bg-white text-[var(--mainBlue)] text-[1.2rem] py-[1.1rem] text-center font-extrabold px-[2.5rem] rounded-[1.9rem] hover:text-white hover:bg-[var(--mainBlue)] hover:shadow-md hover:shadow-white transition duration-400 max-xl:ml-4 max-xs:px-[1.5rem] max-xs:py-[.9rem] max-xs:text-[.8rem]'>Subscribe</button>
        </div>
        </div>
    </section>

    </div>
  )
}
