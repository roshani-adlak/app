
"use client"
import NextBreadcrumb from '@/app/(frontend)/common/breadcrumb/page';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Children, useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide, SwipswiperinnererSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import SocialLink from '@/app/(frontend)/common/sociallink/page';


export default function EditSingle({ params }) {
  const { slug } = params;
  const [Item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [Featappsearch, setFeatappsearch] = useState('');
  const [Slideperview, setslideperview] = useState(null);
 

  useEffect(() => {
    document.title = "Featured Apps > App Portal";
    // console.log(`slug is: ${slug}`);
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
            <input type='text' className='form-control' value={Featappsearch} onChange={(e) => setFeatappsearch(e.target.value)} placeholder="Search Apps ...." />
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
          <SocialLink />
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

