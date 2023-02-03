import React from 'react'
import { FiFacebook, FiInstagram, FiTwitch, FiTwitter, FiWifi } from 'react-icons/fi';
import logo from '../assets/images/logo-w.svg';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <>
    <footer className='bg-blue py-14'>
        <div className='container'>
            <div className='flex justify-center border-b border-[#9A7DFF] pb-16'>
                <motion.img src={logo} initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: .5}} />
            </div>
            <div className='pt-16 flex justify-between sm:justify-center gap-x-8 flex-wrap gap-y-10'>
                <ul className='text-white text-sm space-y-3'>
                    <li className='font-bold mb-5'>WHO WE ARE</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Work With Us</li>
                </ul>
                <ul className='text-white text-sm space-y-3'>
                    <li className='font-bold mb-5'>WOOCOMMERCE</li>
                    <li>Features</li>
                    <li>Payments</li>
                    <li>Marketing</li>
                    <li>Shipping</li>
                    <li>Extension Store</li>
                    <li>eCommerce Blog</li>
                    <li>Development Blog</li>
                    <li>Ideas Board</li>
                    <li>Mobile App</li>
                    <li>Community</li>
                    <li>Style Guide</li>
                </ul>
                <ul className='text-white text-sm space-y-3'>
                    <li className='font-bold mb-5'>OTHER PRODUCTS</li>
                    <li>Storefront</li>
                    <li>WooSlider</li>
                    <li>Sensei</li>
                    <li>Sensei Extension</li>
                </ul>
                <ul className='text-white text-sm space-y-3'>
                    <li className='font-bold mb-5'>SUPPORT</li>
                    <li>Documentation</li>
                    <li>Customizations</li>
                    <li>Support Policy</li>
                    <li>Contact</li>
                    <li>COVID-19 Resources</li>
                    <li>Privacy Notice</li>
                    <li>California Users</li>
                </ul>
                <ul className='text-white text-sm space-y-3'>
                    <li className='font-bold mb-5'>WE RECOMMEND</li>
                    <li>WooExperts</li>
                    <li>Hosting Solutions</li>
                    <li>Pre-sales FAQ</li>
                    <li>Sucess Stories</li>
                    <li>Design Feedback Group</li>
                </ul>
            </div>
        </div>
    </footer>
    <div className='container py-4 flex items-center justify-between gap-10 sm:gap-6 sm:flex-col'>
        <div className='flex gap-6'>
            <FiTwitter className='stroke-black w-5 h-5 cursor-pointer' />
            <FiFacebook className='stroke-black w-5 h-5 cursor-pointer'/>
            <FiTwitch className='stroke-black w-5 h-5 cursor-pointer'/>
            <FiInstagram className=' stroke-black w-5 h-5 cursor-pointer'/>
        </div>
        <p className='text-sm text-black font-medium sm:text-center'>COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</p>
    </div>
    </>
  )
}

export default Footer