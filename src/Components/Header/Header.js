import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='md:flex m-5 pl-10 header font-semibold bg-slate-600 h-10 text-white'>
                <div className='font-bold'>
                    <h1>QckTest</h1>
                </div>
                <div className='Link'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>

                    <NavLink className='pl-5' to='/yourPerformance'>YourPerformance</NavLink>
                    <NavLink className='pl-5 mr-5' to='/blog'>Blog</NavLink>
                </div>


            </div>

        </div >
    );
};

export default Header;