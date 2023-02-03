import React from 'react'
import team from '../assets/images/team.png';
import hg from '../assets/images/additions/h-green.svg';
import hr from '../assets/images/additions/circles-h-red.svg';
import circlem from '../assets/images/additions/circle-mini.svg';
import { motion } from 'framer-motion';
const Team = () => {
  return (
    <div className='container relative md:px-0 md:w-full'>
      <img src={hg} className='absolute sm:hidden -left-4 -z-10 bottom-0 w-[240px]'/>
      <img src={hr} className='absolute -right-4 -z-10 bottom-14 w-[240px]'/>
      <img src={circlem} className='absolute right-10 z-10 md:-z-10 top-20  w-[40px]'/>
      <img src={circlem} className='absolute left-10 z-10 md:-z-10 top-14  w-[20px]'/>
      <img src={circlem} className='absolute left-14 z-10 md:-z-10 top-40  w-[50px]'/>
      <h1 className='text-3xl mt-20 leading-10 font-poppins text-center text-black'>Supported by real people</h1>
      <p className='text-center text-sm text-gray mt-6'>Our team of Happiness Engineers works remotely from 58 countries providing <br /> customer support across multiple time zones.</p>
      <motion.img initial={{x: -400}} viewport={{ once: true }} transition={{ duration: .3 }} whileInView={{x: 0}} src={team} className='w-full px-20 z-10 md:px-0 mt-6'/>
    </div>
  )
}

export default Team