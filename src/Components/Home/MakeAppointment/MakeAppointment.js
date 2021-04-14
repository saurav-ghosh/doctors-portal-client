import React from "react";
import doctor from "../../../images/doctor.png";
import "./MakeAppointment.css";

const MakeAppointment = () => {
    return (
        <section className="make-appointment pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white appointment-detail">
                        <p style={{ color: "#1CC7C1" }}>APPOINTMENT</p>
                        <h2>
                            Make an appointment <br /> Today
                        </h2>
                        <p className="mt-5 mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores velit libero esse pariatur qui
                            vero?Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Officiis, exercitationem.
                        </p>
                        <button className="button">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
