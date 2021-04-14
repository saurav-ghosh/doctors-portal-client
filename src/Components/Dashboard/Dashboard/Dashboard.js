import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { userContext } from "../../../App";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDate = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        fetch("http://localhost:9000/appointmentsByDate", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                date: selectedDate,
                email: loggedInUser.email,
            }),
        })
            .then((res) => res.json())
            .then((data) => setAppointments(data));
    }, [selectedDate]);

    return (
        <div
            style={{ backgroundColor: "#F4FDFB", height: "100vh" }}
            className="container-fluid row"
        >
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
                <h3 className="m-3">Appointments</h3>
                <div className="appCalender-container">
                    <Calendar
                        className="appCalender"
                        onChange={handleDate}
                        value={new Date()}
                    />
                </div>
            </div>
            <div className="col-md-5">
                <AppointmentsByDate
                    appointments={appointments}
                    selectedDate={selectedDate}
                ></AppointmentsByDate>
            </div>
        </div>
    );
};

export default Dashboard;
