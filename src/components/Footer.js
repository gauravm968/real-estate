import React from 'react'
import facebook from '../assets/Icons/facebook.png'
import twitter from '../assets/Icons/twitter.png'
import instagram from '../assets/Icons/instagram.png'
import { Link } from 'react-router-dom'
import { BsBuildingsFill } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className='w-full flex justify-between items-center py-[4rem] px-[5.5rem] bg-[var(--smoothWhite)] max-lg:px-[3rem] max-md:px-[2.5rem] max-xs:px-[.5rem]'>
        <div className="w-[40%]">
            <Link to='/'><BsBuildingsFill className='text-[var(--mainBlue)] scale-x-[-1] h-10 w-[2.5rem] max-xs:w-[2rem]'/></Link>
            <div className="">
                <ul className='flex list-none mt-[20px] gap-[22px]'>
                    <li><Link to="www.facebook.com"><img src={facebook} alt="Facebook" className='w-[2rem] max-md:w-[1.6rem] max-xs:w-[1.4rem]'></img></Link></li>
                    <li><Link to="www.twitter.com"><img src={twitter} alt="Twitter" className='w-[2rem] max-md:w-[1.6rem] max-xs:w-[1.4rem]'></img></Link></li>
                    <li><Link to="www.instagram.com"><img src={instagram} alt="Instagram" className='w-[2rem] max-md:w-[1.6rem] max-xs:w-[1.4rem]'></img></Link></li>
                </ul>
            </div>
            <p className='text-[1.1rem] w-[21.3rem] mt-[1.3rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.5rem] max-xs:mt-[.7rem]'>Copyright@ 2023 Gaurav Mahor</p>
        </div>
        
        <div className="w-[60%] max-lg:gap-[5.3rem] flex gap-[7.65rem] justify-end max-md:gap-[3rem] max-sm:gap-[2.8rem] max-xs:gap-[.4rem]">
            <div className="">
                <h3 className='text-[1.1rem] font-semibold max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'>Location</h3>
                <ul className='list-none mt-[1.15rem] flex flex-col gap-[1.15rem]'>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>America</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Asia</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Europe</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Africa</Link></li>
                </ul>
            </div>
            <div className="">
                <h3 className='text-[1.1rem] font-semibold max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'>Contact</h3>
                <ul className='list-none mt-[1.15rem] flex flex-col gap-[1.15rem]'>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>About Me</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Teams</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Profile</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>FAQ</Link></li>
                </ul>
            </div>
            <div className="">
                <h3 className='text-[1.1rem] font-semibold max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'>Legals</h3>
                <ul className='list-none mt-[1.15rem] flex flex-col gap-[1.15rem]'>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Privacy</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Disclaimer</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Terms</Link></li>
                    <li className='text-[1.1rem] max-md:text-[.9rem] max-sm:text-[.7rem] max-xs:text-[.65rem]'><Link to='/#'>Company</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
