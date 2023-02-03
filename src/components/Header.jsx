import React, { useState } from 'react'
import logo from '../assets/images/logo.svg';
import search from '../assets/images/icons/search.svg';
import {FiMenu, FiX} from 'react-icons/fi'
import { AnimatePresence, motion } from "framer-motion"

import clsx from 'clsx';
const Header = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className='py-14'>
        <div className='container flex justify-between items-center'>
            <div className='flex items-center'>
                <motion.img src={logo} initial={{ y: -80 }} whileInView={{ y: 0 }} className={clsx(nav && 'hidden', 'cursor-pointer')}/>
                <nav className={clsx(nav ? 'lg:block' : 'lg:hidden', 'md:ml-0 ml-32 header__nav')}>
                    <motion.ul initial={{ x: -100 }} whileInView={{ x: 0 }} exit={{x: -100}} className='sm:bg-gray sm:absolute sm:top-0 sm:left-0 sm:w-full sm:flex-col sm:items-center sm:py-10 flex gap-9 text-black text-base font-medium'>
                        <li className='cursor-pointer hover:text-blue transition-all' onClick={() => window.scrollTo({top: 700, behavior: 'smooth' })}>Sell</li>
                        <li className='cursor-pointer hover:text-blue transition-all' onClick={() => window.scrollTo({top: 1300, behavior: 'smooth' })}>Marketplace</li>
                        <li className='cursor-pointer hover:text-blue transition-all' onClick={() => window.scrollTo({top: 2200, behavior: 'smooth' })}>Community</li>
                        <li className='cursor-pointer hover:text-blue transition-all' onClick={() => window.scrollTo({top: 2700, behavior: 'smooth' })}>Develop</li>
                        <li className='cursor-pointer hover:text-blue transition-all' onClick={() => window.scrollTo({top: 3100, behavior: 'smooth' })}>Resources</li>
                    </motion.ul>
                </nav>
            </div>
            <div className='flex items-center'>
                <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  onClick={() => window.scrollTo({top: 700, behavior: 'smooth' })} className={clsx(nav && 'hidden', 'font-medium bg-blue xs:hidden w-[100px] h-[40px] border-2 border-blue text-white text-sm rounded-md hover:bg-transparent hover:text-blue transition-all duration-500')}>Get Started</motion.button>
                <img src={search} className={clsx(nav && 'hidden', 'cursor-pointer ml-4')}/>
                <FiMenu onClick={() => setNav(!nav)} className={clsx(nav && 'lg:hidden', 'hidden lg:block ml-4 text-black w-5 h-5 cursor-pointer relative z-10')}/>
                <FiX onClick={() => setNav(!nav)} className={clsx(!nav && 'lg:hidden', 'hidden lg:block ml-4 text-black w-5 h-5 cursor-pointer relative z-10')}/>
            </div>
        </div>
    </div>
  )
}

export default Header