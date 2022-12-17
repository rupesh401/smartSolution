// Group 4

import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Footer from "./footer/Footer.jsx";

export default function ContactUs(props) {
  return (
    <section id="second_last">
      <div className="container">
        <div className="row">
          <div className="col-md-5 contact_left">
            <h1 className="contact_title mb-2">
              Contact <span id="buy">Us</span>
            </h1>
            <p className="paraa">
              Leave us a message if you need any IT related services?
            </p>
            <div>
              <div className="address">
                <div className="address_icon">
                  <LocationOnIcon />
                </div>
                <div className="address_innfo">
                  <h4 className="address_title">Address</h4>
                  <p className="address_info">
                    262 Kingswood Drive, Kitchener, Ontario
                  </p>
                </div>
              </div>
              <div className="address">
                <div className="address_icon">
                  <LocalPhoneIcon />
                </div>
                <div className="address_innfo">
                  <h4 className="address_title">Phone</h4>
                  <p className="address_info">+15195890548</p>
                </div>
              </div>
              <div className="address">
                <div className="address_icon">
                  <SupportAgentIcon />
                </div>
                <div className="address_innfo">
                  <h4 className="address_title">Support</h4>
                  <p className="address_info">Smartsolution@support.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 contact_right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.8922858607343!2d-80.4770481848421!3d43.42107717542816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf53d188dd07f%3A0x1ffc04baf1fbedf7!2s262%20Kingswood%20Dr%2C%20Kitchener%2C%20ON%20N2E%202K2!5e0!3m2!1sen!2sca!4v1671064085085!5m2!1sen!2sca"
              width="730"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
