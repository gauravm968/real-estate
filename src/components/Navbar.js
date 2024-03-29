import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsBuildingsFill } from "react-icons/bs";

export default function Navbar() {

  return (
    <div className='bg-transparent w-full h-[4.8rem] flex justify-center items-center fixed top-0 z-50'>
        <div className='w-[90%] max-lg:w-full max-sm:px-[.5rem] h-[4rem] rounded-full bg-[var(--smoothWhite)] flex justify-between items-center px-10 py-4 shadow-sm shadow-gray-400'>
            <Link to='/'><BsBuildingsFill className='text-[var(--mainBlue)] scale-x-[-1] h-10 w-[2.5rem] select-none max-sm:h-[1.75rem] max-sm:w-[2rem]'/></Link>

            <ul className='flex items-center justify-evenly text-[var(--mainBlue)] font-semibold max-xl:text-xl max-lg:text-lg max-md:text-sm max-sm:text-[.7rem] md:gap-5 lg:gap-10 max-md:gap-3 max-sm:gap-2 select-none'> 
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/'>Home</NavLink></li>
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/location'>Location</NavLink></li>
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/blogs'>Blogs</NavLink></li>
		<li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/contact'>Contact</NavLink></li>
                <li className='hover:scale-125 transition duration-500 cursor-pointer'><NavLink to='/login'>Login</NavLink></li>
                
            </ul>
        </div>
    </div>
  )
}
