'use client'
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/auth.css"

export default function Forgotpwd (){
    const {register, handleSubmit, formState: {errors}} = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="ap-login-wrapper">
            <div className="ap-login-container">
                    <div className="ap-login-logo">
                        <Link href="/">
                            <img src="/images/logo-bg.png" alt="logo-img" />
                        </Link>
                    </div>
                <div className="ap-login-row">
                    <div className="ap-formbox-wrapper">
                        <div className="ap_form-head">
                        <h3>Reset Password</h3>
                        </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="ap-loginform-box">
                            <div className="ap-input-field">
                                <label>Email<span>*</span></label>
                                <input {...register('email', {required: 'Email is required', pattern: {value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email Address'}})} type="email" placeholder="Enter Your Email"/>
                                <span className="ap-svg-icon">
                                       <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                {errors.email && <span className="error">{errors.email.message}</span>}
                            </div>
                        </div>
                        <button className="ap-auth-btn ap-reset-btn" type="submit">Send Reset Link</button>
                            <Link href="/login" className="ap-back-login">Back to Login</Link>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}