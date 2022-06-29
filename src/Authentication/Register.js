import React, { useState } from 'react';
// import SocialLogin from './SocialLogin';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import './Registe.css'
import { FcGoogle } from 'react-icons/fc'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true})


    // const [token] = useToken(user || gUser)

    // console.log(user);


  

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePhonedBlur = event => {
        setPhone(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    let signInError;

    if (loading || gLoading) {
        return 
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (user) {
        navigate('/home')
        // console.log(token);
    }

   


    const handleCreateUser = async event => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification(auth, email)
            .then(() => {
                toast('Email Sent');
            })
        // if (password !== confrimPassword) {
        //     setError('Your Password did not match')
        //     return;
        // }
        if (password.length < 8) {
            setError('Password must be 8 characthers')
            return;
        }

    }
    return (
        <div className='register-container'>
            <div className="register-form">
            <div className='social-login'>
                 <button onClick={() => signInWithGoogle()}> <span><FcGoogle></FcGoogle></span> Login With Google</button>
            </div>
                <div class=" from-divider flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                </div>
                <div className="form-title">
                    <h2>Register</h2>
                </div>

                <form onSubmit={handleCreateUser} className='register-form-field'>
                    <div className="email">
                        <div className="email-title">
                            <label htmlFor="email">Email</label>
                            <MdEmail></MdEmail>
                        </div>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='someone@emaple.com' />
                    </div>
                    <br />

                    <div className="phone">
                        <div className="phone-title">
                            <label htmlFor="phone">Phone</label>
                            <BsTelephoneFill></BsTelephoneFill>
                        </div>
                        <input onBlur={handlePhonedBlur} type="number" name="phone" id="" placeholder='+880 1234567891' />
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
                    {signInError}
                    <div className="register-btn">
                        <input type="submit" value="Register" />
                    </div>
                    <p className='switch-register'>Don't have an Account? <Link to='/login'><span>Login</span></Link></p>
                    
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;