import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
    const serviceData = [
        {
            name: "Fluoride Treatment",
            img: fluoride,
        },
        {
            name: "Cavity Filling",
            img: cavity,
        },
        {
            name: "Teath Whitening",
            img: whitening,
        },
    ];

    return (
        <section>
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
                <h1 style={{ color: "#3A4256" }}>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {serviceData.map((service) => (
                        <ServiceDetail service={service}></ServiceDetail>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
