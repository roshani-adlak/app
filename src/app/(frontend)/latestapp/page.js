"use client"
import React, { useEffect, useState } from "react";
import { faStar, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

// New App Api calling
export default function Latestapp() {
  const [Appdata, setAppdata] = useState([]);
  const type = "newapp";

  useEffect(() => {
    document.title = "Latest Apps > App Portal";
    fetch(`/api/allappdata/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setAppdata(data);
        console.log("setdata:", Appdata);
      })
      .catch((error) => console.log("error in data fetching", error));
  }, [])
  return (
    <div className="ap-bg-cover ap-lateapp-wrapper">
      <div className="ap-headapp">
        <h3>New App</h3>
        <Link href="/new-apps">More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
      </div>
      <div className="ap-display-box-wrapper ap-latestapp-wrap">
        {
            Array.isArray(Appdata) && Appdata.length === 0 ? (
                <div className="ap-noresult">
                    <p>No record found.</p>
                </div>
            ) : (
          Array.isArray(Appdata) && Appdata.slice(0, 12).map(item => (
            <div className="ap-display-box ap-lateapp-data" key={item.id}>
              <Link href={`new-apps/${item.slug}`}>
                <div className="ap-display-boximg">
                  <img src={item.img} alt="" />
                </div>
                <div className="ap-display-boxtext">
                  <h4>{item.title}</h4>
                  <p>{item.para}</p>
                  <p className="ap-boxdate">{item.date}</p>
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