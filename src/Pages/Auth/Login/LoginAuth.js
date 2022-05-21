import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link , useLocation, useNavigate} from 'react-router-dom';
import useToken from '../../../hooks/useToken';
import  '../../../style/style.css';
import Google from '../../../assets/images/google.png';

const LoginAuth = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [token] = useToken(user || gUser);

      let signInError;
      const location = useLocation();
      const navigate = useNavigate();
      let from = location.state?.from?.pathname || "/";

      useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
      },[token, from, navigate]);
   

      if(error || gError){
        signInError=<p className='text-red-500'> <small>{error.message || gError.message}</small> </p>
    }

    

      if( loading || gLoading){
          return <Loading></Loading>
      }

   
    
   

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div className='flex justify-center items-center h-screen '>

            <div className="card w-96  login-continer">
                <div className="card-body">
                    <h2 className="text-center text-info text-2xl font-bold mb-5">LOGIN</h2>

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
                    <div className="form-control w-full max-w-xs">
                        <input 
                        type="password"
                         placeholder="Password"
                        className="input  w-full max-w-xs login-container-input"
                        {...register("password",{
                            required:{
                                value: true,
                                message: "❌ Password is Required"
                            },
                        
                            minLength: {
                              value: 6,
                              message: '❌ Must be 6 characters or longer' 
                            }
                          })}
                         />
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            
                          
                        </label>
                    </div>
                    {signInError}
                    <input className='btn w-full btn-info text-white text-xl max-w-xs' type="submit" value='Login' />  
                    </form>
                    <p>New to Doctors Portal <Link className='text-info font-bold' to="/signup">Create New Account</Link> </p>
                    <p>Forgot Password? <Link className='text-info font-bold' to="/reset">Reset Password</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} 
                    className="btn btn-info text-white "> 
                    <img className='mr-4' src={Google} alt="google" />     
                     Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default LoginAuth;