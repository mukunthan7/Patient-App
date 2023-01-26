import React from 'react'
import { Outlet } from 'react-router-dom';
import SidebarPatient from './components/SidebarPatient';

const Patient = () => {
  return (
    <div>
        <SidebarPatient />
        <Outlet />
    </div>
  )
}

export default Patient