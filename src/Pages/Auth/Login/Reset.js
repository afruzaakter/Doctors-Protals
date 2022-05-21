import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { toast } from 'react-toastify';

const Reset = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
      if(sending){
          return <Loading></Loading>
      }
    const onSubmit = data => {
        console.log(data);
        sendPasswordResetEmail(data.email);
        toast('Please Check your email');
        
    }
    return (
        <div className='flex justify-center items-center h-screen '>

            <div className="card w-96  login-continer">
                <div className="card-body">
                    <h2 className="text-center text-info text-2xl font-bold mb-5">FORGOT PASSWORD</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      
                    <div className="form-control w-full max-w-xs">
                        <input 
                        type="email"
                         placeholder="Your Email"
                        className="input  w-full max-w-xs login-container-input"
                        {...register("email",{
                            required:{
                                value: true,
                                message: "❌ Email is Required"
                            },
                       
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: '❌ Provide a valid Email' 
                            }
                          })}
                         />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                            
                          
                        </label>
                    </div>
                 
                 
                    <input className='btn w-full btn-info text-white text-xl max-w-xs' type="submit" value='next' />  
                    </form>
                    <p>New to Doctors Portal <Link className='text-info font-bold' to="/loginauth">Login</Link> </p>
                   

                </div>
            </div>
        </div>
    );
};

export default Reset;