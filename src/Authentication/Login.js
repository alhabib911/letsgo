import React from 'react';
import SocialLogin from './SocialLogin';
import './Login.css'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="login-container">
            <div className='login-form'>
                <SocialLogin></SocialLogin>
                <div class=" from-divider flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                </div>

                <div className="form-title">
                    <h2>Sign In</h2>
                </div>
                <form className='login-form-field'>
                    <div className="email">
                        <div className="email-title">
                            <h2>Email</h2>
                            <MdEmail></MdEmail>
                        </div>
                        <input type="email" name="email" id="" placeholder='someone@emaple.com' />
                    </div>
                    <br />
                    <div className="password">
                        <div className="password-title">
                            <h2>Password</h2>
                            <RiLockPasswordFill></RiLockPasswordFill>
                        </div>

                        <input type="password" name="password" id="" placeholder='some@pass#123' />
                    </div>
                    <br />
                    <div className="login-btn">
                        <input type="submit" value="Log In" />
                    </div>
                    <p className='switch-register'>Don't have an Account? <Link to='/register'><span>Register</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;