"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Securitysindata() {
    const [searchsec, serSearchsec] = useState('');
    const [securitydata, setSecuritydata] = useState([]);
    const type = "security";

    useEffect(() => {
        document.title = "Security > App Portal";
        fetch(`/api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => {
                setSecuritydata(data);
                console.log("security data", data);
            })
            .catch((error) => { console.log("error in fetching data", error) });
    }, []);

    return (
        <>
            {/* ----- Search-box ------- */}
            <div className="ap-search-wrap">
                <form>
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={searchsec} onChange={(e) => serSearchsec(e.target.value)} placeholder="Search Apps..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ----- Search-box ------- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>Security</h3>
                </div>
                {/* --- Security data ----- */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-secin-data">
                    {
                        Array.isArray(securitydata) && securitydata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(securitydata) && securitydata.slice(0, 9).map(item => (
                                <div className="ap-display-box ap-lateapp-data" key={item.id}>
                                    <Link href={`security/${item.slug}`}>
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
                {/* --- Security data ----- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
}
