import React from "react";

const Doctor = ({ doctor }) => {
    return (
        <div className="col-md-4">
            <div className="text-center">
                <img
                    src={`data:image/jpeg;base64,${doctor.image.img}`}
                    alt=""
                />

                <p
                    style={{
                        color: "#18d2af",
                        lineHeight: "0px",
                        marginTop: "20px",
                    }}
                >
                    <b>{doctor.name}</b>
                </p>
                <p>{doctor.email}</p>
            </div>
        </div>
    );
};

export default Doctor;
