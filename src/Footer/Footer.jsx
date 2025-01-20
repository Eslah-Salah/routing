import React from "react";
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <div className="footer-app">
        <div className="footer">
          <div class="card-group ">
            <div class="card">
              <div class="card-body">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3>AROUND THE WEB</h3>
                <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-solid fa-globe"></i>
                </div>

              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

              </div>
            </div>
          </div>
        </div>
        <div className="footer-p">
            <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </div>
  );
}
