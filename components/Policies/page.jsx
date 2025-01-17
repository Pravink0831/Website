"use client";

import React, { useState } from 'react';

const HousePolicies = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="container mt-4">
            <ol className="list-group border border-gray-2 rounded-10 p-2">
                <li className="mb-2 lh-16">
                    <strong>Check-In and Check-Out:</strong> Check-in time is 3:00 PM, and check-out time is 11:00 AM.
                </li>
                <li className="mb-2 lh-16">
                    <strong>Guest Identification:</strong> All guests must present a valid government-issued ID at check-in. For non-Indian nationals, a valid passport and visa are required.
                </li>
                {showMore && (
                    <>
                        <li className="mb-2 lh-16">
                            <strong>Security Deposit and Payment:</strong> Full payment, including a refundable security deposit of ₹5,000, is due at check-in. The security deposit will be refunded at check-out after an inspection of the property.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Liability Waiver:</strong> Guests are required to sign a liability waiver upon check-in.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Housekeeping and Maintenance:</strong> Daily housekeeping is provided between 9:00 AM and 5:00 PM. Guests are requested to inform the caretaker for any additional assistance.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Swimming Pool Usage and Safety Rules:</strong> Proper swimwear is mandatory for pool access. Food and drinks are not allowed around the pool area. Diving or running near the pool is prohibited for safety reasons. Glassware is not permitted in the pool area. Children must be supervised by an adult at all times. Guests must follow all pool safety instructions provided by management.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Visitor Policy:</strong> Visitors are not allowed unless prior approval is obtained from management.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Care for the Property:</strong> Guests are expected to treat the villa and its belongings with care. Any damages will be deducted from the security deposit or charged separately.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Complimentary Breakfast:</strong> Breakfast is served daily from 8:30 AM to 11:00 AM.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Respect for Other Guests:</strong> The villa is located in a gated complex, and guests are requested to respect the privacy and comfort of other villa residents.
                        </li>
                        <li className="mb-2 lh-16">
                            <strong>Safety Precautions:</strong> To prevent insects from entering, guests are requested to keep all doors and windows closed. CCTV cameras are installed at all entry and exit points for security purposes.
                        </li>
                    </>
                )}
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
