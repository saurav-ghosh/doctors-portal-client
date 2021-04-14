import React from "react";
import wilson from "../../../images/Ellipse 1.png";
import wilson2 from "../../../images/Ellipse 2.png";
import BlogDetail from "../BlogDetail/BlogDetail";

const Blog = () => {
    const blogData = [
        {
            title: "Check at least a doctor in a year for your teeth",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
            author: "Dr. Cudi",
            authorImg: wilson,
            date: "23 April 2019",
        },
        {
            title: "Two time brush in a day can keep you healthy",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
            author: "Dr. Sinthia",
            authorImg: wilson,
            date: "23 April 2019",
        },
        {
            title: "The tooth cancer is taking a challenge",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
            author: "Dr. Cudi",
            authorImg: wilson2,
            date: "23 April 2019",
        },
    ];

    return (
        <section className="mt-5 pt-5 offset-md-1">
            <div className="container">
                <div>
                    <h5
                        className="text-center"
                        style={{ color: "#1CC7C1", fontWeight: "700" }}
                    >
                        OUR BLOG
                    </h5>
                    <h1 className="text-center">From Our Blog News</h1>
                </div>
                <div className="row mt-5">
                    {blogData.map((blog) => (
                        <BlogDetail blog={blog}></BlogDetail>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
