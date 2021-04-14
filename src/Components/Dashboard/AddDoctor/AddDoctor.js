import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newDocInfo = { ...info };
        newDocInfo[e.target.name] = e.target.value;
        setInfo(newDocInfo);
    };

    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", info.name);
        formData.append("email", info.email);

        fetch("http://localhost:9000/addDoctor", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
        e.preventDefault();
    };

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className="text-green">Add a Doctor</h4>
                <form onSubmit={handleSubmit}>
                    <div class="form-group input">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="text"
                            onBlur={handleBlur}
                            class="form-control"
                            name="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div class="form-group input">
                        <label>Name</label>
                        <input
                            onBlur={handleBlur}
                            class="form-control"
                            placeholder="name"
                            name="name"
                        />
                    </div>
                    <div class="form-group input">
                        <label>Upload a file</label>
                        <input
                            type="file"
                            onChange={handleFile}
                            class="form-control"
                            placeholder="upload a file"
                            name="file"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
