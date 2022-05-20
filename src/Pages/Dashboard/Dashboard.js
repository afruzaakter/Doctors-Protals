import React from 'react'; 
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    return (
        <div>
            <div className="drawer drawer-mobile mt-14">
                <input id="dashboard-sidebar" type="checkbox"className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl font-bold  text-purple-500'>Welcome to your DashBoard</h1>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                        <li><Link to='/dashboard/myreview'>Sidebar Item 2</Link></li>
                        {admin && <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                        </> }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;