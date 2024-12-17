"use client"
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react"
import Link from "next/link";

export default function Iossingdata() {
    const [iossearch, setIossearch] = useState('');
    const [iosdata, setIosdata] = useState([]);
    const type ="ios"

    useEffect(() => {
        fetch(`/api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => {
                setIosdata(data);
                console.log("ios data", iosdata)
            })
            .catch((err) => console.log("error in fetching data", err))
    }, [])
    return (
        <>
            {/* --- Search box ---- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={iossearch} onChange={(e) => setIossearch(e.target.value)} placeholder="Search Apps..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* --- Search box ---- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>ios</h3>
                </div>
                {/* ---Ios Data ---- */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-iosdata">
                    {
                        Array.isArray(iosdata) && iosdata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(iosdata) && iosdata.map(item => (
                                <div className="ap-display-box ap-ios-data" key={item.id}>
                                    <Link href={`ios/${item.slug}`}>
                                        <div className="ap-display-boximg">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="ap-display-boxtext">
                                            <h4>{item.title}</h4>
                                            <p>{item.para}</p>
                                            <span className="icon"><FontAwesomeIcon icon={faStar} /></span>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )
                    }
                </div>
                {/* ---Ios Data ---- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="s-img2" />
            </div>
        </>
    )
}