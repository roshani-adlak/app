"use client"
import React, { useEffect, useState } from "react";
import { faStar, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

export default function Editorchoice() {
  const [Editordata, setEditordata] = useState([]);
  const [Loading, setIsloading]= useState('true');
  
  const type = "editorchoice";

  useEffect(() => {
    document.title = "Editor choice > App Portal";
    fetch(`/api/allappdata/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setEditordata(data);
        console.log("Editordata:", setEditordata);
      })
      .catch((error) => console.log("error in data fetching", error));
  }, [])
  return (
    <div className="ap-bg-cover ap-pop-app">
      <div className="ap-headapp">
        <h3>Editor's Choice</h3>
        <Link href="/editorchoice">More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
      </div>
      <div className="ap-display-box-wrapper ap-editorapp-box ap-side-flexcol">
        {
          Editordata.length === 0 ? (
            <div className="ap-noresult">
              <p>Editor data not found</p>
            </div>
          ) : (
            Editordata.slice(0, 10).map(item => (
              <div className="ap-display-box" key={item.id}>
                <Link href={`/editorchoice/${item.slug}`}>
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
  )
}