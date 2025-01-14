
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

          <Gallery>
            <div className="galleryGrid -type-1">
              
              <div className="galleryGrid__item relative">
                <Item
                  original={hotel?.slideImg[4]}
                  thumbnail={hotel?.slideImg[4]}
                  width={1100}
                  height={700}
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
                  original={hotel?.slideImg[5]}
                  thumbnail={hotel?.slideImg[5]}
                  width={1100}
                  height={700}
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

              <div className="galleryGrid__item relative d-flex" style={{height: "38vh"}}>
                <img
                  src={hotel?.slideImg[1]}
                  alt="image"
                  className="rounded-4"
                />
                {hotel?.slideImg.map((imgSrc, index) => (
                <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end" key={index}>
                  <Item
                    original={imgSrc}
                    thumbnail={imgSrc}
                    width={1100}
                    height={700}
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
                </div> ))}
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
