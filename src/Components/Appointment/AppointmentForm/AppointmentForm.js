import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./AppointmentForm.css";

const customStyles = {
    content: {
        width: "600px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ subject, modalIsOpen, closeModal, date }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.subject = subject;
        data.date = date;
        data.bookingDate = new Date();

        fetch("http://localhost:9000/addAppointment", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    alert("your appointment booked successfully");
                    closeModal();
                }
            });
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className="text-center text-green">{subject}</h3>
                <p className="text-center text-secondary">
                    ON {date.toDateString()}
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group input">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your name please"
                            className="form-control"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <span className="text-danger">
                                name is required
                            </span>
                        )}
                    </div>
                    <div className="form-group input">
                        <input
                            name="phone"
                            type="text"
                            placeholder="Your phone number"
                            className="form-control"
                            {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                            <span className="text-danger">
                                phone number is required
                            </span>
                        )}
                    </div>
                    <div className="form-group input">
                        <input
                            name="email"
                            type="text"
                            placeholder="Your email here"
                            className="form-control"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-danger">
                                email is required
                            </span>
                        )}
                    </div>

                    <div className="form-group row input">
                        <div className="col-md-4">
                            <select
                                name="gender"
                                className="form-control"
                                placeholder="select gender"
                                {...register("gender", { required: true })}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && (
                                <span className="text-danger">
                                    gender is required
                                </span>
                            )}
                        </div>
                        <div className="col-md-4">
                            <input
                                name="age"
                                type=""
                                placeholder="Your age"
                                className="form-control"
                                {...register("age", { required: true })}
                            />
                            {errors.age && (
                                <span className="text-danger">
                                    age is required
                                </span>
                            )}
                        </div>
                        <div className="col-md-4">
                            <input
                                name="weight"
                                type="text"
                                placeholder="Your weight"
                                className="form-control"
                                {...register("weight", { required: true })}
                            />
                            {errors.weight && (
                                <span className="text-danger">
                                    weight is required
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="form-group d-flex justify-content-end">
                        <button type="submit" className="button">
                            Send
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
