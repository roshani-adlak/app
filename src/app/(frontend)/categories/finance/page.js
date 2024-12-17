// "use client"
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react"
// import Link from "next/link";

// export default function Financesindata() {
//     const [financesearch, setFinancesearch] = useState('');
//     const [financedata, setFinancedata] = useState([]);
//     const [isloading, setIsloading] = useState(true);   
//     const [haserror, setHaserror] = useState(false);
//     const type = "finance";


//     useEffect(() => {
//         document.title = "Finance > App Portal";
//         setIsloading(true);
//         setHaserror(false);
//         fetch(`/api/allappdata/${type}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 if (Array.isArray(data)) {
//                     setFinancedata(data);
//                 } else {
//                     setFinancedata([]);
//                 }
//             })
//             .catch((err) => {
//                 console.error("Error in fetching data:", err);
//                 setHaserror(true);
//             })
//             .finally(() => setIsloading(false));
//     }, [type]);

//     if (isloading) {
//         return <div>Loading... Please wait.</div>;
//     }
//     if (haserror) {
//         return <div>There was an error fetching data.</div>;
//     }
//     return (
//         <>
//             {/* --- Search box ---- */}
//             <div className="ap-search-wrap">
//                 <form className="ap-search-form" method="">
//                     <div className="ap-search-text">
//                         <input type="text" className="form-control" value={financesearch} onChange={(e) => setFinancesearch(e.target.value)} placeholder="Search Apps..." />
//                         <div className="ap-search-btn"><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
//                     </div>
//                 </form>
//             </div>
//             {/* --- Search box ---- */}
//             <div className="ap-bg-cover ap-feat-app">
//                 <div className="ap-head-app"></div>
//                 {/* --- Finance Data ---- */}
//                 <div className="ap-display-box-wrapper">
//                     {Array.isArray(financedata) && financedata.length === 0 ? (
//                         <div className="ap-noresult">
//                             <p>No Result Found.</p>
//                         </div>
//                     ) : (
//                         Array.isArray(financedata) &&    
//                         financedata.map((item) => {
//                                 <div className="ap-display-box ap-lateapp-data ap-finance-data" key={item.id}>
//                                     <Link href="/">
//                                         <div className="ap-display-boximg">
//                                             <img src={item.img} alt={item.title} />
//                                         </div>
//                                         <div className="ap-disply-boxtext">
//                                             <h4>{item.title}</h4>
//                                             <p>{item.para}</p>
//                                             <span className="ap-no-record">
//                                                 {item.error}
//                                                 </span>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             })
//                         )
//                     }
//                 </div>
//                 {/* --- Finance Data ---- */}
//             </div>
//             <div className="ap-vpn-img">
//                 <img src="/images/vpn-img2.png" alt="simg2" />
//             </div>
//         </>
//     )
// }



"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Financesindata() {
    const [financesearch, setFinancesearch] = useState('');
    const [financedata, setFinancedata] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [haserror, setHaserror] = useState(false);

    useEffect(() => {
        document.title = "Finance > App Portal";
        setIsloading(true);
        setHaserror(false);

        fetch(`/api/allappdata/finance`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setFinancedata(data);
                } else {
                    setFinancedata([]);
                }
            })
            .catch((err) => {
                console.error("Error in fetching data:", err);
                setHaserror(true);
            })
            .finally(() => setIsloading(false));
    }, []);

    if (isloading) {
        return <div>Loading... Please wait.</div>;
    }

    if (haserror) {
        return <div>There was an error fetching data.</div>;
    }

    return (
        <>
            {/* --- Search Box --- */}
            <div className="ap-search-wrap">
                <form className="ap-search-form">
                    <div className="ap-search-text">
                        <input
                            type="text"
                            className="form-control"
                            value={financesearch}
                            onChange={(e) => setFinancesearch(e.target.value)}
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
            {/* --- Finance Data --- */}
            <div className="ap-bg-cover ap-feat-app">
                <div className="ap-head-app"></div>
                <div className="ap-display-box-wrapper">
                    {Array.isArray(financedata) && financedata.length === 0 ? (
                        <div className="ap-noresult">
                            <p>No Result Found.</p>
                        </div>
                    ) : (
                        Array.isArray(financedata) && financedata.map((item) => (
                            <div
                                className="ap-display-box ap-lateapp-data ap-finance-data"
                                key={item.id}
                            >
                                <Link href="/">
                                    <div className="ap-display-boximg">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="ap-disply-boxtext">
                                        <h4>{item.title}</h4>
                                        <p>{item.para}</p>
                                        <span className="ap-no-record">
                                            {item.error}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="ap-vpn-img">
                <img src="/images/vpn-img2.png" alt="VPN Illustration" />
            </div>
        </>
    );
}
