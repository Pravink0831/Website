"use client";

import React, { useState } from 'react';

const PolicyList = ({ policies, titleKey, contentKey }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const displayedPolicies = showMore ? policies : policies?.slice(0, 2);

    return (
        <div className="container mt-4">
            <ol className="list-group border border-gray-2 rounded-10 p-2">
            {displayedPolicies?.map((policy, index) => (
                <li className="mb-20 sm:mb-10 text-18 lh-16" key={index}>
                    <strong>{policy[titleKey]}:</strong> {policy[contentKey]}
                </li>
            ))}
            {policies?.length > 2 && (
                <div className="text-center">
                    <button className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white hover:bg-yellow-1 hover:text-black hover:img-hover" onClick={toggleShowMore}>
                        {showMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            )}
            </ol>
        </div>
    );
};

export default PolicyList;
