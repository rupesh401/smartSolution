// Group 4

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "./footer/Footer.jsx";

const Teams = () => {
  return (
    <div className="container">
      <h1 className="team_header">
        Our <span className="team_color">Teams</span>
      </h1>
      <div className="row text-center">
        <div className="col-xl-4 col-sm-6 mb-5">
          <div className="teams rounded shadow-sm py-5 px-4">
            <img
              src="https://scontent.fykz1-1.fna.fbcdn.net/v/t39.30808-6/311292400_2033485313518019_4030825510175575925_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_PcOMWOz0B8AX89N_-I&_nc_oc=AQkN68A7TRQizCGW9lyeistebwDarn-FMHntgyxDzpw8h1CcRl9r30tvwBdtSWjBWNCJXvjewqbVFcxYmwF-_af0&_nc_ht=scontent.fykz1-1.fna&oh=00_AfDe9MBjDfC00sEK-Tft171WBJMV31HoFbjndu5znX_XUQ&oe=63A2D221"
              alt="Rupesh Image"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h4 className="team-title mb-0">Rupesh Gautam</h4>
            <span className="team-position small text-uppercase">
              CEO - Founder Smart Solution
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <FacebookIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <InstagramIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <TwitterIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xl-4 col-sm-6 mb-5">
          <div className="teams rounded shadow-sm py-5 px-4">
            <img
              src="Images/manan.jpeg"
              alt="manan"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h4 className="team-title mb-0">Manan Patel</h4>
            <span className="team-position small text-uppercase">
              CTO - SmartSolution
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <FacebookIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <InstagramIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <TwitterIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xl-4 col-sm-6 mb-5">
          <div className="teams rounded shadow-sm py-5 px-4">
            <img
              src="Images/vandana.jpeg"
              alt="vandana"
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h4 className="team-title mb-0">Vandana</h4>
            <span className="team-position small text-uppercase">
              Senior Developer
            </span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <FacebookIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <InstagramIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <TwitterIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
