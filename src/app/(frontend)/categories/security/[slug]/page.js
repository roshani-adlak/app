"use client"
import NextBreadcrumb from '@/app/(frontend)/common/breadcrumb/page';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide, SwipswiperinnererSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


export default function SecuritySingle({ params }) {
  const { slug } = params;
  const [Item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [Securityinsearch, setSecurityinsearch] = useState('');
  const [Slideperview, setslideperview] = useState(null);

  useEffect(() => {
    document.title = "Security > App Portal";
    if (slug) {
      fetch(`/api/allappdata/${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          console.log("fetched data", result);
          if (result.error) {
            setError(result.error);
          } else {
            setItem(result);
            if (result.slidenum) {
              setslideperview(result.slidenum);
            }
          }
        })
        .catch((err) => {
          console.error("error in fetching data", err);
          setError("error fetching data");
        });
    }
  }, [slug]);
  if (error) {
    return (
      <div>
        <h1>Item Not Found</h1>
        <p>The item you're looking for does not exist.</p>
      </div>
    );
  }
  if (!Item) {
    return <div>Loading...</div> // Loading state
  }
  return (
    <>
      {/* ----- Search box ------ */}
      <div className='ap-search-wrap'>
        <form className='ap-search-form' method=''>
          <div className="ap-search-text">
            <input type='text' className='form-control' value={Securityinsearch} onChange={(e) => setSecurityinsearch(e.target.value)} placeholder="Search Apps ...." />
            <div className='ap-search-btn'><Link href="/"><FontAwesomeIcon icon={faSearch} /></Link></div>
          </div>
        </form>
      </div>
      {/* ----- Search box ------ */}
      <div className='ap-bg-cover'>
        <NextBreadcrumb 
              seperator = {<span>/</span>}
              activeClasses='text-active'
              capitalizeLinks
            />
        <div className='ap-singllink-wrap'>
          <div className='ap-topsingle-box'>
            <div className='ap-topsingle-img'>
              <img src={Item.img} alt="title" />
            </div>
            <div className='ap-topsingle-data'>
              <h4>{Item.title}</h4>
              <p>by Dreamotion Inc.</p>
              <div className='ap-review-btn'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faUser} />
                <p>(0 Review)</p>
              </div>
              <p>{Item.date}</p>
            </div>
          </div>
          <div className="ap-content-sociallink">
            <ul>
              <li>
                <Link href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 155.139 155.139" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" height="20" width="20" fill="currentColor">
                    <g><path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"></path></g>
                  </svg>
                  Facebook</Link>
              </li>
              <li>
                <Link href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 1226.37 1226.37" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" height="20" width="20" fill="currentColor">
                    <g><path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" fill="currentColor" opacity="1"></path></g>
                  </svg>
                  Twitter</Link>
              </li>
              <li>
                <Link href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" height="20" width="20" fill="currentColor">
                    <g>
                      <path d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z" opacity="1" />
                    </g>
                  </svg>
                  Linkedin</Link>
              </li>
              <li>
                <Link href="/">Email</Link>
              </li>
              <li>
                <Link href="/">Whatsapp</Link>
              </li>
              <li>
                <Link href="/">Favourite</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='ap-inner-slider'>
        {/* <Swiperinner /> */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          // spaceBetween={Slideperview}
          // slidesPerView={2.5}
          slidesPerView={Slideperview}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(Swiper) => console.log(Swiper)}
        >
          {Item.slide.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <div className='ap-innerslide-content'>
                <img src={imageSrc} alt={`slider-img-${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='ap-bg-cover ap-version-wrapper'>
        <div className="ap-headapp">
          <h3>Latest Version</h3>
        </div>
        <div className='ap-version-inner'>
          <div className='ap-version-box'>
            <h3>Version</h3>
            <p>{Item.version}</p>
          </div>
          <div className='ap-version-box'>
            <h3>Update</h3>
            <p>{Item.date}</p>
          </div>
          <div className='ap-version-box'>
            <h3>Categories</h3>
            <p>{Item.type[2]}</p>
          </div>
          <div className='ap-version-box'>
            <h3>Platforms</h3>
            <p>{Item.type[3]}</p>
          </div>
          <div className='ap-version-box'>
            <h3>Downloads</h3>
            <p>{Item.Downloads}</p>
          </div>
        </div>
        <div className='ap-version-btn'>
          <a href="#" className='ap-btn'>View page</a>
        </div>
      </div>
      <div className="ap-vpn-img">
        <img src="/images/vpn-img2.png" alt="simg2" />
      </div>
    </>
  )
}

