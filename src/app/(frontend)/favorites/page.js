"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Favoritesindata() {
    const [favosearch, setFavosearch] = useState('');
    const [favoritedata, setFavoritedata] = useState([]);

    useEffect(() => {
        document.title = "Favourite > App Portal";
        fetch('../api/favoritedata')
            .then((res) => res.json())
            .then((data) => {
                setFavoritedata(data);
                console.log("favorite data", favoritedata);
            })
            .catch((err) => console.log("error in fetching data", err));
    }, []);
    return (
        <>
            {/* --- Search box ---- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={favosearch} onChange={(e) => setFavosearch(e.target.value)} placeholder="Search Apps..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* --- Search box ---- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>Favourite</h3>
                </div>
                {/* ---Favorite Data ---- */}
                <div className="ap-display-box-wrapper">
                    {
                        favoritedata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No favourite item added yet.</p>
                            </div>
                        ) : (
                            favoritedata.map(item => (
                                <div className="ap-display-box ap-lateapp-data ap-favo-data" key={item.id}>
                                    <Link href="/">
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
                {/* ---Favorite Data ---- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
}