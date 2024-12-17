'use client'
import React, { useState } from "react"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faEyeSlash, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Signup } from '../../api/apis';
import "../../styles/auth.css"

export default function Signupform() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log("Signup Data",data);
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
                            <h3>Signup to start your session</h3>
                        </div>
                        <div className="ap-input-field">
                            <label>Name <span>*</span></label>
                            <div className="ap-input-has-icon">
                                <input {...register('name', { required: 'Name is required', maxLength: '10' })} type="text" placeholder="Enter Your Name" />
                                <span className="ap-svg-icon">
                                    <FontAwesomeIcon icon={faUserEdit} />
                                </span>
                            </div>
                            {errors.name && <span className="error">{errors.name.message}</span>}
                        </div>
                        <div className="ap-input-field">
                            <label>Email <span>*</span></label>
                            <div className="ap-input-has-icon">
                                <input {...register('email', { required: 'Email is required', pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email Address' } })} type="email" placeholder="Enter Your Email" />
                                <span className="ap-svg-icon">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                </span>
                            </div>
                            {errors.email && <span className="error">{errors.email.message}</span>}
                        </div>
                        <div className="ap-input-field">
                            <label>Password <span>*</span></label>
                            <div className="ap-input-has-icon">
                                <input {...register('password', { required: 'Password is required' })} type="password" placeholder="Enter Your password" />
                                <span className="ap-svg-icon">
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                </span>
                            </div>
                            {errors.password && <span className="error">{errors.password.message}</span>}
                        </div>
                        <div className="ap-input-field">
                            <label>Confirm Password <span>*</span></label>
                            <div className="ap-input-has-icon">
                                <input {...register('cpassword', { required: 'Confirm Password is required' })} type="password" placeholder="Enter Your confirm password" />
                                <span className="ap-svg-icon">
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                </span>
                            </div>
                            {errors.cpassword && <span className="error">{errors.cpassword.message}</span>}
                        </div>
                        <button className="ap-auth-btn ap-auth-signup" type="submit">Sign-Up</button>
                        <p className='ap-signup'>Already Have an account ? back to login <Link href="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}