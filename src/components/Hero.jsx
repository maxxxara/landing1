import React from 'react'
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';
import { motion } from 'framer-motion';
import w from '../assets/images/additions/w.svg';
import ch1 from '../assets/images/additions/circles-h1.svg';
import cv2 from '../assets/images/additions/circles-v1.svg';
const Hero = () => {
  return (
    <div className='mt-8'>
        <div className='bg_liner1 w-screen h-screen absolute top-0 left-0 -z-10'></div>
        <div className='container flex justify-between gap-20'>
            <motion.img viewport={{ once: true }} initial={{opacity: 0}} whileInView={{opacity: 1}} src={w} className='absolute -z-10 w-[700px] -right-40 -top-40 sm:-top-10'/>
            <motion.div viewport={{ once: true }} initial={{x: -200}} whileInView={{x: 0}} transition={{ type: "spring", stiffness: 200 }} className='w-3/5 lg:w-full'>
                <h1 className='text-black font-bold text-7xl sm:text-5xl hero__title  font-poppins'>Building exactly the eCommerce website you want.</h1>
                <p className='text-gray mt-6 mb-8 sm:text-sm'>WooCommerce is a customizable, open-source eCommerce platform built on WordPress. Get started quickly and make your way.</p>
                <div className='flex items-center gap-3 xs:gap-5 xs:flex-col xs:items-start'>
                    <button className='bg-blue text-white py-4 px-8 border-2 border-blue font-medium rounded-full text-sm hover:bg-transparent hover:text-blue transition-all'>Start a New Store</button>
                    <span className='text-gray sm:hidden'>or</span>
                    <button className='bg-transparent text-sky font-medium sm:px-4'>Customize & Extend</button>
                </div>
            </motion.div>
            <div className='w-2/5 relative xl:mt-14 lg:hidden'>
                <motion.img src={cv2} viewport={{ once: true }} initial={{opacity: 0}} whileInView={{opacity: 1}} className='absolute w-[200px] -bottom-20 right-20 xl:bottom-10'/>
                <motion.img src={ch1} viewport={{ once: true }} initial={{opacity: 0}} whileInView={{opacity: 1}} className='absolute w-[300px] -left-32 top-20 -z-10'/>
                <motion.img viewport={{ once: true }} initial={{scale: 0}} whileInView={{scale: 1}} src={hero1} className='absolute w-full rounded-3xl shadow-2xl'/>
                <motion.img viewport={{ once: true }} initial={{y: 200}} whileInView={{y: 0}} src={hero2} className='absolute z-10 -bottom-20 hero__2-image shadow-2xl xl:hidden left-[50%] translate-x-[-50%] rounded-xl w-[200px]'/>
                <motion.img viewport={{ once: true }} initial={{x: 200}} whileInView={{x: 0}} src={hero3} className='absolute z-20 rounded-3xl w-[300px] -right-20 shadow-2xl top-10'/>
            </div>
        </div>
    </div>
  )
}

export default Hero