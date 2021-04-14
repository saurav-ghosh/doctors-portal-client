import React from "react";
import patient1 from "../../../images/Ellipse 1.png";
import patient2 from "../../../images/Ellipse 2.png";
import patient3 from "../../../images/Ellipse 3.png";
import PatientSays from "../PatientSays/PatientSays";

const Testimonial = () => {
    const patientSaysData = [
        {
            desc:
                "adipisicing elit. Quo omnis ipsa accusamus rem maxime mollitia ad nisi sapiente laboriosam voluptates! Excepturi sit facere atque, suscipit sed, ipsum deserunt.",
            img: patient1,
            name: "Larry Page",
            address: "california",
        },
        {
            desc:
                "consequuntur quisquam quas, reprehenderit doloribus neque illum. Incidunt ab odio aperiam accusamus magni facere nesciunt voluptatem officiis non laboriosam harum.",
            img: patient2,
            name: "Ema Watson",
            address: "New York",
        },
        {
            desc:
                "consectetur adipisicing elit. Architecto, commodi voluptates quibusdam minus odio natus voluptatem veritatis itaque, corporis debitis laborum provident similique, perferendis beatae incidunt id.",
            img: patient3,
            name: "Liga Stankovic",
            address: "Los Angeles",
        },
    ];

    return (
        <section className="mt-5 pt-5 offset-md-1">
            <div className="container">
                <div>
                    <h5 style={{ color: "#1CC7C1", fontWeight: "700" }}>
                        TESTIMONIAL
                    </h5>
                    <h1>
                        What's Your Patients <br /> Says
                    </h1>
                </div>
                <div className="row mt-5">
                    {patientSaysData.map((psData) => (
                        <PatientSays psData={psData}></PatientSays>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
