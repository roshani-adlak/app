"use client"
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Alleditorchoice() {
    const [Alleditorsearch, setAlleditorsearch] = useState('');
    const [Alleditordata, setAlleditordata] = useState([]);
    const type = "editorchoice";

    useEffect(() => {
        document.title = "editor choice > App Portal";
        fetch(`/api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => {
                setAlleditordata(data);
                console.log("editor data", Alleditordata);
            })
            .catch((err) => console.log("error in fetching data", err));
    }, []);

    return (
        <>
            {/* ----- Search box----- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={Alleditorsearch} onChange={(e) => setAlleditorsearch(e.target.value)} placeholder="Search Apps..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ----- Search box----- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>Editor's Choice</h3>
                </div>
                {/* ---- Editor all data----- */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-alledit-data">
                    {
                        Array.isArray(Alleditordata) && Alleditordata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(Alleditordata) && Alleditordata.map(item => (
                                <div className="ap-display-box ap-lateapp-data" key={item.id}>
                                    <Link href={`editorchoice/${item.slug}`}>
                                        <div className="ap-display-boximg">
                                            <img src={item.img} alt={item.title} />
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
                {/* ---- Editor all data----- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
}