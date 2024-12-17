'use client'
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (isActive) {
            document.body.classList.add('toggle-class');
        } else {
            document.body.classList.remove('toggle-class');
        }
    }, [isActive]);

    const toggleActive = () => {
        setIsActive((prevState) => !prevState);
    };
    return (
        <div className="ap-topnav-wrapper">
            <div className="ap-toggle-btn" onClick={toggleActive}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="ap-topright-wrapper">
                <div className="ap-topsite">
                    <Link href="/">
                        <h2>Preview Site</h2>
                        <span>
                            <FontAwesomeIcon icon={faMobile} />
                        </span>
                    </Link>
                </div>
                <div className="ap-top-admin">
                    <Link href=""><h3>Admin</h3></Link>
                    <div className="ap-admin-box">
                        <ul>
                            <li>
                                <Link href="/">Edit Profile</Link>
                            </li>
                            <li>
                                <Link href="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}