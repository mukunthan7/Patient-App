import React from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX, HiLogout } from 'react-icons/hi'
import { TbListDetails, TbHistory } from "react-icons/tb"
import { GiGate} from "react-icons/gi"
import { motion } from 'framer-motion' 


const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const Menu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0'>
      <div className='border-b-4  border-b-violet-600 py-2  bg-black'>
      <div className='flex justify-between items-center px-10 lg:px-24 max-w-full mx-auto my-2'>
      <motion.div className='flex justify-center items-center text-center mb-1 capitalize text-[1.1rem] font-semibold'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      >
        <button onClick={Menu} className='justify-center items-center text-center'>
        {
          isOpen ? (
            <motion.div
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.8 }}
            >
              <HiX className='cursor-pointer h-10 w-10 text-white'/>
            </motion.div>
          ) : (
            <motion.div
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.8 }}
            >
              <HiMenu className='cursor-pointer h-10 w-10 text-white' />
            </motion.div>
          )
        }
        </button>
      </motion.div>
      </div>
      </div>
      <div className='bg-white'>
        <div className='flex justify-center items-center text-center'>
        {
          isOpen ? (
            <motion.div
            initial={{ x: '-100vh' }}
            animate={{ x: '0vh' }}
            transition={{ duration: 0.5 }}
            className='flex flex-col justify-center items-center text-center bg-violet-400 w-full h-screen absolute top-0 bottom-0 left-0 right-0 -z-10 space-y-10'
            >
              <Link to="/admin/appointment">
              <button onClick={Menu} className='flex items-center text-2xl text-white py-5 hover:text-black max-w-lg mx-auto'><TbListDetails /><span className='pl-2'>Appointment Details</span></button>
              </Link>
              <Link to="/admin/history">
              <button onClick={Menu} className='flex items-center text-2xl text-white py-5 hover:text-black max-w-lg mx-auto'><TbHistory /><span className='pl-2'>Patient History</span></button>
              </Link>
              <Link to="/admin/entry">
              <button onClick={Menu} className='flex items-center text-2xl text-white py-5 hover:text-black max-w-lg mx-auto'><GiGate /><span className='pl-2'>Out Patient Entry</span></button>
              </Link>
              <button onClick={Menu} className='flex items-center text-2xl text-white py-5 hover:text-black max-w-lg mx-auto'><HiLogout /><span className='pl-2'>Logout</span></button>
            </motion.div>
          ) : null
        }
      </div>
    </div>
  </div>
  )
}

export default Sidebar