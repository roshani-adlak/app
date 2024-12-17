"use client"
import React from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

export default function Createapp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="ap-appform-wrapper">
            <div className="ap-appform-heading">
                <h3>Create App</h3>
            </div>
            <div className="ap-appform-box-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="ap-input-field">
                                <label>Title<span>*</span></label>
                                <input {...register('title', { required: 'title is required', maxLength: 30, message: 'Title cannot exceed more than 30 character' })} type="text" placeholder="Enter Your title" />
                                {errors.title && <span className="error">{errors.title.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="ap-input-field">
                                <label>slug</label>
                                <input {...register('slug', { required: 'slug is required', maxLength: 30, message: 'slug cannot exceed more than 30 character' })} type="text" placeholder='Please Enter your slug name' />
                                {errors.slug && <span className="error">{errors.slug.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ap-input-field">
                                <label>Choose Your file</label>
                                <input {...register('file', { required: 'File is required', message: 'please select file' })} type="file" placeholder="Choose your file" />
                                {errors.file && <span className="error">{error.file.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ap-input-field">
                                <label>Description</label>
                                <textarea {...register('desc', { required: 'Enter your Description', maxLength: { value: 100, message: 'Description here' } })} placeholder="Enter full description"></textarea>
                                {errors.desc && <span className="error">{errors.desc.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="ap-input-field">
                                <label>Tags</label>
                                <input {...register('tags', { required: 'Enter your tags', maxLength: 30, message: 'tag is required' })} type="text" placeholder="Enter your Tag" />
                                {errors.tags && <span className="error">{errors.tags.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="ap-input-field">
                                <label>Package name</label>
                                <input {...register('pkg', { required: 'Enter your pakage name', maxLength: 30, message: 'Package name is required' })} type="text" placeholder="Enter yout Package name" />
                                {errors.pkg && <span className="error">{errors.pkg.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="ap-input-field">
                                <label>Caterories<span>*</span></label>
                                <select name="catname" onChange={onchange} {...register('category', { required: 'select your category', message: 'select your category' })} placeholder="select your category">
                                    <option value="cat-1">cat-1</option>
                                    <option value="cat-2">cat-3</option>
                                    <option value="cat-1">cat-3</option>
                                </select>
                                {errors.category && <span className="error">{errors.category.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="ap-input-field">
                                <label>Platforms<span>*</span></label>
                                <select name="platname" onChange={onchange} {...register('platform', { required: 'select your categplatformory', message: 'select your platform' })} placeholder="select your platform">
                                    <option value="plat-1">plat-1</option>
                                    <option value="plat-2">plat-3</option>
                                    <option value="plat-1">plat-3</option>
                                </select>
                                {errors.platform && <span className="error">{errors.platform.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="ap-input-field">
                                <label>Button Type</label>
                                <select name="btntype" onChange={onchange} {...register('btntype', { required: 'select your categplatformory', message: 'select your platform' })} placeholder="select your platform">
                                    <option value="button-1">button-1</option>
                                    <option value="button-2">button-3</option>
                                    <option value="button-1">button-3</option>
                                </select>
                                {errors.btntype && <span className="error">{errors.btntype.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="ap-input-field">
                                <label>Developer</label>
                                <input {...register('developer', { required: 'Enter your developer name', maxLength: 30, message: 'Enter your developer name' })} type="text" placeholder="Enter your developer" />
                                {errors.developer && <span className="error">{errors.developer.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="ap-input-field">
                                <label>Licence</label>
                                <input {...register('licence', { required: 'Enter your licence', message: 'Enter your licence' })} type="text" placeholder="Enter your licence" />
                                {errors.licence && <span className="error">{errors.licence.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="ap-input-field">
                                <label>Buy Url</label>
                                <input {...register('url', { required: 'Enter your buy url', message: 'Enter your buy url' })} type="text" placeholder="Enter your buy url" />
                                {errors.url && <span className="error">{errors.url.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="ap-input-field">
                                <label>Page Views<span>*</span></label>
                                <input {...register('pageview', { required: 'Enter your page view', message: 'Enter your page view' })} type="text" placeholder="Enter your page view" />
                                {errors.pageview && <span className="error">{errors.pageview.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="ap-input-field">
                                <label>Up Votes<span>*</span></label>
                                <input {...register('upvote', { required: 'Enter your up votes', message: 'Enter your up votes' })} type="text" placeholder="Enter your up votes" />
                                {errors.upvote && <span className="error">{errors.upvote.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="ap-input-field">
                                <label>Down Votes<span>*</span> Url</label>
                                <input {...register('downvote', { required: 'Enter your down Vote', message: 'Enter your down Vote' })} type="text" placeholder="Enter your down Vote" />
                                {errors.downvote && <span className="error">{errors.downvote.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ap-checbox-wrap">
                                <div className="ap-checkbox-field">
                                    <label className="ap-checkbox-container">
                                        <input {...register('featured', { required: 'you select the feature' })} type="checkbox" checked="checked" /> Featured
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="ap-checkbox-container">
                                        <input {...register('pinned', { required: 'you select the pinned' })} type="checkbox" /> Pinned
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="ap-checkbox-container">
                                        <input {...register('editaorchoice', { required: 'you select the editors choice' })} type="checkbox" /> Editor's Choices
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="ap-checkbox-container">
                                        <input {...register('musthave', { required: 'you select the must have' })} type="checkbox" /> Must Have
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ap-input-field">
                                <label>Content</label>
                                <textarea {...register('content', { required: 'Enter your down Vote', message: 'Enter your content' })} type="text" placeholder="your content here.."></textarea>
                                {errors.content && <span className="error">{errors.content.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ap-apps-head">
                                <h3>Version Detail</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="ap-input-field">
                                <label>Version</label>
                                <input {...register('version', { required: 'Enter your version name', maxLength: 30, message: 'Enter your version name' })} type="text" placeholder="Enter your version" />
                                {errors.version && <span className="error">{errors.version.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="ap-input-field">
                                <label>File Size</label>
                                <input {...register('file', { required: 'Enter your file size', message: 'Your file size' })} type="text" placeholder="Your file size" />
                                {errors.file && <span className="error">{errors.file.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="ap-input-field">
                                <label>downloads<span>*</span></label>
                                <input {...register('downloads', { required: 'your downloads ', maxLength: 30, message: 'your downloads' })} type="text" placeholder="your downloads" />
                                {errors.downloads && <span className="error">{errors.downloads.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="ap-input-field">
                                <label>File</label>
                                <input {...register('file', { required: 'File is required', message: 'please select file' })} type="file" placeholder="Choose your file" />
                                {errors.file && <span className="error">{error.file.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="ap-input-field">
                                <label>Downloads/ Page URL</label>
                                <input {...register('downloadsurl', { required: 'your downloads ', message: 'your downloads url' })} type="text" placeholder="your downloads url" />
                                {errors.downloadsurl && <span className="error">{errors.downloadsurl.message}</span>}
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
                                <input {...register('metatitle', { required: 'Enter your meta title name', message: 'Enter your meta title name' })} type="text" placeholder="Enter your meta title" />
                                {errors.metatitle && <span className="error">{errors.metatitle.message}</span>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ap-input-field">
                                <label>Meta Description</label>
                                <textarea {...register('metadesc', { required: 'Enter your down Vote', message: 'Enter your Meta description' })} type="text" placeholder="your meta description here.."></textarea>
                                {errors.metadesc && <span className="error">{errors.metadesc.message}</span>}
                                <p className="ap-app-shortcode">Supported Shortcodes: <Link href="/">%apptitle%</Link><Link href="/">%category%</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ap-input-field">
                                <label>Custom h1 Title</label>
                                <input {...register('metatitleh1', { required: 'Enter your title name', message: 'Enter your title name' })} type="text" placeholder="Enter your title" />
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