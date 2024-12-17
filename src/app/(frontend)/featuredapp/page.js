"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Featuredapp() {
    const [Editordata, setEditordata] = useState([]);
    const [Featuresearch, setFeaturesearch] = useState('');
    const type = "featuredapp";

    useEffect(() => {
        document.title = "featured Apps > App Portal";
        fetch(`/api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => {
                setEditordata(data);
                console.log("setdata:", Editordata);
            })
            .catch((error) => console.log("error in data fetching", error));
    }, [])
    return (
        <>
            {/* ---- Search-box ----- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control"
                            value={Featuresearch} onChange={(e) => setFeaturesearch(e.target.value)} placeholder="Search Apps..." />
                        <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ---- Search-box ----- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>Featured Apps</h3>
                </div>
                {/* -------- featured data ----- */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-featsin-data">
                    {
                        Array.isArray(Editordata) && Editordata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(Editordata) && Editordata.map(item => (
                                <div className="ap-display-box" key={item.id}>
                                    <Link href={`featuredapp/${item.slug}`}>
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
                {/* -------- featured data ----- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
}