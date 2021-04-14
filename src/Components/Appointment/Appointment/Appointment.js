import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import "./Appointment.css";

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDate = (date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDate={handleDate}></AppointmentHeader>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
