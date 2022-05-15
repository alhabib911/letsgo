import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logocolor from '../image/logo/logocolor.png'
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/album'>Car Album</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>

                        </ul>
                    </div>
                    <Link to='/'><img className='logocolor' src={logocolor} alt="" /></Link>
                </div>
                <div className="menu">
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/album'>Car Album</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div class="navbar-center hidden ml-24 lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li tabindex="0">
                                <a>
                                    <MdAccountCircle></MdAccountCircle><h2> Account</h2>
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default Navbar;