import React from 'react'
import hg from '../assets/images/additions/circles-h-red.svg';
import hr from '../assets/images/additions/h-green.svg';
import rev1 from '../assets/images/additions/rev1.png';
import rev2 from '../assets/images/additions/rev2.png';
import rev3 from '../assets/images/additions/rev3.png';
import rev4 from '../assets/images/additions/rev4.png';
import rev5 from '../assets/images/additions/rev5.png';
import rev6 from '../assets/images/additions/rev6.png';
import arrowRight from '../assets/images/icons/arrow-right.svg';
import arrowLeft from '../assets/images/icons/arrow-left.svg';
import { motion } from 'framer-motion';
const Reviews = () => {
  return (
    <div className='relative'>
        <img src={hg} className='absolute w-[260px] right-[20%] top-[20%] md:top-[10%]'/>
        <img src={hr} className='absolute w-[260px] left-[20%] bottom-[4%]'/>
        <img src={rev1} className='absolute w-[60px] sm:-z-10 shadow-xl rounded-full left-[10%]' />
        <img src={rev2} className='absolute w-[80px] shadow-xl rounded-full top-[40%] left-[20%]' />
        <img src={rev3} className='absolute w-[90px] z-10 shadow-xl rounded-full top-[70%] left-[10%]' />
        <img src={rev4} className='absolute w-[50px] shadow-xl rounded-full top-[70%] right-[10%]' />
        <img src={rev5} className='absolute w-[80px] shadow-xl rounded-full top-[30%] right-[14%]' />
        <img src={rev6} className='absolute w-[80px] z-10 shadow-xl rounded-full top-[10%] right-[6%]' />
        <div className='bg_liner2 w-screen h-[700px] -z-10 absolute top-[-150px]'></div>
        <div className='container pb-20'>
            <h1 className='text-3xl md:mt-[-100px] leading-10 font-poppins text-center text-black'>Your eCommerce <br />made simple</h1>
            <motion.div viewport={{ once: true }} initial={{scale: 0}} transition={{ duration: .5 }} whileInView={{scale: 1}} className='bg-white rounded-xl mx-auto w-fit shadow-xl px-14 py-20 mt-10 relative'>
                <div className='absolute bg-white w-full px-4 -z-10 h-[200px] opacity-70 shadow-xl left-0 -bottom-4 rounded-xl'></div>
                <div className='absolute bg-white w-full -z-10 h-[200px] opacity-30 shadow-xl left-0 -bottom-8 rounded-xl'></div>
                <p className='text-gray leading-8 italic xs:text-xs md:w-full text-center w-[440px] z-20'>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
            </motion.div>
            <div className='flex justify-center items-center gap-4 mt-10 ml-80 sm:ml-0 sm:justify-end'>
                <motion.img viewport={{ once: true }} src={arrowLeft} transition={{ duration: .5 }} initial={{x: -300}} whileInView={{x: 0}} className='w-5 h-5 cursor-pointer' />
                <motion.img viewport={{ once: true }} src={arrowRight} transition={{ duration: .5 }} initial={{x: 200}} whileInView={{x: 0}} className='w-8 h-8 cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Reviews