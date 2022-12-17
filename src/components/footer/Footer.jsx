import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Smart <span className="buy2"> Solution</span>
              </h6>
              <p>
                Smart Solution is the growing IT Solution company with the goal
                to deliver high end IT projects out there.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Frameworks We Use</h6>
              <p>
                <Link to="https://angularjs.org/">Angular</Link>
              </p>
              <p>
                <Link to="https://reactjs.org/">React JS</Link>
              </p>
              <p>
                <Link to="https://vuejs.org/">VUE JS</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Our Pages</h6>
              <p>
                <Link to="/about-us">About Us</Link>
              </p>
              <p>
                <Link to="/contact-us">Contact Us</Link>
              </p>
              <p>
                <Link to="/services">Our Services</Link>
              </p>
              <p>
                <Link to="/teams">Our Teams</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social Links</h6>
              <div className="d-plex social">
                <div className="facebook m-2">
                  <Link to="www.facebook.com">
                    <FacebookIcon />
                  </Link>
                </div>
                <div className="instagram m-2">
                  <Link to="www.instagram.com">
                    <InstagramIcon />
                  </Link>
                </div>
                <div className="twitter m-2">
                  <Link to="www.twitter.com">
                    <TwitterIcon />
                  </Link>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">
          Group 4
        </a>
      </div>
    </MDBFooter>
  );
}
