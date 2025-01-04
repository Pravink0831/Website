
'use client'

import ModalVideo from "react-modal-video";
import { Gallery, Item } from "react-photoswipe-gallery";
import Link from "next/link";
import React, { useState } from 'react'

export default function GalleryOne({hotel}) {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
     <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
    <section className="pt-40">
        <div className="container">
          {/*
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="row x-gap-20  items-center">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-25 fw-600">{hotel?.title}</h1>
                </div>
                {/* End .col 
                <div className="col-auto">
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                  <i className="icon-star text-10 text-yellow-1" />
                </div>
              </div>
              {/* End .row 

              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="d-flex items-center text-15 text-light-1">
                    <i className="icon-location-2 text-16 mr-5" />
                    {hotel?.location}
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    data-x-click="mapFilter"
                    className="text-blue-1 text-15 underline"
                  >
                    Show on map
                  </button>
                </div>
              </div>
              {/* End .row 
            </div></>
             End .col 

            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 items-center">
                <div className="col-auto">
                  <div className="text-14">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      US${hotel?.price}
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <Link
                    href="/booking-page"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Select Room <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
              </div>
            </div>
            {/* End .col 
          </div>
          {/* End .row */}

          <Gallery>
            <div className="galleryGrid -type-1">
              <div className="galleryGrid__item relative">
                <Item
                  original={hotel?.slideImg[2]}
                  thumbnail={hotel?.slideImg[2]}
                  width={650}
                  height={500}
                >
                  {({ ref, open }) => (
                    <img
                      src={hotel?.slideImg[2]}
                      ref={ref}
                      onClick={open}
                      alt="image"
                      role="button"
                      className="rounded-4"
                    />
                  )}
                </Item>
                
              </div>
              {/* End .galleryGrid__item */}

              <div className="galleryGrid__item" style={{height: "38vh"}}>
                <Item
                  original={hotel?.slideImg[0]}
                  thumbnail={hotel?.slideImg[0]}
                  width={450}
                  height={300}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={hotel?.slideImg[0]}
                      alt="image"
                      className="rounded-4"  
                      role="button"
                    />
                  )}
                </Item>
              </div>
              {/* End .galleryGrid__item */}

              {/*<div className="galleryGrid__item relative d-flex">
                <img
                  src="/img/gallery/1/3.png"
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
                <div className="absolute h-full col-12 flex-center">
                  <div
                    className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1 js-gallery"
                    role="button"
                    onClick={() => setOpen(true)}
                  >
                    <i className="icon-play text-16" />
                  </div>
                </div>
              </div>
               End .galleryGrid__item */}

              {/*<div className="galleryGrid__item">
                <Item
                  original="/img/gallery/1/4.png"
                  thumbnail="/img/gallery/1/4.png"
                  width={450}
                  height={375}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/img/gallery/1/4.png"
                      alt="image"
                      className="rounded-4"
                      role="button"
                    />
                  )}
                </Item>
              </div>
               End .galleryGrid__item */}

              <div className="galleryGrid__item relative d-flex" style={{height: "38vh"}}>
                <img
                  src={hotel?.slideImg[1]}
                  alt="image"
                  className="rounded-4"
                />
                <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                  <Item
                    original={hotel?.slideImg[1]}
                    thumbnail={hotel?.slideImg[1]}
                    width={450}
                    height={300}
                  >
                    {({ ref, open }) => (
                      <div
                        className="button rounded-100 -yellow-1 px-24 py-15 bg-black text-white js-gallery"
                        ref={ref}
                        onClick={open}
                        role="button"
                      >
                        See All Photos
                        <img className="icon-phone-14 ml-10" src="/img/general/Album.png" />
                      </div>
                    )}
                  </Item>
                </div>
              </div>
              {/* End .galleryGrid__item */}
            </div>
          </Gallery>
        </div>
        {/* End .container */}
      </section>
    </>
  )
}
