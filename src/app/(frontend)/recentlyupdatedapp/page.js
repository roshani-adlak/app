"use client"
import React, { useEffect, useState } from "react";
import { faStar, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import Image from "next/image";

export default function RecentlyUpdateapp() {
  const [Recentdata, setRecentdata] = useState([]);
  const type= "recentapp";

  useEffect(() => {
    fetch(`api/allappdata/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setRecentdata(data);
        console.log("setdata:", Recentdata);
      })
      .catch((error) => console.log("error in data fetching", error));
  }, [type])
  return (
    <div className="ap-bg-cover ap-recupdateapp-wrapper">
      <div className="ap-headapp">
        <h3>Recently updated App</h3>
        <Link href="/recently-updated-apps">More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
      </div>
      <div className="ap-display-box-wrapper ap-recupdateapp-wrap">
        {
          Recentdata.slice(0,9).map(item => (
            <div className="ap-display-box ap-recupdateapp-data" key={item.id}>
              <Link href={`recently-updated-apps/${item.slug}`}>
                <div className="ap-display-boximg">
                  <Image src={item.img} alt="" />
                </div>
                <div className="ap-display-boxtext">
                  <h4>{item.title}</h4>
                  <p>{item.para}</p>
                  <p className="ap-update-date">{item.date}</p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}