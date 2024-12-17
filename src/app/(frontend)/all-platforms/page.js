"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Allplatforms() {
    const [Allplatsearch, setAllplatsearch] = useState('');

    return (
        <>
            {/*--- Search box ---*/}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={Allplatsearch} onChange={(e) => setAllplatsearch(e.target.value)} placeholder="Search here..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/*--- Search box ---*/}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>All Platforms</h3>
                </div>

                {/* Platform data list*/}
                <div className="ap-category-link ap-allcat-link">
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
                            <Link href="/platforms/windows">
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
                {/* Platform data list*/}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="img2" />
            </div>

        </>
    )
}