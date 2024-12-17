"use client";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Ittoolssindata() {
    const [ittoolssearch, setIttoolssearch] = useState('');
    const [itdata, setItdata] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [haserror, setHaserror] = useState(false);
    const type = "ittools";

    useEffect(() => {
        document.title = "IT Tools > App Portal";
        setIsloading(true);
        setHaserror(false);

        fetch(`/api/allappdata/${type}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Type ${type} not found.`);
                }
                return res.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setItdata(data);
                } else {
                    setItdata([]);
                }
            })
            .catch((err) => {
                console.error("Error in fetching data:", err);
                setHaserror(true);
            })
            .finally(() => setIsloading(false));
    }, [type]);

    if (isloading) {
        return <div>Loading... Please wait.</div>;
    }

    if (haserror) {
        return <div>There was an error fetching data.</div>;
    }

    // Filter data based on search input
    // const filteredData = itdata.filter((item) =>
    //     item.title.toLowerCase().includes(ittoolssearch.toLowerCase())
    // );

    return (
        <>
            {/* --- Search box ---- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form">
                    <div className="ap-search-text">
                        <input
                            type="text"
                            className="form-control"
                            value={ittoolssearch}
                            onChange={(e) => setIttoolssearch(e.target.value)}
                            placeholder="Search Apps..."
                        />
                        <div className="ap-search-btn">
                            <button type="button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* --- Search box ---- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-head-app"></div>
                {/* --- IT & Tools Data ---- */}
                <div className="ap-display-box-wrapper">
                    {Array.isArray(itdata) &&
                   itdata.length === 0 ? (
                        <div className="ap-noresult">
                            <p>No record found.</p>
                        </div>
                    ) : (
                        Array.isArray(itdata)&&
                        itdata.map((item) => (
                            <div className="ap-display-box ap-lateapp-data ap-ittools-data" key={item.id}>
                                <Link href="/">
                                    <div className="ap-display-boximg">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="ap-disply-boxtext">
                                        <h4>{item.title}</h4>
                                        <p>{item.para}</p>
                                        <span className="ap-no-record">{item.error}</span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
                {/* --- IT & Tools Data ---- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="VPN Illustration" />
            </div>
        </>
    );
}
