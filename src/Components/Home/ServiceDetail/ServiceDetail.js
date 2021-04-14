import React from "react";

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center mt-5 pt-5">
            <img style={{ width: "50px" }} src={service.img} alt="" />
            <h5 className="mt-3 mb-3 text-secondary">{service.name}</h5>
            <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus esse quibusdam, nostrum laudantium at libero.
            </p>
        </div>
    );
};

export default ServiceDetail;
