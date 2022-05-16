import React from 'react';
import SocialLogin from './SocialLogin';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Registe.css'


const Register = () => {
    return (
        <div className='register-container'>
            <div className="register-form">
                <SocialLogin></SocialLogin>
                <div class=" from-divider flex flex-col w-full border-opacity-50">
                    <div class="divider">OR</div>
                </div>
                <div className="form-title">
                    <h2>Register</h2>
                </div>

                <form className='register-form-field'>
                    <div className="email">
                        <div className="email-title">
                            <h2>Email</h2>
                            <MdEmail></MdEmail>
                        </div>
                        <input type="email" name="email" id="" placeholder='someone@emaple.com' />
                    </div>
                    <br />

                    <div className="phone">
                        <div className="phone-title">
                            <h2>Phone</h2>
                            <BsTelephoneFill></BsTelephoneFill>
                        </div>
                        <input type="number" name="phone" id="" placeholder='+880 1234567891' />
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
                    <div className="register-btn">
                        <input type="submit" value="Register" />
                    </div>
                    <p className='switch-register'>Don't have an Account? <Link to='/login'><span>Login</span></Link></p>
                    
                </form>







            </div>
        </div>
    );
};

export default Register;