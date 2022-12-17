import React from "react";
import Footer from "./footer/Footer.jsx";

export default function Services(props) {
  return (
    <section className="service_sec">
      <h1 className="service_sec_title">
        {" "}
        Our<span id="buy"> Services</span>
      </h1>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card_middle">
                  Adobe XD | Abobe PhotoShop | Figma
                </p>
                <p className="card-text">
                  At SmartSolution we focus on modern minimal designs, easy to
                  use & pleasing to the eyes.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card_middle">PHP Laravel | React | .NET | Java</p>
                <p className="card-text">
                  We use a diverse set of languages and tools to develop a
                  robust backend, both fast & reliable.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Web Hosting</h5>
                <p className="card_middle">
                  AWS | Digital Ocean | Bluehost | Vercel | Heroku
                </p>
                <p className="card-text">
                  Want to host your website? No problem, we have got your back
                  there as well.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Banner or Logo Design</h5>
                <p className="card_middle">Adobe AI | PhotoShop</p>
                <p className="card-text">
                  Our team of talented designers can create elegant & modern
                  looking logos & banners for your company.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Android/IOS App Development</h5>
                <p className="card_middle">Java | Flutter | VUE</p>
                <p className="card-text">
                  We develop robust SPAs or Native Applications for both IOS &
                  Android platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Advertisement</h5>
                <p className="card_middle">Instagram | Facebook | Youtube</p>
                <p className="card-text">
                  We can help you take your business to new heights using
                  different online advertising sorcery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
