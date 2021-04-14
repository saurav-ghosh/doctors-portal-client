import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./AllPatients.css";

const AllPatients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/appointments")
            .then((res) => res.json())
            .then((data) => setPatients(data));
    }, []);

    return (
        <div className="row container-fluid w-100">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 patient-container mt-5">
                <h5 className="text-green">All Patient</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">
                                Sr.No
                            </th>
                            <th className="text-secondary" scope="col">
                                Name
                            </th>
                            <th className="text-secondary" scope="col">
                                Gender
                            </th>
                            <th className="text-secondary" scope="col">
                                Age
                            </th>
                            <th className="text-secondary" scope="col">
                                Weight
                            </th>
                            <th className="text-secondary" scope="col">
                                Contact
                            </th>
                            <th className="text-secondary" scope="col">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{patient.name}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.age}</td>
                                <td>{patient.weight}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPatients;
