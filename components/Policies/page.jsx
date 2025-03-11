"use client";

import React, { useState } from 'react';

const HousePolicies = ({hotel}) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="container mt-4">
            <ol className="list-group border border-gray-2 rounded-10 p-2">
            {hotel?.housePolicies?.map((policy, index) => (
                <li className="mb-20 text-18 lh-16" key={index}>
                    <strong>{policy.housePoliciesTitle}:</strong> {policy.housePolicies}
                </li>
            ))}
                <div className=" text-center">
                    <button className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white hover:bg-yellow-1 hover:text-black hover:img-hover" onClick={toggleShowMore}>
                        {showMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </ol>
        </div>
    );
};

export default HousePolicies;
