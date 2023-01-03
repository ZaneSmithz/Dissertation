import React from 'react';
import SideBar from './Components/SideBar.js';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <SideBar />
      <div className='containerColour'>
        <Outlet />
        </div>
    </>
  );
};