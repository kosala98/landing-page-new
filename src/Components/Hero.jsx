import React from "react";
import Hero1 from "../Components/Assets/Hero.jpg";

const Hero = () => {
  return (
    <div className="container-fluid p-0">
      <div className="position-relative hero-section">
        <img src={Hero1} alt="" className="img-fluid" />

        <div className="position-absolute border-0 custom-rectangle px-3">
          <h1 className="p-4  text-white fw-bold ">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <button className="btn text-white fw-bold fs-6 mx-4 px-5 hero-btn">
            Get free consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
