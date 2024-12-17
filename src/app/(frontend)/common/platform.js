"use client"
import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


export default function Platform() {
    return (
        <>
            <div className="ap-bg-cover ap-categories-wrapper">
                <div className="ap-headapp">
                    <h3>Platforms</h3>
                    <Link href="/all-platforms">All Platforms <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                </div>
                <div className="ap-category-link">
                    <ul>
                        <li>
                            <Link href="/platforms/android">
                                <img src="/images/menu-icon/android-icon.png" />
                                <span>Android</span></Link>
                        </li>
                        <li>
                            <Link href="/platforms/ios">
                                <img src="/images/menu-icon/ios-icon.png" />
                                <span>ios</span></Link>
                        </li>
                        <li>
                            <Link href="/platforms/window">
                                <img src="/images/menu-icon/windows-icon.png" />
                                <span>windows</span></Link>
                        </li>
                        <li>
                            <Link href="/platforms/mac">
                                <img src="/images/menu-icon/mac-icon.png" />
                                <span>mac</span></Link>
                        </li>
                        <li>
                            <Link href="/platforms/linux">
                                <img src="/images/menu-icon/linux-icon.png" />
                                <span>Linux</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}