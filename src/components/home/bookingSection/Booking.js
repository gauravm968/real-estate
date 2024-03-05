import React from 'react'
import BookFirst from './BookFirst'
import BookSecond from './BookSecond'

export default function Booking() {
  return (
    <div className='w-full flex flex-col justify-evenly py-20 mt-20 max-lg:hidden'>
        <BookFirst />
        <BookSecond />
    </div>
  )
}
