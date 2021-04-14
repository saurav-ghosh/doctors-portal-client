import {
    faClock,
    faMapMarkerAlt,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InfoCard from "../InfoCard/InfoCard";

const BusinessInfo = () => {
    const infosData = [
        {
            title: "Opening Hours",
            desc: "We are open 7 days",
            icon: faClock,
            background: "primary",
        },
        {
            title: "Visit Our location",
            desc: "Broklyn NY 10036, United States",
            icon: faMapMarkerAlt,
            background: "dark",
        },
        {
            title: "Contact Us Now",
            desc: "+15246932655",
            icon: faPhoneVolume,
            background: "primary",
        },
    ];

    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {infosData.map((info) => (
                    <InfoCard info={info}></InfoCard>
                ))}
            </div>
        </section>
    );
};

export default BusinessInfo;
