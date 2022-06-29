import React, { useState } from 'react';
import SocialLogin from './SocialLogin';
import './Login.css'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const Login = () => {
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading) {
        return
    }


    if (user || gUser) {
        navigate('/home')
        // console.log(user);
    }

    const handleEmailBlur = event => {
        SetEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(() => {
                <Loading></Loading>
            })
    }
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Email Sent');
            })
    }
    return (
        <div className="login-container">
            <div className='login-form'>
            <div className='social-login'>
                 <button onClick={() => signInWithGoogle()}> <span><FcGoogle></FcGoogle></span> Login With Google</button >
            </div>
                <div class=" from-divider flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                </div>

                <div className="form-title">
                    <h2>Sign In</h2>
                </div>
                <form onSubmit={handleUserSignIn} className='login-form-field'>
                    <div className="email">
                        <div className="email-title">
                            <label htmlFor="email">Email</label>
                            <MdEmail></MdEmail>
                        </div>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='someone@emaple.com' />
                    </div>
                    <br />
                    <div className="password">
                        <div className="password-title">
                            <label htmlFor="password">Password</label>
                            <RiLockPasswordFill></RiLockPasswordFill>
                        </div>

                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='some@pass#123' />
                    </div>
                    <br />
                    {
                        loading && <p className='loading'>Loading...</p>
                    }
                        {signInError}
                    <div className="login-btn">
                        <input type="submit" value="Log In" />
                    </div>
                    <div className="forget-button">
                        <button onClick={handlePasswordReset} className='forget-btn'>Forget Your Password?</button>
                    </div>
                    <p className='switch-register'>Don't have an Account? <Link to='/register'><span>Register</span></Link></p>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;