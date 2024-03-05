import React from 'react'
import featureFrame from '../../../assets/img/featureImageBg1.svg'
import featureImg from '../../../assets/img/featuresImage1.png'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function BookFirst() {
  aos.init({duration: 2000})
  return (
    <div className='flex items-center' data-aos='fade-up'>
      {/* left section */}
        <div className='w-[50%]'>
          <img src={featureFrame} alt="frame" className='w-[35.1rem] absolute'></img>
          <img src={featureImg} alt="" className='w-[25.13rem] h-[25rem] rounded-[3.15rem] relative left-[7.05rem] bottom-[3.1rem] '></img>
        </div>

        {/* right section */}
        <div className='w-[50%] flex justify-start'>
          <div className='w-[75%] flex flex-col justify-between items-start gap-3 '>
          <h1 className='text-black text-[3.4rem] font-bold'>Modern, Trendy, Affordable</h1>
          <p className='text-gray-500 text-[1.1rem] w-[30rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea commodi delectus velit distinctio.</p>
          <button className='bg-[var(--mainBlue)] text-white font-semibold rounded-[1.5rem] py-3 px-7 hover:text-[var(--mainBlue)] hover:bg-white hover:shadow-md hover:shadow-[var(--mainBlue)] transition duration-400'>Early Bird Book</button>
          </div>
        </div>
    </div>
  )
}
