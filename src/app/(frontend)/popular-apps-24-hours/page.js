"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { faAngleDoubleRight, faStar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";

export default function Popularinlast24hrspages() {
    const [popdata, setpopData] = useState([]);
    const [Popsearch, setPopsearch] = useState('');
    const type = "last24";

    useEffect(() => {
        fetch(`api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => { setpopData(data) })
            .catch((error) => console.log("error in fectcing popular data", error));
    }, [])
    return (
        <>
            {/* ---- Search-box ----- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control"
                            value={Popsearch} onChange={(e) => setPopsearch(e.target.value)} placeholder="Search Apps..." />
                        <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ---- Search-box ----- */}
            <div className="ap-bg-cover ap-popular24-wrapper">
                <div className="ap-headapp">
                    <h3>Popular apps in last 24 hours</h3>
                </div>
                <div className="ap-display-box-wrapper ap-popular24-wrap">
                    {
                        Array.isArray(popdata) && popdata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(popdata) && popdata.map(item => (
                                <div className="ap-display-box ap-popular24-app" key={item.id}>
                                    <Link href="#">
                                        <div className="ap-display-boximg">
                                            <Image src={item.img} alt="image" />
                                        </div>
                                        <div className='ap-display-boxtext'>
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
            </div>
            <div className="ap-vpn-img">
                <Image src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
}