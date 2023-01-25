import React from 'react'
import { CgUserlane } from "react-icons/cg"

const patientRegister = () => {
  return (
    <div className='min-h-screen bg-white flex justify-center items-center'>
      <div className='bg-black rounded-lg px-14 shadow-lg flex flex-col items-center shadow-black text-white font-Mont'>
      <h1 className='mt-4 mb-6 font-extrabold text-2xl '>Register</h1>
      <CgUserlane className='h-14 w-14 text-center mb-2' />
      <p className='mb-6 font-semibold text-lg'>Patient Registration Form</p>
      <form className='text-center'>
        <div className='text-left mb-4 max-w-[15rem] md:max-w-xs'>
        <label className='text-left text-md text-md'>
          Name:
          <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="text" name="name" />
        </label>
        <label className='text-left text-md'>
          Email Id:
          <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="email" name="email" />
        </label>
        <label className='text-left text-md'>
          Phone No:
          <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="tel" name="phoneno" />
        </label>
        <label className='text-left text-md'>
          Password:
          <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="password" name="password" />
        </label>
        <label className='text-left text-md'>
          Confirm Password:
          <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="password" name="conifrm password" />
        </label>
        </div>
        <button className='rounded-lg text-black px-16 py-3 text-sm bg-white/90 mb-8' type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  )
}

export default patientRegister