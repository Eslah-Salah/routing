import React from "react";
import "./About.css";
export default function About() {
  return (
    <div>
      <div className="about text-white p-5  ">
        <div className="text-center text-white pt-5">
          <h2 className="fw-bold text-uppercase mt-5 mb-3 fs-1">about component</h2>
          <div className="star mb-3">
            <div className="line  bg-white me-3"></div>
            <i class="fa-solid  fa-star"></i>
            <div className="line bg-white ms-3"></div>
          </div>
        </div>
        <div className="container p-3">
          <div className="row px-5">
            <div className="col-md-6 ps-5">
              <p className="mb-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-5">
              <p className="mb-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
