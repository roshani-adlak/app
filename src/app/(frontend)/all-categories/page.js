"use client"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react"

export default function Allcategories(){
    const [Allcatsearch, setallcatsearch] = useState('');
    return(
        <>
            {/*--- Search box ---*/}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={Allcatsearch} onChange={(e)=>setallcatsearch(e.target.value)} placeholder="Search here..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/*--- Search box ---*/}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>All Categories</h3>
                </div>
            <div className="ap-category-link ap-allcat-link">
                    <ul>
                        <li>
                            <Link href="/categories/games">
                                <img src="/images/menu-icon/games-icon.png" />
                                <span>Games</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/entertainment">
                                <img src="/images/menu-icon/entertainment-icon.png" />
                                <span>Entertainment</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/communication">
                                <img src="/images/menu-icon/comm-icon.png" />
                                <span>Communication</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/email">
                                <img src="/images/menu-icon/email-icon.png" />
                                <span>E-mail</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/security">
                                <img src="/images/menu-icon/security-icon.png" />
                                <span>Security</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/tools">
                                <img src="/images/menu-icon/tools-icon.png" />
                                <span>Tools</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/media">
                                <img src="/images/menu-icon/media-icon.png" />
                                <span>Media</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/internet">
                                <img src="/images/menu-icon/internet-icon.png" />
                                <span>Internet</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/finance">
                                <img src="/images/menu-icon/finance-icon.png" />
                                <span>Finance</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/design">
                                <img src="/images/menu-icon/design-icon.png" />
                                <span>Design</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/education">
                                <img src="/images/menu-icon/education-icon.png" />
                                <span>Education</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/ittools">
                                <img src="/images/menu-icon/it-icon.png" />
                                <span>IT Tools</span></Link>
                        </li>
                        <li>
                            <Link href="/categories/travel">
                                <img src="/images/menu-icon/travel-icon.png" />
                                <span>Travel & Tools</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="img2" />
            </div>

        </>
    )
}