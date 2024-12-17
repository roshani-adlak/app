"use client"
import { faStar, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react"

export default function Popularapps() {
  const [Popdata, setPopdata] = useState([]);
  const type = "popularapp";

  useEffect(() => {
    fetch(`/api/allappdata/${type}`)
      .then(res => res.json())
      .then((data) => {
        setPopdata(data);
        console.log("Popular app data", Popdata);
      })
      .catch((error) => { console.log("error in fetchin popapp data", error) });
  }, [type])

  return (
    <>
      <div className="ap-bg-cover ap-pop-app">
        <div className="ap-headapp">
          <h3>Popular Apps</h3>
          <Link href="./popularapp">More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
        </div>
        <div className="ap-display-box-wrapper ap-side-flexcol">
          {
            Popdata.length === 0 ? (
              <div className="ap-noresult">
                <p>No Result Found</p>
              </div>
            ) : (
              Popdata.slice(0, 10).map(item => (
                <div className="ap-display-box" key={item.id}>
                  <Link href={`/popularapp/${item.slug}`}>
                    <div className="ap-display-boximg ap-popapp-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="ap-display-boxtext">
                      <h4>{item.title}</h4>
                      <span className="icon"><FontAwesomeIcon icon={faStar} /></span>
                      <p>{item.para}</p>
                    </div>
                  </Link>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  )
} 