import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/Icons/Logo.svg'

export default function Navbar() {

  return (
    <div className='bg-transparent w-full h-[4.5rem] flex justify-center items-center fixed top-0 z-50'>
        <div className='w-[90%] max-lg:w-full max-sm:px-[.5rem] h-[3.5rem] rounded-full bg-[var(--smoothWhite)] flex justify-between items-center px-10 py-2 shadow-sm shadow-gray-400'>
            <Link to='/'><img src={logo} alt='' className='h-10 w-28 select-none max-sm:h-[1.75rem] max-sm:w-[3.5rem]'/></Link>

            <ul className='flex items-center justify-evenly text-[var(--mainBlue)] font-medium max-xl:text-xl max-lg:text-lg max-md:text-sm max-sm:text-[.7rem] md:gap-5 lg:gap-10 max-md:gap-3 max-sm:gap-2 select-none'> 
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/'>Home</NavLink></li>
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/location'>Location</NavLink></li>
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/blogs'>Blogs</NavLink></li>
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/testimonial'>Testimonial</NavLink></li>
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}
