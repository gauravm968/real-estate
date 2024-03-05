import React from 'react'
import featureFrame from '../../../assets/img/featureImageBg1.svg'
import featureImg from '../../../assets/img/featuresImage2.png'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function BookSecond() {
  aos.init({duration: 2000})
  return (
    <div className='flex items-center mt-[8rem]' data-aos='fade-up'>
         {/* left section */}
         <div className='w-[50%] flex justify-end'>
         <div className='w-[75%] flex flex-col justify-between items-start gap-3'>
          <h1 className='text-black text-[3.4rem] max-md:text-[2.5rem] font-bold'>Unique House for Long Term!</h1>
          <p className='text-gray-500 text-[1.1rem] w-[30rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea commodi delectus velit distinctio.</p>
          <button className='bg-[var(--mainBlue)] text-white font-semibold rounded-[1.5rem] py-3 px-7 hover:text-[var(--mainBlue)] hover:bg-white hover:shadow-md hover:shadow-[var(--mainBlue)] transition duration-400'>Early Bird Book</button>
          </div>
        </div>

        {/* right section */}
        <div className='w-[50%] flex justify-end'>
          <img src={featureFrame} alt="frame" className='w-[35.1rem] absolute scale-x-[-1]'></img>
          <img src={featureImg} alt="" className='w-[25.13rem] h-[25rem] rounded-[3.15rem] relative right-[7.05rem] bottom-[3.1rem]'></img>
        </div>
    </div>
  )
}
