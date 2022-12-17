import React from "react";
import { Container } from "react-bootstrap";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import ContactUs from "./ContactUs";
import Services from "./Services";
import AboutUs from "./AboutUs";

export default function Home(props) {
  return (
    <Container>
      <div className="row top_section">
        <div className="col-lg-7 col-md-7 home_top_left">
          <div className="home_top_text">
            <h1 className="home_main_text">
              Smart Solution Provides the best eCommerce platform experience out
              there.
            </h1>
            <p>We focus on the quality.</p>
          </div>
          <div id="home_top_btns">
            <button id="contact_us">Contact Us</button>
            <button id="our_services">Our Services</button>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 home_top_right">
          <img id="top_section_img" src="Images/homeimage.png" width={530} />
        </div>
      </div>
      <AboutUs />
      <Services />
      <ContactUs />
    </Container>
  );
}
