import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import loginImage from '../../assets/images/login-img.png'
import { setToken, setUser } from '../../context/slices/authSlice'
import './login.scss'

const Login = () => {
    const [type, setType] = useState(false)
    const [admins, setAdmins] = useState({ username: 'john33', password: '12345678' })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://trade.namtech.uz/admin/sign-in', admins)
            .then(res => (
                console.log(res.data.innerData),
                dispatch(setToken(res.data.innerData.token)),
                dispatch(setUser(res.data.innerData.user)),
                navigate("/admin/create")
            )).catch(err => console.log(err))
    }

    return (
        <section className='login'>
            <figure className='login__img'>
                <img className='login__img-image' src={loginImage} alt="Sign in image" />
            </figure>
            <form onSubmit={handleSubmit} className='login__form'>
                <h1 className='login__form-h1'>Sign In</h1>
                <p className='login__form-p'>Don`t have an accout yet?  <span>Sign Up</span> </p>
                <label htmlFor="username-label" className='username-label'>
                    <input value={admins.username} onChange={e => setAdmins(p => ({ ...p, username: e.target.value }))}
                        type="text" placeholder="Your usernam or email address" />
                </label>
                <label className='password-label'>
                    <input id='passwords' value={admins.password} onChange={e => setAdmins(p => ({ ...p, password: e.target.value }))}
                        type={type ? 'text' : 'password'} placeholder="Password" />
                    <button type='button' onClick={() => setType(p => !p)} className='pssword-icon'>
                        {
                            type ? <FaEyeSlash fontSize={20} /> : <FaEye fontSize={20} />
                        }
                    </button>
                </label>
                <div className='login__form-forget'>
                    <label htmlFor='checked' className="radio-input">
                        <input type="checkbox" />
                        <span id='checked'>Remember me</span>
                    </label>
                    <p className='forget'>Forgot Password?</p>
                </div>
                <button type='submit' className='login__form-btn'>Sign In</button>
            </form>
        </section>
    )
}

export default memo(Login)