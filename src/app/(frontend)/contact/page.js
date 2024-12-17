"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { faAngleDoubleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from "react-hook-form";

export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [contactsearch, Setcontactsearch] = useState();

    const onSubmit = (data) => {
        console.log(data);
    }
    useEffect(()=>{
        document.title = "Contact > App Portal";
    })
    return (
        <>
        
            {/* --- Search box ---- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={contactsearch} onChange={(e) => Setcontactsearch(e.target.value)} placeholder="Search Apps..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* --- Search box ---- */}
            <div className="ap-contact-wrapper">
                <div className="ap-contact-form">
                    <h3 className="ap-heading">Contact</h3>
                </div>
                <div className="ap-bg-cover ap-contactform-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="ap-input-field">
                                    <label>Name<span>*</span></label>
                                    <input {...register('name', { required: "Name is required", maxLength: 30, message: 'name cannot exceed more than 30 character' })} type="text" placeholder="Enter your name" className="form-control" />
                                    {errors.name && <span className="error">{errors.name.message}</span>}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="ap-input-field">
                                    <label>Email<span>*</span></label>
                                    <input {...register('email', { required: "email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'invalid email address' } })} type="email" placeholder="Enter your Email" className="form-control" />
                                    {errors.email && <span className="error">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="ap-input-field">
                                    <label>Subject<span>*</span></label>
                                    <input {...register('subject', { required: "Subject is required", maxLength: 30 })} type="text" placeholder="Enter your Subject" className="form-control" />
                                    {errors.subject && <span className="error">{errors.subject.message}</span>}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="ap-input-field">
                                    <label>Message<span>*</span></label>
                                    <textarea {...register('message', { required: "message is required", minLength: { value: 100, message: "message length is greater than 20 characters." } })} col='5' className="form-control" ></textarea>
                                    {/* <input {...register('name', {required:"Name is required", maxLength:30})} className="form-control"/> */}
                                    {errors.message && <span className="error">{errors.message.message}</span>}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <button type="submit" value="submit" className="ap-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="ap-vpn-img">
                    <img src="/images/vpn-img2.png" alt="simg2" />
                </div>
            </div>
        </>
    )
}
