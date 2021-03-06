import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const menuItems =
        <>

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/appointment">Appointment</NavLink></li>
            <li><NavLink to="/review">Review</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {
                user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            }


            <div className="dropdown dropdown-end">
                <label tabIndex="0"> <div className="avatar online">
                    <div className="w-10 rounded-full">
                        <img src={"https://api.lorem.space/image/face?hash=28212"} alt='profile' />

                    </div>
                </div></label>

                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li> {user ? <button onClick={logOut} className='btn btn-ghost'>Sign Out</button> : <NavLink to="/loginauth">Login</NavLink>} </li>
                </ul>
            </div>

        </>

    return (
        <div className="navbar bg-base-100  fixed top-0 w-full ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <NavLink to='/' className="btn btn-ghost normal-case text-xl">Doctor Protals</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                <label for="dashboard-sidebar" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* <label  className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            </div>

        </div>
    );
};

export default Navbar;