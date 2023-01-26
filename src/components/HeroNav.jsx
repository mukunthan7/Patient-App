import React from 'react'
import { Link }from 'react-router-dom'
import {  FaHome } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion' 


const HeroNav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const Menu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0'>
      <div className='border-b-4 border-b-violet-400 py-2 bg-black'>
      <div className='flex justify-between items-center px-10 lg:px-24 max-w-full mx-auto my-2'>
      <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      >
         <img src="" alt="logo" />
      </motion.div>
      <motion.div className='flex justify-center items-center text-center mb-1 capitalize text-[1.1rem] font-semibold'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      >
        <button onClick={Menu} className='lg:hidden justify-center items-center text-center text-white'>
        {
          isOpen ? (
            <motion.div
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.8 }}
            >
              <HiX className='cursor-pointer h-10 w-10'/>
            </motion.div>
          ) : (
            <motion.div
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.8 }}
            >
              <HiMenu className='cursor-pointer h-10 w-10' />
            </motion.div>
          )
        }
        </button>
        <Link to="/login">
        <p className='hidden lg:flex items-center text-white  hover:text-green-600 pl-14'><FaHome className='h-6 w-6' /><span className='pl-2'>Login</span></p>
        </Link>
        <Link to="/register">
        <p className='hidden lg:flex items-center text-white  hover:text-green-600 pl-14'><FaHome className='h-6 w-6' /><span className='pl-2'>Register</span></p>
        </Link>
        <Link to="/admin-login">
        <p className='hidden lg:flex items-center text-white  hover:text-green-600 pl-14'><FaHome className='h-6 w-6' /><span className='pl-2'>Admin Login</span></p>
        </Link>
      </motion.div>
      </div>
      </div>
      <div className='bg-white'>
        <div className='flex justify-center items-center text-center'>
        {
          isOpen ? (
            <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: '0vh' }}
            transition={{ duration: 0.5 }}
            className='flex flex-col justify-center items-center text-center bg-violet-400 w-full h-screen absolute top-0 bottom-0 left-0 right-0 -z-10 space-y-10 lg:hidden'
            >
              <Link to="/login">
              <button onClick={Menu} className='flex items-center text-2xl text-white py-5 hover:text-black max-w-lg mx-auto'><FaHome className='h-6 w-6' /><span className='pl-2'>Login</span></button>
              </Link>
              <Link to="/resgister">
              <button onClick={Menu} className='flex items-center text-2xl text-white py-5 hover:text-black max-w-lg mx-auto'><FaHome className='h-6 w-6' /><span className='pl-2'>Register</span></button>
              </Link>
              <Link to="/admin-login">
              <button onClick={Menu} className='flex items-center text-2xl text-white py-5 hover:text-black max-w-lg mx-auto'><FaHome className='h-6 w-6' /><span className='pl-2'>Admin Login</span></button>
              </Link>
            </motion.div>
          ) : null
        }
      </div>
    </div>
  </div>
  )
}

export default HeroNav