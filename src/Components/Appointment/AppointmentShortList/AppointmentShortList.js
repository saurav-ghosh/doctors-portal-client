import React from "react";

const AppointmentShortList = ({ appointments }) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">
                        Position
                    </th>
                    <th className="text-secondary" scope="col">
                        Name
                    </th>
                    <th className="text-secondary" scope="col">
                        Phone
                    </th>
                    <th className="text-secondary" scope="col">
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {appointments.map((appointment, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AppointmentShortList;
