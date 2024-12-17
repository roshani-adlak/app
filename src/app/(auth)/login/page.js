"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {login } from '../../api/apis';
import "../../styles/globals.css";
import "../../styles/auth.css"
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [Ischecked, setIschecked] = useState(false);

    const handleSignin = async (data) => {
        Cookies.set("authtoken", JSON.stringify(data), { expires: 1 / (24) });
        router.push("/admin");

        const res = await login(data);
        console.log(res);
    }
    const getCookie = () => {
        const authtoken = Cookies.get("authtoken");
        console.log(authtoken);
    }
    const onSubmit = (data) => {
        console.log("Login Data",data);
        handleSignin(data);
    }
    const Checkboxchange = () => {
        setIschecked(!Ischecked);
    }
    return (
        <div className="ap-auth-wrapper">
            <div className="ap-container">
                <div className="ap-row">
                    <div className="ap-login-logo">
                        <Link href="/login">
                            <img src="/images/logo-bg.png" alt="logo-img" />
                        </Link>
                    </div>
                    <form className="ap-form-box" onSubmit={handleSubmit(onSubmit)}>
                        <div className="ap-title-head">
                            <h3>Sign in to start your session</h3>
                        </div>
                        <div className="ap-input-field">
                            <label>Email <span>*</span></label>
                            <div className="ap-input-has-icon">
                                <input {...register('email', { required: 'Email is required', pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email Address' } })} type="email" placeholder="Enter Your Email" />
                                <span className="ap-svg-icon">
                                    {/* <FontAwesomeIcon icon={faEnvelopeSquare} /> */}
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                </span>
                            </div>
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </div>
                        <div className="ap-input-field">
                            <label>Password <span>*</span></label>
                            <div className="ap-input-has-icon">
                                <input {...register('password', { required: 'password is required' })} type="password" placeholder="Enter Your password" />
                                <span className="ap-svg-icon">
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                </span>
                            </div>
                            {errors.password && <span className="error">{errors.password.message}</span>}
                        </div>
                        <div className="ap-auth-actions">
                            <label className="ap-auth-rem">Remember Me
                                <input type="checkbox" checked={Ischecked} onChange={Checkboxchange} id="rememberPws" />
                                <span className='checkmark'></span>
                            </label>
                            <Link href="/forgotpassword">I forgot my password</Link>
                        </div>
                        <button className="ap-auth-btn" type="submit">Login</button>
                        <p className='ap-signup'>Don't Have an account ? <Link href="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}