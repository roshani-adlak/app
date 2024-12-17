"use client"
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react"

export default function Popularapps(){
    const [Popularsearch, setPopularsearch] = useState ('');
    const [Popappdata, setPopappdata] = useState([]);
    const type = "popularapp";

    useEffect(() => {
        document.title = "Popular Apps > App Portal";
        fetch(`../api/allappdata/${type}`)
        .then(res => res.json())
        .then((data) =>{
            setPopappdata(data);
            // console.log("Popular app data", Popappdata);
        })
        .catch((error) => {console.log("error in fetchin popapp data", error)});
    }, [type])

    return(
        <>
            {/* ---- search box ---- */}
            <div className="ap-search-wrap">
                <form>
                    <div className="ap-search-text">
                        <input type="text" className="form-control" value={Popularsearch} onChange={(e)=>setPopularsearch(e.target.value)} placeholder="Search here..." />
                        <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ---- search box ---- */}
            <div className="ap-bg-cover ap-popapp">
                <div className="ap-headapp">
                    <h3>Popular Apps</h3>
                </div>
                {/* popular app data */}
                <div className="ap-display-box-wrapper ap-latestapp-wrap ap-popapp-data">
                    {
                        Popappdata.length === 0 ? (
                            <div className="ap-noresult">
                                <p>No Result Found</p>
                            </div>

                        ) : (
                            Popappdata.map(item=>(
                                <div className="ap-display-box ap-lateapp-data" key={item.id}>
                                    <Link href={`/popularapp/${item.slug}`}>
                                    <div className="ap-display-boximg">
                                        <Image src={item.img} alt="img" />
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
                {/* popular app data */}
            </div>
            <div className="ap-vpn-img">
                <Image src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </>
    )
} 