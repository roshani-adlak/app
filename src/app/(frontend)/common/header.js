'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortDown, faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Header(){
    const [Activesubmenu, setActivesubmenu] = useState(null);
    const [isMenuopen, setisMenuopen] = useState(false);
    const submenuRef = useRef(null);

    const handlesubmenuClick = (index) =>{
        setActivesubmenu(Activesubmenu === 0 ? null : index);
    }

    const toggleMenu = () =>{
        setisMenuopen(!isMenuopen);
        if(!isMenuopen){
            document.body.classList.add('ap-menu-open');
        } else{
            document.body.classList.remove('ap-menu-open');
        }
    }
    useEffect(()=>{
        function handleClickOutside(event) {
            if(submenuRef.current && !submenuRef.current.contains(event.target)){
                setActivesubmenu(null);
                setisMenuopen(false);
                document.body.classList.remove('ap-menu-open');
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        };
    }, [submenuRef]);
    return(
        <div className="ap-navbar-wrapper">
            <div className="container">
                {/* Nav menu sectioln ----*/}
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                       <div className="ap-navbar-logo">
                            <Link href="/">
                                <img src="/images/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        {/* toggle button for mobile */}
                        <div className="menu-toggle" onClick={toggleMenu} ref={submenuRef}>
                            <FontAwesomeIcon icon={isMenuopen ? faTimes : faBars} />
                        </div>
                        <div className={`ap-menu-wrap ${isMenuopen ? 'open' :''}`}>
                            <ul ref={submenuRef}>
                                <li className={Activesubmenu === 0 ? 'has-submenu active': 'has-submenu'}>
                                    <Link href="/" onClick={(e)=> {e.preventDefault(); handlesubmenuClick(0);}}>Categories
                                    <span className="ap-arrow">
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </span> 
                                    </Link>
                                    <ul className={`ap-submenu ${Activesubmenu === 0 ? 'menu-show': ''} `}> 
                                        <li>
                                            <Link href="/categories/games">
                                            <img src="/images/menu-icon/games-icon.png" />
                                            Games</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/entertainment">
                                            <img src="/images/menu-icon/entertainment-icon.png" />
                                            Entertainment</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/communication">
                                            <img src="/images/menu-icon/comm-icon.png" />
                                            Communication</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/email">
                                            <img src="/images/menu-icon/email-icon.png" />
                                            E-mail</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/security">
                                            <img src="/images/menu-icon/security-icon.png" />
                                            Security</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/tools">
                                            <img src="/images/menu-icon/tools-icon.png" />
                                            Tools</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/media">
                                            <img src="/images/menu-icon/media-icon.png" />
                                            Media</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/internet">
                                            <img src="/images/menu-icon/internet-icon.png" />
                                            Internet</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/finance">
                                            <img src="/images/menu-icon/finance-icon.png" />
                                            Finance</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/design">
                                            <img src="/images/menu-icon/design-icon.png" />
                                            Design</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/education">
                                            <img src="/images/menu-icon/education-icon.png" />
                                            Education</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/ittools">
                                            <img src="/images/menu-icon/it-icon.png" />
                                            IT Tools</Link>
                                        </li>
                                        <li>
                                            <Link href="/categories/travel">
                                            <img src="/images/menu-icon/travel-icon.png" />
                                            Travel & Tools</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={Activesubmenu === 1 ? 'has-submenu active': 'has-submenu'}>
                                    <Link href="/" onClick={(e)=> {e.preventDefault(); handlesubmenuClick(1);}}>Platforms
                                    <span className="ap-arrow">
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </span> 
                                    </Link>
                                    <ul className={`ap-submenu ${Activesubmenu === 1 ? 'menu-show': ''} `}> 
                                        <li>
                                            <Link href="/platforms/android">
                                            <img src="/images/menu-icon/android-icon.png"></img>
                                            Android</Link>
                                        </li>
                                        <li>
                                            <Link href="/platforms/ios">
                                            <img src="/images/menu-icon/ios-icon.png"></img>
                                            IOS</Link>
                                        </li>
                                        <li>
                                            <Link href="/platforms/windows">
                                            <img src="/images/menu-icon/windows-icon.png"></img>
                                            Windows</Link>
                                        </li>
                                        <li>
                                            <Link href="/platforms/mac">
                                            <img src="/images/menu-icon/mac-icon.png"></img>
                                            Mac</Link>
                                        </li>
                                        <li>
                                            <Link href="/platforms/linux">
                                            <img src="/images/menu-icon/linux-icon.png"></img>
                                            Linux</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/favorites">Favourite</Link>
                                </li>
                                <li>
                                    <Link href="/browse-history">Browse History</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-5">
                        <div className="ap-login-wrap">
                            <ul>
                                <li>
                                    <Link href="/login">Log-in</Link>
                                </li>
                               x <li className={Activesubmenu === 2 ? 'has-submenu active': 'has-submenu'}>
                                    <Link href="/" onClick={(e)=> {e.preventDefault(); handlesubmenuClick(2);}}>English
                                    <span className="ap-arrow">
                                        <FontAwesomeIcon icon={faSortDown} />
                                    </span> 
                                    </Link>
                                    <ul className={`ap-submenu ${Activesubmenu === 2 ? 'menu-show': ''} `}> 
                                        <li>
                                            <Link href="/">
                                            {/* <img src="/images/menu-icon/games-icon.png"></img> */}
                                            Hindi</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
             {/* Nav menu sectioln ----*/}
        </div>
    )
}