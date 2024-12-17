"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { faPlus, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Apps() {
    const [isopen, SetISopen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/dashapptabledata')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log("setdata:", setData);
            })
            .catch((error) => console.log("error in data fetching", error));
    }, [])
    return (
        <div className="ap-apppage-wrapper">
            <h2>Apps</h2>
            <Link href="/dashboard/apps/createapp" className="ap-btn"><FontAwesomeIcon icon={faPlus} />Create App</Link>
            <div className="ap-table-wrapper">

                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Image</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Page Views</th>
                            <th>Version</th>
                            <th>Date</th>
                            <th>views</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr className="ap-table-data" key={item.id}>
                                <td>
                                    <label className="ap-checkbox-container">
                                        <input type="checkbox" className="ap-app-check" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td className="ap-table-img">
                                    <img src={item.img} alt={item.title} />
                                </td>
                                <td><h2>{item.id}</h2></td>
                                <td><h2>{item.title}</h2></td>
                                <td><h2>{item.pageview}</h2></td>
                                <td><h2>1</h2></td>
                                <td><p>{item.date}</p></td>
                                <td><span className="ap-table-icon"><FontAwesomeIcon icon={faBars} /></span>
                                    <div className="ap-tableicon">
                                        <ul>
                                            <li><Link href="/frontend">Browse</Link></li>
                                            <li><Link href="/frontend">Edit</Link></li>
                                            <li>
                                                <button onClick={() => SetISopen(true)}>Delte</button>

                                                <div>
                                                    <button className="rounded bg-cyan-600 p-2 m-2 text-white" onClick={() => setIsOpen(true)}>Show Image</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}