"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Featuredapps() {
  const [Featureddata, setFeatureddata] = useState([]);
  const type = "featuredapp";

  useEffect(() => {
    fetch(`/api/allappdata/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setFeatureddata(data);
        console.log("setdata:", Featureddata);
      })
      .catch((error) => console.log("error in data fetching", error));
  }, [])
  return (
    <div className="ap-bg-cover ap-feat-app">
      <div className="ap-headapp">
        <h3>Featured Apps</h3>
        <Link href="/featuredapp">More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
      </div>
      {/* ---- featured app ----- */}
      <div className="ap-display-box-wrapper ap-featapp-wrap">
        {
          Array.isArray(Featureddata) && Featureddata.length === 0 ? (  
            <div className="ap-noresult">
              <p>No record found.</p>
            </div>
          ) : (
            Array.isArray(Featureddata) && Featureddata.slice(0, 8).map(item => (
              <div className="ap-display-box ap-feat-appdata" key={item.id}>
                <Link href={`featuredapp/${item.slug}`}>
                <div className="ap-display-boximg">
                  <img src={item.img} alt="" />
                </div>
                <div className="ap-display-boxtext">
                  <h4>{item.title}</h4>
                </div>
                </Link>
              </div>
            ))
          )
        }
      </div>
      {/* ---- featured app ----- */}
    </div>
  )
}
