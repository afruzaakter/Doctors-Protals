import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile mt-14">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl font-bold  text-purple-500'>Welcome to your DashBoard</h1>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                        <li><Link to='/dashboard/myreview'>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;