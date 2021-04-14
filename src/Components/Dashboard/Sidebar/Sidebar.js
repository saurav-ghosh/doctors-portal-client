import {
    faCalendar,
    faCog,
    faFilePrescription,
    faSignOutAlt,
    faTh,
    faUserPlus,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch("https://infinite-atoll-44628.herokuapp.com/isDoctor", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsDoctor(data));
    }, []);

    return (
        <div className="col-md-2 d-flex flex-column justify-content-between sidebar">
            <ul className="list-unstyled mt-5 ">
                <Link className="nav-link" to="/dashboard">
                    <li>
                        <FontAwesomeIcon icon={faTh} /> Dashboard
                    </li>
                </Link>
                <Link className="nav-link" to="/dashboard/appointment">
                    <li>
                        <FontAwesomeIcon icon={faCalendar} /> Appointment
                    </li>
                </Link>
                {isDoctor && (
                    <div>
                        <Link className="nav-link" to="/patients">
                            <li>
                                <FontAwesomeIcon icon={faUsers} /> Patients
                            </li>
                        </Link>
                        <Link className="nav-link" to="/prescriptions">
                            <li>
                                <FontAwesomeIcon icon={faFilePrescription} />{" "}
                                Prescriptions
                            </li>
                        </Link>
                        <Link className="nav-link" to="/addDoctor">
                            <li>
                                <FontAwesomeIcon icon={faUserPlus} /> Add Doctor
                            </li>
                        </Link>
                        <Link className="nav-link" to="/setting">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faCog} /> Setting
                            </li>
                        </Link>
                    </div>
                )}
            </ul>
            <div>
                <Link to="/home" className="nav-link mb-5 text-white fw-bold">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
