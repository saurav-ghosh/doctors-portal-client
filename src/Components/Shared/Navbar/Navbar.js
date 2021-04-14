import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            style={{ marginRight: "120px" }}
            class="navbar navbar-expand-lg navbar-light"
        >
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link
                                class="nav-link ms-5 active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">
                                Dental Services
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-info" href="#">
                                Reviews
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 text-info" href="#">
                                Blog
                            </a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 text-info" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
