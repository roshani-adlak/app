'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <>
        <div className="ap-footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="ap-footer-para">
                            <div className="ap-footer-logo">
                                <Link href="#"><img src="/images/logo.png"></img></Link>
                            </div>
                            <p>Find safe and reliable software and mobile apps on our easy-to-use download website.</p>
                            <Link href="/frontend" className="ap-btn ap-footer-btn">Submit your app</Link>
                            <ul>
                                <li>
                                    <Link href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 155.139 155.139" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" height="20" width="20" fill="currentColor">
                                            <g><path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"></path></g>
                                        </svg>
                                    </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 1226.37 1226.37" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" height="20" width="20" fill="currentColor">
                                            <g><path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" fill="currentColor" opacity="1"></path></g>
                                        </svg>
                                    </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" height="20" width="20" fill="currentColor" >
                                        <g><path fillRule="evenodd" d="M6.5 1A5.5 5.5 0 0 0 1 6.5v11A5.5 5.5 0 0 0 6.5 23h11a5.5 5.5 0 0 0 5.5-5.5v-11A5.5 5.5 0 0 0 17.5 1zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm12-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" 
                                                clipRule="evenodd" opacity="1"></path>
                                        </g>
                                    </svg>
                                    </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" height="20" width="20" fill="currentColor">
                                        <g>
                                            <path d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z" opacity="1" />
                                        </g>
                                    </svg>
                                    </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="ap-footer-head">
                            <h3>Pages</h3>
                            <Link href="#">About</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="ap-footer-head">
                            <h3>Categories</h3>
                            <ul>
                                <li>
                                    <Link href="/games">Games</Link>
                                </li>
                                <li>
                                    <Link href="/entertainment">Entertainment</Link>
                                </li>
                                <li>
                                    <Link href="/communication">Communication</Link>
                                </li>
                                <li>
                                    <Link href="/email">E-mail</Link>
                                </li>
                                <li>
                                    <Link href="/security">Security</Link>
                                </li>
                                <li>
                                    <Link href="/tools">Tools</Link>
                                </li>
                                <li>
                                    <Link href="/media">Media</Link>
                                </li>
                                <li>
                                    <Link href="/finance">Finance</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="ap-footer-head">
                            <h3>Platforms</h3>
                            <ul>
                                <li>
                                    <Link href="/android">Android</Link>
                                </li>
                                <li>
                                    <Link href="/windows">Windows</Link>
                                </li>
                                <li>
                                    <Link href="/ios">Ios</Link>
                                </li>
                                <li>
                                    <Link href="/mac">Mac</Link>
                                </li>
                                <li>
                                    <Link href="/linux">Linux</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        <div className="ap-copyright-text">
            <div className="container">
            <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ap-copy-text">
                            <p>© 2024 All rights are reserved - <a href="/">APP Portal</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
