import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <section className="text-center mt-5 pt-5 contact-us">
            <div className="contact-container">
                <div style={{ marginBottom: "50px" }}>
                    <h5 style={{ color: "#18d2af" }}>CONTACT US</h5>
                    <h1>Always Connect With Us</h1>
                </div>
                <div className="input-field">
                    <input type="text" name="" placeholder="Email Address*" />
                    <br />
                    <br />
                    <input type="text" name="" placeholder="Subject*" />
                    <br />
                    <br />
                    <textarea
                        name=""
                        id=""
                        cols="50"
                        rows="4"
                        placeholder="Your massages*"
                    ></textarea>
                    <br />
                    <br />
                    <button className="button">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
