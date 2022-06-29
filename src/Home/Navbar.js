import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logocolor from '../image/logo/logocolor.png'
import { MdAccountCircle } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { BiLogOut } from 'react-icons/bi'


const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/album'>Car Album</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        {
                        user && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }
                    </ul>
                </div>
                <div className="logo">
                    <Link to='/'><img src={logocolor} alt="" /></Link>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/album'>Car Album</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    {
                        user && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }
                </ul>
            </div>
            <div class="navbar-end">
                <div class="navbar ">
                    <div class="navbar-start">
                        <div class="dropdown">
                        </div>
                        <a class="btn btn-ghost normal-case text-xl"></a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li tabindex="0">
                                <a className='account'> <MdAccountCircle></MdAccountCircle>
                                    Account
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2">

                                    {   
                                        user ?
                                            <div className="diaplayName">
                                                
                                                <Link to='/home'><span>Profile</span></Link>
                                            </div>
                                            :
                                            <Link to='/login'><span></span></Link>
                                    }
                                    {
                                        user ?
                                            <Link to='/login' onClick={handleSignOut}><BiLogOut /><span>Log Out</span></Link>
                                            :
                                            <Link to='/login'><span>Login</span></Link>
                                    }
                                    {
                                        user ?
                                            <Link to='/login' onClick={handleSignOut}></Link>
                                            :
                                            <Link to='/register'><span>Register</span></Link>
                                    }
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
