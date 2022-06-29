import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import useCustomer from '../hooks/useCustomer';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [customer] = useCustomer(user)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <label tabindex="0" for="my-drawer-2" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <h2>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <div class="avatar">
                            <div class="w-14 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div>
                            {user?.displayName}
                        </div>
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/mybooking'>My Booking</Link></li>
                        <li><Link to='/dashboard/addcar'>Add New Car</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;