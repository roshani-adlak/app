"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link";
import { faAngleDoubleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function BrowserHistory() {
  const [browsesearch, setBrowsesearch] = useState('');
  const [browsedata, Setbrowsedata] = useState([]);
  const type= "browsehistory";

  useEffect(() => {
    document.title = "Browse History > App Portal";
    fetch(`/api/allappdata/${type}`)
      .then((res) => res.json())
      .then((data) => {
        Setbrowsedata(data);
        // console.log("Browse data", browsedata);
      })
      .catch((err) => { console.log("error in fetching browse history", err) })
  })

  return (
    <>
      {/* --- Search box ---- */}
      <div className="ap-search-wrap">
        <form className="ap-search-form" method="">
          <div className="ap-search-text">
            <input type="text" className="form-control" value={browsesearch} onChange={(e) => setBrowsesearch(e.target.value)} placeholder="Search Apps..." />
            <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
          </div>
        </form>
      </div>
      {/* --- Search box ---- */}
      <div className="ap-bg-cover ap-feat-app">
        <div className="ap-headapp">
          <h3>Favourite</h3>
        </div>
        {/* ---Browser Data ---- */}
        <div className="ap-display-box-wrapper ap-featapp-wrap ap-browse-box">
          {
            Array.isArray(browsedata) && browsedata.length === 0 ? (
              <div className="ap-noresult">
                <p>No favourite record Found.</p>
              </div>
            ) : (
              Array.isArray(browsedata) && browsedata.map(item => (
                <div className="ap-display-box ap-feat-appdata" key={item.id}>
                  <div className="ap-display-boximg">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="ap-display-boxtext">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))
            )
          }
        </div>
        {/* ---Browser Data ---- */}
      </div>
      <div className="ap-vpn-img">
        <img src="/images/vpn-img2.png" alt="simg2" />
      </div>
    </>
  )
}