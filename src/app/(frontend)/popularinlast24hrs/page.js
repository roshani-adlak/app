"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {faAngleDoubleRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";

export default function Popularinlast24hrs(){
    const [popdata, setpopData] = useState([]);
    const type= "last24";

    useEffect(()=>{
        fetch(`api/allappdata/${type}`)
        .then((res)=>res.json())
        .then((data)=>{ setpopData(data) })
        .catch((error)=>console.log("error in fectcing popular data", error));
    }, [])
    return(
        <div className="ap-bg-cover ap-popular24-wrapper">
            <div className="ap-headapp">
                <h3>Popular apps in last 24 hours</h3>
                <Link href="/popular-apps-24-hours">More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
            </div>
            <div className="ap-display-box-wrapper ap-popular24-wrap">
                {
                     Array.isArray(popdata) && popdata.length === 0 ? (
                        <div className="ap-noresult">
                            <p>No record found.</p>
                        </div>
                    ) : (
                    popdata.slice(0,15).map(item => (
                        <div className="ap-display-box ap-popular24-app" key={item.id}>
                            <Link href={`popular-apps-24-hours/${item.slug}`}>
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
    )
}