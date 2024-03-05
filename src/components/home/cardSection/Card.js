import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function Card({ data }) {
  useEffect(() => {
    aos.init({duration: 3000})
  }, []);

  return (
    <div className='bg-transparent my-[4rem] flex justify-center items-center flex-col relative hover:scale-105 transition duration-500 cursor-pointer'>
        <img src={data.location} alt="" className='w-[22.5rem] h-[24rem] rounded-[1.25rem]'></img>

        <div className='bg-white flex items-center justify-between w-[20rem] h-[7.5rem] px-[1.38rem] rounded-[1.25rem] shadow-md absolute bottom-[-3.5rem] max-xs:w-[17rem]'>
           <div className='flex flex-col justify-between gap-1'>
              <p className='text-[1.50rem] font-semibold max-xs:text-[1.4rem]'>{data.name}</p>
              <p className='text-[1.3rem] font-semibold text-[var(--mainBlue)] max-xs:text-[1.2rem]'>${data.cost}</p>
            </div>
           <button className='bg-[var(--mainBlue)] text-white font-semibold rounded-[1.5rem] py-3 px-7 hover:text-[var(--mainBlue)] hover:bg-white hover:shadow-md hover:shadow-[var(--mainBlue)] transition duration-400 max-xs:'>Detail</button>
           
        </div>
    </div>
  )
}
