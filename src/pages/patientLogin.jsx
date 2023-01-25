import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const patientLogin = () => {
  return (
    <div className='min-h-screen bg-black flex justify-center items-center'>
      <div className='bg-white rounded-lg px-14 shadow-lg flex flex-col items-center shadow-white font-Mont'>
      <h1 className='mt-4 mb-6 font-extrabold text-2xl'>Login</h1>
      <FaUserAlt className='h-14 w-14 text-center mb-2' />
      <p className='mb-6 font-semibold text-lg'>Patient Login Form</p>
      <form className='text-center'>
        <div className='text-left mb-4 max-w-[15rem] md:max-w-xs'>
        <label className='text-left text-md text-md'>
          Patient Id:
          <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="text" name="patient-id" />
        </label>
        <label className='text-left text-md'>
          Password:
          <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="password" name="password" />
        </label>
        </div>
        <button className='rounded-lg text-white px-16 py-3 text-sm bg-black mb-8' type="submit">Login</button>
      </form>
      </div>
    </div>
  )
}

export default patientLogin