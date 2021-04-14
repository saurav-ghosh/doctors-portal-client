import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import Doctors from "../Doctors/Doctors";
import ExceptionalService from "../ExceptionalService/ExceptionalService";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalService></ExceptionalService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
