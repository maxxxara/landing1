import React from 'react'
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import v from '../assets/images/additions/v-green.svg';
import h from '../assets/images/additions/h-green.svg';
import circlem from '../assets/images/additions/circle-mini.svg';
import circle from '../assets/images/additions/circle.svg';
import { motion } from 'framer-motion';
const Blog = () => {
  return (
    <div className='blog  w-screen h-[930px] mt-10 relative'>
        <img src={circle} className='absolute w-[240px] top-[22%] left-[10%] z-0' />
        <img src={circlem} className='absolute w-[40px] top-[18%] left-[5%] z-0' />
        <img src={v} className='absolute w-[140px] top-[30%] left-[12%] z-0' />
        <img src={circle} className='absolute w-[240px] bottom-[30%] right-[10%] z-0' />
        <img src={circlem} className='absolute w-[40px] bottom-[50%] right-[36%] z-20' />
        <img src={v} className='absolute w-[140px] bottom-[30%] right-[12%] z-0' />
        <div className='container'>
            <div className='flex ml-40 z-10 relative xs:pr-10 blog__item md:flex-col'>
                <motion.img viewport={{ once: true }} initial={{scale: 0}} transition={{ duration: .5 }} whileInView={{scale: 1}} src={blog1} className='w-[300px] xs:pr-2 xs:w-full xs:rounded-3xl z-10 blog__image rounded-2xl shadow-2xl'/>
                <div className='text-white mt-32 ml-10 md:mt-4 md:ml-0'>
                    <h4 className='font-poppins text-2xl leading-10'>Develop <br />Without Limits</h4>
                    <p className='w-[440px] text-sm mt-2 mb-4 leading-6'>WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</p>
                    <button className='bg-green py-3 px-4 border-2 font-medium border-green shadow-xl rounded-full text-xs hover:bg-transparent transition-all'>Read the  Documentation</button>
                </div>
            </div>
            <div className='flex mr-40 xs:pr-5 justify-end mt-16 z-10 relative blog__item md:flex-col-reverse'>
                <div className='text-white mt-20 mr-10'>
                    <h4 className='font-poppins text-2xl leading-10'>Know our <br />Global Community</h4>
                    <p className='w-[440px] text-sm mt-2 mb-4 leading-6'>WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</p>
                    <button className='bg-green py-3 px-4 border-2 shadow-xl font-medium border-green rounded-full text-xs hover:bg-transparent transition-all'>Read the  Documentation</button>
                </div>
                <motion.img viewport={{ once: true }} initial={{scale: 0}} transition={{ duration: .5 }} whileInView={{scale: 1}} src={blog2} className='w-[300px] xs:w-full xs:rounded-3xl z-10 rounded-3xl blog__image'/>
            </div>
        </div>
    </div>
  )
}

export default Blog