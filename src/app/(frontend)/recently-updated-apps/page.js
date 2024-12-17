"use client"
import React, { useEffect, useState } from "react";
import { faStar, faAngleDoubleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import Image from "next/image";

export default function RecentlyUpdateapp() {
  const [Recentdata, setRecentdata] = useState([]);
  const [Recentsearch, setRecentsearch] = useState('')
  const type = "recentapp";

  useEffect(() => {
    fetch(`api/allappdata/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setRecentdata(data);
        console.log("setdata:", Recentdata);
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
              value={Recentsearch} onChange={(e) => setRecentsearch(e.target.value)} placeholder="Search Apps..." />
            <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
          </div>
        </form>
      </div>
      {/* ---- Search-box ----- */}
      <div className="ap-bg-cover ap-recupdateapp-wrapper">
        <div className="ap-headapp">
          <h3>Recently updated App</h3>
        </div>
        <div className="ap-display-box-wrapper ap-recupdateapp-wrap">
          {
            Array.isArray(Recentdata) && Recentdata.length === 0 ? (
              <div className="ap-noresult">
                <p>No record found.</p>
              </div>
            ) : (
              Array.isArray(Recentdata) && Recentdata.map(item => (
                <div className="ap-display-box ap-recupdateapp-data" key={item.id}>
                  <Link href={`recently-updated-apps/${item.slug}`}>
                    <div className="ap-display-boximg">
                      <Image src={item.img} alt={item.title} />
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
        {/* ---- recently updated apps---- */}
      </div>
      <div className="ap-vpn-img">
        <Image src="/images/vpn-img2.png" alt="simg2" />
      </div>
    </>
  )
}