'use client'

import React, { useState } from 'react'
import FilterHotelsTabs2 from './filter-tabs/FilterHotelsTabs2'
import FilterHotels2 from './FilterHotels2'
import Link from 'next/link';
import { fa } from '@faker-js/faker';

export default function FilterHotels4() {
    const [filterOption, setFilterOption] = useState(false);
  return (
    <div className="tabs -pills-2">
    <div className="tabs__content pt-40">
      <div className="row y-gap-30">
        <FilterHotels2/>
      </div>
    </div>
    {/* End .tabs__content */}

    <div className="row justify-center pt-60">
      <div className="col-auto">
      <Link
                  href="/hotel-list-v5"
                  className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white"
                >
                  Explore All Villas
                  <i className="icon-arrow-right text-20 ml-10" />
                </Link>
        
      </div>
    </div>
  </div>
  )
}
