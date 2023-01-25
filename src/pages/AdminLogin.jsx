import React from 'react'
import { FaUserMd } from 'react-icons/fa'

const AdminLogin = () => {
  return (
    <div className='min-h-screen bg-black flex justify-center items-center'>
    <div className='bg-pink-300 rounded-lg px-14 shadow-xl flex flex-col items-center shadow-pink-900 font-Mont'>
    <h1 className='mt-4 mb-6 font-extrabold text-2xl'>Admin</h1>
    <FaUserMd className='h-14 w-14 text-center mb-2 text-pink-900' />
    <p className='mb-6 font-semibold text-lg'>Admin Login Form</p>
    <form className='text-center'>
      <div className='text-left mb-4 max-w-[15rem] md:max-w-xs'>
      <label className='text-left text-md text-md'>
        Admin Id:
        <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="text" name="patient-id" />
      </label>
      <label className='text-left text-md'>
        Password:
        <input className='bg-gray-100 rounded-md px-1 py-1 w-full border md:max-w-xs mb-2' type="password" name="password" />
      </label>
      </div>
      <button className='rounded-lg text-white px-16 py-3 text-sm bg-violet-700 mb-8' type="submit">Login</button>
    </form>
    </div>
  </div>
  )
}

export default AdminLogin