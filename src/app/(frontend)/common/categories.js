"use client"
import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


export default function Categories() {
    return (
        <>
            <div className="ap-bg-cover ap-categories-wrapper">
                <div className="ap-headapp">
                    <h3>Categories</h3>
                    <Link href="/all-categories">All Categories <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                </div>
                <div className="ap-category-link">
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
        </>
    )
}