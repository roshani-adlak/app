"use client"
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react"

export default function Androidsingdata() {
    const [androidsearch, setAndroidsearch] = useState('');
    const [androiddata, setAndroiddata] = useState([]);
    const type = "android";

    useEffect(() => {
        document.title = "Android > App Portal";
        fetch(`/api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => {
                setAndroiddata(data);
                console.log("android data", androiddata);
            })
            .catch((err) => console.log("error in fetching data ", err))
    }, []);
    return (
        <>
            {/* --- search box ---- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={androidsearch} onChange={(e) => setAndroidsearch(e.target.value)} placeholder="Search Apps..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* --- search box ---- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>Android</h3>
                </div>
                {/* --- Android data ----  */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-comm-data">
                    {
                        Array.isArray(androiddata) && androiddata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(androiddata) && androiddata.map(item => (
                                <div className="ap-display-box ap-lateapp-data ap-android-data" key={item.id}>
                                    <Link href={`android/${item.slug}`} >
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
                {/* --- Android data ----  */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
}