import React from "react";
import About1 from "../Components/Assets/About2.png";

const About2 = () => {
  return (
    <div className="container col-xxl-8 px-4 about-container">
      <div className="row flex-lg-row-reverse align-items-center g-5 ">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={About1}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold  lh-1 mb-3 heading-1">
            Digital Strategy Consulting
          </h1>
          <p className="">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div className="d-grid  d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-5  button-1"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
