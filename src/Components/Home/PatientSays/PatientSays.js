import React from "react";
import "./PatientSays.css";

const PatientSays = ({ psData }) => {
    return (
        <div className="col-md-4">
            <div className="patientSay">
                <p className="text-start">{psData.desc}</p>
                <div className="mt-5 d-flex">
                    <div>
                        <img
                            style={{ width: "70px", marginRight: "20px" }}
                            src={psData.img}
                            alt=""
                        />
                    </div>
                    <div style={{ lineHeight: "15px" }}>
                        <p style={{ color: "#1CC7C1" }}>
                            <b>{psData.name}</b>
                        </p>
                        <p>{psData.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientSays;
