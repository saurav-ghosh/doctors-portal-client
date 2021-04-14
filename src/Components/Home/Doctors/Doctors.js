import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
    // const doctors = [
    //     {
    //         name: "Dr. Caudi",
    //         img: doctor,
    //         phone: "+12345789555",
    //     },
    //     {
    //         name: "Dr. Caudi",
    //         img: doctor,
    //         phone: "+12345789555",
    //     },
    //     {
    //         name: "Dr. Caudi",
    //         img: doctor,
    //         phone: "+12345789555",
    //     },
    // ];
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("https://infinite-atoll-44628.herokuapp.com/doctors")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    return (
        <section className="mt-5 pt-5">
            <div className="container">
                <h5 className="text-center" style={{ color: "#11cfdd" }}>
                    Our Doctors
                </h5>
                <div className="row mt-5">
                    {doctors.map((doctor) => (
                        <Doctor doctor={doctor}></Doctor>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
