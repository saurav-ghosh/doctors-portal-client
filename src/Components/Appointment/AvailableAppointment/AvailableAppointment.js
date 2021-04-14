import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const AvailableAppointment = ({ selectedDate }) => {
    const appointmentData = [
        {
            title: "Teeth Orthodontics",
            time: "8:00 am - 9:00 am",
            spaces: "7 SPACES AVAILABLE",
        },
        {
            title: "Cosmetic Dentistry",
            time: "10:05 am - 11:30 am",
            spaces: "9 SPACES AVAILABLE",
        },
        {
            title: "Teeth Cleaning",
            time: "5:00 pm - 7:00 pm",
            spaces: "10 SPACES AVAILABLE",
        },
        {
            title: "Cavity Protection",
            time: "8:00 am - 9:00 am",
            spaces: "25 SPACES AVAILABLE",
        },
        {
            title: "Teeth Orthodontics",
            time: "2:00 pm - 4:00 pm",
            spaces: "10 SPACES AVAILABLE",
        },
        {
            title: "Teeth Orthodontics",
            time: "8:00 am - 9:00 am",
            spaces: "15 SPACES AVAILABLE",
        },
    ];

    return (
        <div>
            <h2 className="text-green text-center">
                Available Appointments on {selectedDate.toDateString()}
            </h2>
            <div className="container mt-5">
                <div className="row">
                    {appointmentData.map((booking) => (
                        <BookingCard
                            booking={booking}
                            date={selectedDate}
                        ></BookingCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;
