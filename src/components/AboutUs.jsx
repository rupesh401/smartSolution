import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./footer/Footer.jsx";

export default function AboutUs() {
  return (
    <Container>
      <section className="section_two pt-5">
        <div className="row text-center mb-5">
          <h1 className="section_two_title">
            {" "}
            Why Smart<span id="buy"> Solution</span>??
          </h1>
          <p className="section_two_para">
            In Kitchener, Ontario, Smart Solution is a dynamic new business
            engaged in software development and website design. We are experts
            in mobile app development, logo and banner design, SEO, digital
            marketing, and website design. In order for you to advance your
            company, we can offer you a Complete IT Solution. We are the best
            out there in the IT Industry.
          </p>
          <div className="section_two_btns">
            <button className="see_our_projects">See Our Projects</button>
          </div>
        </div>
        <div className="row card_list" id="card_list">
          <div className="col mb-4">
            <div className="card">
              <img
                src="Images/about1.jpg"
                className="card-img-top"
                alt="Develop Easily"
              />
              <div className="card-body">
                <h5 className="card-title">Developed Easily</h5>
                <p className="card-text">
                  At SmartSolution we focus on modern minimal designs, easy to
                  use & pleasing to the eyes.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="Images/about2.jpg"
                className="card-img-top"
                alt="Develop Easily"
              />
              <div className="card-body">
                <h5 className="card-title">Professional Coding</h5>
                <p className="card-text">
                  At SmartSolution we focus on modern coding design for better
                  feature and understanding.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="Images/about3.jpeg"
                className="card-img-top"
                alt="Develop Easily"
              />
              <div className="card-body">
                <h5 className="card-title">Intern Available</h5>
                <p className="card-text">
                  At SmartSolution we focus on giving training to intern or
                  junior developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
