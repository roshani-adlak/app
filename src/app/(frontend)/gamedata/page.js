"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {faAngleDoubleRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Gamedata(){
    const [Gamedata, setGameData] = useState([]);
    const type= "games";

    useEffect(()=>{
        fetch(`api/allappdata/${type}`)
        .then((res)=>res.json())
        .then((data)=>{ setGameData(data) })
        .catch((error)=>console.log("error in fectcing popular data", error));
    }, [])
    return(
        <div className="ap-bg-cover ap-popular24-wrapper">
            <div className="ap-headapp">
                <h3>Games</h3>
                <Link href="/categories/games">More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
            </div>
            <div className="ap-display-box-wrapper ap-popular24-wrap">
                {
                     Array.isArray(Gamedata) && Gamedata.length === 0 ? (
                        <div className="ap-noresult">
                            <p>No record found.</p>
                        </div>
                    ) : (
                         Array.isArray(Gamedata) && Gamedata.slice(0,15).map(item => (
                        <div className="ap-display-box ap-popular24-app" key={item.id}>
                            <Link href={`categories/games/${item.slug}`}>
                                <div className="ap-display-boximg">
                                    <img src={item.img} alt="image" />
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