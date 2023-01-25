import React from 'react'
import SidebarPatient from '../components/SidebarPatient';

const Home = () => {
    return (
    <div className='min-h-screen bg-pink-200 items-center'>
      <SidebarPatient />
        <div className='flex justify-center'>
            <h1>patient Home</h1>
        </div>
    </div>
  )
}

export default Home