"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,  faAnglesDown, faMobileScreenButton, faBookmark, faWindows} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(){
    const [Activemenu, setActivemenu] = useState('');
    const handleMenuclick = (index) =>{
        setActivemenu(Activemenu === index ? null : index);
    }
    return( 
       <div className="ap-sidebar-wrapper">
        <div className="ap-logo-wrapper">
            <Link href="/dashboard">
                <span className="ap-logo"><img src="/images/dash-logo.png" alt="logo"/><h2><b>App</b>Portal</h2></span>
                <span className="ap-minilogo"><img src="/images/dash-logo.png" alt="logo"/></span>
            </Link>
        </div>
        <div className="ap-sidemenu-wrap">
            <ul>
                <li className={Activemenu === 0 ? 'has-sidesubmenu active': 'has-sidesubmenu'}>
                    <Link href="/dashboard/apps" className="menus" onClick={(e)=> {e.preventDefault(); handleMenuclick(0);}}>
                    <span className="ap-navicon">
                        <FontAwesomeIcon icon={faMobileScreenButton} />
                    </span>
                    <span className="ap-navtext">Apps</span>
                    </Link>
                    <ul className={`ap-sidesubmenu ${Activemenu === 0 ? 'Menu-show': ''}`}>
                        <li>
                            <Link href="/dashboard/apps" className="active"> 
                            <FontAwesomeIcon icon={faAngleRight} />
                            Apps
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/apps/createapp"> 
                            <FontAwesomeIcon icon={faAngleRight} />
                             Create Apps
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={Activemenu === 1 ? 'has-sidesubmenu active': 'has-sidesubmenu'}>
                    <Link href="/dashboard" onClick={(e)=> {e.preventDefault(); handleMenuclick(1);}}>
                    <span className="ap-navicon">
                        <FontAwesomeIcon icon={faBookmark}/>
                    </span>
                    <span className="ap-navtext">Categories</span></Link>
                    <ul className={`ap-sidesubmenu ${Activemenu === 1 ? 'Menu-show': ''}`}>
                        <li>
                            <Link href="/dashboard/categories">
                            <FontAwesomeIcon icon={faAngleRight} />
                            Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/categories/createcategory">
                            <FontAwesomeIcon icon={faAngleRight} />
                            Create Categories
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={Activemenu === 2 ? 'has-sidesubmenu active': 'has-sidesubmenu'}>
                    <Link href="/dashboard" onClick={(e)=>{e.preventDefault(); handleMenuclick(2);}}>
                    <span className="ap-navicon ap-navwin-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
                        </svg>
                    </span>
                    <span className="ap-navtext">Platforms</span></Link>
                    <ul className={`ap-sidesubmenu ${Activemenu === 2 ? 'Menu-show': ''}`}>
                        <li>
                            <Link href="/dashboard/platforms">
                            <FontAwesomeIcon icon={faAngleRight} />
                            Platforms
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/createplatforms">
                            <FontAwesomeIcon icon={faAngleRight} />
                            Create Platforms
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Pages</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Slider</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Topic</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Content Manager</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Ads</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Settings</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Comments</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Submission</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Report</span></Link>
                </li>
                <li>
                    <Link href="/dashboard">
                    <span className="ap-navicon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} viewBox="0 0 212.045 212.045" xmlSpace="preserve">
                        <g><path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 0 0 7.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" fill="#000000" opacity={1} data-original="#000000"/></g>
                    </svg>
                    </span>
                    <span className="ap-navtext">Accounting</span></Link>
                </li> */}
            </ul>
        </div>
        {/* <h1>sidebar</h1> */}
       </div>
    )
}