import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
            <div className='social-login'>
                 <h2> <span><FcGoogle></FcGoogle></span> Login With Google</h2>
            </div>
    );
};

export default SocialLogin;