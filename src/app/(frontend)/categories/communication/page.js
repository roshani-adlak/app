"use client"
import React, { useEffect, useState } from "react"
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

export default function Commsindata() {
    const [commdata, setCommdata] = useState([]);
    const [commsearch, setCommsearch] = useState('');
    const type ="communication" 

    useEffect(() => {
        document.title = "Communication > App Portal";
        fetch(`/api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => {
                setCommdata(data)
                console.log("communication data", commdata);    
            })
            .catch((error) => { console.log("error in fetching data", error) });
    }, [type])

    return (
        <>
            {/* ---- Search-box ----- */}
            <div className="ap-search-wrap">
                <form>
                    <div className="ap-search-text">
                        <input type="text" className="form-control"
                            value={commsearch} onChange={(e) => setCommsearch(e.target.value)} placeholder="Search Apps..." />
                        <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ---- Search-box ----- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>Communication</h3>
                </div>
                {/* Communication data */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-commin-data">
                    {
                        Array.isArray(commdata) && commdata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(commdata) && commdata.map(item => (
                                <div className="ap-display-box ap-lateapp-data" key={item.id}>
                                    <Link href={`communication/${item.slug}`}>
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
                {/* Communication data */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
}