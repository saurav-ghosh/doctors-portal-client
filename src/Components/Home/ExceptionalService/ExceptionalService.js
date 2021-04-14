import React from "react";
import child from "../../../images/child.png";

const ExceptionalService = () => {
    return (
        <section className="d-flex justify-content-center mt-5 pt-5">
            <div className="row w-75">
                <div className="col-md-5">
                    <img
                        style={{ width: "350px", height: "350px" }}
                        src={child}
                        alt=""
                    />
                </div>
                <div className="col-md-7">
                    <h2>
                        Exceptional Dental <br /> Care, On Our Terms
                    </h2>
                    <p className="mt-5 mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora aliquid eligendi temporibus odio voluptates,
                        tempore ab sapiente vel beatae obcaecati dolore
                        consectetur ex facilis iure optio expedita provident.
                        Dolore libero nostrum eius consectetur, porro quisquam
                        dolores quae expedita fugiat placeat autem totam. Quos
                        reiciendis sunt rerum facilis fugit ab ea.
                    </p>
                    <button className="button">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalService;
