import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4">
            <div class="card text-center mb-5" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title text-green">{booking.title}</h5>
                    <div className="mb-3" style={{ lineHeight: "8px" }}>
                        <p class="card-text text-secondary">
                            <b>{booking.time}</b>
                        </p>
                        <p
                            style={{ fontSize: "12px" }}
                            class="card-text text-secondary"
                        >
                            {booking.spaces}
                        </p>
                    </div>
                    <button onClick={openModal} class="button">
                        BOOK APPOINTMENT
                    </button>
                    <AppointmentForm
                        modalIsOpen={modalIsOpen}
                        closeModal={closeModal}
                        subject={booking.title}
                        date={date}
                    ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
