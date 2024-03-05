import React from 'react'
import { data } from '../../../data'
import Card from './Card.js'
import aos from 'aos'
import 'aos/dist/aos.css'

export default function CardsSection() {
  aos.init()
  return (
    <div data-aos='fade-up' className='w-[90%] flex flex-col items-center flex-wrap max-xs:mt-[-2rem]'>
        <div className='text-black text-[3.5rem] max-md:text-[2.5rem] font-bold flex flex-col items-center max-xs:text-center'>
            <h2>Our Best Estate, </h2>
            <h2>are Modern!</h2>
        </div>

        <div className='grid grid-cols-3 gap-12 max-md:grid-cols-1 max-lg:grid-cols-2 max-xs:gap-3'>
          {
              data.map((d) => (
                <Card key={d.id} data={d}/>
              ))
          }
        </div>
    </div>
  )
}
