"use client"
import React, { useEffect, useState } from "react"
import { faStar, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Macsindata() {
    const [macsearch, setMacsearch] = useState('');
    const [macdata, setMacdata] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [haserror, setHaserror] = useState(false);
    const type = "mac";
    
    useEffect(() => {
        document.title = "Mac > App Portal";
        setIsloading(true);
        setHaserror(false);

        fetch(`/api/allappdata/${type}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Type ${type} not found.`);
                }
                return res.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setMacdata(data);
                } else {
                    setMacdata([]);
                }
            })
            .catch((err) => {
                console.error("Error in fetching data:", err);
                setHaserror(true);
            })
            .finally(() => setIsloading(false));
    }, [type]);

    if (isloading) {
        return <div>Loading... Please wait.</div>;
    }

    if (haserror) {
        return <div>There was an error fetching data.</div>;
    }

    return (
        <>
            {/* ---- Search-box ----- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="GET">
                    <div className="ap-search-text">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={macsearch} 
                            onChange={(e) => setMacsearch(e.target.value)} 
                            placeholder="Search Apps..." 
                        />
                        <div className="ap-search-btn">
                            <Link href="/">
                                <FontAwesomeIcon icon={faSearch} />
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            {/* ----- Search-box ------ */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-head-app"></div>
                {/* --- Mac Data ---- */}
                <div className="ap-display-box-wrapper">
                    {macdata.length === 0 ? (
                        <div className="ap-noresult">
                            <p>No record found.</p>
                        </div>
                    ) : (
                        macdata.map((item) => (
                            <div className="ap-display-box ap-lateapp-data ap-mac-data" key={item.id}>
                                <Link href="/">
                                    <div className="ap-display-boximg">
                                        <img 
                                            src={item.img } 
                                            alt={item.title} 
                                        />
                                    </div>
                                    <div className="ap-disply-boxtext">
                                        <h4>{item.title}</h4>
                                        <p>{item.para }</p>
                                        <span className="ap-no-record">
                                            {item.error || "No Record Found"}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
                {/* --- Mac Data ---- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="VPN Image" />
            </div>
        </>
    );
}
