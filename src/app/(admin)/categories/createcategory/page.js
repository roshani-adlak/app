"use client"
import React from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

export default function Createcategories(){
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
    return(
       <div className="ap-appform-wrapper">
        <div className="ap-appform-heading">
            <h3>Create Category</h3>
        </div>
        <div className="ap-appform-box-wrapper ap-appform-box-category">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="ap-input-field">
                            <label>Title<span>*</span></label>
                            <input {...register('title', {required: 'title is required', maxLength: 30, message:'Title cannot exceed more than 30 character'})} type="text" placeholder="Enter Your title"/>
                            {errors.title && <span className="error">{errors.title.message}</span>}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="ap-input-field">
                            <label>slug</label>
                            <input {...register('slug', {required: 'slug is required', maxLength: 30,  message:'slug cannot exceed more than 30 character'})} type="text" placeholder='Please Enter your slug name'/>
                            {errors.slug && <span className="error">{errors.slug.message}</span>}
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ap-input-field">
                            <label>Choose Your Image</label>
                            <input {...register('image', {required: 'image is required',  message: 'please select image'})} type="image" placeholder="Choose your image"/>
                            {errors.image && <span className="error">{error.image.message}</span>}
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ap-checbox-wrap">
                        <div className="ap-checkbox-field">
                            <label className="ap-checkbox-container">
                                <input {...register('homepage')} type="checkbox" checked="checked" /> Home page
                                <span className="checkmark"></span>
                            </label>
                            <label className="ap-checkbox-container">
                                <input {...register('footer')} type="checkbox" /> Footer
                                <span className="checkmark"></span>
                            </label>
                            <label className="ap-checkbox-container">
                                <input {...register('navbar')} type="checkbox" /> Navbar
                                <span className="checkmark"></span>
                            </label>
                            <label className="ap-checkbox-container">
                                <input {...register('rightcolumn')} type="checkbox" /> Right Column's
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ap-apps-head">
                            <h3>SEO Settings</h3>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ap-input-field">
                            <label>Custom Meta Title</label>
                            <input {...register('metatitle', {required: 'Enter your meta title name', message:'Enter your meta title name'})} type="text" placeholder="Enter your meta title"/>
                            {errors.metatitle && <span className="error">{errors.metatitle.message}</span>}
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ap-input-field">
                            <label>Custom Meta Description</label>
                            <textarea {...register('metadesc', {required: 'Enter your down Vote',  message:'Enter your Meta description'})} type="text" placeholder="your meta description here.."></textarea>
                            {errors.metadesc && <span className="error">{errors.metadesc.message}</span>}
                        <p className="ap-app-shortcode">Supported Shortcodes: <Link href="/">%apptitle%</Link><Link href="/">%category%</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ap-input-field">
                            <label>Custom h1 Title</label>
                            <input {...register('metatitleh1', {required: 'Enter your title name', message:'Enter your title name'})} type="text" placeholder="Enter your title"/>
                            {errors.metatitleh1 && <span className="error">{errors.metatitleh1.message}</span>}
                            <p className="ap-app-shortcode">Supported Shortcodes: <Link href="/">%apptitle%</Link><Link href="/">%category%</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="ap-submit-btn">
                        <button type="submit" value="submit" className="ap-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
       </div>
    )
  
}