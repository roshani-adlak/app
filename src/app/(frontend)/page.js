"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons'
import Latestapp from './latestapp/page';
import Featuredapps from './featuredapps/page';
import RecentlyUpdateapp from './recentlyupdatedapp/page';
import Musthaveapps from './musthaveapp/page';
import Popularinlast24hrs from './popularinlast24hrs/page'
import Gamedata from './gamedata/page';
import Securitydata from './securitydata/page';
import { useDynamicMetadata } from '@/utils/useDynamicMetadata';

export default function Home() {
    const [search, setSearch] = useState('');
    document.title = "App Portal";
    return (
        <div className="ap-frontmain-wrapper">
            {/* ---- Search-box ----- */}
            <div className="ap-search-wrap">
                <form>
                    <div className="ap-search-text">
                        <input type="text" className="form-control"
                            value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Apps..." />
                        <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
                    </div>
                </form>
            </div>
            {/* ---- Search-box ----- */}
            {/* ---- Swiper slider ----- */}
            <div className="ap-swiperslide-wrapper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ type: "bullets", clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="ap-topslide-wrap">
                            <div className="ap-topslide-img">
                                <img src="images/slider-1.png" alt="slider-img" />
                            </div>
                            <div className="ap-topslide-textwrap">
                                <div className="ap-topslide-textimg">
                                    <img src="/images/war-s1.png" alt="simg" />
                                </div>
                                <div className="ap-topslide-text">
                                    <h3>war Thunder Mobile</h3>
                                    <span className="ap-topslide-text">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ap-topslide-wrap">
                            <div className="ap-topslide-img">
                                <img src="images/slider-2.png" alt="slider-img" />
                            </div>
                            <div className="ap-topslide-textwrap">
                                <div className="ap-topslide-textimg">
                                    <img src="/images/grim-s2.png" alt="simg" />
                                </div>
                                <div className="ap-topslide-text">
                                    <h3>Grim soul : Dark survival RPG   </h3>
                                    <span className="ap-topslide-text">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ap-topslide-wrap">
                            <div className="ap-topslide-img">
                                <img src="images/slider-3.png" alt="slider-img" />
                            </div>
                            <div className="ap-topslide-textwrap">
                                <div className="ap-topslide-textimg">
                                    <img src="/images/nord-s3.png" alt="simg" />
                                </div>
                                <div className="ap-topslide-text">
                                    <h3>NordVPN - fast VPN for privacy</h3>
                                    <span className="ap-topslide-text">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* ---- Swiper slider ----- */}
            {/* ---- Latestapp section ----- */}
            <div className="ap-latestapp-wrap">
                <h3 className='ap-heading'>Latest and Free Apps</h3>
                <div className="ap-latest-app-data">
                    <Latestapp />
                </div>
            </div>
            {/* ---- Latestapp section ----- */}
            {/* ---- featuredapp/recentlyupdat/musthaveapp/popular-in-24hrs pages calling ----- */}
            <Featuredapps />
            <RecentlyUpdateapp />
            <div className='ap-vpn-img'>
                <img src="/images/vpn-img.png" alt="simg" />
            </div>
            <Musthaveapps />
            <Popularinlast24hrs />
            <Gamedata />
            <Securitydata />
            {/* ---- featuredapp/recentlyupdat/musthaveapp/popular-in-24hrs pages calling ----- */}
            <div className="ap-vpn-img mb-5">
                <img src="/images/vpn-img2.png" alt="simg2" />
            </div>
        </div>
    )
}
// }