"use client";

import React, { useState } from 'react';

const HousePolicies = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="container mt-4">
            <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                    Check-In and Check-Out:
                    <ul className="list-group list-group-flush list-group-bulleted">
                        <li className="list-group-item">Check-in time: 3:00 PM</li>
                        <li className="list-group-item">Check-out time: 11:00 AM</li>
                    </ul>
                </li>
                <li className="list-group-item">
                    Guest Identification:
                    <ul className="list-group list-group-flush list-group-bulleted">
                        <li className="list-group-item">All guests must present valid government-issued ID at check-in.</li>
                        <li className="list-group-item">For non-Indian nationals, a valid passport and visa are required.</li>
                    </ul>
                </li>
                {showMore && (
                    <><li className="list-group-item">
                    Security Deposit and Payment:
                    <ul className="list-group list-group-flush list-group-bulleted">
                        <li className="list-group-item">Full payment, including a refundable security deposit of ₹5,000, must be made at check-in.</li>
                        <li className="list-group-item">The security deposit will be refunded at check-out after an inspection of the property.</li>
                    </ul>
                </li>
                
                        <li className="list-group-item">
                            Liability Waiver:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">Guests are required to sign a liability waiver at check-in.</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Housekeeping and Maintenance:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">Daily housekeeping is provided between 9:00 AM and 5:00 PM.</li>
                                <li className="list-group-item">Please inform the caretaker for any additional assistance.</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Swimming Pool Usage and Safety Rules:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">Proper swimwear is mandatory.</li>
                                <li className="list-group-item">No food or drinks are allowed around the pool area.</li>
                                <li className="list-group-item">No diving or running near the pool for safety reasons.</li>
                                <li className="list-group-item">No glassware near the pool area.</li>
                                <li className="list-group-item">Children must be supervised by an adult at all times.</li>
                                <li className="list-group-item">Guests must adhere to all pool safety instructions provided by the management.</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Visitor Policy:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">Visitors are not allowed unless prior approval is obtained.</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Care for the Property:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">Guests are expected to treat the villa and its belongings with care.</li>
                                <li className="list-group-item">Any damages will be deducted from the security deposit and/or charged separately.</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Complimentary Breakfast:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">Breakfast is served daily from 8:30 AM to 11:00 AM.</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Respect for Other Guests:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">The villa is located in a gated complex; guests are requested to respect the privacy and comfort of other villa guests.</li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            Safety Precautions:
                            <ul className="list-group list-group-flush list-group-bulleted">
                                <li className="list-group-item">For safety, guests are requested to keep all doors and windows closed to prevent insects from entering the villa due to its location.</li>
                                <li className="list-group-item">CCTV cameras are installed at all entry and exit points for security purposes.</li>
                            </ul>
                        </li>
                    </>
                )}
            </ol>
            <button className="button -md -outline-yellow-1 rounded-100 bg-black-2 mt-10 text-white hover:bg-yellow-1 hover:text-black hover:img-hover" onClick={toggleShowMore}>
                {showMore ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default HousePolicies;