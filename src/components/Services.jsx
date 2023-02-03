import React from 'react'
import s1 from '../assets/images/services1.jpg';
import add1 from '../assets/images/additions/services1.jpg';
import add2 from '../assets/images/additions/services2.jpg';
import add3 from '../assets/images/additions/services3.jpg';
import add4 from '../assets/images/additions/services4.jpg';
import add5 from '../assets/images/additions/services5.jpg';
import add6 from '../assets/images/additions/services6.jpg';
import add7 from '../assets/images/additions/services7.jpg';
import add8 from '../assets/images/additions/services8.jpg';
import { motion } from 'framer-motion';
const Services = () => {
  return (
    <div className='container pt-36 pb-20'>
      <h1 className='text-3xl leading-10 font-poppins text-center text-black'>Your eCommerce <br />made simple</h1>
      <div className='px-10 xl:px-0 grid grid-cols-3 gap-10 mt-10 md:grid-cols-1'>
        <motion.div viewport={{ once: true }} initial={{x: -200}} whileInView={{x:0}} className='relative'>
          <img src={add1} className='lg:hidden absolute w-[120px] shadow-xl rounded-xl top-[50%] translate-y-[-100%] -left-10'/>
          <img src={s1} className='rounded-xl w-full'/>
          <h3 className='font-poppins text-2xl text-black mt-6'>All You Need to Start</h3>
          <p className='text-gray mt-2 mb-3 text-sm'>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
          <a href="#" className='text-sky font-medium'>Ecommerce for Wordpress</a>
        </motion.div>
        <motion.div viewport={{ once: true }} initial={{y: 200}} whileInView={{y:0}} className='relative top-6 lg:top-0'>
          <img src={add2} className='absolute w-[70px] shadow-xl rounded-md -top-4 left-[50%] lg:hidden' />
          <img src={add3} className='absolute w-[70px] shadow-xl rounded-md left-10 top-[53%] xl:hidden' />
          <img src={add4} className='absolute w-[70px] shadow-xl rounded-md top-24 left-4 lg:hidden' />
          <img src={add5} className='absolute w-[70px] shadow-xl rounded-md top-[40%] xl:hidden right-32' />
          <img src={add6} className='absolute w-[70px] shadow-xl rounded-md top-[20%] right-4 lg:hidden' />
          <img src={s1} className='rounded-xl w-full'/>
          <h3 className='font-poppins text-2xl text-black mt-6'>All You Need to Start</h3>
          <p className='text-gray mt-2 mb-3 text-sm'>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
          <a href="#" className='text-sky font-medium'>Ecommerce for Wordpress</a>
        </motion.div>
        <motion.div viewport={{ once: true }} initial={{x: 200}} whileInView={{x:0}} className='relative'>
          <img src={add7} className='lg:hidden absolute w-[130px] -top-4 shadow-xl rounded-xl' />
          <img src={add8} className='lg:hidden absolute w-[130px] bottom-48 -right-10 rounded-xl shadow-xl' />
          <img src={s1} className='rounded-xl w-full'/>
          <h3 className='font-poppins text-2xl text-black mt-6'>All You Need to Start</h3>
          <p className='text-gray mt-2 mb-3 text-sm'>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
          <a href="#" className='text-sky font-medium'>Ecommerce for Wordpress</a>
        </motion.div>
      </div>
    </div>
  )
}

export default Services