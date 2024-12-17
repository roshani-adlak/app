"use client" 
import React, {useState, useEffect} from "react";
import Link from "next/link";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Categories(){
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('/api/dashcattabledata')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log("setdata:", setData);
        })
        .catch((error) => console.log("error in data fetching", error));
    }, [])
    return(
        <div className="ap-apppage-wrapper">
            <h2>Categories</h2>
            <Link href="/dashboard/categories/createcategory" className="ap-btn"><FontAwesomeIcon icon={faPlus} />Create Category</Link>
        <div className="ap-table-wrapper">

            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Apps</th>
                        <th>Date</th>
                        <th>Views</th>
                    </tr>
                </thead>
                 <tbody>
                        {data.map(item => (
                            <tr className="ap-table-data" key={item.id}>
                            <td><h2>{item.id}</h2></td>
                            <td><h2>{item.title}</h2></td>
                            <td><h2>{item.apps}</h2></td>
                            <td><p>{item.date}</p></td>
                            <td>
                                <div className=""></div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
            </table>
        </div>
        </div>
    )
}