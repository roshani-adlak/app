"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Toolsindata() {
    const [toolsearch, setToolsearch] = useState('');
    const [tooldata, setTooldata] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [haserror, setHaserror] = useState(false);
    const type = "design";

    useEffect(() => {
        document.title = "Tools > App Portal";
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
                    setTooldata(data);
                } else {
                    setTooldata([]);
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

    // Filter tools based on search input
    // const filteredTools = tooldata.filter((item) =>
    //     item.title.toLowerCase().includes(toolsearch.toLowerCase())
    // );

    return (
        <>
            {/* ---- Search box ---- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form">
                    <div className="ap-search-text">
                        <input
                            type="text"
                            className="form-control"
                            value={toolsearch}
                            onChange={(e) => setToolsearch(e.target.value)}
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
            {/* ---- Search box ---- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-head-app"></div>
                {/* --- Tools Data ---- */}
                <div className="ap-display-box-wrapper">
                    {Array.isArray(tooldata) && tooldata.length === 0 ? (
                        <div className="ap-noresult">
                            <p>No record found.</p>
                        </div>
                    ) : (Array.isArray(tooldata) &&
                        tooldata.map((item) => (
                            <div
                                className="ap-display-box ap-lateapp-data ap-tools-data"
                                key={item.id}
                            >
                                <Link href="/">
                                    <div className="ap-display-boximg">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="ap-disply-boxtext">
                                        <h4>{item.title}</h4>
                                        <p>{item.para}</p>
                                        {item.error && (
                                            <span className="ap-no-record">
                                                {item.error}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
                {/* --- Tools Data ---- */}
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="VPN Illustration" />
            </div>
        </>
    );
}
