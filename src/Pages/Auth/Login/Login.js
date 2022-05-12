import React from 'react';
import bg from '../../../assets/images/appointment.png'
const Login = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className="flex flex-col-reverse justify-center items-center my-16">
            
           
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10">
                        <div class="card-body ">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
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