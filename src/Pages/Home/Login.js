import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/appointment.png'
const Login = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className="flex flex-col-reverse justify-center items-center my-16">
                                   
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10">
                        <div className="card-body w-96 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>           
            <div className='text-center my-10'>
                <h1 className='text-info text-1xl '>Contact Us</h1>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
        </section>
    );
};

export default Login;