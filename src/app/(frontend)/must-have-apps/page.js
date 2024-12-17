"use client"
import React, { useEffect, useState } from "react";
import { faAngleDoubleRight , faStar, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

export default function Musthaveapps() {
  const [Mustdata, setMustdata] = useState([]);
  const [mustsearch, Setmustsearch] = useState('');
  const type = "musthaveapp";

  useEffect(() => {
    fetch(`api/allappdata/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setMustdata(data);
        console.log("Mustdata:", setData);
      })
      .catch((error) => console.log("error in data fetching", error));
  }, [type])

  return (
    <>
      {/* ---- Search-box ----- */}
      <div className="ap-search-wrap">
          <form className="ap-search-form" method="">
              <div className="ap-search-text">
                  <input type="text" className="form-control"
                      value={mustsearch} onChange={(e) => Setmustsearch(e.target.value)} placeholder="Search Apps..." />
                  <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
              </div>
          </form>
      </div>
      {/* ---- Search-box ----- */}
    <div className="ap-bg-cover ap-musthaveapp-wrapper">
      <div className="ap-headapp">
        <h3>Must-Have Apps</h3>
      </div>
      <div className="ap-display-box-wrapper ap-musthaveapp-wrap">
        {
           Array.isArray(Mustdata) && Mustdata.length === 0 ? (
            <div className="ap-noresult">
                <p>No record found.</p>
            </div>
        ) : (
          Array.isArray(Mustdata) && Mustdata.map(item => (
            <div className="ap-display-box ap-recupdateapp-data" key={item.id}>
              <Link href={`/must-have-apps/${item.slug}`}>
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
    </div>
    <div className="ap-vpn-img">
                    <img src="/images/vpn-img2.png" alt="simg2" />
                </div>
    </>
  )
}