import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../images/chair.png";
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <main
            style={{ height: "600px", width: "100%" }}
            className="row d-flex align-items-center"
        >
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#3A4256" }}>
                    Your New Smiles <br /> Starts Here
                </h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti dolore rerum ratione dolorum fugiat corporis.
                </p>
                <Link to="/appointment">
                    <button type="button" className="button">
                        GET APPOINTMENT
                    </button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;
