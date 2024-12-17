"use client"
import React, { useEffect, useState } from "react";
import { faStar, faAngleDoubleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { Metadata } from "next";

// export const metadata = {
//     title: 'Games > App Router'
// };
export default function Gamessingledata() {
    const [gamesindata, setGamesindata] = useState([]);
    const [gamesearch, setGameSearch] = useState('');
    const type = "games";

    useEffect(() => {
        document.title = "Games > App Portal";
        fetch(`/api/allappdata/${type}`)
            .then((res) => res.json())
            .then((data) => {
                setGamesindata(data); 
                console.log("games-incoming data", gamesindata);
            })
            .catch((error) => { console.log("error in fetching game data", error) });
    }, [type])
    return (
        <>
            {/* ---- Search-box ----- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form" method="">
                    <div className="ap-search-text">
                        <input type="text" className="form-control"
                            value={gamesearch} onChange={(e) => setGameSearch(e.target.value)} placeholder="Search Apps..." />
                        <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ---- Search-box ----- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-headapp">
                    <h3>Games</h3>
                </div>
                {/* ----- Games data ----- */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-gamesin-data">
                    {
                        Array.isArray(gamesindata) && gamesindata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No record found.</p>
                            </div>
                        ) : (
                            Array.isArray(gamesindata) && gamesindata.map(item => (
                                <div className="ap-display-box ap-lateapp-data" key={item.id}>
                                    <Link href={`games/${item.slug}`}>
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
                {/* ----- Games data ----- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
} 