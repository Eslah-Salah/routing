import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg py-4  ">
        <div class="container">
          <a class="navbar-brand text-uppercase fw-bolder fs-2" href="#">
          Start Framework

          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto ">
              <Link class="nav-link active" aria-current="page" to="about">
                ABOUT
              </Link>
              <Link class="nav-link" to="portfolio">
                PORTFOLIO
              </Link>
              <Link class="nav-link" to="contact">
                CONTACT
              </Link>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
