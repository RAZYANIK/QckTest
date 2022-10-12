import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='md:flex m-10 pl-10  header font-semibold bg-slate-600 h-20 text-white justify-center items-center rounded-md'>
                <div className='font-bold'>
                    <h1 className='text-lg'>QckTest</h1>
                </div>
                <div className='Link'>
                    <NavLink className='pl-5' to='/'>Home</NavLink>

                    <NavLink className='pl-5' to='/yourPerformance'>YourPerformance</NavLink>
                    <NavLink className='pl-5 mr-5 pr-10' to='/blog'>Blog</NavLink>
                </div>


            </div>

        </div >
    );
};

export default Header;