import React, { memo } from 'react'
import loginImage from '../../assets/images/login-img.png'
import './login.scss'

const Login = () => {

    return (
        <section className='login'>
            <figure className='login__img'>
                <img className='login__img-image' src={loginImage} alt="Sign in image" />
            </figure>
            <form className='login__form'>
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />
                <div>
                    <div className="radio-input">
                        <input type="radio" />
                        <span>Remember me</span>
                    </div>
                    <p>Forgot Password?</p>
                </div>
                <button>Sign In</button>
            </form>
        </section>
    )
}

export default memo(Login)