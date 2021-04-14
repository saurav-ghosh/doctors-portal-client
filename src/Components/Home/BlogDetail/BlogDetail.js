import React from "react";
import "./BlogDetail.css";

const BlogDetail = ({ blog }) => {
    return (
        <div className="col-md-4">
            <div className="patientSay blog-detail">
                <div className="d-flex">
                    <div>
                        <img
                            style={{ width: "50px", marginRight: "20px" }}
                            src={blog.authorImg}
                            alt=""
                        />
                    </div>
                    <div style={{ lineHeight: "10px" }}>
                        <p>
                            <b>{blog.author}</b>
                        </p>
                        <p>{blog.date}</p>
                    </div>
                </div>
                <div>
                    <h5>{blog.title}</h5>
                    <p className="text-secondary">{blog.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
