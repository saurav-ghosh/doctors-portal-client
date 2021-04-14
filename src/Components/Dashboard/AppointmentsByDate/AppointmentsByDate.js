import React from "react";
import AppointmentShortList from "../../Appointment/AppointmentShortList/AppointmentShortList";
import "./AppointmentsByDate.css";

const AppointmentsByDate = ({ appointments, selectedDate }) => {
    return (
        <div className="appointsByDate">
            <div className="d-flex justify-content-between">
                <h3 className="text-green">Appointments</h3>
                <p className="lead">{selectedDate.toDateString()}</p>
            </div>
            {appointments.length ? (
                <AppointmentShortList
                    appointments={appointments}
                ></AppointmentShortList>
            ) : (
                <div className="p-5">
                    <h4 className="lead text-center">
                        No Appointments for this Date
                    </h4>
                </div>
            )}
        </div>
    );
};

export default AppointmentsByDate;
