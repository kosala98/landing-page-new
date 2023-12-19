import React from "react";
import About1 from "../Components/Assets/About1.png";

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-1 about-container">
      <div className="row flex-lg-row align-items-center g-5 ">
        <div className="col-12 col-lg-6">
          <img
            src={About1}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-5 fw-bold  lh-1 mb-3 heading-1">
            Web & Mobile App Development
          </h1>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
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

export default About;
